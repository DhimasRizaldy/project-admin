import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar, ClipboardList, ShoppingBag } from "lucide-react";

const stats = [
  {
    label: "Paket Saya",
    value: "2",
    icon: ShoppingBag,
    color: "bg-cyan-500",
  },
  {
    label: "Paket Tersedia",
    value: "15",
    icon: ClipboardList,
    color: "bg-cyan-500",
  },
  {
    label: "Event",
    value: "0",
    icon: Calendar,
    color: "bg-cyan-500",
  },
  {
    label: "Riwayat Pembelian",
    value: "2",
    icon: Building2,
    color: "bg-cyan-500",
  },
];

export function Dashboard() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="relative flex flex-col md:flex-row">
          <div className="p-6 md:w-1/2 md:p-8">
            <div className="inline-block rounded-full bg-cyan-500 px-3 py-1 text-sm font-semibold">
              TELAH DIBUKA!
            </div>
            <h1 className="mt-4 text-3xl font-bold md:text-4xl">
              BIMBEL SKD CPNS
              <br />
              2024 BATCH 10
            </h1>
            <p className="mt-2 text-blue-100">
              Kelas pemantapan yang fokus pada pembahasan soal dan tryout setiap
              hari!
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button className="bg-cyan-500 hover:bg-cyan-600">
                MULAI KELAS 11 OKT 2024
              </Button>
            </div>
            <div className="mt-4 inline-block rounded-full bg-cyan-500 px-4 py-1">
              PROMO! 249K
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`rounded-full ${stat.color} p-3`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Sections */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold">Gabung Bimbel SKD CPNS 2024</h2>
            <p className="mt-2 text-gray-600">
              Join bersama kami dengan bergabung di paket Bimbel SKD CPNS 2024!
              Dapatkan pengalaman menarik dan insight terbaru dalam belajar dan
              mempersiapkan Tes SKD!
            </p>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
              Lihat Paket Sekarang!
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold">
              Gabung Tryout SKD CPNS Terbaru!
            </h2>
            <p className="mt-2 text-gray-600">
              Yuk cobain Tryout terbaru Bimbel Bismillah, soal-soal sudah
              disesuaikan dengan real test dan berdasarkan pengalaman peserta
              tahun 2023.
            </p>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
              Daftar paket sekarang!
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
