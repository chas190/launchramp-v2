import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { LaunchRampHome } from "@/components/launch-ramp-home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Launch Ramp — Launch faster with AI-powered growth" },
      { name: "description", content: "Launch Ramp helps startups and mid-tier companies grow faster with advisors, investors and the Aistein AI-powered STEP Platform." },
      { property: "og:title", content: "Launch Ramp — Launch faster with AI-powered growth" },
      { property: "og:description", content: "Advisors, investors and the Aistein AI-powered STEP Platform to accelerate your business." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <LaunchRampHome contact={<ContactForm />} />,
});
