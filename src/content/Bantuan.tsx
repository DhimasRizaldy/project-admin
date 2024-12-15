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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Bantuan() {
  return (
    <main className="p-6">
      <div className="mb-8">
        <h1 className="mb-6 text-2xl font-bold text-slate-900">Bantuan</h1>

        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">
            Pertanyaan yang sering diajukan
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Cara lihat pembahasan tryout</AccordionTrigger>
              <AccordionContent>
                Anda dapat melihat pembahasan tryout setelah menyelesaikan tes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Cara gabung grup telegram</AccordionTrigger>
              <AccordionContent>
                Klik link yang tersedia di halaman profil Anda.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Cara reset password ?</AccordionTrigger>
              <AccordionContent>
                Klik "Lupa Password" pada halaman login.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              Tiket Bantuan
            </h2>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Tambah Tiket
            </Button>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">#</TableHead>
                  <TableHead>Kategory</TableHead>
                  <TableHead>Judul</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-slate-500">
                    Empty Data
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3">
              <div className="text-sm text-slate-500">0 items</div>
              <div className="flex items-center gap-2">
                <Select defaultValue="10">
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-slate-500">/ page</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
