"use client";
import { useState } from "react";
import TeacherForm from "./components/TeacherForm";
import TeacherList from "./components/TeacherList";
import { Teacher } from "./types";

export default function Home() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const handleAddTeacher = (teacher: Teacher) => {
    setTeachers((prev) => [...prev, teacher]);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Teacher Management</h1>
        <TeacherForm onAdd={handleAddTeacher} />
        <TeacherList teachers={teachers} />
      </div>
    </main>
  );
}
