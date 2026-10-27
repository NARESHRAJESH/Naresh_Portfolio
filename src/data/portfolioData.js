export const personalInfo = {
  name: "Naresh R.",
  role: "Python Full Stack Developer",
  targetRole: "Junior Full Stack Developer",
  targetLocation: "Dubai, UAE",
  availabilityStatus: "Open to Work • Based in Dubai, UAE",
  availabilitySubtext: "Already in Dubai and available for interviews and to start right away",
  educationSummary: "MCA (CGPA 8.0/10) • BCA (CGPA 7.4/10)",
  shortIntro:
    "Junior Python Full Stack Developer with hands-on expertise building end-to-end web applications and REST APIs using Python, Django, React, and MySQL. Passionate about clean code, robust relational data modeling, and delivering high-performance digital solutions for companies in Dubai and the UAE.",
  about: {
    lead: "I'm Naresh, a Python Full Stack Developer based in Dubai who loves turning ideas into reliable web software, from the database schema to the last pixel of the UI.",
    paragraphs: [
      "I specialize in bridging powerful backend logic in Python and Django with dynamic, responsive user interfaces in React. My focus is on writing clean, modular code, designing efficient relational databases in MySQL, and consuming well-structured RESTful APIs.",
      "With an academic foundation in Computer Applications (MCA CGPA 8.0/10 and BCA CGPA 7.4/10) alongside practical industry exposure as a Data Analytics Intern, I combine analytical thinking with full-stack software development. I recently moved to Dubai and I'm now looking for my first full-time role as a junior full stack developer, where I can keep learning and add value from day one."
    ],
    highlights: [
      {
        title: "Full-Stack Development",
        description: "Building scalable web apps using Django REST Framework and React components."
      },
      {
        title: "Database Engineering",
        description: "Designing normalized schemas, complex joins, and query optimization in MySQL."
      },
      {
        title: "Analytical Problem Solver",
        description: "Practical internship experience in corporate data analytics, KPI reporting, and insights."
      },
      {
        title: "Based in Dubai",
        description: "Already in the UAE and open to work. Available for in-person interviews and quick onboarding."
      }
    ]
  },
  links: {
    github: "https://github.com/NARESHRAJESH",
    linkedin: "https://www.linkedin.com/in/naresh-r-17b864250/",
    email: "nareshrajesh2003@gmail.com"
  }
};

export const skillsData = [
  {
    category: "Frontend",
    tagline: "Responsive, component-driven user interfaces",
    skills: [
      { name: "React.js", level: "Core", note: "Hooks, state management, reusable components" },
      { name: "JavaScript", level: "ES6+", note: "Async/await, DOM, modular design" },
      { name: "HTML5", level: "Advanced", note: "Semantic structure & accessibility" },
      { name: "CSS3", level: "Advanced", note: "Flexbox, Grid, animations, responsive design" }
    ]
  },
  {
    category: "Backend",
    tagline: "Robust server logic, security & API integration",
    skills: [
      { name: "Python", level: "Core", note: "Object-oriented programming, data structures" },
      { name: "Django", level: "Core", note: "MVT architecture, ORM, authentication" },
      { name: "Django REST Framework", level: "Core", note: "API endpoints, serializers, permissions" },
      { name: "RESTful APIs", level: "Proficient", note: "CRUD operations, HTTP status codes, JSON" }
    ]
  },
  {
    category: "Database",
    tagline: "Reliable data persistence & efficient querying",
    skills: [
      { name: "MySQL", level: "Core", note: "Schema design, relational modeling" },
      { name: "Relational DB Design", level: "Proficient", note: "Normalization, primary & foreign keys" },
      { name: "SQL Queries", level: "Proficient", note: "Joins, aggregations, subqueries, indexing" }
    ]
  },
  {
    category: "Tools",
    tagline: "Version control, analytics & developer workflow",
    skills: [
      { name: "Git", level: "Proficient", note: "Branching, committing, merge workflows" },
      { name: "GitHub", level: "Proficient", note: "Repository management & code collaboration" },
      { name: "Power BI", level: "Proficient", note: "Interactive dashboards, business intelligence" },
      { name: "VS Code", level: "Advanced", note: "Modern IDE setup, extensions & debugging" },
      { name: "Postman", level: "Proficient", note: "API testing, validation & documentation" }
    ]
  }
];

