import { z } from "zod";

export const CONTACT_LIMITS = {
  nameMax: 100,
  emailMax: 255,
  companyMax: 120,
  messageMin: 10,
  messageMax: 2000,
} as const;

export const contactSubmissionSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(CONTACT_LIMITS.nameMax, "Name must be 100 characters or fewer."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .max(CONTACT_LIMITS.emailMax, "Email must be 255 characters or fewer.")
    .email("Please enter a valid email address."),
  company: z
    .string()
    .trim()
    .max(CONTACT_LIMITS.companyMax, "Company must be 120 characters or fewer.")
    .optional()
    .default(""),
  message: z
    .string()
    .trim()
    .min(CONTACT_LIMITS.messageMin, "Please tell us a little more (at least 10 characters).")
    .max(CONTACT_LIMITS.messageMax, "Message must be 2,000 characters or fewer."),
});

export type ContactSubmission = z.output<typeof contactSubmissionSchema>;
