import { describe, expect, it } from "vitest";

import { CONTACT_LIMITS, contactSubmissionSchema } from "@/lib/contact-schema";

const validSubmission = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  company: "Launch Ramp",
  message: "We need help planning our next growth stage.",
};

describe("contact submission validation", () => {
  it("trims inquiry fields and allows an omitted company", () => {
    const result = contactSubmissionSchema.parse({
      ...validSubmission,
      name: "  Ada Lovelace  ",
      email: "  ada@example.com  ",
      company: undefined,
    });

    expect(result).toEqual({ ...validSubmission, company: "" });
  });

  it("rejects an invalid email address", () => {
    const result = contactSubmissionSchema.safeParse({
      ...validSubmission,
      email: "not-an-email",
    });

    expect(result.success).toBe(false);
  });

  it("rejects messages over 2,000 characters", () => {
    const result = contactSubmissionSchema.safeParse({
      ...validSubmission,
      message: "a".repeat(CONTACT_LIMITS.messageMax + 1),
    });

    expect(result.success).toBe(false);
  });
});
