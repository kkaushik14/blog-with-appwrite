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

### How to Fork and Contribute

1. **Fork the Repository**
   - Click the 'Fork' button at the top right of this repository
   - This will create a copy of the repository in your GitHub account

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/blog-with-appwrite.git
   cd blog-with-appwrite
   ```

3. **Add the Original Repository as Upstream**
   ```bash
   git remote add upstream https://github.com/kkaushik14/blog-with-appwrite.git
   ```

4. **Create a New Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make Your Changes**
   - Implement your features or fixes
   - Commit your changes with meaningful commit messages

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click 'New Pull Request'
   - Select your feature branch and submit the PR

Feel free to open issues and pull requests. We appreciate any contributions to improve the platform.
