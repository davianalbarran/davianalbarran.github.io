export const portfolio = {
  name: "Davian Albarran",
  initials: "DVN",
  role: "Full Stack Software Engineer",
  email: "albarrandavian@gmail.com",
  intro:
    "I am a full-stack software engineer at MITRE building Java plugins, Dockerized geospatial dashboards, and backend services for mission-focused systems. Outside work, I prototype data pipelines, developer tools, and small games across Python, Go, TypeScript, Kotlin, and Rust.",
  about:
    "I am a Latino-American SWE generalist with a software engineering degree, minors in mathematics and computer science, and practical experience across distributed systems, geospatial data, cloud infrastructure, and product-minded web applications.",
  hobbies:
    "Outside of work, I am usually trying new restaurants, reading about space and physics, or chasing whatever technical thread has my attention. Recently that has meant home telemetry, terminal UI prototypes, game development, and the fundamentals behind deep learning.",
  collaboration:
    "I like teams that turn ambiguous physical-world constraints into clear software interfaces: tools, dashboards, data products, and prototypes that make hard systems easier to reason about.",
  links: {
    resume: "/Davian Albarran - Software Engineer Public Release.pdf",
    blog: "https://davianalbarran.substack.com",
    github: "https://github.com/davianalbarran",
    linkedin: "https://www.linkedin.com/in/davian-albarran-abb372241/",
  },
  assets: {
    portrait: "/IMG_9388.JPEG",
    team: "/5A9A5969.JPEG",
    presentation: "/IMG_0044.JPEG",
    githubMark: "/github-mark-white.svg",
  },
  skills: [
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "Bash",
    "Kotlin",
    "C/C++",
    "Rust",
    "Go",
    "React",
    "Vue",
    "Next.js",
    "Node.js",
    "Express",
    "Fastify",
    "NestJS",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "PostGIS",
    "Redis",
    "Kafka",
    "MongoDB",
    "Elasticsearch",
    "GeoServer",
    "AWS S3",
    "AWS Lambda",
    "AWS EC2",
    "REST",
    "gRPC",
    "GraphQL",
    "UNIX",
  ],
  experience: [
    {
      title: "Associate Full Stack Software Engineer",
      org: "MITRE",
      dates: "July 2024 - Present",
      points: [
        "Revamped extensible Java plugin APIs for electronic warfare integration workflows, adding support for new message types and variants.",
        "Built Dockerized geospatial dashboard infrastructure with PostGIS, GeoServer, Elasticsearch, Kibana, and Vue to visualize signal-detection events and user reports.",
        "Wrote Python and Bash development tooling that shortened build workflows, supported Agile planning across a distributed team, and built a Go tool for running quick integration tests.",
      ],
    },
    {
      title: "Full Stack Computer Science Intern",
      org: "MITRE",
      dates: "June 2022 - August 2023",
      points: [
        "Delivered full-stack web features for an FCC accessibility effort supporting deaf and hard-of-hearing users.",
        "Implemented profile-picture storage from AWS S3 through JavaScript frontend work and Node/Express backend services.",
        "Investigated WebRTC feed stitching for more complete agent/caller recordings and optimized data paths across MongoDB, MySQL, and S3.",
      ],
    },
    {
      title: "Private CS Tutor",
      org: "Self-Employment",
      dates: "January 2024 - May 2024",
      points: [
        "Assisted students in designing and developing their Senior Capstone projects.",
        "Worked with technologies including GraphQL, React, Python Flask, PHP, and CodeIgniter.",
      ],
    },
    {
      title: "Residential Life Community Assistant",
      org: "Monmouth University Residential Life",
      dates: "September 2023 - May 2024",
      points: [
        "Supported roughly 200 residents in a team of four.",
        "Assisted residents, made critical emergency decisions, and enforced university policies.",
        "Developed 14 programs and weekly newsletters per semester to foster community and diversity.",
      ],
    },
  ],
  education: {
    school: "Monmouth University",
    location: "West Long Branch, NJ",
    degree: "B.S. in Software Engineering",
    minors: "Minors in Mathematics and Computer Science",
    gpa: "3.74",
    graduation: "May 2024",
    awards: [
      {
        title: "Department of Chemistry and Physics Physics Award",
        detail: "Recognized for outstanding achievement in physics coursework",
        date: "May 2023",
      },
      {
        title: "CSSE Award for Academic Excellence",
        detail:
          "Recognized for maintaining a high GPA throughout the software engineering program",
        date: "April 2024",
      },
      {
        title: "Dean's List",
        detail: "Recognized for academic performance at Monmouth University",
        date: "May 2023",
      },
    ],
  },
  projects: [
    {
      name: "Ring Camera Metrics Tracker",
      type: "Home telemetry platform",
      link: "https://github.com/davianalbarran/ring-camera-metrics-tracker",
      summary:
        "A containerized event-metrics system using Python ingestion, Kafka, Go, Postgres, and Redis to track household Ring camera activity.",
      impact:
        "A current 2026 project exploring durable event pipelines, low-latency metrics, and small-scale observability.",
    },
    {
      name: "ParkShark",
      type: "University parking platform",
      link: "https://github.com/MU-ParkShark/ParkSharkAPI",
      summary:
        "A cloud-native parking management platform for universities with a REST API, AWS services, patent-pending hardware, and an iOS client.",
      impact:
        "Lead backend architect for a 10,000+ line TypeScript, Node, and Express codebase built with designers and product stakeholders.",
    },
    {
      name: "AmiStudio",
      type: "Desktop game prototype",
      link: "https://github.com/davianalbarran/amistudio",
      summary:
        "A Tauri desktop app where users build and nurture a Tamagotchi-like character with RPG stats and multiplayer battle ideas.",
      impact:
        "Connects a long-running interest in games with Rust, TypeScript, desktop UX, and playful simulation design.",
    },
    {
      name: "Developer Environment Tooling",
      type: "Personal systems tooling",
      link: "https://github.com/davianalbarran/setup-mac.sh",
      summary:
        "A collection of public setup scripts and configuration repos for Macs, Raspberry Pi development, Neovim, NvChad, and Emacs.",
      impact:
        "Recent GitHub work that reflects an emphasis on reproducible workstations and UNIX-first workflows.",
    },
    {
      name: "Proto TUI",
      type: "Kotlin terminal UI experiment",
      link: "https://github.com/davianalbarran/proto-tui",
      summary:
        "A prototype Kotlin terminal UI library exploring how to structure interactive command-line interfaces.",
      impact:
        "Part of a broader 2026 thread of systems experiments, including terminal tooling and game challenge repos.",
    },
  ],
};

export const createMailto = ({ name = "", email = "", message = "" } = {}) =>
  `mailto:${portfolio.email}?subject=${encodeURIComponent(
    `Message from ${name || "portfolio visitor"}`,
  )}&body=${encodeURIComponent(`${message}\n\nFrom: ${email}`)}`;
