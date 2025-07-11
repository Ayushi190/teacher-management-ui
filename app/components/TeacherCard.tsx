import { Teacher } from "../types";

export default function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <li className="py-3 px-2 flex justify-between items-center bg-gray-50 rounded">
      <div className="text-sm text-gray-600">
        <strong>{teacher.name}</strong> <span className="text-sm text-gray-600">({teacher.subject})</span>
      </div>
      <span className="text-sm text-gray-600">{teacher.email}</span>
    </li>
  );
}
