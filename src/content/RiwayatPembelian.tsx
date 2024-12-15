"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  CheckCircle,
  XCircle,
} from "lucide-react";

// Sample data - replace with actual data from your API
const purchases = [
  {
    id: 1,
    name: "REKAMAN KELAS FOKUS TIU CPNS 2024",
    status: "success",
    duration: "12 Bulan",
    remainingDays: 337,
    purchaseDate: "11/11/2024 00:03",
  },
  {
    id: 2,
    name: "REKAMAN KELAS FOKUS TIU CPNS 2024",
    status: "cancelled",
    duration: "12 Bulan",
    purchaseDate: "11/11/2024 00:02",
  },
  {
    id: 3,
    name: "REKAMAN KELAS SKD CPNS 2024 BATCH 9",
    status: "cancelled",
    duration: "12 Bulan",
    purchaseDate: "10/11/2024 23:48",
  },
  // Add more items as needed
];

export default function RiwayatPembelian() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = 9; // Replace with actual total pages calculation

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Riwayat Pembelian
          </h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Tambah
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px]">#</TableHead>
                <TableHead>Nama Paket</TableHead>
                <TableHead>Durasi Paket</TableHead>
                <TableHead>Tanggal Pembelian</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchases.map((purchase) => (
                <TableRow key={purchase.id}>
                  <TableCell>{purchase.id}</TableCell>
                  <TableCell>
                    <div>
                      {purchase.name}
                      <Badge
                        variant={
                          purchase.status === "success"
                            ? "success"
                            : "destructive"
                        }
                        className="ml-2">
                        {purchase.status === "success" ? (
                          <div className="flex items-center">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Berhasil
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <XCircle className="h-3 w-3 mr-1" />
                            CANCELLED
                          </div>
                        )}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      {purchase.duration}
                      {purchase.remainingDays && (
                        <div className="text-sm text-green-600">
                          Tersisa: {purchase.remainingDays} Hari
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{purchase.purchaseDate}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border-blue-600">
                        Check Status
                      </Button>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700">
                        Bayar Sekarang
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between px-4 py-4 border-t">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">89 items</span>
              <Select defaultValue="10">
                <SelectTrigger className="w-[70px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-gray-500">/ page</span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(i + 1)}
                  className={
                    currentPage === i + 1 ? "bg-blue-600 hover:bg-blue-700" : ""
                  }>
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
