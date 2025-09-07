# ☕ Digital Loyalty Card System

Sistem loyalitas digital untuk coffee shop yang memungkinkan pelanggan mengumpulkan poin dan menukar reward melalui aplikasi web modern.

## 🚀 Fitur Utama

### Untuk Pelanggan
- ✅ Registrasi dan login mudah
- ✅ Scan QR code untuk bergabung dengan coffee shop
- ✅ Kumpulkan poin otomatis setiap pembelian
- ✅ Dashboard untuk melihat poin dan riwayat transaksi
- ✅ Tukar poin dengan reward menarik
- ✅ Kartu digital yang responsif mobile-friendly

### Untuk Merchant (Coffee Shop)
- ✅ Registrasi coffee shop dengan informasi lengkap
- ✅ Dashboard analytics dengan statistik penjualan
- ✅ QR code otomatis untuk registrasi pelanggan
- ✅ Kelola reward dan program loyalitas
- ✅ Monitor transaksi dan pelanggan loyal
- ✅ Export data untuk analisis

## 🛠️ Tech Stack

- **Frontend**: Next.js 14+ dengan App Router
- **Styling**: Tailwind CSS
- **Database**: SQLite dengan Prisma ORM
- **Authentication**: Custom auth system
- **QR Code**: qrcode & react-qr-code libraries
- **Icons**: Lucide React
- **Language**: TypeScript

## 📋 Prerequisite

- Node.js 18+ 
- npm atau yarn
- Git

## 🚀 Installation & Setup

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd digitalloyaltycard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   # File .env sudah tersedia dengan konfigurasi default
   # Untuk production, ubah nilai berikut:
   NEXTAUTH_SECRET="your-production-secret-key"
   NEXTAUTH_URL="https://yourdomain.com"
   ```

4. **Setup database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev --name init
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open browser**
   ```
   http://localhost:3000
   ```

## 📊 Database Schema

### Users
- Customer dan Merchant data
- Authentication information
- Role-based access control

### Coffee Shops
- Shop information dan owner relationship
- QR code untuk customer registration
- Business details

### Loyalty Cards
- Link antara customer dan coffee shop
- Point tracking dan total spending
- Unique constraint per customer-shop pair

### Transactions
- Purchase dan reward redemption records
- Point calculation dan tracking
- Payment method information

### Rewards
- Configurable reward programs
- Point requirements dan values
- Redemption tracking

## 🎯 User Flow

### Customer Journey
1. **Registration**: Scan QR code di coffee shop atau register manual
2. **Purchase**: Beli kopi dan bayar via QRIS/e-wallet  
3. **Points**: Sistem otomatis menambah poin ke kartu digital
4. **Rewards**: Tukar poin dengan kopi gratis atau diskon
5. **Loyalty**: Tracking progress menuju reward berikutnya

### Merchant Journey
1. **Setup**: Daftar coffee shop dengan informasi lengkap
2. **QR Display**: Print dan tampilkan QR code untuk customer registration
3. **Automation**: Sistem otomatis track transaksi dan poin
4. **Analytics**: Monitor customer loyalty dan revenue metrics
5. **Management**: Kelola reward programs dan customer incentives

## 🔧 Configuration

### Default Rewards
- **Kopi Gratis**: 10 poin = 1 free coffee (Rp 25.000 value)
- **Diskon 50%**: 5 poin = 50% discount next purchase

### Point System
- **1 Pembelian** = **1 Poin** (configurable via environment variable)
- Progress tracking dengan visual indicators
- Automatic point calculation per transaction

## 🌟 Key Components

### QR Code Integration
- Auto-generated QR codes untuk setiap coffee shop
- Direct registration link dengan shop parameter
- Downloadable dan printable QR codes

### Mobile-First Design
- Responsive layout untuk semua device sizes
- Touch-friendly interface untuk mobile users
- Progressive Web App ready

### Analytics Dashboard
- Real-time statistics untuk merchants
- Customer loyalty metrics
- Revenue tracking dan trends
- Export functionality untuk data analysis

## 🚀 Deployment

### Netlify (Recommended for Static Hosting)

#### Option 1: Deploy via GitHub Integration
1. **Fork/Clone** this repository to your GitHub account
2. **Go to** [Netlify](https://www.netlify.com) and sign up/login
3. **Click** "New site from Git" → Connect to GitHub
4. **Select** your `Digital-Loyalty-Card` repository
5. **Configure build settings:**
   - Build command: `npm run netlify-build`
   - Publish directory: `.next`
6. **Set environment variables** in Netlify dashboard:
   ```bash
   DATABASE_URL=file:./dev.db
   NEXTAUTH_SECRET=your-super-secret-key-here
   NEXTAUTH_URL=https://your-site-name.netlify.app
   ```
7. **Deploy** - Netlify will automatically build and deploy

#### Option 2: Deploy via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build for production
npm run netlify-build

# Deploy to Netlify
netlify deploy --prod --dir=.next
```

### Vercel (Alternative)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables di Vercel dashboard
```

### Manual Deployment
1. Build aplikasi: `npm run build`
2. Setup production database
3. Set environment variables
4. Deploy built files ke hosting provider

## 🔒 Security Features

- Password hashing dengan bcrypt
- Input validation dan sanitization
- SQL injection protection via Prisma
- CSRF protection
- Secure session management

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register/customer` - Customer registration
- `POST /api/auth/register/merchant` - Merchant registration  
- `POST /api/auth/login` - User login

### Customer APIs (Coming Soon)
- `GET /api/customer/loyalty-cards` - Get customer cards
- `GET /api/customer/transactions` - Transaction history
- `POST /api/customer/redeem` - Redeem rewards

### Merchant APIs (Coming Soon)
- `GET /api/merchant/dashboard` - Dashboard data
- `GET /api/merchant/customers` - Customer list
- `POST /api/merchant/transaction` - Add transaction

## 🤝 Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Demo Accounts

### Customer Demo
- Email: `customer@demo.com`
- Password: `demo123`

### Merchant Demo
- Email: `merchant@demo.com` 
- Password: `demo123`

## 📞 Support

Untuk pertanyaan atau dukungan:
- 📧 Email: support@coffeeloylaty.com
- 💬 Issues: [GitHub Issues](https://github.com/username/digitalloyaltycard/issues)

---

**Dibuat dengan ❤️ untuk komunitas coffee shop Indonesia**
