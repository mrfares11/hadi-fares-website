// ============================================================================
//  ALL YOUR WEBSITE CONTENT LIVES HERE.
//  Edit this one file to update the entire site. Images go in /public and are
//  referenced by path, e.g. "/profile.jpg" -> public/profile.jpg
// ============================================================================

export const site = {
  name: "Hadi Fares",
  role: "Aerial Robotics & Autonomous Systems Researcher",
  tagline:
    "Mechanical engineering student and aerial-robotics researcher, designing and building autonomous drones from scratch, and the AI that flies them.",
  description:
    "Hadi Fares, Mechanical Engineering student at the American University of Beirut and aerial robotics researcher. Autonomous drones, computer vision, AI/ML, and GNC. Projects, publications, and achievements.",
  // Drop your photo in /public and update this path (e.g. "/profile.jpg")
  photo: "/profile.jpeg",
  // Drop your CV PDF in /public as resume.pdf (or change this path)
  resume: "/resume.pdf",
  location: "Beirut, Lebanon",
  email: "hnf01@mail.aub.edu",
};

export const socials: { label: string; href: string; icon: SocialIcon }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hadi-fares/", icon: "linkedin" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=pcoOCjUAAAAJ",
    icon: "scholar",
  },
  { label: "Email", href: "mailto:hnf01@mail.aub.edu", icon: "email" },
  // Add GitHub later when ready:
  // { label: "GitHub", href: "https://github.com/your-handle", icon: "github" },
];

export type SocialIcon =
  | "linkedin"
  | "github"
  | "email"
  | "twitter"
  | "scholar"
  | "link";

export const about: string[] = [
  "I'm a Mechanical Engineering student at the American University of Beirut and an aerial-robotics researcher. I build drones from scratch, from mechanical design and electronics to control systems and full autonomy, together with the AI that makes them intelligent.",
  "My work spans reinforcement learning, computer vision, and autonomous systems across a wide range of projects in AUB's Aerial Robotics and AI/ML labs, from firefighting fixed-wing UAVs and high-speed racing drones to perception, navigation, and flight-control research. I also contribute to Cranfield University's CraneAERO team.",
  "I believe the best learning happens by building. Whether it's a drone, a wind-tunnel rig, or a machine that recycles plastic into 3D-printing filament, I'm happiest with a hard problem and a team to solve it with.",
];

