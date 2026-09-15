"use client";//ใช้เพื่อสลับไปทำงานบนบราวเซอร์ 

import { useState, type ChangeEvent } from "react";
import { bands } from "@/data/banddata";
import BandCard from "@/components/BandCard";

export default function BandsPage() {
  // ใช้เก็บคำค้นหา เกี่ยวกับช่องค้นหา
  const [search, setSearch] = useState("");

  // ใช้เก็บข้อมมูลทีวงที่เรากดติดตาม ดูว่าเรากดติตามกี่วงแล้ว
  const [followingIds, setFollowingIds] = useState<number[]>([]);

  // ตรงนี้คือฟังก์ชันสลับสถานะ ติดตาม/เลิกติดตาม
  function handleToggleFollow(id: number) { 
    setFollowingIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((favId) => favId !== id) // .filter คือถ้ากดติดตมแสดงอยู่แล้ว แสดงว่าอยาก เลิกติดตาม"
        : [...prevIds, id]                        // ตรงนี้คือถ้ายังไม่มีติดตาม คืออยากติดตาม
    );
  }

  const searchText = search.trim().toLowerCase(); //ตรงนี้คือตัดช่องว่างออก แล้วเวลาพิมพ์อะไรจะแปลงเป็นพิมพ์เล็ก
  const filteredBands = bands.filter((band) => 
    band.name.toLowerCase().includes(searchText)
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* ส่วนหัว ด้านบน */}
      <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Favorite Bands</h1>
          <p className="text-gray-500 text-sm">
            รวบรวมวงดนตรีโปรดและเพลงแนะนำ
          </p>
        </div>

        <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="relative flex-1 w-full">
            <input
              type="search"
              placeholder="🔍 ค้นหาชื่อวงดนตรี..."
              value={search}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} // เวลาพิมพ์ในค้นหาจะแสดงชื่อวงขึ้นมาแบบเรียลไทม์
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition text-sm text-gray-800"
            />
          </div>

          <div className="whitespace-nowrap bg-indigo-50 border border-indigo-100 px-4 py-2.5 rounded-xl text-indigo-700 text-sm font-semibold flex items-center justify-center gap-1">
            <span>⭐ กำลังติดตามอยู่:</span>
            <span className="text-indigo-600 font-bold">{followingIds.length}</span>
            <span>วง</span>
          </div>
        </div>
      </section>

      {filteredBands.length === 0 ? (
        <section className="bg-white rounded-2xl p-12 text-center border border-dashed border-gray-200">
          <p className="text-gray-500 font-medium">ไม่พบวงดนตรีที่ตรงกับ "{search}"</p>
          <button
            type="button"
            onClick={() => setSearch("")}
            className="mt-3 text-xs text-indigo-600 hover:underline font-semibold"
          >
            ล้างคำค้นหา
          </button>
        </section>
      ) : (

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFollowing={followingIds.includes(band.id)} // เช็กว่าติดตามยัง
              onToggleFollow={handleToggleFollow}
            />
          ))}
        </section>
      )}
    </main>
  );
}