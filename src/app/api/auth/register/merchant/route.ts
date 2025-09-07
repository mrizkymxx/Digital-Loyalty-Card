import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import QRCode from 'qrcode';

export async function POST(request: NextRequest) {
  try {
    const { 
      name, 
      email, 
      password, 
      shopName, 
      address, 
      phone, 
      shopEmail, 
      description 
    } = await request.json();

    // Validate required fields
    if (!name || !email || !password || !shopName || !address) {
      return NextResponse.json(
        { error: 'Semua field wajib harus diisi' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email sudah terdaftar' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user and coffee shop in transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create user
      const user = await tx.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: 'MERCHANT'
        }
      });

      // Create coffee shop
      const coffeeShop = await tx.coffeeShop.create({
        data: {
          name: shopName,
          address,
          phone,
          email: shopEmail,
          description,
          ownerId: user.id,
          qrCode: '' // Will be updated after creation
        }
      });

      // Generate QR code for customer registration
      const registrationUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/customer/register?shop=${coffeeShop.id}`;
      const qrCodeDataUrl = await QRCode.toDataURL(registrationUrl);

      // Update coffee shop with QR code
      const updatedCoffeeShop = await tx.coffeeShop.update({
        where: { id: coffeeShop.id },
        data: { qrCode: qrCodeDataUrl }
      });

      // Create default rewards
      await tx.reward.createMany({
        data: [
          {
            name: 'Kopi Gratis',
            description: 'Dapatkan 1 kopi gratis pilihan Anda',
            pointsRequired: 10,
            value: 25000,
            coffeeShopId: coffeeShop.id
          },
          {
            name: 'Diskon 50%',
            description: 'Diskon 50% untuk pembelian berikutnya',
            pointsRequired: 5,
            value: 0,
            coffeeShopId: coffeeShop.id
          }
        ]
      });

      return { user, coffeeShop: updatedCoffeeShop };
    });

    // Return user without password
    const { password: _, ...userWithoutPassword } = result.user;

    return NextResponse.json({
      message: 'Coffee shop berhasil didaftarkan',
      user: userWithoutPassword,
      coffeeShop: result.coffeeShop
    });

  } catch (error) {
    console.error('Merchant registration error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}
