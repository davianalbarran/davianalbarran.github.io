#import "@preview/basic-resume:0.2.9": *

// Put your personal information here, replacing mine
#let name = "Davian Albarran"
#let email = "albarrandavian@gmail.com"
#let github = "github.com/davianalbarran"
#let linkedin = "linkedin.com/in/davian-albarran"
#let phone = "+1 (786) 205-8840"
#let personal-site = "davianalbarran.github.io"

#show: resume.with(
  author: name,
  // All the lines below are optional.
  // For example, if you want to to hide your phone number:
  // feel free to comment those lines out and they will not show.
  email: email,
  github: github,
  linkedin: linkedin,
  // phone: phone,
  personal-site: personal-site,
  accent-color: "#FF5700",
  font: "New Computer Modern",
  paper: "us-letter",
  author-position: left,
  personal-info-position: left,
)

/*
* Lines that start with == are formatted into section headings
* You can use the specific formatting functions if needed
* The following formatting functions are listed below
* #edu(dates: "", degree: "", gpa: "", institution: "", location: "", consistent: false)
* #work(company: "", dates: "", location: "", title: "")
* #project(dates: "", name: "", role: "", url: "")
* certificates(name: "", issuer: "", url: "", date: "")
* #extracurriculars(activity: "", dates: "")
* There are also the following generic functions that don't apply any formatting
* #generic-two-by-two(top-left: "", top-right: "", bottom-left: "", bottom-right: "")
* #generic-one-by-two(left: "", right: "")
*/

== Work Experience

#work(
  title: "Associate Full Stack Software Engineer",
  location: "Shrewsbury, NJ",
  company: "MITRE",
  dates: dates-helper(start-date: "Jul 2024", end-date: "Present"),
)
- Revamped four extensible Java plugins with well-documented APIs for the U.S. Army's Electronic Warfare Integration team, enabling seamless message transactions and mission tracking.
  - Enabled sending 3 new message types with 5 variants each.
- Spearheaded the creation of a novel, Dockerized dashboard system that visualizes signal detection events for the Army, enhancing situational awareness with user-friendly interfaces.
  - Constructed and deployed a Dockerized PostGIS database that enabled real-time geospatial data processing with a minimum 95% cache hit rate, improving situational awareness for SIGINT, COMMINT, and ELINT teams.
  - Configured and maintained a GeoServer Docker container to generate map tiles of geospatial data, supporting thousands of concurrent map tile requests and enhancing data visualization.
  - Influenced implementation of a prototype dashboard with Elasticsearch and Kibana Docker containers.
  - Developed a Vue web dashboard integrating with a GeoServer Docker container, enabling user interaction with geospatial data and adding the ability for users to submit their own reports.
  - Crafted developer tooling and build automations with Python and BASH scripts, streamlining development workflows and reducing build time by 50%, improving infrastructure efficiency.
  - Built a Go tool for running quick integration tests, giving developers a faster feedback loop before committing service changes.
- Coordinated with task leaders with estimating Agile story points for tasks, managing project timelines, and helped maintain the team Kanban board.

#work(
  title: "Full Stack Computer Science Intern",
  location: "Eatontown, NJ",
  company: "MITRE",
  dates: dates-helper(start-date: "Jun 2022", end-date: "Aug 2023"),
)
- Made key web development contributions for an FCC effort providing aid to the deaf and hard of hearing as a full stack engineer in an Agile environment.
- Implemented user profile picture feature, managing end-to-end development from backend storage in AWS S3 to frontend integration using vanilla JavaScript, enabling hundreds of agents and managers to personalize profiles.
- Investigated and developed a solution to stitch together WebRTC feeds for agent/caller recordings during a part-time assignment, improving recording completeness by 50%.
- Delivered front-end features using HTML, CSS, JavaScript, React and jQuery.
- Maintained and optimized backend endpoints using Node.js and Express, reducing average API latency by 10ms for the FCC application.
- Managed data storage across AWS S3, MongoDB, and MySQL, handling TBs of data to optimize user data, profile picture, and audio caption storage.
- Transitioned from full-time to part-time while continuing contributions during the academic year.

== Education

#edu(
  institution: "Monmouth University",
  location: "West Long Branch, NJ",
  dates: dates-helper(start-date: "Sep 2020", end-date: "May 2024"),
  degree: "Bachelor's of Science, Software Engineering w/ Minors in Mathematical & Computer Science",
  gpa: 3.74,
  // Uncomment the line below if you want edu formatting to be consistent with everything else
  consistent: true
)
- GPA: 3.74
- Awards: Dean's List, Dep. of Chemistry and Physics Physics Award, CSSE Award for Academic Excellence

== Projects
#project(
  name: "Ring Camera Metrics Tracker",
  // Role is optional
  role: "Owner/Maintainer",
  // Dates is optional
  dates: dates-helper(start-date: "Jan 2026", end-date: "Present"),
  // URL is also optional
  url: "https://github.com/davianalbarran/ring-camera-metrics-tracker",
)
- Architected end-to-end, containerized system using Python, Kafka, Go, Postgres, and Redis to track Ring camera metrics for my household of two users.
- Developed a Python ingestion service to read events from the Ring API, processing 45 events per day, and producing Kafka events.
- Engineered a Go consumer service to consume Kafka events and write to a Postgres database for durable, long-term event storage, capable of handling 10 TB of data.
- Implemented Redis in-memory storage, improving metric retrieval latency by 15x for efficient access to hot, low-latency metrics.

#project(
  name: "ParkShark",
  // Role is optional
  role: "Owner/Maintainer",
  // Dates is optional
  dates: dates-helper(start-date: "Nov 2023", end-date: "Present"),
  // URL is also optional
  url: "https://github.com/MU-ParkShark/ParkSharkAPI",
)
- Lead architect of backend development of a cloud-native university parking management platform using AWS cloud services.
- Designed and maintained a 10,000+ line codebase in Node.js, Express, and Typescript.
- Collaborated cross-functionally with UI designers and a product stakeholder to define product requirements and deliver MVP features on schedule.
- *Note: the above URL is the public facing URL, but does not fully encapsulate the whole, up to date system.*

// #extracurriculars(
//   activity: "Science Olympiad Volunteering",
//   dates: "Sep 2023 --- Present"
// )
// - Volunteer and write tests for tournaments, including LA Regionals and SoCal State \@ Caltech

// #certificates(
//   name: "OSCP",
//   issuer: "Offensive Security",
//   // url: "",
//   date: "Oct 2024",
// )

== Skills
- *Programming Languages*: Java, JavaScript/TypeScript, HTML/CSS, Python, Bash, Kotlin, C/C++, Rust, Go
- *Technologies*: NextJS, ReactJS, tRPC, Node, Express, Fastify, NestJS, Docker, Kubernetes, Vue, PostgreSQL, PostGIS, MongoDB, Elasticsearch, Git, UNIX, Tailwind CSS, Bootstrap, NGINX, AWS Lambda, AWS EC2, REST, gRPC, GraphQL, Codex

== Extracurricular Activities

#extracurriculars(
  activity: "Hackathons",
  dates: dates-helper(start-date: "Sep 2019", end-date: "Present"),
)
- Co-Founded a high school hack club, introducing competitive programming concepts to 15 students.
- Moderated a hackathon for 20 participants, providing technical support and ensuring adherence to time limits.
- Participated and won an internal company hackathon at MITRE focused on adding monitoring capabilities to our internal software wellness training platform for supervisors to be able to track their staffs completed trainings.
  - Developed monitoring capabilities by adding a database migration for supervisor roles, which would impact around 100 supervisors in our division.
