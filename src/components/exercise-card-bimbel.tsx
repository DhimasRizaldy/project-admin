import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Trophy } from "lucide-react";

interface ExerciseCardProps {
  title: string;
  questionCount: number;
  duration: number;
  attemptsCount: number;
}

export function ExerciseCardBimbel({
  title,
  questionCount,
  duration,
  attemptsCount,
}: ExerciseCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="border-b bg-white">
        <CardTitle className="text-lg font-semibold text-blue-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 pb-2">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Jumlah:</p>
              <p className="font-medium">{questionCount} Soal</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Durasi:</p>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-blue-600" />
                <p className="font-medium">{duration} Menit</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Ranking:</p>
              <Button variant="link" className="text-blue-600 p-0 h-auto">
                Lihat Ranking
              </Button>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Dikerjakan:</p>
              <div className="flex items-center gap-1">
                <Trophy className="h-4 w-4 text-blue-600" />
                <span className="font-medium">{attemptsCount} kali</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 italic">
            Ranking hanya dihitung pada saat pertama kali mengerjakan soal ini.
          </p>
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2 pt-2">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Kerjakan
        </Button>
        <Button
          variant="outline"
          className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
          Riwayat
        </Button>
      </CardFooter>
    </Card>
  );
}
