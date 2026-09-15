"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import type { Course } from "@/types/course";

export type CourseDraft = {
    code: string;
    name: string;
    credit: string;
    instructor: string;
};

type FormErrors = {
    code?: string;
    name?: string;
    credit?: string;
    instructor?: string;
};

type CourseFormProps = {
    initialCourse?: Course;
    onSave: (draft: CourseDraft) => void;
    onCancel: () => void;
};

const emptyDraft: CourseDraft = {
    code: "",
    name: "",
    credit: "",
    instructor: "",
};

function toDraft(course?: Course): CourseDraft {
    if (!course) {
        return emptyDraft;
    }

    return {
        code: course.code,
        name: course.name ?? course.title ?? "",
        credit: String(course.credit),
        instructor: course.instructor ?? "",
    };
}

export default function CourseForm({ initialCourse, onSave, onCancel }: CourseFormProps) {
    const [draft, setDraft] = useState<CourseDraft>(toDraft(initialCourse));
    const [errors, setErrors] = useState<FormErrors>({});

    function validate(value: CourseDraft): FormErrors {
        const nextErrors = {} as FormErrors;

        if (value.code.trim() === "") {
            nextErrors.code = "กรุณาระบุรหัสวิชา";
        }

        if (value.name.trim() === "") {
            nextErrors.name = "กรุณาระบุชื่อวิชา";
        }

        const credit = Number(value.credit);
        if (!Number.isInteger(credit) || credit < 1 || credit > 6) {
            nextErrors.credit = "หน่วยกิตต้องเป็นจำนวนเต็มตั้งแต่ 1 ถึง 6";
        }

        if (value.instructor.trim() === "") {
            nextErrors.instructor = "กรุณาระบุผู้สอน";
        }

        return nextErrors;
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setDraft((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const nextErrors = validate(draft);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            return;
        }

        onSave(draft);
        setDraft(emptyDraft);
        setErrors({});
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 max-w-md p-6 bg-white rounded-lg shadow border border-gray-200">
            <div className="flex flex-col gap-1">
                <label htmlFor="code" className="font-medium text-gray-700">รหัสวิชา</label>
                <input
                    id="code"
                    name="code"
                    type="text"
                    value={draft.code}
                    onChange={handleChange}
                    aria-invalid={!!errors.code}
                    aria-describedby={errors.code ? "code-error" : undefined}
                    className="border border-gray-300 rounded px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.code ? <p id="code-error" className="text-red-500 text-sm">{errors.code}</p> : null}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-medium text-gray-700">ชื่อวิชา</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={draft.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="border border-gray-300 rounded px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name ? <p id="name-error" className="text-red-500 text-sm">{errors.name}</p> : null}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="credit" className="font-medium text-gray-700">หน่วยกิต</label>
                <input
                    id="credit"
                    name="credit"
                    type="number"
                    inputMode="numeric"
                    min="1"
                    max="6"
                    value={draft.credit}
                    onChange={handleChange}
                    aria-invalid={!!errors.credit}
                    aria-describedby={errors.credit ? "credit-error" : undefined}
                    className="border border-gray-300 rounded px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.credit ? <p id="credit-error" className="text-red-500 text-sm">{errors.credit}</p> : null}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="instructor" className="font-medium text-gray-700">ผู้สอน</label>
                <input
                    id="instructor"
                    name="instructor"
                    type="text"
                    value={draft.instructor}
                    onChange={handleChange}
                    aria-invalid={!!errors.instructor}
                    aria-describedby={errors.instructor ? "instructor-error" : undefined}
                    className="border border-gray-300 rounded px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.instructor ? <p id="instructor-error" className="text-red-500 text-sm">{errors.instructor}</p> : null}
            </div>

            <div className="flex gap-2 mt-2">
                <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition">
                    บันทึก
                </button>
                {initialCourse ? (
                    <button type="button" onClick={onCancel} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition">
                        ยกเลิก
                    </button>
                ) : null}
            </div>
        </form>
    );
}