import { EventCard } from "../components/event-card";

const events = [
  {
    title: "Bimbel Intensif CPNS 2024",
    description: "Persiapan lengkap untuk tes CPNS dengan materi terbaru",
    date: "15 Januari 2024",
    time: "09:00 - 17:00 WIB",
    location: "Online via Zoom",
    imageUrl:
      "https://akademicpns.com/wp-content/uploads/2023/06/Bimbel-CPNS-Pekanbaru.png",
    price: 499000,
    originalPrice: 999000,
  },
  {
    title: "Workshop SKD CPNS",
    description: "Teknik jitu menghadapi Seleksi Kompetensi Dasar",
    date: "22 Januari 2024",
    time: "13:00 - 18:00 WIB",
    location: "Online via Google Meet",
    imageUrl:
      "https://akademicpns.com/wp-content/uploads/2023/06/Bimbel-CPNS-Pekanbaru.png",
    price: 299000,
    originalPrice: 599000,
  },
  {
    title: "Simulasi CAT SKB",
    description: "Latihan soal CAT untuk Seleksi Kompetensi Bidang",
    date: "5 Februari 2024",
    time: "08:00 - 12:00 WIB",
    location: "Online via Aplikasi CAT",
    imageUrl:
      "https://akademicpns.com/wp-content/uploads/2023/06/Bimbel-CPNS-Pekanbaru.png",
    price: 199000,
    originalPrice: 399000,
  },
  {
    title: "Bimbel Strategi Lolos CPNS",
    description: "Tips dan trik dari para ahli untuk lolos seleksi CPNS",
    date: "12 Februari 2024",
    time: "19:00 - 21:00 WIB",
    location: "Live YouTube",
    imageUrl:
      "https://akademicpns.com/wp-content/uploads/2023/06/Bimbel-CPNS-Pekanbaru.png",
    price: 99000,
    originalPrice: 199000,
  },
];

export default function Event() {
  return (
    <main className="p-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-blue-600">
          Event Promo Bimbel
        </h1>
        <p className="mt-2 text-muted-foreground">
          Dapatkan penawaran spesial untuk berbagai program bimbingan belajar
          kami
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </main>
  );
}