export const projectsData = [
  {
    id: "eventhub",
    title: "EventHub",
    subtitle: "Full-Stack Event Management & Booking Platform",
    category: "Full-Stack Web App",
    techStack: ["React", "Django", "Django REST Framework", "MySQL"],
    shortDescription:
      "A complete full-stack web application providing streamlined event discovery, browsing, ticket booking workflows, and secure role-based access for organizers and attendees.",
    features: [
      "Event discovery feed with categories and real-time availability",
      "Interactive booking flow and reservation status management",
      "Role-based permissions separating attendees and event organizers",
      "Robust REST API endpoints built with Django REST Framework",
      "Relational MySQL database managing events, users, and ticket bookings"
    ],
    architecture: {
      frontend: "React with modular component tree and responsive layouts",
      backend: "Django with Django REST Framework serializers and views",
      database: "MySQL relational schema with constraints and foreign keys"
    },
    links: {
      github: "https://github.com/NARESHRAJESH",
      githubStatus: "Repository available on GitHub profile",
      demoUrl: null,
      demoStatus: "Live Demo link pending deployment"
    },
    visualBadge: "Full-Stack",
    accentColor: "#e2491f"
  },
  {
    id: "quizapp",
    title: "QuizApp",
    subtitle: "Interactive Timed Quiz Platform with CRUD Operations",
    category: "Frontend Web Application",
    techStack: ["React", "JavaScript", "Local Storage", "CSS3"],
    shortDescription:
      "A responsive interactive quiz platform featuring dynamic question rendering, an active countdown timer, full CRUD operations for custom quizzes, and local storage state persistence.",
    features: [
      "Dynamic quiz timer counting down per round with automatic submission",
      "Full CRUD functionality to create, read, update, and delete custom quiz sets",
      "Persistent state and high-score tracking using browser Local Storage",
      "Instant feedback with score evaluation and answer review breakdown",
      "Clean, mobile-first responsive UI built with pure React state"
    ],
    architecture: {
      frontend: "React functional components and custom hooks",
      storage: "Browser Local Storage API for client-side persistence",
      styling: "Modern CSS3 responsive flex/grid layouts"
    },
    links: {
      github: "https://github.com/NARESHRAJESH",
      githubStatus: "Repository available on GitHub profile",
      demoUrl: null,
      demoStatus: "Live Demo link pending deployment"
    },
    visualBadge: "React / State",
    accentColor: "#0f766e"
  },
  {
    id: "hr-analytics",
    title: "HR Analytics Dashboard",
    subtitle: "Workforce Metrics & Attrition Intelligence",
    category: "Business Intelligence & Analytics",
    techStack: ["Power BI", "Data Analytics", "Data Modeling", "DAX"],
    shortDescription:
      "An interactive Power BI dashboard project transforming complex human resources datasets into actionable executive insights on employee retention, attrition drivers, and departmental performance.",
    features: [
      "Interactive KPI cards tracking total headcount, attrition rate, and satisfaction scores",
      "Dynamic filtering by department, tenure, age group, and job roles",
      "Data modeling and DAX measures for retention metrics and trends",
      "Actionable visual breakdown to assist HR leaders in workforce planning"
    ],
    architecture: {
      tool: "Microsoft Power BI Desktop",
      modeling: "Star schema data modeling with calculated DAX columns and measures",
      visualization: "Custom cross-filtered interactive charts and KPI scorecards"
    },
    links: {
      github: "https://github.com/NARESHRAJESH",
      githubStatus: "Project details on GitHub profile",
      demoUrl: null,
      demoStatus: "Power BI report file available upon request"
    },
    visualBadge: "Power BI",
    accentColor: "#b45309"
  },
  {
    id: "food-delivery-sql",
    title: "Online Food Delivery SQL Project",
    subtitle: "Relational Database Design & Analytics Engine",
    category: "Database & SQL Engineering",
    techStack: ["MySQL", "Relational Database Design", "SQL Queries"],
    shortDescription:
      "A complete relational database project for an online food delivery ecosystem, featuring normalized schema design, complex multi-table queries, and performance analytics for customers, orders, and restaurants.",
    features: [
      "Normalized relational schema (3NF) modeling customers, restaurants, menus, and orders",
      "Complex SQL queries utilizing INNER/LEFT JOINs, subqueries, and window functions",
      "Business metrics calculation: customer lifetime value, top-selling menus, delivery turnaround",
      "Data integrity assurance with foreign key constraints, checks, and indexed lookups"
    ],
    architecture: {
      engine: "MySQL 8.0",
      design: "Normalized relational schema with ER relationships",
      queries: "Analytical queries, aggregation routines, and indexing strategies"
    },
    links: {
      github: "https://github.com/NARESHRAJESH",
      githubStatus: "SQL scripts available on GitHub profile",
      demoUrl: null,
      demoStatus: "Database schema & query suite documented on GitHub"
    },
    visualBadge: "MySQL / SQL",
    accentColor: "#0f766e"
  }
];

