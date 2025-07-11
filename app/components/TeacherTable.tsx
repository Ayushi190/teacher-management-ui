import { Teacher } from "@/app/types";

interface Props {
  teachers: Teacher[];
}

export default function TeacherTable({ teachers }: Props) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md w-full">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Subject</th>
            <th className="px-4 py-3 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {teachers.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center py-4 text-gray-500">
                No teachers added yet.
              </td>
            </tr>
          ) : (
            teachers.map((teacher) => (
              <tr key={teacher.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{teacher.name}</td>
                <td className="px-4 py-2">{teacher.subject}</td>
                <td className="px-4 py-2">{teacher.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
