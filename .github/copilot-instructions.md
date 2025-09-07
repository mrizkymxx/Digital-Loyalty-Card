<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Digital Loyalty Card System - Copilot Instructions

This is a Next.js TypeScript project for a digital loyalty card system for coffee shops, similar to StampMe.

## Project Context
- **Technology Stack**: Next.js 14+, TypeScript, Tailwind CSS, Prisma ORM
- **Purpose**: Digital loyalty card system for coffee shops with customer and merchant features
- **Key Features**: QR code scanning, points system, reward management, customer/merchant dashboards

## Code Style Guidelines
- Use TypeScript with strict type checking
- Follow Next.js App Router conventions
- Use Tailwind CSS for styling with modern, responsive design
- Implement proper error handling and loading states
- Use React Server Components when possible
- Follow REST API conventions for API routes

## Database Schema
- Users (customers and merchants)
- Loyalty Cards
- Transactions
- Rewards
- Coffee Shops/Merchants

## Key Components to Implement
- QR Code generation and scanning
- Point accumulation system
- Reward redemption flow
- Customer mobile-friendly interface
- Merchant dashboard for analytics
- Authentication system

## Security Considerations
- Implement proper authentication
- Validate QR codes and transactions
- Prevent point manipulation
- Secure API endpoints