export const experienceData = [
  {
    role: "Data Analytics Intern",
    company: "Customer Centria Enterprise Solutions Pvt. Ltd.",
    period: "September 2025 – March 2026",
    type: "Internship",
    location: "Enterprise Solutions",
    responsibilities: [
      "Analyzed business data to discover patterns, trends, and actionable insights for enterprise clients.",
      "Collaborated with cross-functional teams to clean, validate, and prepare data pipelines for analytical modeling.",
      "Assisted in creating analytical dashboards and visual reports to communicate key performance metrics to stakeholders.",
      "Applied structured SQL queries and data analysis techniques to optimize reporting accuracy."
    ],
    skillsApplied: ["Data Analytics", "SQL", "Data Modeling", "Business Intelligence", "Problem-Solving"]
  }
];

export const educationData = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "KGiSL Institute of Information Management",
    location: "Coimbatore, India",
    period: "2024 – 2026",
    grade: "CGPA 8.0 / 10",
    highlights: [
      "Advanced coursework in Software Engineering, Full-Stack Web Development, and Database Systems.",
      "Consistent academic record with CGPA 8.0/10.",
      "Practical project work focused on Python backend architectures, RESTful APIs, and modern frontend frameworks."
    ]
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Sri Krishna Adithya College of Arts and Science",
    location: "Coimbatore, India",
    period: "2021 – 2024",
    grade: "CGPA 7.4 / 10",
    highlights: [
      "Graduated with CGPA 7.4/10 with strong grounding in Computer Science fundamentals, Object-Oriented Programming, and Relational Database Concepts.",
      "Hands-on web technologies including HTML5, CSS3, JavaScript, and relational SQL.",
      "Active participant in technical seminars and coding workshops."
    ]
  }
];

export const certificatesData = [
  {
    id: "python-fullstack-idm",
    title: "Python Full Stack Developer",
    organization: "IDM Tech Park",
    location: "Coimbatore",
    date: "15 September 2026",
    dateLabel: "Certificate Completion Date",
    type: "Professional Certification",
    description:
      "Comprehensive certification in Python Full Stack Development encompassing Python, Django, REST APIs, database design with MySQL, and responsive frontend integration.",
    skills: ["Python", "Django", "Django REST Framework", "MySQL", "Full Stack Architecture"],
    imageFileName: "python-fullstack-idm.jpg"
  },
  {
    id: "web-dev-internship-segalys",
    title: "Web Developer Internship",
    organization: "Segalys",
    location: "Internship",
    date: "2 May 2026 to 31 August 2026",
    dateLabel: "Internship Period",
    type: "Internship Experience Certificate",
    description:
      "Completed 4-month Web Developer Internship focusing on modern frontend components, responsive layouts, web performance, and client-side logic.",
    skills: ["Web Development", "JavaScript", "Frontend Engineering", "Responsive UI", "Code Collaboration"],
    imageFileName: "web-developer-segalys.jpg"
  }
];
