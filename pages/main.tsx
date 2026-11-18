import { createRoot } from "react-dom/client";
import { LaunchRampHome } from "../src/components/launch-ramp-home";
import "../src/styles.css";

const inquiryFormUrl =
  "https://script.google.com/macros/s/AKfycbzkgE-YdMRrkfq6pIOa41oUSFpzgkoCAvwO832lVh-KEZJnWT352lj4u44USRel93k5/exec";

function InquiryForm() {
  return (
    <div className="min-w-0">
      <iframe
        src={inquiryFormUrl}
        title="Launch Ramp Website Inquiry"
        className="block h-[520px] w-full rounded-2xl border-0 bg-[#101624] sm:h-[484px]"
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