export const stats: { value: string; label: string }[] = [
  { value: "4.0", label: "GPA / 4.0" },
  { value: "8+", label: "Projects built" },
  { value: "2", label: "Publications" },
  { value: "5+", label: "Awards & honors" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
  logo?: string;
};

export const experience: Experience[] = [
  {
    role: "GNC Research Assistant, CraneAERO Team",
    company: "Cranfield University",
    period: "Jan 2026 - Present",
    location: "United Kingdom",
    description:
      "Member of CraneAERO, one of 11 global winners of the GoAERO Challenge, developing the CRANE (Cranfield Rapid Aerial Network for Emergency) autonomous eVTOL aircraft for search-and-rescue, disaster relief, and medical evacuation missions.",
    highlights: [
      "Contribute to guidance, navigation & control (GNC) design for autonomous VTOL flight.",
      "Support safety, mission-readiness, and performance objectives for the eVTOL platform.",
    ],
  },
  {
    role: "Computer Vision & Embedded Systems Intern",
    company: "Oreyeon",
    period: "Jun 2026 - Present",
    description:
      "Developing computer vision and embedded systems solutions, integrating perception pipelines with real-time hardware platforms.",
  },
  {
    role: "Undergraduate Research Assistant, Aerial Robotics Lab",
    company: "American University of Beirut",
    period: "Jul 2024 - Present",
    location: "Beirut, Lebanon",
    description:
      "Develop autonomous UAV systems spanning perception, navigation, and flight control across multiple advanced research projects in vision-based localization, multi-sensor fusion, and deep learning.",
    highlights: [
      "Built an autonomous firefighting fixed-wing UAV with onboard fire detection and solution dispersal.",
      "Developing a high-speed racing drone currently in testing, aiming for a world record.",
    ],
  },
  {
    role: "Undergraduate Research Assistant, AI & Machine Learning Lab",
    company: "American University of Beirut",
    period: "Jul 2024 - Present",
    location: "Beirut, Lebanon",
    description:
      "Contribute to projects merging drones and aerial robotics with advanced AI, applying large language models (LLMs), neural networks, reinforcement learning (RL), and RLHF to autonomous systems.",
  },
];

// ---------------------------------------------------------------------------
// Community & Volunteering — featured roles with their own dedicated pages
// under /community/<slug>. Card fields feed the homepage section; intro,
// highlights, and gallery feed the dedicated page.
// ---------------------------------------------------------------------------
export type CommunityRole = {
  slug: string;
  role: string;
  org: string;
  period: string;
  location?: string;
  card: string; // short description shown on the homepage card
  image: string; // homepage card image
  intro: string[]; // paragraphs on the dedicated page
  highlights: string[]; // bullet list on the dedicated page
  gallery: Shot[]; // photo grid on the dedicated page
};

export const community: CommunityRole[] = [
  {
    slug: "red-room",
    role: "Head of JEDIs (Junior Engineering Design Innovators)",
    org: "AUB Makerspaces · Red Room",
    period: "Sep 2024 - Present",
    location: "Beirut, Lebanon",
    card: "Leading student engineering projects in fabrication, electronics, and circuit design — running Red Room operations and organizing every makerspace event and workshop.",
    image: "/community/red-room-lab.jpeg",
    intro: [
      "The Red Room is AUB's student makerspace — a workshop where students design, prototype, and build. As Head of JEDIs (Junior Engineering Design Innovators), I lead student engineering projects in fabrication, electronics, and circuit design, manage the Red Room's day-to-day operations, and organize all of the makerspace's events and workshops.",
      "The work is hands-on and real: from fabrication, electronics, and circuit-design projects to developing new materials with advanced manufacturing tools. One favorite: carbon-fiber-reinforced composites made from recycled plastic bottles, with 3D-printing parameters optimized for strength.",
    ],
    highlights: [
      "Lead student engineering projects in fabrication, electronics, and circuit design.",
      "Manage Red Room operations and coordinate the JEDI team.",
      "Organize all makerspace events and workshops.",
      "Developed carbon-fiber-reinforced composites from recycled plastic bottles with optimized 3D-printing parameters.",
    ],
    gallery: [
      {
        src: "/community/red-room-lab.jpeg",
        alt: "At an electronics bench in the Red Room makerspace",
        caption: "At the electronics bench in the Red Room",
      },
      {
        src: "/projects/recycler.jpg",
        alt: "Plastic-to-filament recycler machine",
        caption: "Plastic-to-filament recycler for AUB's Makerspace",
      },
    ],
  },
  {
    slug: "nac",
    role: "Volunteer Hiking Guide & Aerial Videographer",
    org: "Nature Adventure Club (NAC)",
    period: "2024 - Present",
    location: "Lebanon",
    card: "Guiding hikes across Lebanon's mountains, valleys, and coastal trails — and flying a drone to capture the landscapes along the way.",
    // dji-6 rather than the hiking portrait: the hero already uses a
    // near-identical hiking shot, and two copies on one page reads badly.
    image: "/gallery/dji-6.jpg",
    intro: [
      "With the Nature Adventure Club I guide hiking trips across Lebanon's mountains, valleys, and coastal trails — handling route planning and on-trail safety while sharing what I know about the local terrain, ecology, and responsible hiking practices.",
      "I also bring a drone. Capturing aerial footage of the landscapes and the people hiking through them documents Lebanon's natural heritage and helps promote the club's outings — some of my favorite shots are in the photography gallery below.",
    ],
    highlights: [
      "Guide hiking trips across Lebanon's mountains, valleys, and coastal trails.",
      "Handle route planning and on-trail safety for groups of hikers.",
      "Share knowledge of local terrain, ecology, and responsible hiking practices.",
      "Capture aerial drone footage of landscapes and participants, producing visual content that documents Lebanon's natural heritage and promotes the club's outings.",
    ],
    gallery: [
      {
        src: "/community/nac-hiking.jpeg",
        alt: "Overlooking a mountain reservoir on a hike in Lebanon",
        caption: "On the trail above a mountain reservoir",
      },
      { src: "/gallery/dji-1.jpg", alt: "Aerial drone photo of Lebanon" },
      { src: "/gallery/dji-4.jpg", alt: "Aerial drone photo of Lebanon" },
      { src: "/gallery/dji-6.jpg", alt: "Aerial drone photo of Lebanon" },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string; // /public path — leave undefined to show a gradient placeholder
  link?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Real-Time GPS-Denied Drone Navigation",
    description:
      "Visual localization system for drones flying without GPS. Autonomous window sizing and correlation-based orientation detection achieve 97% accuracy at 59 FPS on preprocessed satellite maps. MobileNet-V3 embeddings with FAISS similarity search, validated across 75,000 test frames and outperforming transformer methods. Journal paper submitted for publication.",
    tags: ["Python", "PyTorch", "FAISS", "RLHF", "OpenCV"],
    image: "/projects/gps-denied-navigation.png",
    featured: true,
  },
  {
    title: "Autonomous Balloon-Popping Drone",
    description:
      "Autonomous drone using an onboard camera and ultrasonic sensors for real-time navigation, target detection, and approach control. YOLO-based red-balloon detection with lock-on tracking and autonomous path planning actuates a robotic arm for interception. Simulated in AirSim, deployed on hardware via ArduPilot and Raspberry Pi.",
    tags: ["Python", "YOLOv11", "ROS", "AirSim", "ArduPilot", "Raspberry Pi"],
    image: "/projects/balloon-drone.jpg",
  },
  {
    title: "JetTracker AI",
    description:
      "Real-time fighter-jet tracking system using LSTM networks and OpenCV to predict the jet's center position in each video frame, with reinforcement learning for optimal path planning of an autonomous interceptor. Deployed as a dockerized web application.",
    tags: ["Python", "PyTorch", "LSTM", "Reinforcement Learning", "Flask"],
    image: "/projects/jettracker.png",
  },
  {
    title: "Wind Tunnel Instrumentation System",
    description:
      "Precision aerodynamic measurement system using PLC-controlled load cells to measure lift and drag on custom airfoils. A CNN trained with RLHF improves angle-of-attack prediction to 97% accuracy. Built a Flask web dashboard for real-time airfoil analysis and validated flow-straightener designs with ANSYS CFD.",
    tags: ["PLC", "CNN", "RLHF", "ANSYS CFD", "Flask"],
    image: "/projects/wind-tunnel.jpg",
  },
  {
    title: "Autonomous Urban Service Robot",
    description:
      "ROS 2 service robot simulated in Gazebo that autonomously maps an unknown town, then accepts multi-step missions via a custom GUI: supermarket runs, food delivery, and fire-emergency response. Handles dynamic obstacles with real-time replanning and recovery behaviors.",
    tags: ["ROS 2", "Gazebo", "Path Planning", "Nav2"],
    image: "/projects/service-robot.png",
  },
  {
    title: "HVAC Leak-Detection Spider Robot",
    description:
      "Spider-inspired robot with camera-based computer vision and environmental sensors to detect leaks inside HVAC duct systems, then dispenses expanding foam to seal them. Designed and coded in under 20 hours, winning first prize at the 'Build It' hackathon.",
    tags: ["Computer Vision", "Soft Robotics", "Embedded Systems"],
    image: "/projects/spider-robot.jpg",
  },
  {
    title: "Plastic-to-Filament Recycler for 3D Printing",
    description:
      "Sustainable machine that converts used plastic bottles into 3D-printing filament, enabling eco-conscious prototyping at AUB's Makerspace. Reduces plastic waste and lets students create new parts from recycled PET. Featured by MSFEA as 'Made in MSFEA'.",
    tags: ["AutoCAD", "3D Printing", "Materials"],
    image: "/projects/recycler.jpg",
  },
  {
    title: "Self-Balancing Stair-Climbing Delivery Robot",
    description:
      "Self-balancing, stair-climbing robot for indoor restaurants that delivers food while keeping plates perfectly horizontal using real-time IMU feedback and PID control, adapting dynamically to slopes and stair inclines.",
    tags: ["Simulink", "IMU", "PID Control"],
    image: "/projects/delivery-robot.jpg",
  },
  {
    title: "Speed-Competition Racing Boat",
    description:
      "Designed and built a racing boat from concept to final assembly for the MECH 421 manufacturing course, using multiple manufacturing techniques. Won first place in the speed competition.",
    tags: ["Manufacturing", "SolidWorks", "Composites"],
    image: "/projects/boat.jpg",
  },
];

export type Achievement = {
  title: string;
  issuer?: string;
  year?: string;
  description?: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: "GoAERO Challenge, Global Winner",
    issuer: "GoAERO · CraneAERO, Cranfield University",
    year: "2026",
    description:
      "Selected among 11 global winners developing the CRANE autonomous eVTOL aircraft for emergency response.",
  },
  {
    title: "Dean's Honor List",
    issuer: "Maroun Semaan Faculty of Engineering & Architecture, AUB",
    year: "2023 - Present",
    description: "Placed on the Dean's Honor List every semester since enrollment (GPA 4.00/4.00).",
  },
  {
    title: "First Prize, 'Build It' Hackathon",
    issuer: "AUB",
    year: "2024",
    description:
      "HVAC leak-detection spider robot, fully designed and coded in under 20 hours.",
  },
  {
    title: "First Place, Racing Boat Speed Competition",
    issuer: "MECH 421, AUB",
    year: "2024",
    description: "Designed and built a racing boat using multiple manufacturing techniques.",
  },
  {
    title: "Gagnant du défi DELF 2023",
    issuer: "Organisation internationale de la Francophonie",
    year: "2023",
    description:
      "Top ten students in Lebanon for the DELF B2 exam, awarded a trip to France.",
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "Stanford Online · Certification",
    year: "2025",
  },
  {
    title: "Supervised Machine Learning: Regression & Classification",
    issuer: "Stanford Online · Certification",
    year: "2025",
  },
];

export type Publication = {
  title: string;
  venue: string;
  date: string;
  description?: string;
  link?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Real-Time Elevation and Orientation-Aware Visual Localization for GNSS-Denied Drone Navigation",
    venue: "MDPI Drones",
    date: "Jun 2026",
    description:
      "Visual localization for GPS-denied UAV navigation achieving 97% accuracy at 59 FPS, validated across 75,000 frames.",
  },
  {
    title:
      "THC Vape Use Patterns and Device Features: Observations from User-Posted Videos",
    venue: "Research Publication",
    date: "Dec 2025",
    description:
      "A study characterizing how people actually use THC vaping devices, drawn from user-posted video data.",
  },
];

