# MERN Stack Blog Application

A full-featured blog application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Features

- User authentication (signup, signin, signout)
- User authorization and admin roles
- Create, read, update, and delete blog posts
- Rich text editor for post content
- Image upload functionality
- Comment system with likes
- Search posts with filters
- Responsive design with dark/light mode
- Admin dashboard with analytics

## Tech Stack

### Frontend
- React.js
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling
- Flowbite React components
- Firebase for image storage
- React Quill for rich text editing

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/mern-blog.git
cd mern-blog
```

2. Install dependencies
```bash
# Install backend dependencies
cd api
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables
- Create `.env` file in the api directory
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

- Update Firebase configuration in `client/src/firebase.js`

4. Run the application
```bash
# Run backend (from api directory)
npm run dev

# Run frontend (from client directory)
npm run dev
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
