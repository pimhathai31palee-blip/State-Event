export default function AboutPage() {
  const faqs = [
    {
      question: "ระบบนี้ใช้งานอย่างไร?",
      answer: "นักศึกษาสามารถเข้ามาเช็กสถานะการเปิด/ปิดลงทะเบียนของแต่ละรายวิชา รวมถึงดูรายละเอียดรหัสวิชาและหน่วยกิตได้",
    },
    {
      question: "วิชาที่ 'ปิดลงทะเบียน' สามารถขอเพิ่มได้ไหม?",
      answer: "กรณีที่วิชาขึ้นสถานะปิดลงทะเบียน นักศึกษาจำเป็นต้องติดต่ออาจารย์ผู้สอนประจำวิชาเพื่อขออนุมัติเพิ่มที่นั่งเป็นกรณีพิเศษ",
    },
    {
      question: "มีเมนูวงดนตรีไว้ทำอะไร?",
      answer: "เป็นส่วนเสริมสำหรับผ่อนคลายความเครียดจากการเรียน โดยรวบรวมข้อมูลและเพลงแนะนำของวงดนตรีที่น่าสนใจเอาไว้",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      {/* 1. Header Section */}
      <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">เกี่ยวกับเรา</h1>
        <p className="text-gray-600 text-sm max-w-lg mx-auto">
          ศูนย์รวมข้อมูลรายวิชาและระบบจำลองการลงทะเบียนเรียนสำหรับนักศึกษา
        </p>
      </section>

      {/* 2. Content & Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mission Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 border-l-4 border-l-blue-600 shadow-sm space-y-3">
          <h2 className="text-base font-bold text-gray-900">วัตถุประสงค์</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            เว็บไซต์นี้จัดทำขึ้นเพื่อเป็นศูนย์กลางในการค้นหาและดูข้อมูลรายวิชาต่างๆ ช่วยให้นักศึกษาสามารถตรวจสอบสถานะการเปิดลงทะเบียน จำนวนหน่วยกิต และรายละเอียดของแต่ละวิชาได้อย่างสะดวกและรวดเร็ว
          </p>
        </div>

        {/* Features Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 border-l-4 border-l-slate-700 shadow-sm space-y-3">
          <h2 className="text-base font-bold text-gray-900">บริการภายใน</h2>
          <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
            <li>ตรวจสอบรายการวิชาที่เปิดและปิดลงทะเบียน</li>
            <li>แสดงรายละเอียดรหัสวิชาและจำนวนหน่วยกิต</li>
            <li>รองรับการแสดงผลบนทุกอุปกรณ์ (Responsive Design)</li>
            <li>เมนูรวดเร็วสำหรับดูวงดนตรีที่ชื่นชอบ</li>
          </ul>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm space-y-4">
        <h3 className="font-bold text-gray-900 text-base border-b border-gray-100 pb-3">
          คำถามที่พบบ่อย (FAQ)
        </h3>

        <div className="space-y-3 pt-1">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-50 border border-slate-100 p-4 rounded-lg space-y-1">
              <h4 className="font-semibold text-gray-900 text-sm">
                Q: {faq.question}
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed pl-4 border-l-2 border-slate-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}