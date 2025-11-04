import express, { Request, Response } from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import path from "path";

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());

// SQLite database file
const DB_FILE = path.resolve(__dirname, "../contacts.db");

// Connect to SQLite
const db = new sqlite3.Database(DB_FILE, (err) => {
  if (err) {
    console.error("❌ Database connection error:", err.message);
  } else {
    console.log("✅ Connected to SQLite database");
  }
});

// Create table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    note TEXT,
    verified INTEGER DEFAULT 0
  )
`);

// ✅ Get all contacts
app.get("/contacts", (_: Request, res: Response) => {
  db.all("SELECT * FROM contacts ORDER BY id DESC", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// ✅ Add new contact
app.post("/contacts", (req: Request, res: Response) => {
  const { firstName, lastName, email, phone, note } = req.body;

  if (!firstName || !lastName || !email || !phone) {
    return res.status(400).json({ error: "All required fields must be provided." });
  }

  const query = `
    INSERT INTO contacts (firstName, lastName, email, phone, note, verified)
    VALUES (?, ?, ?, ?, ?, 0)
  `;
  db.run(query, [firstName, lastName, email, phone, note || ""], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ success: true, id: this.lastID });
  });
});

// ✅ Verify contact
app.put("/contacts/:id/verify", (req: Request, res: Response) => {
  const { id } = req.params;

  db.run("UPDATE contacts SET verified = 1 WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// ✅ Delete contact
app.delete("/contacts/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  db.run("DELETE FROM contacts WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// ✅ Start server
const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
