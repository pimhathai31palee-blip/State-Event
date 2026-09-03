import { Band } from "@/types/band";

export const bands: Band[] = [
    {
        id: 1,
        name: "Tattoo Colour",
        genre: "Variety Pop & Neo-Soul",
        members: [
            { id: 1, name: "หรินทร์ สุธรรมจรัส (ดิม)", image: "/images/dim.jpg" },
            { id: 2, name: "รัฐ พิฆาตไพรี (รัฐ)", image: "/images/rat.jpg" },
            { id: 3, name: "ธนบดี ธีรพงศ์ภักดี (จั๊ม)", image: "/images/jam.jpg" },
            { id: 4, name: "เอกชัย โชติรุ่งโรจน์ (ตง)", image: "/images/tong.jpg" }
        ],
        recommended_songs: ["ขาหมู", "รักแรกพบ", "อยากให้เธอได้ยินใจฉัน"],
        image: "/images/tattoocolour.jpg"
    },
    {
        id: 2,
        name: "Silly Fools",
        genre: "Modern & Alternative Rock",
        members: [
            { id: 1, name: "กฤษณะ ปานดอนลาน (ริม)", image: "/images/rim.jpg" },
            { id: 2, name: "จักรินทร์ จูประเสริฐ (ต้น)", image: "/images/ton.jpg" },
            { id: 3, name: "เทวฤทธิ์ ศรีสุข (หรั่ง)", image: "/images/horang.jpg" },
            { id: 4, name: "รัตน์ โกบายาชิ (รัตน์)", image: "/images/ratnam.jpg" }
        ],
        recommended_songs: ["จิ๊จ๊ะ", "วัดใจ", "ไหนว่าจะไม่หลอกกัน"],
        image: "/images/sillyfools.jpg"
    },
    {
        id: 3,
        name: "Potato",
        genre: "Pop Rock & Alternative",
        members: [
            { id: 1, name: "พัฒน์ชัย ภักดีสู่สุข (ปั๊ป)", image: "/images/pap.jpg" },
            { id: 2, name: "ทีฆทัศน์ ทวิอารยกุล (หั่ง)", image: "/images/hang.jpg" },
            { id: 3, name: "ปิยวัฒน์ อนุกูร (โอม)", image: "/images/om.jpg" },
            { id: 4, name: "กานต์ อ่ำสุพรรณ (กานต์)", image: "/images/kant.jpg" },
            { id: 5, name: "เกียรติยศ มาลาทอง (อั้ม)", image: "/images/um.jpg" }
        ],
        recommended_songs: ["เธอยัง", "เพียงพอ", "รักแท้ดูแลไม่ได้"],
        image: "/images/potato.jpg"
    },
];