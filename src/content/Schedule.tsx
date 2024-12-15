import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Clock, Download, Play, ArrowRight, CheckCircle } from "lucide-react";

interface ScheduleItem {
  date: string;
  time: string;
  title: string;
  mentor: string;
  status: string;
}

interface ScheduleProps {
  data: ScheduleItem[];
}

export function Schedule({ data }: ScheduleProps) {
  return (
    <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Waktu</TableHead>
              <TableHead>Judul</TableHead>
              <TableHead className="w-[120px]">Latihan</TableHead>
              <TableHead className="w-[120px]">Zoom</TableHead>
              <TableHead className="w-[120px]">Youtube / Rekaman</TableHead>
              <TableHead className="w-[120px]">Materi</TableHead>
              <TableHead className="w-[120px]">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <div>
                    <div>{item.date}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Pukul {item.time}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-gray-500">
                      Mentor: {item.mentor}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
                    Kerjakan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-500 hover:bg-blue-50">
                    Masuk
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    className="w-full border-pink-500 text-pink-500 hover:bg-pink-50">
                    <Play className="mr-2 h-4 w-4" />
                    Tonton
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-500 hover:bg-green-50">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Selesai
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
