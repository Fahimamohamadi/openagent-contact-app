
# OpenAgent Contact App

This project is a full-stack web application for managing contacts, built with React (Vite, TypeScript) for the client and Express.js with SQLite for the backend.

## Features

- **Contact Us Page:** Company details and a contact form with validation. Submissions are saved to the database.
- **Contacts List Page:** View, verify, and delete contacts. Responsive, modern UI with header and footer.
- **Backend API:** RESTful endpoints for creating, listing, verifying, and deleting contacts.
- **Database:** Uses SQLite (`contacts.db`) for persistent storage.

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

---

### Clone the repository
```zsh
git clone https://github.com/mohamad687232/openagent-contact-client.git
```
---

### 1. Install Dependencies

From the project root, install dependencies for both client and backend:

```zsh
# Client
cd openagent-contact-client
npm install

# Backend
cd backend
npm install
```

---

### 2. Run the Backend API

Start the backend server (Express + SQLite):

```zsh
cd backend
npm run dev
# The API will be available at http://localhost:4000
```

---

### 3. Run the Client App

Start the React client:

```zsh
cd openagent-contact-client
npm run dev
# The app will be available at http://localhost:5173 (default Vite port)
```

---

### 4. View and Manage Contacts

- Go to `http://localhost:5173` in your browser.
- Use the Contact Us page to submit new contacts.
- Use the Contacts List page to view, verify, or delete contacts.

---

### 5. View Database Contents (SQLite)

To inspect the data in `contacts.db` directly:

```zsh
cd backend
sqlite3 contacts.db
sqlite> SELECT * FROM contacts;
sqlite> .exit
```

---

## API Endpoints

- `GET /contacts` — List all contacts
- `POST /contacts` — Create a new contact
- `PUT /contacts/:id/verify` — Mark contact as verified
- `DELETE /contacts/:id` — Delete a contact

---

## Docker (Optional)

You can run the backend in a Docker container. Example `Dockerfile` and instructions can be provided on request.

---

## Assumptions

- The backend runs on port 4000, client on 5173 (default Vite).
- SQLite is used for simplicity and local development.
- All API validation is handled server-side.

---

## License

MIT
