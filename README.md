# Blog with Appwrite

A modern, full-featured blogging platform built with React and Appwrite, designed to provide a seamless writing and reading experience. This application allows users to create, manage, and share their blog posts with a rich text editing experience and secure authentication.

## 🚀 Features

### User Authentication
- Secure email/password authentication
- Protected routes for authenticated users
- Persistent login sessions
- User-friendly signup and login interfaces

### Blog Management
- Create and publish blog posts
- Rich text editor with formatting options
- Image upload and management
- Draft saving functionality
- Edit and delete posts
- View all posts with pagination

### User Interface
- Responsive design for all devices
- Dynamic navigation based on user authentication
- Clean and intuitive post creation interface
- Modern and accessible UI components

## 🛠️ Tech Stack

### Frontend
- **React** - A JavaScript library for building user interfaces
- **Vite** - Next Generation Frontend Tooling
- **React Router DOM** - Declarative routing for React applications
- **Redux Toolkit** - State management solution
- **TinyMCE React** - Rich text editor integration
- **React Hook Form** - Performant, flexible forms with easy validation

### Backend as a Service
- **Appwrite** - Open-source Backend as a Service platform
  - Authentication
  - Database
  - File Storage
  - Real-time updates

## 🏗️ Project Structure

```
src/
├── app/          # Redux store and slices
├── appwrite/     # Appwrite service configurations
├── components/   # Reusable UI components
├── pages/        # Route pages
└── config/       # Application configuration
```

## 🔧 Environment Setup

The application requires the following environment variables:

```env
VITE_APPWRITE_URL=your_appwrite_url
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

## ⚡ Current Development Status

### Completed Features
- ✅ Complete authentication system
- ✅ Redux integration for state management
- ✅ Core UI components
- ✅ Blog post creation with rich text editor
- ✅ File upload system
- ✅ Protected routes
- ✅ Post listing and viewing

### In Progress
- 🔄 Post categories and tags
- 🔄 User profile management
- 🔄 Comment system
- 🔄 Social sharing features

## 🤝 Contributing

Feel free to open issues and pull requests. We appreciate any contributions to improve the platform.
