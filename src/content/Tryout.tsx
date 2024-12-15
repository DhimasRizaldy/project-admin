import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExerciseCardTryout } from "../components/exercise-card-tryout";

export default function Tryout() {
  const exercises = [
    {
      title: "Latihan Basic TIU",
      questionCount: 14,
      duration: 15,
      attemptsCount: 0,
      type: "tryout",
    },
    {
      title: "Latihan Hitung Cepat",
      questionCount: 14,
      duration: 18,
      attemptsCount: 0,
      type: "tryout",
    },
    {
      title: "Latihan Analogi",
      questionCount: 15,
      duration: 15,
      attemptsCount: 0,
      type: "tryout",
    },
    {
      title: "Latihan Perbandingan Kuantitatif",
      questionCount: 13,
      duration: 15,
      attemptsCount: 0,
      type: "tryout",
    },
    {
      title: "Latihan Silogisme",
      questionCount: 15,
      duration: 15,
      attemptsCount: 0,
      type: "tryout",
    },
    {
      title: "Latihan Deret Angka",
      questionCount: 15,
      duration: 15,
      attemptsCount: 0,
      type: "tryout",
    },
    {
      title: "Latihan Figural 1",
      questionCount: 15,
      duration: 15,
      attemptsCount: 0,
      type: "tryout",
    },
    {
      title: "Latihan Figural 2",
      questionCount: 15,
      duration: 15,
      attemptsCount: 0,
      type: "tryout",
    },
    {
      title: "Latihan Soal Cerita",
      questionCount: 14,
      duration: 18,
      attemptsCount: 0,
      type: "tryout",
    },
    {
      title: "Latihan Analitis",
      questionCount: 15,
      duration: 18,
      attemptsCount: 0,
      type: "tryout",
    },
    {
      title: "Bimbel Matematika",
      questionCount: 20,
      duration: 30,
      attemptsCount: 5,
      type: "bimbel",
    },
    {
      title: "Bimbel Bahasa Indonesia",
      questionCount: 25,
      duration: 35,
      attemptsCount: 3,
      type: "bimbel",
    },
  ];

  const [selectedTab, setSelectedTab] = useState("tryout");

  const filteredExercises = exercises.filter(
    (exercise) => exercise.type === selectedTab
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="my-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            TRYOUT REKAMAN KELAS FOKUS TIU CPNS 2024
          </h1>
          <p className="text-gray-500 mb-6">
            Masuk group dan baca petunjuk Tryout
          </p>

          <Tabs
            defaultValue="tryout"
            className="mb-8"
            onValueChange={(value) => setSelectedTab(value)}>
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="tryout">Tryout</TabsTrigger>
              <TabsTrigger value="bimbel">Bimbel</TabsTrigger>
            </TabsList>
            <TabsContent value="tryout">
              {filteredExercises.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredExercises.map((exercise, index) => (
                    <ExerciseCardTryout key={index} {...exercise} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500">
                  Data tidak ditemukan
                </p>
              )}
            </TabsContent>
            <TabsContent value="bimbel">
              {filteredExercises.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredExercises.map((exercise, index) => (
                    <ExerciseCardTryout key={index} {...exercise} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500">
                  Data tidak ditemukan
                </p>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
