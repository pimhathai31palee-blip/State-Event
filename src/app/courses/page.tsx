import { courses } from "@/data/coursedata";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">รายวิชาทั้งหมด</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
}