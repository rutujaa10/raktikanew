import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { API_BASE_URL } from "@/config";

const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15),
  age: z.number({ invalid_type_error: "Valid age is required" }).min(10, "Age must be at least 10").max(100, "Age cannot exceed 100"),
  address: z.string().trim().min(5, "Please provide a complete address").max(500),
  consentForTesting: z.boolean({ required_error: "You must explicitly select Yes or No" })
});

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistModal = ({ open, onOpenChange }: WaitlistModalProps) => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    consentForTesting: null as boolean | null
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        age: formData.age ? Number(formData.age) : undefined
      };
      
      waitlistSchema.parse(payload);

      const response = await fetch(`${API_BASE_URL}/api/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: t('waitlist.success'),
          description: t('waitlist.successMessage'),
        });
        setFormData({ name: "", email: "", phone: "", age: "", address: "", consentForTesting: null });
        setErrors({});
        onOpenChange(false);
      } else {
        throw new Error(data.error || "Failed to join waitlist");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "Failed to join waitlist",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] sm:max-w-[500px] max-h-[90vh] overflow-y-auto p-4 sm:p-6 rounded-2xl sm:rounded-lg">
        <DialogHeader className="sm:text-left text-center">
          <DialogTitle className="text-xl sm:text-2xl gradient-text font-bold">
            {t('waitlist.title')}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm">
            {t('waitlist.subtitle')}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 mt-4 sm:mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-foreground/80 lowercase first-letter:uppercase">
                {t('waitlist.name')}
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`h-11 sm:h-12 bg-muted/20 border-border/50 focus:border-primary/50 transition-all ${errors.name ? "border-destructive/50 ring-1 ring-destructive/20" : ""}`}
                placeholder="Full Name"
              />
              {errors.name && <p className="text-destructive text-[10px] sm:text-xs mt-1 animate-in fade-in slide-in-from-top-1">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-foreground/80 lowercase first-letter:uppercase">
                {t('waitlist.email')}
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`h-11 sm:h-12 bg-muted/20 border-border/50 focus:border-primary/50 transition-all ${errors.email ? "border-destructive/50 ring-1 ring-destructive/20" : ""}`}
                placeholder="name@example.com"
              />
              {errors.email && <p className="text-destructive text-[10px] sm:text-xs mt-1 animate-in fade-in slide-in-from-top-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-foreground/80 lowercase first-letter:uppercase">
                {t('waitlist.phone')}
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`h-11 sm:h-12 bg-muted/20 border-border/50 focus:border-primary/50 transition-all ${errors.phone ? "border-destructive/50 ring-1 ring-destructive/20" : ""}`}
                placeholder="+1 (555) 000-0000"
              />
              {errors.phone && <p className="text-destructive text-[10px] sm:text-xs mt-1 animate-in fade-in slide-in-from-top-1">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="age" className="block text-xs sm:text-sm font-semibold text-foreground/80 lowercase first-letter:uppercase">
                Age
              </label>
              <Input
                id="age"
                type="number"
                min="10"
                max="100"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className={`h-11 sm:h-12 bg-muted/20 border-border/50 focus:border-primary/50 transition-all ${errors.age ? "border-destructive/50 ring-1 ring-destructive/20" : ""}`}
                placeholder="Years"
              />
              {errors.age && <p className="text-destructive text-[10px] sm:text-xs mt-1 animate-in fade-in slide-in-from-top-1">{errors.age}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="block text-xs sm:text-sm font-semibold text-foreground/80 lowercase first-letter:uppercase">
              Address
            </label>
            <Textarea
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className={`min-h-[80px] bg-muted/20 border-border/50 focus:border-primary/50 transition-all ${errors.address ? "border-destructive/50 ring-1 ring-destructive/20" : ""}`}
              placeholder="Full physical address"
              rows={2}
            />
            {errors.address && <p className="text-destructive text-[10px] sm:text-xs mt-1 animate-in fade-in slide-in-from-top-1">{errors.address}</p>}
          </div>

          <div className="bg-muted/30 p-3 sm:p-4 rounded-xl border border-border/30">
            <label className="block text-xs sm:text-sm font-semibold text-foreground/80 mb-3">
              Do you consent to participate in testing? <span className="text-destructive">*</span>
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
                <input
                  type="radio"
                  name="consent"
                  className="w-4 h-4 accent-primary"
                  checked={formData.consentForTesting === true}
                  onChange={() => setFormData({ ...formData, consentForTesting: true })}
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
                <input
                  type="radio"
                  name="consent"
                  className="w-4 h-4 accent-primary"
                  checked={formData.consentForTesting === false}
                  onChange={() => setFormData({ ...formData, consentForTesting: false })}
                />
                No
              </label>
            </div>
            {errors.consentForTesting && <p className="text-destructive text-[10px] sm:text-xs mt-1 animate-in fade-in slide-in-from-top-1">{errors.consentForTesting}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full text-base sm:text-lg h-12 sm:h-14 shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30" size="lg">
            {isSubmitting ? "Submitting..." : t('waitlist.submit')}
          </Button>

          <p className="text-[10px] sm:text-xs text-muted-foreground text-center mt-2 leading-relaxed">
            We respect your privacy. Your data will remain secure and confidential.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
