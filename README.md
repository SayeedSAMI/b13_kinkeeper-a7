# 🫂 KeenKeeper — Keep Your Friendships Alive

> A modern friendship management web application that helps you keep track of your friends, stay connected, and maintain meaningful relationships.

## 🌐 Live Demo

🔗 **Live Link:** `YOUR_LIVE_LINK_HERE`

## 📦 GitHub Repository

🔗 **GitHub:** `https://github.com/SayeedSAMI/b13_kinkeeper-a7`

---

## 📖 About The Project

**KeenKeeper** is a responsive friendship management application designed to help users organize and maintain their relationships.

Users can view their friends, monitor how long it has been since they last contacted them, set relationship goals, and record interactions such as calls, texts, and video calls.

The application also provides a timeline of interactions and friendship analytics to help users understand their communication habits.

---

## ✨ Key Features

### 👥 1. Friend Management

* Display friends in responsive cards.
* View profile picture, name, contact status, and tags.
* Track the number of days since the last contact.
* View detailed information about each friend.
* Relationship goals and next due dates are displayed for each friend.

### ⚡ 2. Quick Check-In & Timeline

* Quickly log a **Call**, **Text**, or **Video** interaction.
* Automatically creates a timeline entry when an interaction is recorded.
* Displays the current date and friend name in the timeline.
* Toast notifications provide instant feedback after an interaction.
* Timeline can be filtered by interaction type.

### 📊 3. Friendship Analytics

* Visualize interaction history using a **Pie Chart**.
* Analyze the number of Calls, Texts, and Video interactions.
* Provides an easy way to understand communication patterns with friends.

---

## 🛠️ Technologies Used

| Technology          | Purpose                                       |
| ------------------- | --------------------------------------------- |
| **Next.js**         | Building the application and handling routing |
| **React.js**        | Creating reusable UI components               |
| **Tailwind CSS**    | Styling and responsive design                 |
| **Recharts**        | Creating friendship analytics charts          |
| **React Icons**     | Adding icons throughout the interface         |
| **React Hot Toast** | Showing interaction notifications             |
| **JavaScript**      | Application logic and functionality           |
| **JSON**            | Storing friend information                    |

---

## 📱 Responsive Design

KeenKeeper is designed to work across different screen sizes:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

The layout, navigation, friend cards, details pages, timeline, and analytics sections adapt to different screen sizes.

---

## 📄 Main Pages

### 🏠 Home

The home page includes:

* Navigation bar
* Hero/banner section
* Friendship summary cards
* Friend cards
* Responsive friend grid

### 👤 Friend Details

Each friend has a dedicated details page containing:

* Profile information
* Friendship status
* Tags
* Biography
* Email
* Relationship statistics
* Relationship goal
* Quick Check-In buttons

### 📜 Timeline

The timeline displays previously recorded:

* 📞 Calls
* 💬 Texts
* 🎥 Video calls

Users can filter timeline entries according to interaction type.

### 📊 Stats

The statistics page provides friendship analytics using a Recharts pie chart to visualize:

* Calls
* Texts
* Video calls

### ❌ 404 Page

A custom 404 page is included for invalid or unknown routes.

---

## 📂 Project Structure

```text
keenkeeper/
├── app/
│   ├── page.jsx
│   ├── timeline/
│   ├── stats/
│   ├── friends/
│   └── not-found.jsx
│
├── components/
│   ├── Navbar/
│   ├── FriendCard/
│   ├── FriendDetails/
│   ├── Timeline/
│   ├── Stats/
│   └── Footer/
│
├── data/
│   └── friends.json
│
├── public/
│   └── images/
│
├── package.json
└── README.md
```

> The exact folder structure may vary depending on the final project implementation.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

Navigate to the project:

```bash
cd keenkeeper
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```
---

## 🎯 Project Requirements Implemented

* ✅ Responsive Navbar
* ✅ Home page banner
* ✅ Friendship summary cards
* ✅ Friend data from JSON
* ✅ Responsive friend card grid
* ✅ Friend details page
* ✅ Relationship statistics
* ✅ Quick Check-In functionality
* ✅ Call / Text / Video timeline entries
* ✅ Toast notifications
* ✅ Timeline page
* ✅ Timeline filtering
* ✅ Friendship Analytics
* ✅ Recharts Pie Chart
* ✅ Responsive design
* ✅ Custom 404 page
* ✅ Loading state
* ✅ Responsive footer

---

## 👨‍💻 Developer

**Md. Golam Sayeed Sami**

Built with ❤️ using **Next.js, React, and Tailwind CSS**.

---

## 📜 License

This project was created as part of a Programming hero assingment project.
