import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { API_BASE_URL } from "@/config";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Better error handling for non-JSON responses
      if (!res.ok) {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await res.json();
          toast.error(errorData.error || "Invalid credentials");
        } else {
          const text = await res.text();
          console.error("Non-JSON error response:", text);
          toast.error(`Server error: ${res.status}. Check Vercel logs.`);
        }
        return;
      }

      const data = await res.json();
      if (data.success) {
        localStorage.setItem("adminToken", data.token);
        toast.success("Login successful");
        navigate("/admin");
      }
    } catch (err) {
      console.error("Login FETCH error:", err);
      toast.error("Network error. Check server console/Vercel logs.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md shadow-lg border-primary/10">
        <CardHeader className="text-center pb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-primary font-bold text-xl">R</span>
          </div>
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <p className="text-sm text-muted-foreground">Sign in to manage form submissions</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2 text-left">
              <label className="text-sm font-medium">Email Address</label>
              <Input 
                type="email" 
                placeholder="admin@raktika.com"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                className="w-full"
              />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-sm font-medium">Password</label>
              <Input 
                type="password" 
                placeholder="••••••••"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full mt-6 py-6 font-semibold">
              Sign In to Dashboard
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
