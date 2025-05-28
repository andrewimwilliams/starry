export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Service Technician",
    company: "Florida State University",
    dates: "02/2021 - 06/2025",
    description: [
      "Developed a custom JavaScript application named ITEM App that maintains data for over 5,000 devices.",
      "Upgraded ITEM App by streamlining user interface, improving inventory efficiency by over 50%.",
      "Updated engineering software by cloning SSDs through system BIOS, improving overall system performance.",
      "Assembled workstations for students and faculty by promptly deploying desktops, displays, and other peripherals.",
      "Renovated lecture rooms by removing old hardware and installing new machines and AV wiring.",
      "Transformed unreliable classrooms into dependable learning spaces, enhancing the learning environment.",
    ]
  },
  {
    title: "Server / Busser",
    company: "Runyon's of Coral Springs",
    dates: "11/2017 - 03/2020",
    description: [
      "Delivered high quality, fine-dining experiences for patrons.",
      "Served a wide range of guests ranging from restaurant regulars to company executives.",
      "Led a team of bussers, mentoring and providing them an example of best practices.",
      "Coordinated with managers and bartenders to effectively attend to all guests.",
      "Fostered professionalism and customer service.",
    ]
  }
];