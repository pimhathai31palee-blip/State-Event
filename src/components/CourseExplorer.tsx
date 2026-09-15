"use client";

import { useState, type ChangeEvent } from "react";
import type { Course } from "@/types/course";
import type { CourseDraft } from "@/components/CourseForm";
import CourseForm from "@/components/CourseForm";
import CourseCard from "@/components/CourseCard";

type CourseExplorerProps = {
  courses: Course[];
};

export default function CourseExplorer({ courses: initialCourses }: CourseExplorerProps) {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [keyword, setKeyword] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [favoriteIds, setFavoriteIds] = useState<number[] | string[]>([]);

  // 1. ฟังก์ชันสร้างรายวิชาใหม่
  function handleCreate(draft: CourseDraft) {
    const newCourse: Course = {
      id: crypto.randomUUID(),
      code: draft.code.trim(),
      name: draft.name.trim(),
      credit: Number(draft.credit),
      instructor: draft.instructor.trim(),
    };

    setCourses([...courses, newCourse]);
  }

  // 2. ฟังก์ชันลบรายวิชา (ใช้ filter)
  function handleDelete(id: string | number) {
    setCourses(courses.filter((course) => String(course.id) !== String(id)));
  }

  // 3. ฟังก์ชันอัปเดตรายวิชา
  function handleUpdate(id: string, draft: CourseDraft) {
    setCourses(
      courses.map((course) =>
        String(course.id) === id
          ? {
            ...course,
            code: draft.code.trim(),
            name: draft.name.trim(),
            credit: Number(draft.credit),
            instructor: draft.instructor.trim(),
          }
          : course
      )
    );

    setEditingId(null);
  }

  // 4. ฟังก์ชันจัดการการบันทึก (ทั้งสร้างและแก้ไข)
  function handleSave(draft: CourseDraft) {
    if (editingId === null) {
      handleCreate(draft);
      return;
    }

    handleUpdate(editingId, draft);
  }

  // ค้นหารายวิชาที่กำลังแก้ไข
  const editingCourse = courses.find((course) => String(course.id) === editingId);

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  function handleToggleFavorite(id: number | string) {
    setFavoriteIds((prevIds: any) =>
      prevIds.includes(id)
        ? prevIds.filter((favoriteId: any) => favoriteId !== id)
        : [...prevIds, id]
    );
  }

  const searchText = keyword.trim().toLowerCase();

  const visibleCourses = courses.filter(
    (course) =>
      course.title?.toLowerCase().includes(searchText) ||
      course.name?.toLowerCase().includes(searchText) ||
      course.code.includes(searchText)
  );

  return (
    <div className="space-y-6">
      {/* ส่วนที่ 6: ส่ง Props และ Callback ลงไปยัง CourseForm */}
      <CourseForm
        key={editingId ?? "new"}
        initialCourse={editingCourse}
        onSave={handleSave}
        onCancel={() => setEditingId(null)}
      />

      <input
        type="search"
        aria-label="ค้นหารายวิชา"
        value={keyword}
        onChange={handleKeywordChange}
        placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา"
        className="w-full p-2 border border-gray-300 rounded-lg text-black"
      />

      {visibleCourses.length === 0 ? (
        <p className="text-gray-500">ไม่พบรายวิชาที่ตรงกับเงื่อนไข</p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleCourses.map((course) => (
            // เติม: ฟิลด์ที่ไม่ซ้ำกันซึ่งใช้เป็นค่า key คือ id
            <CourseCard
              key={course.id}
              course={course}
              isFavorite={favoriteIds.includes(course.id as never)}
              onToggleFavorite={handleToggleFavorite}
              onEdit={() => setEditingId(String(course.id))}
              onDelete={() => handleDelete(course.id)}
            />
          ))}
        </section>
      )}
    </div>
  );
}