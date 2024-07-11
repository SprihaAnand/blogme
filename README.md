# BlogMe Blog Site 📝

BlogMe is a modern blog site built with React and powered by Appwrite backend services. It allows users to create, edit, and manage their blog posts in an intuitive and user-friendly interface.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Overview

BlogMe is a full-stack web application developed using React for the frontend and Appwrite as the backend service. It aims to provide a platform for users to share their thoughts, stories, and ideas through blog posts. The frontend is designed to be responsive, ensuring a seamless experience across various devices.

## Features

- **User Authentication:** Sign up and login functionality with authentication handled securely using Appwrite.
- **Create and Edit Posts:** Users can create new blog posts and edit existing ones with a rich text editor.
- **Image Upload:** Support for uploading featured images for blog posts.
- **Post Management:** View, edit, and delete posts from a user-friendly dashboard.
- **Responsive Design:** Ensures the application looks great and works well on different screen sizes.

## Installation

Follow these steps to get BlogMe up and running on your local machine:

1. **Clone the repository:**

```
git clone https://github.com/your/repository.git
cd repository
```

2. **Install dependencies:**

```
npm install
```

3. **Set up environment variables:**
   Create a `.env` file and add your Appwrite endpoint and project ID:

```
REACT_APP_APPWRITE_ENDPOINT=https://your-appwrite-endpoint
REACT_APP_APPWRITE_PROJECT_ID=your-project-id
```

4. **Run the development server:**

```
npm run dev
```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- **Sign Up:** Create a new account to start using BlogMe.
- **Login:** Sign in with your credentials to access the dashboard.
- **Create Post:** Click on "Add Post" to create a new blog post with a title, content, and optional featured image.
- **Manage Posts:** Edit or delete existing posts from the dashboard.

## Technologies Used

BlogMe utilizes the following technologies and libraries:

| Technology/Library | Description                                          |
| ------------------ | ---------------------------------------------------- |
| React              | JavaScript library for building user interfaces      |
| React Router       | Declarative routing for React                        |
| React Hook Form    | Forms validation and management                      |
| Tailwind CSS       | Utility-first CSS framework                          |
| Appwrite           | Backend-as-a-Service platform for backend operations |
| Redux Toolkit      | State management library for React                   |
| React Icons        | SVG icons as React components                        |
| HTML React Parser  | Converts HTML strings into React components          |

## Contributing

Contributions to BlogMe are welcome! To contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.
