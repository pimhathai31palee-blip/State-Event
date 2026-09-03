import { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 flex flex-col justify-between mb-4">
      <div>
        {/* 1. หัวข้อชื่อวิชา (ย้ายมาไว้ด้านบนสุด) */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {course.title}
        </h2>

        {/* 2. รหัสวิชา และ สถานะเปิด/ปิด (ย้ายมาไว้ใต้ชื่อวิชา) */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm text-gray-600 font-medium">
            รหัสวิชา: {course.code}
          </span>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded ${
              course.isOpen
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
          </span>
        </div>
      </div>

      {/* 3. จำนวนหน่วยกิต */}
      <p className="text-sm text-gray-500 pt-3 border-t border-gray-100 mt-2">
        {course.credits} หน่วยกิต
      </p>
    </div>
  );
}