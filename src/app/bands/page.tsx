import { bands } from "@/data/banddata";
import BandCard from "@/components/BandCard";

export default function BandsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* ส่วนหัว ด้านบน */}
      <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Favorite Bands</h1>
        <p className="text-gray-500 text-sm">
          รวบรวมวงดนตรีโปรดและเพลงแนะนำ
        </p>
      </section>

      {/* ส่วนรายการวงดนตรี */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {bands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </section>
    </main>
  );
}