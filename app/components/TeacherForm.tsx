"use client";
import { useState } from "react";
import { Teacher } from "../types";

interface Props {
  onAdd: (teacher: Teacher) => void;
}

export default function TeacherForm({ onAdd }: Props) {
  const [formData, setFormData] = useState({ name: "", subject: "", email: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.subject || !formData.email) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const newTeacher: Teacher = {
        id: Date.now(),
        name: formData.name,
        subject: formData.subject,
        email: formData.email,
      };
      onAdd(newTeacher);
      setFormData({ name: "", subject: "", email: "" });
      setError("");
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6" aria-label="Teacher form">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
        />
      </div>
      {error && <p className="text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {loading ? "Adding..." : "Add Teacher"}
      </button>
    </form>
  );
}
