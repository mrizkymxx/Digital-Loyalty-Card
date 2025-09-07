'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Coffee, 
  Users, 
  TrendingUp, 
  Gift, 
  QrCode, 
  BarChart3, 
  DollarSign, 
  Star,
  Plus,
  Download
} from 'lucide-react';
import QRCodeDisplay from 'react-qr-code';

interface CoffeeShop {
  id: string;
  name: string;
  address: string;
  qrCode: string;
  totalCustomers: number;
  totalRevenue: number;
  totalTransactions: number;
}

interface Stats {
  totalCustomers: number;
  totalRevenue: number;
  totalTransactions: number;
  avgOrderValue: number;
  loyalCustomers: number;
  recentTransactions: Transaction[];
}

interface Transaction {
  id: string;
  type: string;
  amount: number;
  points: number;
  customer: {
    name: string;
  };
  createdAt: string;
}

interface Reward {
  id: string;
  name: string;
  description: string;
  pointsRequired: number;
  value: number;
  isActive: boolean;
  currentRedemptions: number;
}

export default function MerchantDashboard() {
  const [coffeeShop, setCoffeeShop] = useState<CoffeeShop | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Mock data - replace with actual API calls
    setCoffeeShop({
      id: '1',
      name: 'Kopi Nusantara',
      address: 'Jl. Sudirman No. 123, Jakarta',
      qrCode: 'http://localhost:3000/customer/register?shop=1',
      totalCustomers: 150,
      totalRevenue: 15000000,
      totalTransactions: 580
    });

    setStats({
      totalCustomers: 150,
      totalRevenue: 15000000,
      totalTransactions: 580,
      avgOrderValue: 25862,
      loyalCustomers: 89,
      recentTransactions: [
        {
          id: '1',
          type: 'PURCHASE',
          amount: 25000,
          points: 1,
          customer: { name: 'Ahmad Rizki' },
          createdAt: '2024-01-15T10:30:00Z'
        },
        {
          id: '2',
          type: 'PURCHASE',
          amount: 32000,
          points: 1,
          customer: { name: 'Sari Dewi' },
          createdAt: '2024-01-15T09:15:00Z'
        },
        {
          id: '3',
          type: 'REWARD_REDEMPTION',
          amount: -25000,
          points: -10,
          customer: { name: 'Budi Santoso' },
          createdAt: '2024-01-15T08:45:00Z'
        }
      ]
    });

    setRewards([
      {
        id: '1',
        name: 'Kopi Gratis',
        description: 'Dapatkan 1 kopi gratis pilihan Anda',
        pointsRequired: 10,
        value: 25000,
        isActive: true,
        currentRedemptions: 23
      },
      {
        id: '2',
        name: 'Diskon 50%',
        description: 'Diskon 50% untuk pembelian berikutnya',
        pointsRequired: 5,
        value: 0,
        isActive: true,
        currentRedemptions: 45
      }
    ]);

    setIsLoading(false);
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-bold text-gray-900">Coffee Loyalty</span>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Halo, {coffeeShop?.name}!</span>
              <Link href="/auth/logout" className="text-amber-600 hover:text-amber-700">
                Keluar
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Merchant</h1>
          <p className="text-gray-600">{coffeeShop?.name} - {coffeeShop?.address}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Pelanggan</p>
                <p className="text-2xl font-bold text-gray-900">{stats?.totalCustomers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(stats?.totalRevenue || 0)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-2 bg-amber-100 rounded-lg">
                <BarChart3 className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Transaksi</p>
                <p className="text-2xl font-bold text-gray-900">{stats?.totalTransactions}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Rata-rata Order</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(stats?.avgOrderValue || 0)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-amber-500 text-amber-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <BarChart3 className="h-4 w-4 inline mr-2" />
                Overview
              </button>
              <button
                onClick={() => setActiveTab('qr-code')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'qr-code'
                    ? 'border-amber-500 text-amber-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <QrCode className="h-4 w-4 inline mr-2" />
                QR Code
              </button>
              <button
                onClick={() => setActiveTab('rewards')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'rewards'
                    ? 'border-amber-500 text-amber-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Gift className="h-4 w-4 inline mr-2" />
                Rewards
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-bold text-gray-900">Transaksi Terbaru</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {stats?.recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="p-6 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full ${
                          transaction.type === 'PURCHASE' ? 'bg-green-100' : 'bg-amber-100'
                        }`}>
                          {transaction.type === 'PURCHASE' ? (
                            <Coffee className="h-5 w-5 text-green-600" />
                          ) : (
                            <Gift className="h-5 w-5 text-amber-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{transaction.customer.name}</p>
                          <p className="text-sm text-gray-500">
                            {transaction.type === 'PURCHASE' ? 'Pembelian' : 'Redemption Reward'}
                          </p>
                          <p className="text-xs text-gray-400">{formatDate(transaction.createdAt)}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${
                          transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                        </p>
                        <p className="text-sm text-amber-600">
                          {transaction.points > 0 ? '+' : ''}{transaction.points} poin
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Pelanggan Loyal</h3>
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-10 w-10 text-amber-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{stats?.loyalCustomers}</p>
                  <p className="text-gray-600">pelanggan dengan 5+ transaksi</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center">
                    <Plus className="h-4 w-4 mr-2" />
                    Tambah Transaksi Manual
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium flex items-center justify-center">
                    <Download className="h-4 w-4 mr-2" />
                    Export Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'qr-code' && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                QR Code untuk Registrasi Pelanggan
              </h2>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                  {coffeeShop?.qrCode && (
                    <QRCodeDisplay
                      value={coffeeShop.qrCode}
                      size={200}
                      level="M"
                    />
                  )}
                </div>
              </div>
              <div className="text-center space-y-4">
                <p className="text-gray-600">
                  Tampilkan QR code ini di coffee shop Anda agar pelanggan dapat mendaftar dengan mudah
                </p>
                <div className="flex space-x-4">
                  <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-medium">
                    Download QR Code
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium">
                    Print QR Code
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Cara Penggunaan</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Print QR Code</h4>
                    <p className="text-gray-600 text-sm">Download dan print QR code untuk ditempel di coffee shop</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Pelanggan Scan</h4>
                    <p className="text-gray-600 text-sm">Pelanggan scan QR code untuk registrasi otomatis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Poin Otomatis</h4>
                    <p className="text-gray-600 text-sm">Setiap transaksi otomatis menambah poin ke kartu digital</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rewards' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Kelola Reward</h2>
              <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-medium flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                Tambah Reward
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.map((reward) => (
                <div key={reward.id} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Gift className="h-8 w-8 text-amber-600" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      reward.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {reward.isActive ? 'Aktif' : 'Nonaktif'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{reward.name}</h3>
                  <p className="text-gray-600 mb-4">{reward.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Poin Required:</span>
                      <span className="font-medium">{reward.pointsRequired}</span>
                    </div>
                    {reward.value > 0 && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Nilai:</span>
                        <span className="font-medium">{formatCurrency(reward.value)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Total Ditukar:</span>
                      <span className="font-medium">{reward.currentRedemptions}x</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium">
                      Edit
                    </button>
                    <button className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 py-2 px-3 rounded-lg text-sm font-medium">
                      Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
