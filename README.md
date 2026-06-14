# 🎓 NIEEE Academy of Digital Skills

![Version](https://img.shields.io/badge/version-1.0-blue)
![Platform](https://img.shields.io/badge/platform-Web-success)
![Backend](https://img.shields.io/badge/backend-Vercel_Serverless-black)
![Database](https://img.shields.io/badge/database-Google_Sheets-green)
![License](https://img.shields.io/badge/license-Private-red)

---

# 🚀 Project Overview & Mission
The **NIEEE Academy of Digital Skills** is a digital learning platform designed to equip students and young professionals with practical, industry-relevant digital and technology skills.
The platform provides a modern learning experience that enables participants to:
* Enroll in digital skill programs
* Access structured learning materials
* Track learning progress
* Complete quizzes and assessments
* Earn certificates
* Receive announcements and updates
* Interact with Academy administrators

The system consists of:
| Layer                          | Purpose                                 |
| ------------------------------ | --------------------------------------- |
| Frontend Website               | Student-facing learning platform        |
| Admin Portal (`admin.html`)    | Academy administration and management   |
| Backend API (`api/Academy.js`) | Server-side communication with database |
| Database Layer                 | Google Sheets via Google Apps Script    |

---
# ✨ Core Features
## 🎯 Student Learning Platform
The frontend provides:
### Authentication
* User registration
* User login
* Session management
* Student onboarding

### Learning Experience
* Course catalog
* Lesson navigation
* Video lesson support
* Learning progress tracking
* Practical assignments
* Weekly learning structure

### Assessments
* Multiple-choice quizzes
* Written assessments
* Automated grading
* Completion tracking

### Certification
* Dynamic certificate generation
* Student-specific certificate rendering
* Completion verification

### Communication
* Academy announcements
* Notifications
* Learning updates
---

## 👨‍💼 Dean's Administrative Portal
The dedicated `admin.html` portal is intended exclusively for Academy leadership.

### Administrative Functions
* Student management
* Course administration
* Learning analytics
* Content management
* Progress monitoring
* Certificate oversight
* Announcement publishing

### Dean-Level Operations
The Dean can:
* Monitor Academy performance
* Track student engagement
* Review course completion
* Manage learning programs
* Publish Academy updates
* Oversee operational activities

---

## ⚙ Backend API Handling
The backend is implemented as a Vercel Serverless Function.
### Responsibilities
* Receives requests from frontend/admin portal
* Validates incoming requests
* Handles CORS policies
* Communicates with Google Apps Script
* Retrieves and updates Academy data
* Returns standardized JSON responses

### Benefits
* Prevents direct database exposure
* Avoids browser CORS restrictions
* Improves security
* Simplifies frontend integration

---
# 🛠 Tech Stack Deep-Dive
## Frontend Layer
| Technology         | Purpose                     |
| ------------------ | --------------------------- |
| HTML5              | Application structure       |
| CSS3               | Styling & responsive design |
| Vanilla JavaScript | Client-side functionality   |
| EmailJS            | Email communication         |
| Google Fonts       | Typography                  |

### Frontend Features
* Responsive UI
* Course dashboard
* Quiz engine
* Certificate rendering
* Authentication interface
* Progress visualization

---
## Administrative Panel
| Technology | Purpose              |
| ---------- | -------------------- |
| HTML       | Admin interface      |
| CSS        | Dashboard styling    |
| JavaScript | Administrative logic |

### Admin Capabilities
* User management
* Course management
* Analytics monitoring
* Academy operations

---

## Backend & Database Layer
### Vercel Serverless Functions
File:
```text
api/Academy.js
```

Responsibilities:
```text
Frontend
   ↓
Academy.js
   ↓
Google Apps Script
   ↓
Google Sheets Database
```

### Database Technology
* Google Sheets
* Google Apps Script API Layer

Benefits:
* Low operational cost
* Easy administration
* Rapid deployment
* Cloud-hosted storage

---

# 📦 Local Development & Installation
## Prerequisites
Install:

```bash
Node.js >= 18
npm >= 9
Git
```

---
## Clone Repository
```bash
git clone https://github.com/your-org/academy-of-digital-skills.git

cd academy-of-digital-skills
```

---
## Install Dependencies
```bash
npm install
```

---
## Environment Variables
Create:
```env
.env.local
```

Example:
```env
APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXXXXXXXXXX/exec
```

---
## Run Development Server
For Vercel:
```bash
npm install -g vercel

vercel dev
```

Application:
```text
http://localhost:3000
```

---
# 📁 Project Architecture
```text
academy-of-digital-skills/
│
├── index.html
│
├── admin.html
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── certificates/
│
├── api/
│   └── Academy.js
│
├── styles/
│
├── scripts/
│
├── public/
│
├── .env.local
│
├── package.json
│
└── README.md
```

---

## Architecture Overview
```text
Students
   │
   ▼
Frontend Website
(index.html)
   │
   ▼
Serverless API
(api/Academy.js)
   │
   ▼
Google Apps Script
   │
   ▼
Google Sheets Database
```

### Admin Flow
```text
Dean
   │
   ▼
admin.html
   │
   ▼
api/Academy.js
   │
   ▼
Database
```

---

# 🔐 Administrative & Backend Management Guide
## Dean Portal Workflow
### Login
The Dean accesses:
```text
admin.html
```

After authentication, the portal allows:
* Student administration
* Content updates
* Course monitoring
* Analytics review
* Announcement management

---
## Data Management Flow
### Read Operation
```text
Admin Portal
    ↓
Academy.js
    ↓
Google Apps Script
    ↓
Google Sheets
```

### Write Operation
```text
Admin Portal
    ↓
Academy.js
    ↓
Google Apps Script
    ↓
Google Sheets Update
```

---

## Academy.js Responsibilities
The API layer:
### Handles
```javascript
POST Requests
```

### Performs
* Request forwarding
* Data validation
* Error handling
* Response formatting
* CORS management

### Returns
```json
{
  "success": true,
  "data": {}
}
```

or

```json
{
  "success": false,
  "error": "Message"
}
```

---

# ☁ Deployment & Hosting
## Recommended Stack
| Service            | Purpose          |
| ------------------ | ---------------- |
| Vercel             | Frontend Hosting |
| Vercel Functions   | Backend API      |
| Google Apps Script | Data Middleware  |
| Google Sheets      | Database         |

---
## Deploy to Vercel
Install:
```bash
npm install -g vercel
```

Login:
```bash
vercel login
```

Deploy:
```bash
vercel
```

Production:
```bash
vercel --prod
```

---
## Environment Configuration
In Vercel Dashboard:
```text
Settings
 → Environment Variables
```

Add:
```env
APPS_SCRIPT_URL
```

---
## Production Recommendations
### Security
* Restrict Admin Access
* Add Role-Based Permissions
* Validate Inputs
* Protect API Endpoints
* Implement Rate Limiting

### Scalability
* Migrate to PostgreSQL/Firebase when growth increases
* Introduce Authentication Provider
* Add Logging & Monitoring

---
# 🤝 Contribution Guidelines
## Branch Strategy

```text
main
 ├── develop
 ├── feature/*
 ├── bugfix/*
 └── hotfix/*
```

---
## Workflow
```bash
git checkout -b feature/new-feature

git commit -m "Add new feature"

git push origin feature/new-feature
```

Create a Pull Request for review.
---
## Coding Standards
### Frontend
* Semantic HTML
* Responsive Design
* Modular JavaScript
* Consistent Naming

### Backend
* Async/Await
* Proper Error Handling
* Secure API Practices
* Clear Documentation

---
# 📞 Contacts
## Academy Leadership
**Dean, Academy of Digital Skills**
* Responsible for Academy administration
* Oversees programs and operations

## Technical Team
**Platform Development Team**
* Frontend Development
* Backend Development
* Infrastructure & Deployment

---
# 🌍 About the Academy
The **NIEEE Academy of Digital Skills** is an initiative of the **NIEEE FUPRE Chapter**, dedicated to empowering students with future-ready digital competencies, practical experience, and industry-relevant skills that bridge the gap between academic learning and professional excellence.

> Building Digital Leaders. Empowering Future Innovators.
