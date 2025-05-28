# 📧 React Email App – Context API + Routing Practice

This project is designed to help you learn and master `useContext` in React, with a strong emphasis on **state sharing**, **routing**, and **component communication**. Each level builds upon the previous one for gradual progression.

---

## ✅ Base Level - Email App with Routing & Context

### 📌 Features:
- **Landing Page** – Shows a heading and two routes: *Inbox* and *Sent*.
- **Inbox Page**:
  - Displays a list of received emails.
  - Emails have a `read: true/false` property.
  - Two counters: **Read Emails** and **Unread Emails**.
  - Each unread email has a “Mark as Read” button.
  - Clicking a button updates the read/unread count via `useContext`.
  - Clicking on any email opens the **Individual Email Page**.
- **Sent Page**:
  - Displays sent emails (read-only, no buttons).
  - Clicking an email opens it in a separate route.
- **Individual Email Page**:
  - Shows detailed content of the selected email.
- All email state management (read/unread tracking) is handled using `useContext`.

---

## 🔁 Progressive Enhancements (Levels 2-11)

### 🔹 Level 2 – Filter by Read Status
- Add buttons to filter:
  - Show All Emails
  - Show Only Unread Emails
- Manage filter state via `useContext`.

---

### 🔹 Level 3 – Archive Emails
- Add an **Archive** button for each email in Inbox.
- Clicking moves the email to a new **Archived** section.
- Add a new `/archive` route to view all archived emails.

---

### 🔹 Level 4 – Delete Email
- Add delete buttons next to each email in Inbox and Sent.
- Clicking removes the email and updates the context and counters.

---

### 🔹 Level 5 – Compose Email
- Add a **"Compose"** route/page.
- Fields: To, Subject, Content.
- On submission:
  - Email gets added to the **Sent** context.
  - Redirect to Sent Page.

---

### 🔹 Level 6 – Show Unread Badge in Navigation
- In the navbar or sidebar, next to **Inbox**, display the number of unread emails dynamically via `useContext`.

---

### 🔹 Level 7 – Dark Mode Toggle using Context
- Create a global `ThemeContext`.
- Toggle between light and dark mode.
- Style all components accordingly.

---

### 🔹 Level 8 – Email Labels (Tags)
- Allow users to assign a label to each email (e.g., "Work", "Personal").
- Store this in context.
- Add a dropdown to filter emails by label in Inbox.

---

### 🔹 Level 9 – Email Search
- Add a global search bar on the Inbox Page.
- Typing filters emails based on subject/content using `useContext`.

---

### 🔹 Level 10 – Multi-Select & Bulk Actions
- Allow selecting multiple emails.
- Add bulk actions:
  - Mark selected as Read
  - Archive selected
  - Delete selected
- All logic handled using shared context state.

---

### 🔹 Level 11 – Notification System
- Use a global `NotificationContext`.
- Show toast-like messages for actions:
  - “Email marked as read”
  - “Email archived”
  - “Email deleted”

---

## 🧠 Learning Outcome

By the end of this project, you'll have strong foundational knowledge of:
- `useContext` for state sharing
- Routing with `react-router-dom`
- Component communication
- Managing derived states (like counters, filters, badges)
- UI feedback and user interaction

---

## 🛠 Tech Stack

- React + Vite
- React Router DOM
- Context API
- (Optional) Tailwind CSS for styling

---

## 🚀 Bonus Challenge

Convert the `useContext` logic to use **`useReducer`** once you're confident. It helps manage complex state updates more cleanly and prepares you for larger-scale apps.

---

Happy Coding! 🎯
