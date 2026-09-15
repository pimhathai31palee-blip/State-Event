"use client"; //ใช้เพื่อสลับไปทำงานบนบราวเซอร์ 

import { useState } from "react";
import { Band } from "@/types/band";

type BandCardProps = {
    band: Band; // ข้อมูลวงดนตรี
    isFollowing?: boolean; // สถานะว่ากำลังติดตามอยู่มั้ย
    onToggleFollow?: (id: number) => void;
};

export default function BandCard({ band, isFollowing = false, onToggleFollow }: BandCardProps) {
    const [likes, setLikes] = useState(0); // สร้าง State likes ไว้เก็บจำนวนกด Like แยกเฉพาะการ์ดแต่ละใบ

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition duration-300 h-full">
            <div>
                {/* รูปภาพครอบด้วย aspect-video เพื่อล็อกสัดส่วน และมนขอบบน */}
                <div className="w-full h-48 bg-gray-100 overflow-hidden relative">
                    <img
                        src={band.image}
                        alt={band.name}
                        className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                    />
                </div>

                {/* ข้อมูลวงดนตรี */}
                <div className="p-5 space-y-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 tracking-tight">{band.name}</h2>
                        <span className="inline-block bg-indigo-50 text-indigo-600 text-[11px] px-2.5 py-0.5 rounded-md font-semibold mt-1">
                            {band.genre}
                        </span>
                    </div>

                    {/* สมาชิกวง */}
                    <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                            สมาชิก
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {band.members.map((member, i) => (
                                <div
                                    key={member.id || i}
                                    className="flex items-center gap-1.5 bg-slate-50 text-slate-700 border border-slate-200/80 text-[11px] pl-1 pr-2 py-0.5 rounded-full font-medium"
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-5 h-5 rounded-full object-cover"
                                    />
                                    <span>{member.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ส่วนล่าง: เพลงแนะนำ */}
            <div className="p-5 pt-0 mt-auto space-y-4">
                {/* เพลงแนะนำ */}
                <div className="pt-3 border-t border-gray-100 text-xs space-y-2">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                        เพลงแนะนำ
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                        {band.recommended_songs.map((song, i) => (
                            <span
                                key={i}
                                className="bg-blue-50 text-blue-600 border border-blue-100 font-medium px-2.5 py-1 rounded-md text-[11px]"
                            >
                                🎵 {song}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ส่วนปุ่มกด Interactive */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                    <button
                        type="button"
                        onClick={() => setLikes(likes + 1)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-semibold rounded-lg transition active:scale-95"
                    >
                        ❤️ Like ({likes})
                    </button>

                    {/* ปุ่ม ติดตาม/เลิกติดตาม */}
                    <button
                        type="button"
                        onClick={() => onToggleFollow && onToggleFollow(band.id)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition active:scale-95 ${isFollowing
                                ? "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300" 
                                : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
                            }`}
                    >
                        {isFollowing ? "✓ ติดตามแล้ว" : "+ ติดตาม"}
                    </button>
                </div>
            </div>
        </div>
    );
}