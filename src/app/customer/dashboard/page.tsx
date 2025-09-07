'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Coffee, Gift, Star, History, QrCode, MapPin, Phone } from 'lucide-react';

interface LoyaltyCard {
  id: string;
  points: number;
  totalSpent: number;
  coffeeShop: {
    id: string;
    name: string;
    address: string;
    phone?: string;
  };
}

interface Transaction {
  id: string;
  type: string;
  amount: number;
  points: number;
  description?: string;
  createdAt: string;
  coffeeShop: {
    name: string;
  };
}

interface Reward {
  id: string;
  name: string;
  description?: string;
  pointsRequired: number;
  value: number;
  coffeeShop: {
    name: string;
  };
}

function CustomerDashboardContent() {
  const searchParams = useSearchParams();
  const shopId = searchParams.get('shop');
  
  const [loyaltyCards, setLoyaltyCards] = useState<LoyaltyCard[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [availableRewards, setAvailableRewards] = useState<Reward[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('cards');

  useEffect(() => {
    // Mock data - replace with actual API calls
    setLoyaltyCards([
      {
        id: '1',
        points: 8,
        totalSpent: 200000,
        coffeeShop: {
          id: '1',
          name: 'Kopi Nusantara',
          address: 'Jl. Sudirman No. 123, Jakarta',
          phone: '021-1234567'
        }
      },
      {
        id: '2',
        points: 3,
        totalSpent: 75000,
        coffeeShop: {
          id: '2',
          name: 'Warung Kopi Bayu',
          address: 'Jl. Malioboro No. 45, Yogyakarta'
        }
      }
    ]);

    setTransactions([
      {
        id: '1',
        type: 'PURCHASE',
        amount: 25000,
        points: 1,
        description: 'Cappuccino Large',
        createdAt: '2024-01-15T10:30:00Z',
        coffeeShop: { name: 'Kopi Nusantara' }
      },
      {
        id: '2',
        type: 'PURCHASE', 
        amount: 20000,
        points: 1,
        description: 'Americano Medium',
        createdAt: '2024-01-14T15:45:00Z',
        coffeeShop: { name: 'Kopi Nusantara' }
      }
    ]);

    setAvailableRewards([
      {
        id: '1',
        name: 'Kopi Gratis',
        description: 'Dapatkan 1 kopi gratis pilihan Anda',
        pointsRequired: 10,
        value: 25000,
        coffeeShop: { name: 'Kopi Nusantara' }
      },
      {
        id: '2',
        name: 'Diskon 50%',
        description: 'Diskon 50% untuk pembelian berikutnya',
        pointsRequired: 5,
        value: 0,
        coffeeShop: { name: 'Kopi Nusantara' }
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
              <span className="text-gray-600">Halo, Customer!</span>
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Pelanggan</h1>
          <p className="text-gray-600">Kelola kartu loyalitas dan nikmati reward menarik</p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('cards')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'cards'
                    ? 'border-amber-500 text-amber-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Coffee className="h-4 w-4 inline mr-2" />
                Kartu Loyalitas
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
                Reward
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'history'
                    ? 'border-amber-500 text-amber-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <History className="h-4 w-4 inline mr-2" />
                Riwayat
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'cards' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loyaltyCards.map((card) => (
              <div key={card.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Coffee className="h-8 w-8" />
                    <QrCode className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{card.coffeeShop.name}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-amber-100 text-sm">Poin Anda</p>
                      <p className="text-2xl font-bold">{card.points}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-amber-100 text-sm">Total Belanja</p>
                      <p className="text-lg font-semibold">{formatCurrency(card.totalSpent)}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <p>{card.coffeeShop.address}</p>
                  </div>
                  {card.coffeeShop.phone && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                      <Phone className="h-4 w-4" />
                      <p>{card.coffeeShop.phone}</p>
                    </div>
                  )}
                  <div className="mt-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-amber-500 h-2 rounded-full" 
                        style={{ width: `${(card.points / 10) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {Math.max(0, 10 - card.points)} poin lagi untuk reward gratis
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'rewards' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableRewards.map((reward) => (
              <div key={reward.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <Gift className="h-8 w-8 text-amber-600" />
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {reward.pointsRequired} poin
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reward.name}</h3>
                <p className="text-gray-600 mb-4">{reward.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Coffee Shop</p>
                    <p className="font-medium">{reward.coffeeShop.name}</p>
                  </div>
                  {reward.value > 0 && (
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Nilai</p>
                      <p className="font-medium text-amber-600">{formatCurrency(reward.value)}</p>
                    </div>
                  )}
                </div>
                <button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-medium">
                  Tukar Reward
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bg-white rounded-xl shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Riwayat Transaksi</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {transactions.map((transaction) => (
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
                      <p className="font-medium text-gray-900">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{transaction.coffeeShop.name}</p>
                      <p className="text-xs text-gray-400">{formatDate(transaction.createdAt)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{formatCurrency(transaction.amount)}</p>
                    <p className="text-sm text-amber-600">+{transaction.points} poin</p>
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

export default function CustomerDashboard() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <Coffee className="h-8 w-8 text-amber-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading dashboard...</p>
          </div>
        </div>
      </div>
    }>
      <CustomerDashboardContent />
    </Suspense>
  );
}
