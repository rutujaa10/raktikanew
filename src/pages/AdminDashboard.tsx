import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import SubmissionsTable from "@/components/Admin/SubmissionsTable";
import { LogOut, LayoutDashboard } from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/10">
        <p className="text-muted-foreground animate-pulse">Checking authentication...</p>
      </div>
    );
  }

  const contactColumns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "message", label: "Message" },
    { key: "createdAt", label: "Date" },
  ];

  const waitlistColumns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "age", label: "Age" },
    { key: "address", label: "Address" },
    { key: "consentForTesting", label: "Consent" },
    { key: "createdAt", label: "Date" },
  ];

  return (
    <div className="min-h-screen bg-muted/10">
      {/* Navbar */}
      <header className="bg-background border-b px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <LayoutDashboard className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">Admin Dashboard</h1>
        </div>
        <Button variant="ghost" onClick={handleLogout} className="gap-2 text-muted-foreground hover:text-foreground">
          <LogOut className="h-4 w-4" /> Sign Out
        </Button>
      </header>
      
      {/* Main Layout */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Tabs defaultValue="contacts" className="w-full space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Submissions</h2>
              <p className="text-muted-foreground">Manage and export all incoming data flows.</p>
            </div>
            <TabsList className="bg-background border shadow-sm h-11">
              <TabsTrigger value="contacts" className="px-6 py-2">Contact Forms</TabsTrigger>
              <TabsTrigger value="waitlist" className="px-6 py-2">Waitlist</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="contacts">
            <div className="bg-background p-6 rounded-xl shadow-sm border border-black/5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <SubmissionsTable endpoint="contacts" columns={contactColumns} />
            </div>
          </TabsContent>
          
          <TabsContent value="waitlist">
            <div className="bg-background p-6 rounded-xl shadow-sm border border-black/5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <SubmissionsTable endpoint="waitlist" columns={waitlistColumns} />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
