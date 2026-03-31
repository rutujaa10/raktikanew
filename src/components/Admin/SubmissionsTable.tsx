import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Trash2, Search } from "lucide-react";
import { toast } from "sonner";
import { API_BASE_URL } from "@/config";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface SubmissionsTableProps {
  endpoint: string;
  columns: { key: string; label: string }[];
}

export default function SubmissionsTable({ endpoint, columns }: SubmissionsTableProps) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(`${API_BASE_URL}/api/admin/${endpoint}?page=${page}&limit=10&search=${search}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const result = await res.json();
      if (result.success) {
        setData(result.data);
        setTotalPages(result.pages);
      } else {
        toast.error(result.error || "Failed to fetch data");
      }
    } catch (err) {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, search, endpoint]);

  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(`${API_BASE_URL}/api/admin/${endpoint}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Entry deleted");
        fetchData();
      } else {
        toast.error("Failed to delete");
      }
    } catch (err) {
      toast.error("Error deleting entry");
    }
  };

  const handleExportCSV = () => {
    if (data.length === 0) return toast.info("No data to export");

    // Create CSV header
    const header = columns.map(col => col.label).join(",") + "\n";
    // Create CSV rows
    const rows = data.map(item => {
      return columns.map(col => {
        let val = item[col.key];
        if (col.key === 'createdAt') val = new Date(val).toLocaleString();
        if (col.key === 'consentForTesting') val = val ? 'Yes' : 'No';
        return `"${String(val ?? '').replace(/"/g, '""')}"`;
      }).join(",");
    }).join("\n");

    const blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${endpoint}_export.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="pl-9"
          />
        </div>
        <Button onClick={handleExportCSV} variant="outline" className="gap-2">
          <Download className="h-4 w-4" /> Export CSV
        </Button>
      </div>

      <div className="border rounded-md overflow-x-auto bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead key={col.key}>{col.label}</TableHead>
              ))}
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length + 1} className="h-32 text-center text-muted-foreground">
                  <div className="flex justify-center items-center h-full">Loading data...</div>
                </TableCell>
              </TableRow>
            ) : data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length + 1} className="h-32 text-center text-muted-foreground">
                  No entries found.
                </TableCell>
              </TableRow>
            ) : (
              data.map((item) => (
                <TableRow key={item._id}>
                  {columns.map((col) => (
                    <TableCell key={col.key} className="max-w-[200px] truncate">
                      {col.key === 'createdAt'
                        ? new Date(item[col.key]).toLocaleDateString()
                        : col.key === 'consentForTesting'
                          ? (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${item[col.key] ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                              {item[col.key] ? 'Yes' : 'No'}
                            </span>
                          )
                          : item[col.key]
                      }
                    </TableCell>
                  ))}
                  <TableCell>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-red-700 hover:bg-destructive/10">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete this entry and remove it from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(item._id)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                            Delete Entry
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center py-2">
        <span className="text-sm text-muted-foreground font-medium">Page {page} of {totalPages || 1}</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1 || loading}>Previous</Button>
          <Button variant="outline" size="sm" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page >= totalPages || loading}>Next</Button>
        </div>
      </div>
    </div>
  );
}
