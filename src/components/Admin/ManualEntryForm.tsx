import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { API_BASE_URL } from "@/config";
import { UserPlus, MessageSquare, Loader2 } from "lucide-react";

export default function ManualEntryForm() {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Waitlist Form State
  const [waitlistForm, setWaitlistForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    consentForTesting: true
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Contact entry created successfully");
        setContactForm({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Failed to create entry");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...waitlistForm,
          age: Number(waitlistForm.age)
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Waitlist entry created successfully");
        setWaitlistForm({
          name: "",
          email: "",
          phone: "",
          age: "",
          address: "",
          consentForTesting: true
        });
      } else {
        toast.error(data.error || "Failed to create entry");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Tabs defaultValue="contact" onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList className="grid grid-cols-2 w-[400px]">
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Contact
            </TabsTrigger>
            <TabsTrigger value="waitlist" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Waitlist
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="contact">
          <Card className="border-primary/10 shadow-lg">
            <CardHeader>
              <CardTitle>Manual Contact Entry</CardTitle>
              <CardDescription>Manually add a message to the database.</CardDescription>
            </CardHeader>
            <form onSubmit={handleContactSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-left">
                  <Label htmlFor="c-name">Full Name</Label>
                  <Input 
                    id="c-name" 
                    placeholder="Enter name" 
                    value={contactForm.name}
                    onChange={e => setContactForm({...contactForm, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2 text-left">
                  <Label htmlFor="c-email">Email Address</Label>
                  <Input 
                    id="c-email" 
                    type="email" 
                    placeholder="name@example.com" 
                    value={contactForm.email}
                    onChange={e => setContactForm({...contactForm, email: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2 text-left">
                  <Label htmlFor="c-message">Message</Label>
                  <Textarea 
                    id="c-message" 
                    placeholder="Type your message here..." 
                    className="min-h-[120px]"
                    value={contactForm.message}
                    onChange={e => setContactForm({...contactForm, message: e.target.value})}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Save Contact Entry
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="waitlist">
          <Card className="border-primary/10 shadow-lg">
            <CardHeader>
              <CardTitle>Manual Waitlist Entry</CardTitle>
              <CardDescription>Register a new clinical testing participant.</CardDescription>
            </CardHeader>
            <form onSubmit={handleWaitlistSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-left">
                    <Label htmlFor="w-name">Full Name</Label>
                    <Input 
                      id="w-name" 
                      placeholder="Enter name" 
                      value={waitlistForm.name}
                      onChange={e => setWaitlistForm({...waitlistForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <Label htmlFor="w-email">Email</Label>
                    <Input 
                      id="w-email" 
                      type="email" 
                      placeholder="name@example.com" 
                      value={waitlistForm.email}
                      onChange={e => setWaitlistForm({...waitlistForm, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-left">
                    <Label htmlFor="w-phone">Phone Number</Label>
                    <Input 
                      id="w-phone" 
                      placeholder="+1 (555) 000-0000" 
                      value={waitlistForm.phone}
                      onChange={e => setWaitlistForm({...waitlistForm, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <Label htmlFor="w-age">Age</Label>
                    <Input 
                      id="w-age" 
                      type="number" 
                      placeholder="Enter age" 
                      value={waitlistForm.age}
                      onChange={e => setWaitlistForm({...waitlistForm, age: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2 text-left">
                  <Label htmlFor="w-address">Physical Address</Label>
                  <Textarea 
                    id="w-address" 
                    placeholder="Full shipping/contact address" 
                    value={waitlistForm.address}
                    onChange={e => setWaitlistForm({...waitlistForm, address: e.target.value})}
                    required
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-primary/5">
                  <div className="space-y-0.5">
                    <Label htmlFor="w-consent">Consent Given</Label>
                    <p className="text-xs text-muted-foreground">Participant agrees to clinical testing contact.</p>
                  </div>
                  <Switch 
                    id="w-consent" 
                    checked={waitlistForm.consentForTesting}
                    onCheckedChange={checked => setWaitlistForm({...waitlistForm, consentForTesting: checked})}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Save Waitlist Entry
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
