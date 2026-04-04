# Forest & Wildlife Monitoring Dashboard 🌲🐅

## Overview
A comprehensive full-stack web application designed for conservationists, researchers, and environmental organizations to track and monitor forest conservation efforts and wildlife activities in real-time.

## Problem Statement
Create an interactive dashboard for tracking forest and wildlife conservation efforts. Conservationists, researchers, and environmental organizations will register and provide updates about forest and wildlife monitoring activities. Administrators will validate participants, and users can filter content based on location, species, and conservation status to stay informed about environmental protection initiatives.

## Key Features

### For Conservationists & Researchers
- 📝 Report monitoring activities (patrols, wildlife sightings, illegal activities)
- 🗺️ View interactive maps of forest locations
- 🐅 Track species and their conservation status
- 📊 Analyze data through interactive charts
- 🔍 Filter activities by location, species, and status

### For Administrators
- ✅ Verify and validate reported activities
- 🏢 Manage participant organizations
- 📍 Add/edit forest locations
- 🦁 Manage species database
- 👥 Manage user roles and permissions

### Technical Features
- 🎨 Dark/Light mode with 6 color palettes (Forest, Ocean, Sunset, Midnight, Slack, VS Code)
- 📱 Fully responsive design
- ⚡ Real-time data updates
- 🔐 JWT authentication with role-based access
- 🗺️ Interactive maps using Leaflet
- 📈 Beautiful charts using Recharts
- 🎭 Smooth animations with Framer Motion

## Tech Stack

### Frontend
- React.js + Vite + TypeScript
- Tailwind CSS + Shadcn/UI
- Framer Motion (Animations)
- Zustand (State Management)
- React Query (Data Fetching)
- Leaflet (Maps)
- Recharts (Charts)

### Backend
- Node.js + Express + TypeScript
- Prisma ORM
- PostgreSQL (Neon Tech)
- JWT + Bcrypt (Authentication)
- Cloudinary (Image Upload)

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: Neon PostgreSQL

## User Roles

| Role | Permissions |
|------|-------------|
| **Admin** | Full access - verify activities, manage all data, user management |
| **Conservationist** | Report activities, view data, edit own reports |
| **Researcher** | Research surveys, view data, analyze trends |

## Screenshots
[Add screenshots here]

## Live Demo
[Add deployed link here]

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- PostgreSQL (or Neon account)
- Cloudinary account (for image upload)

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Fill environment variables
npx prisma generate
npx prisma migrate dev
npm run dev