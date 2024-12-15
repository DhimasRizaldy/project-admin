import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCard } from "@/components/card";

const courses = [
  {
    title: "REKAMAN BIMBEL SKB DOSEN 2024",
    imageUrl:
      "https://akademicpns.com/wp-content/uploads/2023/06/Bimbel-CPNS-Pekanbaru.png",
    price: 199000,
    description:
      "Berisi soal-soal HOTS berdasarkan kisi-kisi terbaru dari Materi Paket SKB CAT CPNS 2024",
    features: [
      "10x video rekaman ulang pembelajaran",
      "8x Latihan Soal CAT",
      "1x Tryout Full CAT",
      "Pembahasan soal lengkap",
      "Dilengkapi materi tambahan",
      "Akses selama 6 bulan",
    ],
    category: "rekaman",
  },
  {
    title: "TRYOUT SKB DOSEN VOL. 1",
    imageUrl:
      "https://akademicpns.com/wp-content/uploads/2023/06/Bimbel-CPNS-Pekanbaru.png",
    price: 30000,
    description: "Untuk Formasi Dosen Asisten Ahli dan Dosen Lektor",
    features: [
      "1 Tryout SKB Dosen 2024",
      "Soal HOTS Berdasarkan Materi Pokok SKB CAT 2024",
      "Bisa dikerjakan berulang kali",
      "Dilengkapi statistik & pembahasan",
      "Grup Diskusi Telegram",
      "Akses selama 6 bulan",
    ],
    category: "tryout",
  },
  // Add more courses as needed
];

export default function PembelianPaket() {
  return (
    <main className="flex-1 space-y-4 p-4 md:p-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Paket Pembelian</h2>
      </div>
      <Tabs defaultValue="semua" className="space-y-4">
        <TabsList>
          <TabsTrigger value="semua">Semua Kelas</TabsTrigger>
          <TabsTrigger value="tryout">TRYOUT</TabsTrigger>
          <TabsTrigger value="rekaman">REKAMAN</TabsTrigger>
          <TabsTrigger value="skb">SKB</TabsTrigger>
        </TabsList>
        <TabsContent value="semua" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="tryout" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses
              .filter((course) => course.category === "tryout")
              .map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="rekaman" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses
              .filter((course) => course.category === "rekaman")
              .map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="skb" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses
              .filter((course) => course.category === "skb")
              .map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
