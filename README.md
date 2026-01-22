# BentoVeda 🍱

> Traditional Wisdom, Modern Convenience

BentoVeda is a full-stack web application for a healthy meal delivery service that combines traditional Indian food wisdom with modern convenience. The platform allows users to join early access lists for workplace lunches, institutional partnerships, or subscription meal plans.

## 📋 Project Description

BentoVeda aims to make healthy, balanced eating easy and reliable for busy professionals and families. The application features:

- **Landing Page**: Showcasing the company philosophy and service offerings
- **Email Subscription System**: Allows users to join the waitlist for different meal plans
- **Admin Dashboard**: Secure portal to view all email submissions
- **Responsive Design**: Beautiful, modern UI that works across all devices

The platform emphasizes consistency, balance, and thoughtfulness in meal planning, offering fresh, nutritionally balanced meals inspired by traditional Indian dietary principles.

## 🛠️ Tech Stack

### Frontend
- **React** (18.x) - UI library for building interactive interfaces
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Icon library for modern UI icons
- **Vite** - Fast build tool and development server

### Backend
- **FastAPI** - Modern Python web framework for building APIs
- **SQLAlchemy** - SQL toolkit and ORM
- **SQLite** - Lightweight database for storing subscriptions
- **Pydantic** - Data validation using Python type hints
- **Uvicorn** - ASGI server for running FastAPI

### Additional Tools
- **CORS Middleware** - Enable cross-origin requests between frontend and backend
- **Email Validator** - Validates email format on the backend

## 📁 Project Structure

```
bentoveda/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── requirements.txt     # Python dependencies
│   └── subscribers.db       # SQLite database (auto-generated)
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── ProductLines.jsx
│   │   │   ├── EmailForm.jsx
│   │   │   └── AdminView.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **npm** or **yarn**

### Backend Setup

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Create a virtual environment** (recommended):
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the FastAPI server**:
   ```bash
   uvicorn main:app --reload
   ```

   The backend will start at `http://localhost:8000`

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install Node.js dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

   **Required npm packages** (if installing manually):
   ```bash
   npm install react react-dom
   npm install react-router-dom
   npm install lucide-react
   npm install -D tailwindcss postcss autoprefixer
   npm install -D vite @vitejs/plugin-react
   ```

   Or add these to your `package.json`:
   ```json
   {
     "dependencies": {
       "react": "^18.2.0",
       "react-dom": "^18.2.0",
       "react-router-dom": "^6.20.0",
       "lucide-react": "^0.263.1"
     },
     "devDependencies": {
       "@vitejs/plugin-react": "^4.2.0",
       "autoprefixer": "^10.4.16",
       "postcss": "^8.4.32",
       "tailwindcss": "^3.3.6",
       "vite": "^5.0.7"
     }
   }
   ```

3. **Initialize Tailwind CSS** (if not already configured):
   ```bash
   npx tailwindcss init -p
   ```

   This creates `tailwind.config.js` and `postcss.config.js`

4. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The frontend will start at `http://localhost:5173`

## 🔑 Admin Access

The admin dashboard is protected with a simple password authentication:

- **URL**: `http://localhost:5173/admin`
- **Password**: `admin123`

⚠️ **Note**: This is a basic authentication for demonstration purposes only. See "Future Improvements" for security enhancements.

## 📡 API Endpoints

### Health Check
- **GET** `/` - Check if the backend is running

### Join Waitlist
- **POST** `/api/join`
  - Body: `{ "email": "user@example.com" }`
  - Returns: Subscriber object with ID and email

### Get All Submissions
- **GET** `/api/submissions`
  - Returns: Array of all subscribers

## 🎨 Features

### User-Facing Features
- ✅ Clean, modern landing page
- ✅ Three service offerings clearly presented
- ✅ Email subscription form with validation
- ✅ Success/error feedback messages
- ✅ Fully responsive design

### Admin Features
- ✅ Password-protected admin panel
- ✅ View all email submissions
- ✅ Real-time subscriber count
- ✅ Clean table interface

## 🔄 Future Improvements

### Security Enhancements
- [ ] Implement proper authentication (JWT tokens, OAuth)
- [ ] Hash passwords instead of plain text comparison
- [ ] Add rate limiting to prevent spam
- [ ] Implement HTTPS in production
- [ ] Add CSRF protection
- [ ] Environment variables for sensitive data

### Database & Backend
- [ ] Migrate to PostgreSQL for production
- [ ] Add database migrations (Alembic)
- [ ] Implement pagination for submissions
- [ ] Add email verification (send confirmation emails)
- [ ] Export subscriber list (CSV/Excel)
- [ ] Add unsubscribe functionality
- [ ] Implement bulk email operations

### Frontend & UX
- [ ] Add loading skeletons instead of basic loaders
- [ ] Implement form validation with better error messages
- [ ] Add animation transitions between pages
- [ ] Dark mode toggle
- [ ] Multi-language support (i18n)
- [ ] Add analytics tracking (Google Analytics, Mixpanel)
- [ ] Accessibility improvements (ARIA labels, keyboard navigation)

### Features
- [ ] User dashboard to manage subscriptions
- [ ] Meal plan customization options
- [ ] Payment integration (Stripe, Razorpay)
- [ ] Order tracking system
- [ ] Customer reviews and testimonials
- [ ] Blog/content management system
- [ ] SEO optimization
- [ ] Email marketing integration (Mailchimp, SendGrid)

### DevOps & Deployment
- [ ] Docker containerization
- [ ] CI/CD pipeline setup
- [ ] Deploy backend to cloud (AWS, GCP, Heroku)
- [ ] Deploy frontend to Vercel/Netlify
- [ ] Set up monitoring and logging
- [ ] Automated testing (unit, integration, e2e)
- [ ] Performance optimization

### Code Quality
- [ ] Add TypeScript for type safety
- [ ] Implement comprehensive error handling
- [ ] Add unit and integration tests
- [ ] Code documentation and JSDoc comments
- [ ] ESLint and Prettier configuration
- [ ] Git hooks for code quality (Husky)

## 🐛 Known Issues

- Admin password is hardcoded (not production-ready)
- No email verification system
- SQLite may not scale for production use
- CORS is currently wide open for localhost

## 📧 Contact

For questions or support, please contact the BentoVeda team.

---

**Built with ❤️ for healthy eating and wellness**
