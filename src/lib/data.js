export const data = [
  {
    id: "1", // Keep IDs as consistent strings
    title: "Jira Clone",
    description:
      "An all-rounder application for project management with task tracking.",
    imageUrl: "/jira.png",
    Details: `A Jira-inspired project management tool designed for seamless task
    tracking, issue management, and team collaboration. It allows users
    to create, assign, and prioritize tasks with detailed statuses,
    labels, and deadlines. The application features a Kanban board
    interface for easy workflow visualization and drag-and-drop task
    management.`,
    Challanges: `Real-time updates: Implementing smooth drag-and-drop functionality and ensuring real-time status synchronization.
    Data consistency: Managing consistent task states across multiple users.
    UI/UX Optimization: Creating an intuitive and visually appealing interface with dynamic filtering and sorting options.`,
    About: `Built using Next.js, MongoDB, and Tailwind CSS, this project showcases my skills in full-stack development, including state management, dynamic routing, and backend API handling. It also incorporates authentication and authorization for secure user access and efficient task management.`,
    Year: "2023",
    images: ["/assets/Jira1.png", "/assets/Jira4.png", "/assets/Jira2.png"],
  },
  {
    id: "2",
    title: "Food Ordering App",
    description:
      "A full-stack platform for food ordering with seller and customer roles.",
    imageUrl: "/food_app.png",
    Details: `A food ordering platform where users can act as both sellers and customers. Sellers can add, edit, and manage their products, while customers can browse, add items to their cart, and place orders. The app includes authentication, product filtering, and checkout functionality.`,
    Challanges: `Dual-role system: Role-based authentication for sellers and customers.
    Cart management: Real-time cart updates using Zustand.
    Product management: Seamless CRUD operations for seller products.`,
    About: `Built with Next.js, Node.js, MongoDB, and Zustand, this app showcases my full-stack skills, including server-side rendering, authentication, and efficient data management.`,
    Year: "2024",
    images: [
      "/assets/Food_ordering1.png",
      "/assets/Food_ordering4.png",
      "/assets/Food_ordering3.png",
    ],
  },
  {
    id: "3",
    title: "Bloom Chat App",
    description:
      "A real-time chat application with group and direct messaging.",
    imageUrl: "/chat.png",
    Details: `A real-time chat application enabling seamless communication between users. It offers one-on-one and group messaging, message status indicators, and real-time typing indicators. The app includes authentication, user profiles, and message history.`,
    Challanges: `Real-time messaging: Using Socket.io for instant communication.
    Database management: Storing and retrieving message history with MongoDB.
    UI responsiveness: Smooth and responsive chat interface across devices.`,
    About: `Built with React, Node.js, Express, and Socket.io, this project demonstrates my ability to create scalable and interactive applications with real-time updates and efficient state management.`,
    Year: "2024",
    images: ["/assets/Bloom1.png", "/assets/Bloom2.png", "/assets/Bloom3.png"],
  },
  {
    id: "4",
    title: "Taskify",
    description: "A full-featured task management app for project planning.",
    imageUrl: "/taskify.png",
    Details: `Taskify is designed to help users efficiently organize and prioritize their tasks. It offers features like task creation, editing, and deletion, along with status updates, deadlines, and priority labeling. The app includes authentication for secure access and personalized task boards.`,
    Challanges: `State management: Using Zustand for consistent task synchronization.
    CRUD operations: Efficient Create, Read, Update, and Delete functionality with MongoDB.
    User experience: Intuitive UI with drag-and-drop task reordering.`,
    About: `Built with Next.js, Node.js, Express, MongoDB, and Zustand, Taskify demonstrates my expertise in full-stack development with responsive design, secure authentication, and optimized data handling.`,
    Year: "2023",
    images: [
      "/assets/Taskify1.png",
      "/assets/Taskify2.png",
      "/assets/Taskify3.png",
    ],
  },
];

