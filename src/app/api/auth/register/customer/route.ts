import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, password, shopId } = await request.json();

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Nama, email, dan password harus diisi' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
          ...(phone ? [{ phone: phone }] : [])
        ]
      }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email atau nomor HP sudah terdaftar' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        role: 'CUSTOMER'
      }
    });

    // If shopId is provided, create loyalty card for that shop
    if (shopId) {
      const coffeeShop = await prisma.coffeeShop.findUnique({
        where: { id: shopId }
      });

      if (coffeeShop) {
        await prisma.loyaltyCard.create({
          data: {
            customerId: user.id,
            coffeeShopId: shopId
          }
        });
      }
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      message: 'Registrasi berhasil',
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}
