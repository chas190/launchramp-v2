import { createServerFn } from "@tanstack/react-start";

import { contactSubmissionSchema } from "./contact-schema";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator(contactSubmissionSchema)
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      message: data.message,
    });

    if (error) {
      console.error("Unable to store contact submission", error);
      throw new Error("We couldn't send your inquiry. Please try again.");
    }

    return { ok: true as const };
  });
