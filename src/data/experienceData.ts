export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
  link?: {
    text: string;
    url: string;
  }
};

export const jobs: Job[] = [
  {
    title: "Embedded Systems Engineer",
    company: "Beacon Industries",
    dates: "08/2025 - Present",
    description: [
      "Develops and maintains Git-based avionics communication framework using C++ and RTI Connext DDS to emulate MIL-STD-1553 data transfer.",
      "Incorporates AI-driven anomaly detection and priority ranking via TensorFlow, enabling intelligent filtering of normalized data frames.",
      "Conducts integrated thermal-mechanical-radiation simulations with ANSYS and Geant4 to evaluate heater material performance in LEO, MEO, and GEO.",
      "Leads technical presentations to NAVAIR representatives, translating high-level proposals into actionable plans, progress reports, and detailed slides.",
      "Authors reports and supporting documentation for SBIR contracts, synthesizing results into concise deliverables for U.S. Space Force and Navy stakeholders.",
    ]
  },
  {
    title: "Service Technician",
    company: "Florida State University",
    dates: "02/2021 - 07/2025",
    description: [
      "Developed a custom TypeScript application named ITEM App that maintains data for over 5,000 devices.",
      "Upgraded ITEM App by streamlining user interface, improving inventory efficiency by over 50%.",
      "Improved ITEM App data reliability and scalability by replacing Microsoft Lists with a custom SQLite database and Sequelize ORM, enabling better backend performance and maintainability.",
      "Updated engineering software by cloning SSDs through system BIOS, improving overall system performance.",
      "Assembled workstations for students and faculty by promptly deploying desktops, displays, and other peripherals.",
      "Renovated lecture rooms by removing old hardware and installing new machines and AV wiring.",
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
    ],
    link: {
      text: "Letter of Recommendation",
      url: "Runyons rec letter com.pdf",
    }
  }
];