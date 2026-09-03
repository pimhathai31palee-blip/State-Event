export default function HomePage() {
  const siteName: string = "Student Course Hub";
  const courseCount: number = 5;
  const isOpen: boolean = true;

  type Course = {
    id: number;
    code: string;
    title: string;
    credits: number;
    isOpen: boolean;
  };

  const courses: Course[] = [
    {
      id: 1,
      code: "10301231",
      title: "Web Technology",
      credits: 3,
      isOpen: true,
    },
    {
      id: 2,
      code: "10301232",
      title: "Database Systems",
      credits: 3,
      isOpen: false,
    },
    {
      id: 3,
      code: "10301233",
      title: "Data Structures and Algorithms",
      credits: 3,
      isOpen: true,
    },
    {
      id: 4,
      code: "10301234",
      title: "Computer Networks",
      credits: 3,
      isOpen: true,
    },
    {
      id: 5,
      code: "10301235",
      title: "Software Engineering",
      credits: 3,
      isOpen: false,
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Section Header */}
      <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-2">
          {siteName}
        </h1>
        <p className="text-gray-500">ระบบจัดการและแสดงข้อมูลรายวิชาสำหรับนักศึกษา</p>
      </section>

      {/* Overview Cards (Status & Announcements) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Status Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">จำนวนรายวิชาทั้งหมด</p>
            <p className="text-3xl font-bold text-gray-800 mt-1">{courseCount} วิชา</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold text-gray-400 block mb-1">สถานะระบบ</span>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}
            </span>
          </div>
        </div>

        {/* Announcement Card (เปลี่ยนแทนที่ Tech Stack) */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm font-bold text-gray-800">ประกาศสำคัญ</p>
            <span className="text-xs text-gray-400">อัปเดตล่าสุด</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            ระบบเปิดให้ตรวจสอบรายวิชาประจำภาคเรียนแล้ว นักศึกษาสามารถเช็กสถานะการเปิดลงทะเบียนของแต่ละวิชาได้ด้านล่างนี้
          </p>
        </div>
      </section>

      {/* Course List Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">รายวิชาในระบบ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <article
              key={course.id}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                    #{index + 1}
                  </span>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      course.isOpen
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{course.title}</h3>
                <p className="text-xs text-gray-400 mb-4">รหัสวิชา: {course.code}</p>
              </div>

              <div className="pt-4 border-t border-gray-50 flex justify-between items-center text-sm text-gray-600">
                <span>หน่วยกิต</span>
                <span className="font-semibold text-gray-800">{course.credits} หน่วยกิต</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}