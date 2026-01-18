export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string[];
    solution: string[];
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Open-Architecture Avionics Data Simulation & Analysis Framework",
    summary: "A real-time framework for non-intrusive observation, simulation, and analysis of legacy avionics bus data.",
    images: [
      "fa18.jpg",
      "e-2d.jpg",
      "sh-60.jpg",
      "mv-22.jpg"
    ],
    tags: ["Embedded Systems", "Real-Time Systems", "Simulation & Test", "Systems Architecture", "Defense R&D"],
    details: {
      challenge: [
        "Modern software systems increasingly rely on access to real-time data, but many avionics platforms expose data through legacy interfaces that cannot be modified without impacting certification or flight-critical behavior. The challenge was to design a system that could observe and distribute avionics data in real time while remaining non-intrusive, deterministic, and compatible with existing constraints.",
        "The solution needed to support validation, testing, and analytics without relying on physical avionics hardware or altering certified systems."
      ],
      solution: [
        "Designed and implemented a modular C++/Python software architecture that ingests, translates, and disseminates avionics bus data through a controlled, observational pipeline. The system emphasized non-intrusive data exposure, preserving certified system boundaries while enabling downstream analysis and application access.",
        "To support development and validation, a hardware-independent simulation pipeline was created to emulate avionics traffic under representative timing and data-rate constraints. This allowed repeatable testing and iteration without reliance on physical interfaces.",
        "An offline machine learning workflow was used to characterize data behavior, with static model artifacts deployed into the real-time pipeline for bounded, deterministic analysis during runtime."
      ],
      impact: [
        "Delivered an end-to-end Phase I SBIR software system from concept through final government review",
        "Enabled secure, non-intrusive access to legacy avionics data for validation and analytics use cases",
        "Demonstrated deterministic, real-time behavior under representative operational constraints",
        "Established a scalable foundation for future prototype development and system expansion"
      ]
    },
    externalLink: {
      title: "SBIR Topic",
      url: "https://navysbir.us/n25_1/N251-021.htm"
    }
  },
  {
    id: 2,
    title: "AI-Assisted Driving Simulator",
    summary: "A real-time driving simulation exploring human-in-the-loop feedback, system responsiveness, and interactive software design.",
    images: [
      "image12.jpeg",
      "IMG_5019.JPEG",
      "IMG_8795.JPEG",
      "IMG_4911.jpeg",
      "IMG_5811.JPEG",
      "IMG_8765.JPEG"
    ],
    tags: ["Real-Time Systems", "Simulation", "Human-in-the-Loop", "Systems Integration", "Software Architecture"],
    details: {
      challenge:[
        "Design a driving simulator capable of providing real-time feedback to a human operator, combining realistic vehicle control, simulation fidelity, and adaptive software behavior. The project needed to integrate physical input devices with a simulation environment while maintaining responsiveness and a coherent user experience.",
      ], 
      solution: [ 
        "Built a real-time driving simulator using Unreal Engine that integrated steering wheel hardware, haptic feedback, and software-driven coaching. The system combined simulation logic with external AI-based services to generate contextual feedback for the driver, emphasizing timing, responsiveness, and usability rather than visual realism alone.",
        "The simulator was designed as a modular system, separating simulation logic, input handling, and feedback mechanisms to allow iterative development and testing."
      ],
      impact: [
        "Implemented real-time input handling and feedback loops between physical hardware and a simulation environment",
        "Gained hands-on experience designing interactive systems where timing and responsiveness directly affect user behavior",
        "Explored modular software design in a simulation context, reinforcing principles later applied to embedded and avionics systems",
        "Delivered a complete, standalone simulator suitable for demonstration and evaluation"
      ]
    }
  },
  {
    id: 3,
    title: "3x3 Mechanical Macropad",
    summary: "A custom hardware and firmware project exploring embedded input devices, PCB design, and low-level firmware configuration.",
    images: [
      "pho_IMG_5588.jpg",
      "pho_IMG_2238.jpg",
      "macropad onshape.jpg",
      "front.jpg",
      "back.jpg",
      "schem.jpg"
    ],
    tags: ["Embedded Systems", "Firmware Development", "Hardware-Software Integration", "PCB Design", "Low-Level Programming"],
    details: {
      challenge: [
        "Design and build a compact input device that integrates custom hardware with configurable firmware, balancing simplicity, reliability, and usability. The project required understanding both the electrical design of a small PCB and the firmware needed to translate physical inputs into meaningful system-level actions.",
      ],
      solution: [
        "Designed a custom 3x3 macropad PCB using KiCad, integrating mechanical switches, diodes, and a microcontroller for reliable key scanning. Assembled and soldered the hardware, then developed and flashed custom QMK firmware in C to define keymaps, layers, and macro behavior.",
        "The firmware configuration emphasized modularity and flexibility, allowing the device to be easily reprogrammed and adapted to different workflows without hardware changes."   
      ],
      impact: [
        "Gained hands-on experience designing and assembling a custom PCB for an embedded input device",
        "Developed and modified low level firmware to handle key scanning, debouncing, and macro behavior",
        "Reinforced understanding of the interaction between hardare constraints and firmware design",
        "Delivered a fully functional, programmable device used for daily workflow automation"
      ]
    }
  }
];
