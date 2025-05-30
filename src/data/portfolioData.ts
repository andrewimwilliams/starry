export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string;
    solution: string;
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
    title: "Texas Instruments Low-Cost AI Based Driving Simulator",
    summary: "Developed a driving simulator using Unreal Engine and C# by adding realistic collision feedback with steering wheel haptics and implementing multiple artificial intelligence platforms to train new drivers in common driving scenarios.",
    images: [
      "image12.jpeg",
      "IMG_5019.JPEG",
      "IMG_8795.JPEG",
      "IMG_4911.jpeg",
      "IMG_5811.JPEG",
      "IMG_8765.JPEG"
    ],
    tags: ["Unreal Engine 5", "C#", "Haptics", "AI", "Blender", "3D Modeling", "Logitech", "UI/UX Design"],
    details: {
      challenge: "Learning how to drive is challenging, and whether it be financial or environmental issues, many new drivers are missing the appropriate tools to learn best driving practices.",
      solution: "Developed an affordable driving simulator, implementing responsive collision feedback with haptics and real-time driver training with artificial intelligence.",
      impact: [
        "Created a virtual environment to help new drivers practice the basics and to allow experienced drivers to hone their skills.",
        "Improved accessibility for users by displaying unique driver training tips both audibly and visually."
      ]
    }
  },
  {
    id: 2,
    title: "3x3 Mechanical Macropad",
    summary: "Built custom 3x3 mechanical macropad by designing a PCB in KiCAD, soldering switches, diodes, and Arduino Pro Micro onto the PCB, configuring the keymap using C, and flashing custom QMK firmware to the keypad.",
    images: [
      "IMG_2238.jpg",
      "macropad onshape.jpg",
      "front.jpg",
      "back.jpg",
      "schem.jpg"
    ],
    tags: ["Mechanical Keyboard", "C", "PCB", "Soldering", "Arduino", "Diodes", "QMK", "Firmware"],
    details: {
      challenge: "Certain computer functions can take too long to do manually. What if there was a way to optimize functions, make them easily accessible, and perform them with a single key press?",
      solution: "Designed and built 3x3 macropad by soldering an Arduino microcontroller and diodes to a custom PCB. After implementing macro functions and flashing the QMK firmware, the keypad can perform a variety of functions such as: open a new browser tab, close all applications, mute switch, and more.",
      impact: [
        "Useable as a small macropad for computer functions.",
        "Bolstered soldering and firmware programming experience."
      ]
    }
  }
];
