export type Job = {
  title: string;
  company: string;
  dates: string;
  summary?: string;
  bullets: string[];

  link?: {
    text: string;
    url: string;
  }
};

export const jobs: Job[] = [
  {
    title: "Embedded Software Engineer",
    company: "Beacon Industries",
    dates: "Aug 2025 - Jan 2026",
    summary: "Phase I SBIR work focused on non-intrusive exposure of legacy avionics data to modern software applications under real-time constraints.",
    bullets: [
      "Led development of a C++/Python avionics data simulation and exposure framework for legacy bus data analysis.",
      "Implemented MIL-STD-1553 and ARINC-429 protocol decoding, abstraction, and data routing for validation and analytics.",
      "Designed a modular, hardware-agnostic simulation architecture for repeatable validation under timing and data-rate constraints.",
      "Developed an offline-trained autoencoder workflow and deployed static model artifacts into a deterministic real-time pipeline.",
      "Authored the final Phase I report submitted to NAVAIR, delivering the end-to-end system from concept through review."
    ]
  },
  {
    title: "Service Technician",
    company: "College Computing Services",
    dates: "Feb 2021 - July 2025",
    summary:
      "Supported computing infrastructure and internal tooling for engineering labs and academic departments, with a mix of software development and hands-on system support.",
    bullets: [
      "Developed and maintained a custom TypeScript-based inventory tracking application used to manage over 5,000 devices.",
      "Improved the application interface and workflows, making inventory tracking more efficient and easier to use for staff.",
      "Cloned and deployed SSD images to streamline software installation and setup across engineering lab machines.",
      "Upgraded and maintained classroom computers and AV systems to support reliable day-to-day use by students and faculty."
    ]
  }
];