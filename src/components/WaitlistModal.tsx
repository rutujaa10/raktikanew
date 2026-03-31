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

      const response = await fetch("http://localhost:5000/api/waitlist", {
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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">
            {t('waitlist.title')}
          </DialogTitle>
          <DialogDescription>
            {t('waitlist.subtitle')}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {t('waitlist.name')}
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {t('waitlist.email')}
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              {t('waitlist.phone')}
            </label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium mb-2">
              Age
            </label>
            <Input
              id="age"
              type="number"
              min="10"
              max="100"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className={errors.age ? "border-destructive" : ""}
            />
            {errors.age && <p className="text-destructive text-sm mt-1">{errors.age}</p>}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-2">
              Address
            </label>
            <Textarea
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className={errors.address ? "border-destructive" : ""}
              rows={3}
            />
            {errors.address && <p className="text-destructive text-sm mt-1">{errors.address}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Do you consent to participate in testing? <span className="text-destructive">*</span>
            </label>
            <div className="flex items-center gap-4 mt-2">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="consent"
                  className="w-4 h-4 text-primary"
                  checked={formData.consentForTesting === true}
                  onChange={() => setFormData({ ...formData, consentForTesting: true })}
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="consent"
                  className="w-4 h-4 text-primary"
                  checked={formData.consentForTesting === false}
                  onChange={() => setFormData({ ...formData, consentForTesting: false })}
                />
                No
              </label>
            </div>
            {errors.consentForTesting && <p className="text-destructive text-sm mt-1">{errors.consentForTesting}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
            {isSubmitting ? "Submitting..." : t('waitlist.submit')}
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-4">
            We respect your privacy. Your data will not be misused and will remain secure and confidential.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
