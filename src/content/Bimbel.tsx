import { Button } from "@/components/ui/button";
import { Schedule } from "./Schedule";
import { Breadcrumb } from "../components/breadcrumb";
import { BellIcon as BrandTelegram } from "lucide-react";

export default function Bimbel() {
  const scheduleData = [
    {
      date: "Sabtu, 1 Juni 2024",
      time: "19:30",
      title: "Basic TIU",
      mentor: "Coach Vira",
      status: "selesai",
    },
    {
      date: "Minggu, 2 Juni 2024",
      time: "15:30",
      title: "Hitung Cepat",
      mentor: "Coach Vira",
      status: "selesai",
    },
    {
      date: "Rabu, 5 Juni 2024",
      time: "19:00",
      title: "Analogi Kata dan Kalimat",
      mentor: "Coach Candra",
      status: "selesai",
    },
    {
      date: "Minggu, 9 Juni 2024",
      time: "19:00",
      title: "Perbandingan Kuantitatif",
      mentor: "Coach Vira",
      status: "selesai",
    },
    {
      date: "Senin, 10 Juni 2024",
      time: "19:00",
      title: "Silogisme & Penarikan Kesimpulan",
      mentor: "Coach Candra",
      status: "selesai",
    },
    {
      date: "Selasa, 11 Juni 2024",
      time: "19:00",
      title: "Deret Angka",
      mentor: "Coach Vira",
      status: "selesai",
    },
    {
      date: "Rabu, 12 Juni 2024",
      time: "19:00",
      title: "Figural Analogi & Ketidaksamaan",
      mentor: "Coach Candra",
      status: "selesai",
    },
    {
      date: "Kamis, 13 Juni 2024",
      time: "19:00",
      title: "Figural Serial + 9 Kotak",
      mentor: "Coach Candra",
      status: "selesai",
    },
    {
      date: "Jumat, 14 Juni 2024",
      time: "19:00",
      title: "Soal Cerita",
      mentor: "Coach Vira",
      status: "selesai",
    },
    {
      date: "Sabtu, 15 Juni 2024",
      time: "19:00",
      title: "Penalaran Analitis",
      mentor: "Coach Candra",
      status: "selesai",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="my-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bimbel REKAMAN KELAS FOKUS TIU CPNS 2024
          </h1>
          <p className="text-gray-600 mb-6">
            Masuk group dan baca petunjuk Bimbel
          </p>

          <Button className="bg-[#0088cc] hover:bg-[#006699] mb-8" size="lg">
            <BrandTelegram className="mr-2 h-5 w-5" />
            Grup Telegram
          </Button>

          <Schedule data={scheduleData} />

          <div className="flex justify-between mt-8">
            <Button
              size="lg"
              variant="outline"
              className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Kerjakan Tryout
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-600">
              Kerjakan Latihan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
