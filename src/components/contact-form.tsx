import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/lib/contact.functions";
import { CONTACT_LIMITS, contactSubmissionSchema } from "@/lib/contact-schema";

const emptyForm = {
  name: "",
  email: "",
  company: "",
  message: "",
};

type FormFields = typeof emptyForm;
type FieldErrors = Partial<Record<keyof FormFields, string>>;

export function ContactForm() {
  const sendContact = useServerFn(submitContact);
  const [form, setForm] = useState<FormFields>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function updateField(field: keyof FormFields, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFormError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");

    const parsed = contactSubmissionSchema.safeParse(form);
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof FormFields;
        if (!nextErrors[field]) nextErrors[field] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    setStatus("submitting");
    try {
      await sendContact({ data: parsed.data });
      setForm(emptyForm);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("idle");
      setFormError("We couldn't send your inquiry. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex min-h-[430px] flex-col items-center justify-center rounded-2xl border border-heat-3/40 bg-card/60 p-8 text-center"
        role="status"
      >
        <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-heat-3/40 bg-secondary/60">
          <CheckCircle2 size={30} strokeWidth={1.7} color="url(#heat-line)" aria-hidden="true" />
        </span>
        <h3 className="text-2xl font-bold">Inquiry received</h3>
        <p className="mt-3 max-w-sm text-muted-foreground">
          Thanks for reaching out to Launch Ramp. Your message has been received.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-7 rounded-full px-6"
          onClick={() => setStatus("idle")}
        >
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-border bg-card/60 p-5 text-left shadow-glow sm:p-6"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name *</Label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            maxLength={CONTACT_LIMITS.nameMax}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className="h-11 bg-background/70"
          />
          {errors.name && (
            <p id="contact-name-error" className="text-sm text-heat-2">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email">Email *</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            maxLength={CONTACT_LIMITS.emailMax}
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className="h-11 bg-background/70"
          />
          {errors.email && (
            <p id="contact-email-error" className="text-sm text-heat-2">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="contact-company">Company <span className="font-normal text-muted-foreground">(optional)</span></Label>
        <Input
          id="contact-company"
          name="company"
          autoComplete="organization"
          placeholder="Your company"
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          maxLength={CONTACT_LIMITS.companyMax}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? "contact-company-error" : undefined}
          className="h-11 bg-background/70"
        />
        {errors.company && (
          <p id="contact-company-error" className="text-sm text-heat-2">
            {errors.company}
          </p>
        )}
      </div>

      <div className="mt-5 space-y-2">
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="contact-message">How can we help? *</Label>
          <span className="text-xs text-muted-foreground">
            {form.message.length}/{CONTACT_LIMITS.messageMax}
          </span>
        </div>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Tell us about your business, your goals, and where you need support."
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          maxLength={CONTACT_LIMITS.messageMax}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className="min-h-32 resize-y bg-background/70"
        />
        {errors.message && (
          <p id="contact-message-error" className="text-sm text-heat-2">
            {errors.message}
          </p>
        )}
      </div>

      {formError && (
        <p className="mt-5 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground" role="alert">
          {formError}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="btn-heat mt-6 h-12 w-full rounded-full text-base font-bold"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="animate-spin" aria-hidden="true" />
            Sending inquiry…
          </>
        ) : (
          <>
            Send inquiry
            <Send aria-hidden="true" />
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">Fields marked * are required.</p>
    </form>
  );
}