// export const data = [
//   {
//     id: "1", // Change to string
//     title: "Jira Clone",
//     description:
//       "An all rounder application for management of projects with adding tasks and a lot's more features.",
//     imageUrl: "/jira.png",
//     Details: `A Jira-inspired project management tool designed for seamless task
//     tracking, issue management, and team collaboration. It allows users
//     to create, assign, and prioritize tasks with detailed statuses,
//     labels, and deadlines. The application features a Kanban board
//     interface for easy workflow visualization and drag-and-drop task
//     management.`,
//     Challanges: `Real-time updates: Implementing smooth drag-and-drop functionality and ensuring real-time status synchronization.Data consistency: Managing consistent task states across multiple users.UI/UX Optimization: Creating an intuitive and visually appealing interface with dynamic filtering and sorting options.`,
//     About: `Built using Next.js, MongoDB, and Tailwind CSS, this project showcases my skills in full-stack development, including state management, dynamic routing, and backend API handling. It also incorporates authentication and authorization for secure user access and efficient task management.`,
//     Year: "2023",
//     images: ["/jira1.png", "/jira2.png", "/jira3.png"],
//   },
//   {
//     id: "2",
//     title: "Food Ordering App",
//     description:
//       "A robust application with multiple user-friendly features for ordering food to opening your own shop to sell everything in one application.",
//     imageUrl: "/food_app.png",
//     Details: `A full-stack food ordering platform where users can act as both sellers and customers. Sellers can add, edit, and manage their products, while customers can browse, add items to their cart, and place orders. The app includes authentication, product filtering, and checkout functionality.`,
//     Challanges: `Dual-role system: Implementing role-based authentication for both sellers and customers.

// Cart management: Handling real-time cart updates with Zustand state management.

// Product management: Ensuring seamless CRUD operations for seller product management.`,
//     About: `Developed using Next.js, Node.js, MongoDB, and Zustand, this application showcases my skills in building e-commerce platforms with dynamic routing, server-side rendering, and efficient data fetching. It also features secure authentication and user-friendly UI/UX design.`,
//     Year: "2024",
//     images: [
//       "/Food_ordering1.png",
//       "/Food_ordering2.png",
//       "/Food_ordering3.png",
//     ],
//   },
//   {
//     id: "3",
//     title: "Bloom Chat App",
//     description:
//       "A robust chat application with multiple user-friendly features.",
//     imageUrl: "/chat.png",
//     Details: `A real-time chat application enabling seamless communication between users. It offers one-on-one and group messaging, message status indicators, and real-time typing indicators. The app includes authentication, user profiles, and message history`,
//     Challanges: `Real-time messaging: Using Socket.io to handle bidirectional communication for instant message delivery.

// Database management: Efficiently storing and retrieving message history using MongoDB.

// UI responsiveness: Ensuring a smooth and responsive chat interface across devices.`,
//     About: `Built with React, Node.js, Express, and Socket.io, this project demonstrates my ability to create scalable and interactive applications. It features real-time updates, efficient state management, and a modern, user-friendly UI.`,
//     Year: "2024",
//     images: ["/Bloom1.png", "/Bloom2.png", "/Bloom3.png"],
//   },
//   {
//     id: "4",
//     title: "Taskify",
//     description:
//       "An all-rounder application for management of big projects with multiple users, with many boards to plan and manage your projects.",
//     imageUrl: "/taskify.png",
//     Details: `Taskify is a full-featured task management application designed to help users efficiently organize and prioritize their tasks. It offers features like task creation, editing, and deletion, along with status updates, deadlines, and priority labeling. The app includes user authentication for secure access and ensures that each user has a personalized task board.`,
//     Challanges: `State management: Ensuring smooth and consistent state synchronization across different task views using Zustand.

// CRUD operations: Implementing efficient Create, Read, Update, and Delete functionality with MongoDB for seamless data management.

// User experience: Creating an intuitive UI with drag-and-drop functionality for easy task reordering and prioritization.`,
//     About: `Built with Next.js, Node.js, Express, MongoDB, and Zustand, Taskify demonstrates my expertise in full-stack development. It features responsive design, secure authentication, and optimized data handling, offering a smooth and productive task management experience.`,
//     Year: "2023",
//     images: ["/Taskify1.png", "/Taskify2.png", "/Taskify3.png"],
//   },
// ];
