import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-white shadow-sm border-b border-gray-100 mb-8">
      <ul className="flex gap-6 font-medium text-gray-700 max-w-6xl mx-auto list-none m-0 p-0">
        <li>
          <Link href="/" className="hover:text-blue-600 transition-colors">หน้าแรก</Link>
        </li>
        <li>
          <Link href="/courses" className="hover:text-blue-600 transition-colors">รายวิชา</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600 transition-colors">เกี่ยวกับเรา</Link>
        </li>
        <li>
          <Link href="/bands" className="hover:text-blue-600 transition-colors">วงดนตรี</Link>
        </li>
      </ul>
    </nav>
  );
}