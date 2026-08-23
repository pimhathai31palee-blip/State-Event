import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="p-4 bg-slate-100 mb-6">
            <ul className="flex gap-6 font-medium">
                <li><Link href="/" className="hover:text-blue-600">หน้าแรก</Link></li>
                <li><Link href="/courses" className="hover:text-blue-600">รายวิชา</Link></li>
                <li><Link href="/about" className="hover:text-blue-600">เกี่ยวกับเรา</Link></li>
            </ul>
        </nav>
    );
}