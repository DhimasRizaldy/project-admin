import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Materi() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Main Content Area */}
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Materi REKAMAN KELAS FOKUS TIU CPNS 2024
        </h1>
        <p className="text-gray-600 mb-6">
          Masuk group dan baca petunjuk Materi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "LATIHAN SOAL - FOKUS TIU",
            "PR - FOKUS TIU",
            "PPT LATIHAN SOAL - FOKUS TIU",
            "QUIZ - FOKUS TIU",
          ].map((title) => (
            <Card key={title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-blue-900">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <span>File dapat diunduh</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span>Materi dapat langsung dibaca</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Lihat Materi
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
