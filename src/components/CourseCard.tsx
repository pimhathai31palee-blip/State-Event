"use client";

import Link from "next/link";
import type { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
  isFavorite?: boolean;
  onToggleFavorite?: (id: any) => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function CourseCard({
  course,
  isFavorite,
  onToggleFavorite,
  onEdit,
  onDelete,
}: CourseCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md border border-gray-100 p-5 flex flex-col justify-between mb-4">
      <div>
        {/* 1. หัวข้อชื่อวิชา (ครอบด้วย Link เพื่อไปยังหน้ารายละเอียด) */}
        <h2 className="text-xl font-bold text-blue-600 hover:underline mb-2">
          <Link href={`/courses/${course.id}`}>
            {course.title || course.name}
          </Link>
        </h2>

        {/* 2. รหัสวิชา และ สถานะเปิด/ปิด */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm text-gray-600 font-medium">
            รหัสวิชา: {course.code}
          </span>
          {course.isOpen !== undefined && (
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded ${course.isOpen
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
                }`}
            >
              {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
            </span>
          )}
        </div>

        {/* ผู้สอน (ถ้ามี) */}
        {course.instructor && (
          <p className="text-sm text-gray-500 mb-1">
            ผู้สอน: {course.instructor}
          </p>
        )}
      </div>

      {/* 3. จำนวนหน่วยกิต */}
      <p className="text-sm text-gray-500 pt-3 border-t border-gray-100 mt-2">
        {course.credit || course.credits} หน่วยกิต
      </p>

      {/* ปุ่มรายการโปรด */}
      {onToggleFavorite && (
        <button
          type="button"
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(course.id)}
          className="mt-4 px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 text-black transition"
        >
          {isFavorite ? "อยู่ในรายการโปรด" : "เพิ่มเป็นรายการโปรด"}
        </button>
      )}

      {/* ปุ่มแก้ไข และ ปุ่มลบ */}
      <div className="flex gap-2 mt-3 pt-2 border-t border-gray-100">
        {onEdit && (
          <button
            type="button"
            onClick={onEdit}
            className="flex-1 py-1.5 px-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition"
          >
            แก้ไข
          </button>
        )}
        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="flex-1 py-1.5 px-3 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition"
          >
            ลบ
          </button>
        )}
      </div>
    </article>
  );
}