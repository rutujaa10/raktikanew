import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import SubmissionsTable from "@/components/Admin/SubmissionsTable";
import ManualEntryForm from "@/components/Admin/ManualEntryForm";
import { LogOut, LayoutDashboard, MessageSquare, UserPlus, PlusCircle } from "lucide-react";

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
    <div className="min-h-screen bg-muted/10 flex flex-col">
      {/* Navbar - Responsive */}
      <header className="bg-background border-b px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-4 justify-between items-center shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <LayoutDashboard className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight">Admin Dashboard</h1>
        </div>
        <Button variant="ghost" onClick={handleLogout} size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
          <LogOut className="h-4 w-4" /> <span className="hidden xs:inline">Sign Out</span>
        </Button>
      </header>
      
      {/* Main Layout - Responsive */}
      <main className="flex-1 container mx-auto px-4 py-6 sm:py-8 max-w-6xl">
        <Tabs defaultValue="contacts" className="w-full space-y-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Management</h2>
              <p className="text-sm text-muted-foreground">Manage submissions and add entries manually.</p>
            </div>
            
            {/* Scrollable TabsList for Mobile */}
            <div className="w-full md:w-auto overflow-x-auto pb-1 scrollbar-hide">
              <TabsList className="bg-background border shadow-sm min-w-max h-11 flex justify-start sm:justify-center p-1">
                <TabsTrigger value="contacts" className="gap-2 px-4">
                  <MessageSquare className="h-4 w-4" />
                  Contacts
                </TabsTrigger>
                <TabsTrigger value="waitlist" className="gap-2 px-4">
                  <UserPlus className="h-4 w-4" />
                  Waitlist
                </TabsTrigger>
                <TabsTrigger value="manual" className="gap-2 px-4">
                  <PlusCircle className="h-4 w-4" />
                  Manual Entry
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          
          <TabsContent value="contacts">
            <div className="bg-background p-4 sm:p-6 rounded-xl shadow-sm border border-black/5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <SubmissionsTable endpoint="contacts" columns={contactColumns} />
            </div>
          </TabsContent>
          
          <TabsContent value="waitlist">
            <div className="bg-background p-4 sm:p-6 rounded-xl shadow-sm border border-black/5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <SubmissionsTable endpoint="waitlist" columns={waitlistColumns} />
            </div>
          </TabsContent>

          <TabsContent value="manual">
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <ManualEntryForm />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
