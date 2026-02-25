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
    title: "Ultrasonic Distance Sensor + LCD",
    summary: "A real-time distance meter using an MSP430, ultrasonic sensor, and an I2C LCD.",
    images: [
      "ultrasensor_setup.jpg"
    ],
    tags: ["C", "Embedded Systems", "Bare-Metal Firmware", "Real-Time Systems", "Microcontrollers", "Interrupts", "Timers"],
    details: {
      challenge: [
        "Using hardware I accumulated through college, I wanted to build something that felt like real firmware. Something that could measure time precisely, respond in real-time, and follow sound engineering practices. This project enabled that goal through an ultrasonic sensor that encodes distance as the width of an echo pulse.",
      ],
      solution: [
        "I configured a hardware timer on the MSP430 in capture mode to timestamp the rising and falling edges of the echo pulse, then computed the pulse width from those interrupt-driven timestamps. Those pulse widths were then converted to centimeters, with light filtering added to prevent readings from jumping or latching incorrectly at the edges of the detection range.",
        "To visualize the computed distance, I implemented an LCD driver for an I2C backpack, including initialization and a small API for writing strings and values to keep the main loop readable. The system was structured around a simple pipeline: trigger → capture echo → compute distance → update LCD + LED outputs.",
      ],
      impact: [
        "Produced a live distance readout on the LCD and a clear visual alert when an object enters the target range.",
        "Demonstrated hands-on comfort with core embedded fundamentals: timers, interrupts, peripheral configuration, and hardware interfaces.",
        "Resulted in a clean, explainable firmware architecture.",
      ]
    }
  },
  {
    id: 2,
    title: "Avionics Data Simulation & Analysis",
    summary: "A real-time software framework for simulating and observing legacy avionics bus data without modifying certified flight systems.",
    images: [
      "fa18.jpg",
      "e-2d.jpg",
      "sh-60.jpg",
      "mv-22.jpg"
    ],
    tags: ["C++", "Python", "Data Distribution Service", "Embedded Systems", "Real-Time Systems", "Simulation & Test", "Systems Architecture", "Defense R&D"],
    details: {
      challenge: [
        "Modern software systems increasingly rely on access to real-time data, but many avionics platforms expose data through proprietary legacy interfaces that can't be modified without impacting certification or flight-critical behavior. The challenge was to design a system that could observe and distribute avionics data in real time while remaining non-intrusive, deterministic, and fully compatible with existing certification constraints."
      ],
      solution: [
        "I designed and implemented a modular C++ and Python software architecture that generates, ingests, translates, and disseminates avionics bus data through a controlled, observational pipeline. The system emphasized non-intrusive data exposure that preserved certified system boundaries while enabling downstream analysis and application access.",
        "I architected an offline machine learning workflow to characterize avionics data behavior, then deployed the resulting static model artifacts into the real-time pipeline to preserve deterministic execution. The processed data propagated to a secure dashboard endpoint that visualized data frames and highlighted ML-detected deviations in real time."
      ],
      impact: [
        "Delivered an end-to-end Phase I SBIR software system from concept through final government review.",
        "Enabled secure, non-intrusive access to legacy avionics data for validation and analytics use cases.",
        "Demonstrated deterministic, real-time behavior under representative operational constraints.",
        "Established a scalable foundation for future prototype development and system expansion."
      ]
    },
    externalLink: {
      title: "SBIR Topic",
      url: "https://navysbir.us/n25_1/N251-021.htm"
    }
  },
  {
    id: 3,
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
    tags: ["C#", "Haptics", "Real-Time Systems", "Artificial Intelligence", "Simulation", "Human-in-the-Loop", "Systems Integration", "Software Architecture"],
    details: {
      challenge:[
        "My team and I were tasked with designing a driving simulator capable of providing real-time feedback to a human operator while combining realistic vehicle control, simulation fidelity, and adaptive software behavior. The project needed to integrate physical input devices with a simulation environment while maintaining responsiveness and a coherent user experience.",
      ], 
      solution: [ 
        "We constructed a driving simulator using Unreal Engine that integrated steering wheel hardware, haptic feedback, and software-driven coaching. The system combined simulation logic with external AI-based services to generate contextual feedback for the driver, emphasizing timing, responsiveness, and usability rather than visual realism alone.",
        "The simulator was designed as a modular system, separating simulation logic, input handling, and feedback mechanisms that allowed iterative development and testing."
      ],
      impact: [
        "Implemented real-time input handling and feedback loops between physical hardware and a simulation environment.",
        "Designed interactive systems where timing and responsiveness directly affect user behavior.",
        "Explored modular software design in a simulation context, reinforcing principles later applied to embedded and avionics systems.",
        "Delivered a complete, standalone simulator suitable for demonstration, evaluation, education, and recreational use."
      ]
    }
  },
  {
    id: 4,
    title: "3×3 Mechanical Macropad",
    summary: "A custom hardware and firmware project exploring embedded input devices, PCB design, and low-level firmware configuration.",
    images: [
      "pho_IMG_5588.jpg",
      "pho_IMG_2238.jpg",
      "macropad onshape.jpg",
      "front.jpg",
      "back.jpg",
      "schem.jpg"
    ],
    tags: ["C", "KiCad", "QMK", "Embedded Systems", "Firmware Development", "Hardware-Software Integration", "PCB Design", "Low-Level Programming"],
    details: {
      challenge: [
        "I was inspired to strengthen my understanding of firmware, bare-metal programming, soldering, and PCB design through a hands-on project. This motivated me to design and build a compact macropad that balanced simplicity, reliability, and usability.",
      ],
      solution: [
        "I designed a custom 3×3 macropad PCB using KiCad, integrating mechanical switches, diodes, and an Arduino microcontroller. I assembled and soldered the hardware, then developed and flashed custom QMK firmware in C to define keymaps, layers, and macro behavior.",
        "The firmware configuration emphasized modularity and flexibility, allowing the device to be easily reprogrammed and adapted to different workflows without hardware changes."
      ],
      impact: [
        "Gained hands-on experience designing and assembling a custom PCB for an embedded input device.",
        "Developed and modified low-level firmware to handle key scanning, debouncing, and macro behavior.",
        "Reinforced understanding of the interaction between hardware constraints and firmware design.",
        "Delivered a fully functional, programmable device used for daily workflow automation."
      ]
    }
  }
];
