import { createRoot } from "react-dom/client";
import { LaunchRampHome } from "../src/components/launch-ramp-home";
import "../src/styles.css";

const inquiryFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScLqnFm_PQPJgjbNodHoEX1vWvKTxFg-6y21B35o0qKTOJZ3A/viewform";

function InquiryForm() {
  return (
    <div className="min-w-0">
      <iframe
        src={`${inquiryFormUrl}?embedded=true`}
        title="Launch Ramp Website Inquiry"
        className="w-full rounded-2xl border-0 bg-white"
        height={1006}
        loading="lazy"
      />
      <a
        className="mt-3 inline-flex min-h-11 items-center text-sm text-heat-2 underline"
        href={inquiryFormUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open the inquiry form in a new tab
      </a>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <LaunchRampHome contact={<InquiryForm />} />,
);