export const education: {
  degree: string;
  school: string;
  period: string;
  note?: string;
}[] = [
  {
    degree: "B.E. in Mechanical Engineering",
    school: "American University of Beirut",
    period: "Aug 2023 - May 2027",
    note: "GPA 4.0/4.0 · Dean's Honor List every semester.",
  },
];

// Leadership & extracurricular involvement (compact list).
// The Red Room and NAC roles live in `community` above with dedicated pages.
export const involvement: { role: string; org: string; period?: string }[] = [
  { role: "Vice President", org: "AUB Automotive Club", period: "2024 - Present" },
  { role: "Technical Lead", org: "AUB Robotics Club", period: "2024 - 2025" },
  { role: "Public Relations Specialist", org: "AEE AUB Student Chapter", period: "2025 - 2026" },
  { role: "Community Volunteer", org: "Children's Cancer Center of Lebanon (CCCL)" },
];

// Drone photography — "for fun" gallery.
// Drop wallpaper-sized shots in /public/gallery and set `src`. Leave `src`
// empty ("") to show a neutral placeholder tile until you add the photo.
export type Shot = { src: string; alt: string; caption?: string };

export const gallery: Shot[] = [
  { src: "/gallery/dji-1.jpg", alt: "Aerial drone photo" },
  { src: "/gallery/dji-2.jpg", alt: "Aerial drone photo" },
  { src: "/gallery/dji-4.jpg", alt: "Aerial drone photo" },
  { src: "/gallery/dji-5.jpg", alt: "Aerial drone photo" },
  { src: "/gallery/dji-6.jpg", alt: "Aerial drone photo" },
  { src: "/gallery/dji-7.jpg", alt: "Aerial drone photo" },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "AI & Machine Learning",
    items: [
      "Reinforcement Learning",
      "RLHF",
      "Multi-Agent RL",
      "Graph Neural Networks",
      "CNNs",
      "LSTMs",
      "Edge AI",
      "PyTorch",
      "TensorFlow",
    ],
  },
  {
    category: "Computer Vision",
    items: [
      "Visual Localization",
      "Image Stitching",
      "Object Detection",
      "YOLO",
      "OpenCV",
    ],
  },
  {
    category: "Autonomy & Robotics",
    items: [
      "SLAM",
      "Sensor Fusion",
      "Kalman Filters",
      "Forward / Inverse Kinematics",
      "Path Planning",
      "Flight Control",
      "GPS-Denied Navigation",
      "ROS 2 / Gazebo",
      "PX4 / ArduPilot",
    ],
  },
  {
    category: "Embedded & Engineering",
    items: [
      "Embedded Systems",
      "Python",
      "C/C++",
      "SolidWorks",
      "ANSYS",
      "Docker",
      "3D Printing",
    ],
  },
];
