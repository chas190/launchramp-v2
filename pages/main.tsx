import { createRoot } from "react-dom/client";
import { LaunchRampHome } from "../src/components/launch-ramp-home";
import "../src/styles.css";

function InquiryStatus() {
  return (
    <aside className="rounded-2xl border border-border bg-card/60 p-5 shadow-glow">
      <h3 className="text-xl font-bold">Online inquiries are unavailable on this site</h3>
      <p className="mt-3 text-muted-foreground">
        The Launch Ramp inquiry form will be available when a submission service is connected.
      </p>
    </aside>
  );
}

createRoot(document.getElementById("root")!).render(
  <LaunchRampHome contact={<InquiryStatus />} />,
);
