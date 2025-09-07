import Link from 'next/link';
import { Coffee, Smartphone, Gift, BarChart3, QrCode, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-bold text-gray-900">Coffee Loyalty</span>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/auth/login" 
                className="text-gray-600 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Masuk
              </Link>
              <Link 
                href="/auth/register" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Digital Loyalty Card
            <span className="block text-amber-600">untuk Kopi Favorit Anda</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Kumpulkan poin setiap pembelian kopi dan dapatkan reward menarik. 
            Sistem loyalitas digital yang mudah dan praktis untuk coffee shop modern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/customer/register"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-medium flex items-center justify-center space-x-2"
            >
              <Smartphone className="h-5 w-5" />
              <span>Daftar sebagai Pelanggan</span>
            </Link>
            <Link 
              href="/merchant/register"
              className="bg-white hover:bg-gray-50 text-amber-600 border-2 border-amber-600 px-8 py-3 rounded-lg text-lg font-medium flex items-center justify-center space-x-2"
            >
              <Coffee className="h-5 w-5" />
              <span>Daftar Coffee Shop</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Pilih Coffee Loyalty?</h2>
            <p className="text-xl text-gray-600">Solusi loyalty card digital yang simpel dan efektif</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scan QR & Kumpulkan Poin</h3>
              <p className="text-gray-600">
                Cukup scan QR code di coffee shop, bayar, dan poin otomatis bertambah ke kartu digital Anda.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tukar Poin Jadi Reward</h3>
              <p className="text-gray-600">
                Kumpulkan poin untuk mendapatkan kopi gratis, diskon, atau reward menarik lainnya.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics untuk Merchant</h3>
              <p className="text-gray-600">
                Dashboard lengkap untuk memantau pelanggan loyal dan meningkatkan repeat order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cara Kerja</h2>
            <p className="text-xl text-gray-600">Mudah digunakan untuk pelanggan dan merchant</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Customer Flow */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Smartphone className="h-6 w-6 text-amber-600 mr-3" />
                Alur Pelanggan
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scan QR Code</h4>
                    <p className="text-gray-600">Scan QR code di coffee shop atau daftar via link</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Beli & Bayar</h4>
                    <p className="text-gray-600">Pilih kopi dan bayar via QRIS atau e-wallet</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Poin Bertambah</h4>
                    <p className="text-gray-600">Sistem otomatis menambahkan poin ke kartu digital</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Klaim Reward</h4>
                    <p className="text-gray-600">Tukarkan poin dengan kopi gratis atau diskon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Merchant Flow */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Coffee className="h-6 w-6 text-amber-600 mr-3" />
                Alur Merchant
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Setup Coffee Shop</h4>
                    <p className="text-gray-600">Daftar dan atur profil coffee shop dengan reward</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">QR Code Display</h4>
                    <p className="text-gray-600">Tampilkan QR code untuk registrasi pelanggan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Poin Otomatis</h4>
                    <p className="text-gray-600">Sistem otomatis menambah poin setiap transaksi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Monitor & Analisis</h4>
                    <p className="text-gray-600">Pantau loyalitas pelanggan dan tingkatkan penjualan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap Meningkatkan Loyalitas Pelanggan?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Bergabunglah dengan coffee shop modern yang menggunakan sistem loyalitas digital
          </p>
          <Link 
            href="/merchant/register"
            className="bg-white hover:bg-gray-100 text-amber-600 px-8 py-3 rounded-lg text-lg font-medium inline-flex items-center space-x-2"
          >
            <Coffee className="h-5 w-5" />
            <span>Mulai Sekarang</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Coffee className="h-6 w-6 text-amber-600" />
            <span className="text-lg font-bold">Coffee Loyalty</span>
          </div>
          <p className="text-gray-400">
            © 2024 Coffee Loyalty Card. Digital loyalty system untuk coffee shop modern.
          </p>
        </div>
      </footer>
    </div>
  );
}
