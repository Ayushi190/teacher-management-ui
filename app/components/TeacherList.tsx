import { Teacher } from "../types";
import TeacherCard from "./TeacherCard";

interface Props {
  teachers: Teacher[];
}

export default function TeacherList({ teachers }: Props) {
  if (teachers.length === 0) {
    return <p className="text-gray-500">No teachers added yet.</p>;
  }

  return (
    <ul className="divide-y divide-gray-200" aria-label="Teacher list">
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </ul>
  );
}
