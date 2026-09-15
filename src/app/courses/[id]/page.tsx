import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses } from "@/data/coursedata";

type CoursePageProps = {
    params: Promise<{ id: string }>;
};

// 4.4 กำหนด Metadata ตามข้อมูลจริง
export async function generateMetadata(
    { params }: CoursePageProps
): Promise<Metadata> {
    // เติม: คำสั่งที่ใช้รอค่าจาก Promise คือ await
    const { id } = await params;
    const course = courses.find((item) => String(item.id) === id);

    return {
        title: course ? (course.name || course.title) : "ไม่พบรายวิชา",
    };
}

export default async function CoursePage({ params }: CoursePageProps) {
    const { id } = await params;

    // แปลง item.id เป็น String ก่อนเปรียบเทียบ
    const course = courses.find((item) => String(item.id) === id);

    // สั่งให้แสดงหน้า 404 เมื่อไม่พบรายวิชา
    if (!course) {
        notFound();
    }

    return (
        <article className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow border border-gray-200 mt-6 text-black">
            <h1 className="text-2xl font-bold mb-2">{course.name || course.title}</h1>
            <p className="text-gray-700">รหัสวิชา {course.code}</p>
            <p className="text-gray-700">หน่วยกิต {course.credit}</p>
            <p className="text-gray-700">ผู้สอน {course.instructor}</p>
        </article>
    );
}