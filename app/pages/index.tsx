import { useState } from "react";
import AddTeacherForm from "@/app/components/TeacherForm";
import TeacherTable from "@/app/components/TeacherTable";
import { Teacher } from "@/app/types";

export default function Home() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const handleAddTeacher = (newTeacher: Teacher) => {
    setTeachers((prev) => [...prev, newTeacher]);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-center mb-8">
          Teacher Management
        </h1>
        <AddTeacherForm onAdd={handleAddTeacher} />
        <TeacherTable teachers={teachers} />
      </div>
    </main>
  );
}
