export interface RoadmapPhase {
  title: string;
  duration: string;
  steps: string[];
  dos: string[];
  donts: string[];
}

export interface Salary {
  region: string;
  average: string;
  entry: string;
  senior: string;
}

export interface Education {
  degreeRequired: boolean;
  preferredDegrees: string[];
  noDegreePath: string[];
}

export interface MarketTrend {
  demandLevel: "High" | "Medium" | "Low" | "Moderate" | "Very High";
  popularity: string;
  jobGrowth: string;
  companies: string[];
}

export interface Career {
  id: string;
  title: string;
  description: string;
  whatIs: string;
  jobDescription: string;
  salary: Salary[];
  education: Education;
  marketTrends: MarketTrend;
  certifications: string[];
  howToStart: {
    title: string;
    steps: string[];
    bestTimeToStart: "Anytime" | "Seasonal";
    weeklyHours: string;
  };
  whereToApply: string[];
  roadmap: RoadmapPhase[];
  requirements: {
    technical: string[];
    softSkills: string[];
    tools: string[];
  };
  resources: {
    youtube: string[];
    free: string[];
    paid: string[];
    tools: string[];
    communities: string[];
    events: string[];
  };
}

export const careers: Career[] = [
  {
    id: "mern-full-stack",
    title: "MERN Stack Developer",
    description:
      "A specialist in MongoDB, Express, React, and Node.js stack development, responsible for building full-stack web applications using JavaScript technologies.",
    whatIs:
      "MERN stack is a popular JavaScript framework for developing full-stack web applications. It includes MongoDB (database), Express.js (backend framework), React.js (frontend library), and Node.js (runtime environment).",
    jobDescription:
      "MERN stack developers design and implement dynamic web applications using all layers of the MERN stack. They develop both client-side and server-side applications, integrate APIs, manage databases, and ensure performance optimization.",
    education: {
      degreeRequired: true,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Software Engineering",
      ],
      noDegreePath: [
        "Coding bootcamps",
        "Online certifications",
        "Open-source contributions",
        "Self-learning through projects",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Rising",
      jobGrowth: "22% (2023-now)",
      companies: [
        "Startups",
        "FAANG Companies",
        "Tech Consultancies",
        "E-commerce Giants",
      ],
    },
    certifications: [
      "MongoDB University Certification",
      "AWS Certified Developer",
      "React Nanodegree (Udacity)",
      "Node.js Certified Developer",
    ],
    salary: [
      {
        region: "India",
        average: "₹6 LPA",
        entry: "₹3.5 LPA",
        senior: "₹15 LPA",
      },
      {
        region: "USA",
        average: "$95,000",
        entry: "$65,000",
        senior: "$140,000",
      },
      {
        region: "Europe",
        average: "€55,000",
        entry: "€35,000",
        senior: "€80,000",
      },
    ],
    howToStart: {
      title: "Getting Started with MERN",
      steps: [
        "Learn JavaScript fundamentals (ES6+)",
        "Master React with modern hooks and component-based architecture",
        "Understand Node.js and Express.js for backend development",
        "Learn MongoDB for database management",
        "Build full-stack projects with authentication and CRUD operations",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Naukri.com",
      "AngelList",
      "RemoteOK",
      "Upwork",
      "Toptal",
    ],
    roadmap: [
      {
        title: "Foundation Phase",
        duration: "1-2 months",
        steps: [
          "HTML5 and CSS3 fundamentals",
          "JavaScript (ES6+ features)",
          "Basic Git & GitHub usage",
          "Command line basics",
        ],
        dos: [
          "Build responsive layouts",
          "Practice DOM manipulation",
          "Learn version control",
        ],
        donts: [
          "Skip CSS fundamentals",
          "Ignore mobile optimization",
          "Neglect code organization",
        ],
      },
      {
        title: "Frontend Mastery",
        duration: "2-3 months",
        steps: [
          "React fundamentals (Hooks, Context API)",
          "State management (Redux, Zustand)",
          "React Router for navigation",
          "Component lifecycle and API integration",
        ],
        dos: [
          "Build 3+ React projects",
          "Implement authentication",
          "Optimize performance",
        ],
        donts: [
          "Overuse third-party libraries",
          "Ignore accessibility best practices",
          "Skip testing (Jest, React Testing Library)",
        ],
      },
      {
        title: "Backend & Integration",
        duration: "3-4 months",
        steps: [
          "Node.js and Express.js basics",
          "MongoDB and Mongoose for database management",
          "REST API development",
          "Authentication with JWT & OAuth",
        ],
        dos: [
          "Build full-stack applications",
          "Implement proper error handling",
          "Use environment variables for security",
        ],
        donts: [
          "Store secrets in code",
          "Ignore data validation and sanitization",
          "Skip API documentation",
        ],
      },
    ],
    requirements: {
      technical: [
        "JavaScript and TypeScript expertise",
        "React component architecture",
        "REST/GraphQL API development",
        "Database design and optimization",
        "Version control (Git/GitHub)",
      ],
      softSkills: [
        "Problem-solving and debugging",
        "Agile methodology understanding",
        "Effective team collaboration",
        "Continuous learning mindset",
      ],
      tools: [
        "Postman API Client",
        "MongoDB Compass",
        "VS Code with relevant extensions",
        "Jest Testing Framework",
      ],
    },
    resources: {
      youtube: [
        "Traversy Media - MERN Stack Tutorials",
        "Academind - Advanced React Patterns",
        "FreeCodeCamp - Full Stack Projects",
        "The Net Ninja - MERN Crash Course",
        "Codevolution - React & Node.js Guides",
      ],
      free: [
        "FreeCodeCamp MERN Curriculum",
        "MDN Web Docs (JavaScript, HTML, CSS)",
        "React Official Documentation",
        "Node.js Best Practices",
      ],
      paid: [
        "MERN Stack Front To Back (Udemy)",
        "Full Stack Open 2024 (University of Helsinki)",
        "Advanced React Patterns (Frontend Masters)",
      ],
      tools: [
        "Visual Studio Code",
        "Postman",
        "MongoDB Atlas",
        "Docker for Deployment",
      ],
      communities: [
        "Dev.to MERN Community",
        "Reddit r/reactjs",
        "Hashnode Developer Network",
        "MERN Stack Facebook Group",
      ],
      events: [
        "React Summit Worldwide",
        "Node.js Interactive",
        "MongoDB World Conference",
      ],
    },
  },
  {
    id: "mean-full-stack",
    title: "MEAN Stack Developer",
    description:
      "A specialist in MongoDB, Express, Angular, and Node.js stack development, responsible for building full-stack web applications using JavaScript technologies.",
    whatIs:
      "MEAN stack is a popular JavaScript framework for developing full-stack web applications. It includes MongoDB (database), Express.js (backend framework), Angular (frontend framework), and Node.js (runtime environment).",
    jobDescription:
      "MEAN stack developers design and implement dynamic web applications using all layers of the MEAN stack. They develop both client-side and server-side applications, integrate APIs, manage databases, and ensure performance optimization.",
    education: {
      degreeRequired: true,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Software Engineering",
      ],
      noDegreePath: [
        "Coding bootcamps",
        "Online certifications",
        "Open-source contributions",
        "Self-learning through projects",
      ],
    },
    marketTrends: {
      demandLevel: "Moderate",
      popularity: "Stable",
      jobGrowth: "18% (2023-now)",
      companies: [
        "Startups",
        "Enterprise Software Firms",
        "Tech Consultancies",
        "Government & Banking Sector",
      ],
    },
    certifications: [
      "MongoDB University Certification",
      "Google Associate Cloud Engineer",
      "Angular Developer Certification",
      "Node.js Certified Developer",
    ],
    salary: [
      {
        region: "India",
        average: "₹5.5 LPA",
        entry: "₹3 LPA",
        senior: "₹13 LPA",
      },
      {
        region: "USA",
        average: "$90,000",
        entry: "$60,000",
        senior: "$130,000",
      },
      {
        region: "Europe",
        average: "€50,000",
        entry: "€30,000",
        senior: "€75,000",
      },
    ],
    howToStart: {
      title: "Getting Started with MEAN",
      steps: [
        "Learn JavaScript fundamentals (ES6+)",
        "Master Angular for frontend development",
        "Understand Node.js and Express.js for backend development",
        "Learn MongoDB for database management",
        "Build full-stack projects with authentication and CRUD operations",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Naukri.com",
      "AngelList",
      "RemoteOK",
      "Upwork",
      "Toptal",
    ],
    roadmap: [
      {
        title: "Foundation Phase",
        duration: "1-2 months",
        steps: [
          "HTML5 and CSS3 fundamentals",
          "JavaScript (ES6+ features)",
          "Basic Git & GitHub usage",
          "Command line basics",
        ],
        dos: [
          "Build responsive layouts",
          "Practice DOM manipulation",
          "Learn version control",
        ],
        donts: [
          "Skip CSS fundamentals",
          "Ignore mobile optimization",
          "Neglect code organization",
        ],
      },
      {
        title: "Frontend Mastery",
        duration: "2-3 months",
        steps: [
          "Angular fundamentals (Components, Directives, Services)",
          "State management (RxJS, NgRx)",
          "Routing and lazy loading",
          "Component lifecycle and API integration",
        ],
        dos: [
          "Build 3+ Angular projects",
          "Implement authentication",
          "Optimize performance",
        ],
        donts: [
          "Overuse third-party libraries",
          "Ignore accessibility best practices",
          "Skip testing (Jasmine, Karma)",
        ],
      },
      {
        title: "Backend & Integration",
        duration: "3-4 months",
        steps: [
          "Node.js and Express.js basics",
          "MongoDB and Mongoose for database management",
          "REST API development",
          "Authentication with JWT & OAuth",
        ],
        dos: [
          "Build full-stack applications",
          "Implement proper error handling",
          "Use environment variables for security",
        ],
        donts: [
          "Store secrets in code",
          "Ignore data validation and sanitization",
          "Skip API documentation",
        ],
      },
    ],
    requirements: {
      technical: [
        "JavaScript and TypeScript expertise",
        "Angular component-based architecture",
        "REST/GraphQL API development",
        "Database design and optimization",
        "Version control (Git/GitHub)",
      ],
      softSkills: [
        "Problem-solving and debugging",
        "Agile methodology understanding",
        "Effective team collaboration",
        "Continuous learning mindset",
      ],
      tools: [
        "Postman API Client",
        "MongoDB Compass",
        "VS Code with relevant extensions",
        "Jasmine & Karma Testing Framework",
      ],
    },
    resources: {
      youtube: [
        "Academind - Angular Tutorials",
        "Traversy Media - MEAN Stack Projects",
        "The Net Ninja - Angular & Node.js",
        "Programming with Mosh - Angular Crash Course",
        "Codevolution - MEAN Stack Development",
      ],
      free: [
        "FreeCodeCamp MEAN Curriculum",
        "MDN Web Docs (JavaScript, HTML, CSS)",
        "Angular Official Documentation",
        "Node.js Best Practices",
      ],
      paid: [
        "MEAN Stack Complete Guide (Udemy)",
        "Full Stack Angular & Node.js (Pluralsight)",
        "Advanced Angular Patterns (Frontend Masters)",
      ],
      tools: [
        "Visual Studio Code",
        "Postman",
        "MongoDB Atlas",
        "Docker for Deployment",
      ],
      communities: [
        "Dev.to Angular Community",
        "Reddit r/angular",
        "Hashnode Developer Network",
        "MEAN Stack Facebook Group",
      ],
      events: [
        "AngularConnect Conference",
        "Node.js Interactive",
        "MongoDB World Conference",
      ],
    },
  },
  {
    id: "java-full-stack",
    title: "Java Full Stack Developer",
    description:
      "A specialist in Java-based full-stack development, responsible for building scalable web applications using Java for backend and modern frontend technologies.",
    whatIs:
      "Java Full Stack development refers to the ability to work on both the frontend and backend of a web application using Java, Spring Boot, and frameworks like Angular or React.",
    jobDescription:
      "Java full stack developers design and implement web applications, working with databases, APIs, backend logic using Java, and frontend frameworks. They optimize performance, ensure security, and handle deployment.",
    education: {
      degreeRequired: true,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Software Engineering",
      ],
      noDegreePath: [
        "Coding bootcamps",
        "Online certifications",
        "Open-source contributions",
        "Self-learning through projects",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Stable",
      jobGrowth: "20% (2023-now)",
      companies: [
        "Banking & Finance",
        "Enterprise Software Firms",
        "Tech Consultancies",
        "E-commerce Platforms",
      ],
    },
    certifications: [
      "Oracle Certified Java Developer",
      "Spring Professional Certification",
      "AWS Certified Developer",
      "Google Associate Cloud Engineer",
    ],
    salary: [
      {
        region: "India",
        average: "₹7 LPA",
        entry: "₹4 LPA",
        senior: "₹18 LPA",
      },
      {
        region: "USA",
        average: "$100,000",
        entry: "$70,000",
        senior: "$150,000",
      },
      {
        region: "Europe",
        average: "€60,000",
        entry: "€40,000",
        senior: "€90,000",
      },
    ],
    howToStart: {
      title: "Getting Started with Java Full Stack",
      steps: [
        "Learn Java fundamentals (OOP, Collections, Streams)",
        "Master Spring Boot for backend development",
        "Learn databases like MySQL, PostgreSQL, or MongoDB",
        "Work with frontend frameworks like React or Angular",
        "Build full-stack projects with authentication and APIs",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Naukri.com",
      "Indeed",
      "RemoteOK",
      "Upwork",
      "Toptal",
    ],
    roadmap: [
      {
        title: "Foundation Phase",
        duration: "1-2 months",
        steps: [
          "Core Java (OOP, Data Structures, Collections)",
          "Basic SQL & Database concepts",
          "HTML, CSS, and JavaScript fundamentals",
          "Git & GitHub for version control",
        ],
        dos: [
          "Write clean and efficient Java code",
          "Practice SQL queries",
          "Build basic frontend UI",
        ],
        donts: [
          "Ignore Java basics",
          "Neglect database normalization",
          "Skip frontend fundamentals",
        ],
      },
      {
        title: "Backend Mastery",
        duration: "2-3 months",
        steps: [
          "Spring Boot & REST API development",
          "Hibernate & JPA for database integration",
          "Authentication with JWT & OAuth",
          "Microservices architecture",
        ],
        dos: [
          "Build RESTful APIs",
          "Use Spring Boot with databases",
          "Implement authentication and authorization",
        ],
        donts: [
          "Store passwords in plain text",
          "Ignore proper exception handling",
          "Neglect API documentation",
        ],
      },
      {
        title: "Frontend & Full Stack Development",
        duration: "3-4 months",
        steps: [
          "Learn React.js or Angular for UI development",
          "Integrate frontend with backend APIs",
          "State management (Redux, NgRx)",
          "Deploy full-stack applications",
        ],
        dos: [
          "Build interactive UIs",
          "Optimize performance and security",
          "Use responsive design principles",
        ],
        donts: [
          "Overuse third-party libraries",
          "Skip frontend testing",
          "Ignore browser compatibility",
        ],
      },
    ],
    requirements: {
      technical: [
        "Java & Spring Boot expertise",
        "REST API & Microservices development",
        "Database design (SQL & NoSQL)",
        "Frontend development with React or Angular",
        "Version control (Git/GitHub)",
      ],
      softSkills: [
        "Problem-solving and debugging",
        "Agile methodology understanding",
        "Effective team collaboration",
        "Continuous learning mindset",
      ],
      tools: [
        "Postman API Client",
        "MySQL Workbench / MongoDB Compass",
        "IntelliJ IDEA / Eclipse",
        "JUnit & Mockito for testing",
      ],
    },
    resources: {
      youtube: [
        "Java Brains - Spring Boot & Microservices",
        "FreeCodeCamp - Full Stack Java Development",
        "Codevolution - Java & Spring Boot",
        "The Net Ninja - JavaScript & React",
        "Traversy Media - Full Stack Java",
      ],
      free: [
        "Java Tutorials (Oracle Docs)",
        "Spring Boot Documentation",
        "MDN Web Docs (JavaScript, HTML, CSS)",
        "PostgreSQL & MySQL Documentation",
      ],
      paid: [
        "Spring Boot & Microservices (Udemy)",
        "Full Stack Java Developer (Coursera)",
        "Advanced Java Programming (Pluralsight)",
      ],
      tools: [
        "IntelliJ IDEA / Eclipse",
        "Postman",
        "Docker for Deployment",
        "AWS / Google Cloud for cloud services",
      ],
      communities: [
        "Dev.to Java Community",
        "Reddit r/java",
        "Stack Overflow Java Discussions",
        "Java & Spring Boot Facebook Groups",
      ],
      events: [
        "SpringOne Conference",
        "Oracle JavaOne",
        "Devoxx Java Conference",
      ],
    },
  },
  {
    id: "python-full-stack",
    title: "Python Full Stack Developer",
    description:
      "A specialist in Python-based full-stack development, responsible for building web applications using Django or Flask for the backend and modern frontend technologies.",
    whatIs:
      "Python Full Stack development involves working on both the frontend and backend of web applications using Python, Django or Flask for backend, and frameworks like React, Vue, or Angular for the frontend.",
    jobDescription:
      "Python full stack developers design and implement scalable web applications, working with databases, APIs, backend logic using Python, and frontend frameworks. They optimize performance, ensure security, and handle deployment.",
    education: {
      degreeRequired: true,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Software Engineering",
      ],
      noDegreePath: [
        "Coding bootcamps",
        "Online certifications",
        "Open-source contributions",
        "Self-learning through projects",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Rising",
      jobGrowth: "25% (2023-now)",
      companies: [
        "AI & Machine Learning Companies",
        "Tech Startups",
        "E-commerce Platforms",
        "Data-Driven Enterprises",
      ],
    },
    certifications: [
      "Python Institute PCEP Certification",
      "AWS Certified Developer",
      "Google Associate Cloud Engineer",
      "Django or Flask Certification",
    ],
    salary: [
      {
        region: "India",
        average: "₹7.5 LPA",
        entry: "₹4 LPA",
        senior: "₹18 LPA",
      },
      {
        region: "USA",
        average: "$105,000",
        entry: "$75,000",
        senior: "$155,000",
      },
      {
        region: "Europe",
        average: "€60,000",
        entry: "€42,000",
        senior: "€90,000",
      },
    ],
    howToStart: {
      title: "Getting Started with Python Full Stack",
      steps: [
        "Learn Python fundamentals (OOP, Data Structures, Algorithms)",
        "Master Django or Flask for backend development",
        "Learn databases like PostgreSQL, MySQL, or MongoDB",
        "Work with frontend frameworks like React or Vue.js",
        "Build full-stack projects with authentication and APIs",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Naukri.com",
      "Indeed",
      "RemoteOK",
      "Upwork",
      "Toptal",
    ],
    roadmap: [
      {
        title: "Foundation Phase",
        duration: "1-2 months",
        steps: [
          "Python basics (OOP, Lists, Dictionaries, Functions)",
          "Basic SQL & Database concepts",
          "HTML, CSS, and JavaScript fundamentals",
          "Git & GitHub for version control",
        ],
        dos: [
          "Write clean and efficient Python code",
          "Practice SQL queries",
          "Build basic frontend UI",
        ],
        donts: [
          "Ignore Python basics",
          "Neglect database normalization",
          "Skip frontend fundamentals",
        ],
      },
      {
        title: "Backend Mastery",
        duration: "2-3 months",
        steps: [
          "Django or Flask framework",
          "Building REST APIs",
          "Database management with PostgreSQL or MongoDB",
          "Authentication with JWT & OAuth",
        ],
        dos: [
          "Build RESTful APIs",
          "Use Django ORM or SQLAlchemy",
          "Implement authentication and authorization",
        ],
        donts: [
          "Store passwords in plain text",
          "Ignore proper exception handling",
          "Neglect API documentation",
        ],
      },
      {
        title: "Frontend & Full Stack Development",
        duration: "3-4 months",
        steps: [
          "Learn React.js or Vue.js for UI development",
          "Integrate frontend with backend APIs",
          "State management (Redux, Vuex)",
          "Deploy full-stack applications",
        ],
        dos: [
          "Build interactive UIs",
          "Optimize performance and security",
          "Use responsive design principles",
        ],
        donts: [
          "Overuse third-party libraries",
          "Skip frontend testing",
          "Ignore browser compatibility",
        ],
      },
    ],
    requirements: {
      technical: [
        "Python & Django/Flask expertise",
        "REST API & Microservices development",
        "Database design (SQL & NoSQL)",
        "Frontend development with React or Vue.js",
        "Version control (Git/GitHub)",
      ],
      softSkills: [
        "Problem-solving and debugging",
        "Agile methodology understanding",
        "Effective team collaboration",
        "Continuous learning mindset",
      ],
      tools: [
        "Postman API Client",
        "PgAdmin / MongoDB Compass",
        "PyCharm / VS Code",
        "PyTest & Unittest for testing",
      ],
    },
    resources: {
      youtube: [
        "Programming with Mosh - Django & Python Full Stack",
        "FreeCodeCamp - Full Stack Python Development",
        "Codevolution - Python & React",
        "Traversy Media - Django & Flask",
        "The Net Ninja - Django Crash Course",
      ],
      free: [
        "Python Official Documentation",
        "Django & Flask Documentation",
        "MDN Web Docs (JavaScript, HTML, CSS)",
        "PostgreSQL & MySQL Documentation",
      ],
      paid: [
        "Django & React Full Stack (Udemy)",
        "Python Full Stack Developer Course (Coursera)",
        "Flask Web Development (Pluralsight)",
      ],
      tools: [
        "PyCharm / VS Code",
        "Postman",
        "Docker for Deployment",
        "AWS / Google Cloud for cloud services",
      ],
      communities: [
        "Dev.to Python Community",
        "Reddit r/learnpython",
        "Stack Overflow Python Discussions",
        "Django & Flask Facebook Groups",
      ],
      events: ["PyCon Global Conference", "DjangoCon", "Python Web Conference"],
    },
  },
  {
    id: "data-analysis",
    title: "Data Analyst",
    description:
      "A data analyst collects, processes, and analyzes data to help organizations make data-driven decisions. They work with tools like Excel, SQL, Python, and visualization software.",
    whatIs:
      "Data analysis involves inspecting, cleaning, transforming, and modeling data to discover useful information, inform conclusions, and support decision-making.",
    jobDescription:
      "Data analysts interpret data, identify trends, and create reports using statistical and visualization techniques. They work with databases, clean datasets, and provide insights to businesses and stakeholders.",
    education: {
      degreeRequired: true,
      preferredDegrees: [
        "Statistics",
        "Computer Science",
        "Mathematics",
        "Business Analytics",
      ],
      noDegreePath: [
        "Online data analytics certifications",
        "Hands-on projects",
        "Self-learning with open datasets",
        "Contributing to open-source analytics projects",
      ],
    },
    marketTrends: {
      demandLevel: "Very High",
      popularity: "Rapidly Growing",
      jobGrowth: "27% (2023-now)",
      companies: [
        "Finance & Banking",
        "Healthcare",
        "Tech Startups",
        "E-commerce Giants",
        "Government & Research Organizations",
      ],
    },
    certifications: [
      "Google Data Analytics Certification",
      "IBM Data Science Professional Certificate",
      "Microsoft Certified: Data Analyst Associate",
      "AWS Certified Data Analytics",
    ],
    salary: [
      {
        region: "India",
        average: "₹8 LPA",
        entry: "₹4 LPA",
        senior: "₹20 LPA",
      },
      {
        region: "USA",
        average: "$85,000",
        entry: "$60,000",
        senior: "$130,000",
      },
      {
        region: "Europe",
        average: "€55,000",
        entry: "€38,000",
        senior: "€90,000",
      },
    ],
    howToStart: {
      title: "Getting Started with Data Analysis",
      steps: [
        "Learn statistics and data manipulation techniques",
        "Master SQL for data querying",
        "Learn Python or R for data analysis",
        "Get familiar with data visualization tools like Power BI or Tableau",
        "Work on real-world datasets and case studies",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "10-15 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Glassdoor",
      "Indeed",
      "Kaggle Jobs",
      "AngelList",
      "Toptal",
    ],
    roadmap: [
      {
        title: "Foundation Phase",
        duration: "1-2 months",
        steps: [
          "Basics of statistics and probability",
          "Excel & Google Sheets for data handling",
          "SQL fundamentals for data querying",
          "Data visualization concepts",
        ],
        dos: [
          "Practice SQL queries daily",
          "Explore statistical methods",
          "Work on simple data projects",
        ],
        donts: [
          "Ignore SQL optimization",
          "Neglect data visualization principles",
          "Avoid statistical concepts",
        ],
      },
      {
        title: "Programming & Analytics",
        duration: "2-3 months",
        steps: [
          "Learn Python (Pandas, NumPy, Matplotlib, Seaborn)",
          "Explore R for data analytics",
          "Work with real-world datasets",
          "Understand ETL (Extract, Transform, Load) processes",
        ],
        dos: [
          "Solve problems using Python and R",
          "Work on open-source datasets",
          "Use Jupyter Notebook for analysis",
        ],
        donts: [
          "Skip hands-on coding",
          "Overcomplicate reports",
          "Ignore exploratory data analysis (EDA)",
        ],
      },
      {
        title: "Advanced Analytics & Visualization",
        duration: "3-4 months",
        steps: [
          "Use Tableau, Power BI, or Looker for visualizations",
          "Work with large datasets",
          "Understand predictive analytics and machine learning basics",
          "Learn data storytelling techniques",
        ],
        dos: [
          "Create interactive dashboards",
          "Optimize SQL queries for large data",
          "Develop insights through storytelling",
        ],
        donts: [
          "Rely only on Excel",
          "Ignore advanced data visualization techniques",
          "Avoid cloud-based data solutions",
        ],
      },
    ],
    requirements: {
      technical: [
        "Statistics & Data Analysis techniques",
        "SQL and database management",
        "Python or R programming",
        "Data visualization (Tableau, Power BI)",
        "ETL & data wrangling skills",
      ],
      softSkills: [
        "Critical thinking & problem-solving",
        "Communication & storytelling with data",
        "Attention to detail",
        "Continuous learning mindset",
      ],
      tools: [
        "SQL (MySQL, PostgreSQL, BigQuery)",
        "Python (Pandas, NumPy, Matplotlib, Seaborn)",
        "Tableau / Power BI",
        "Excel / Google Sheets",
      ],
    },
    resources: {
      youtube: [
        "Alex The Analyst - Data Analytics Roadmap",
        "Ken Jee - Data Science & Analytics",
        "Simplilearn - Data Analytics Tutorials",
        "FreeCodeCamp - Data Analysis with Python",
        "StatQuest - Statistics & Machine Learning",
      ],
      free: [
        "Google Data Analytics Course",
        "Kaggle - Datasets & Notebooks",
        "SQL for Data Analysis (Mode Analytics)",
        "Harvard CS109 Data Science Course",
      ],
      paid: [
        "IBM Data Analyst Professional Certificate (Coursera)",
        "Data Analysis with Python (Udacity)",
        "Advanced Data Analytics (DataCamp)",
      ],
      tools: [
        "Jupyter Notebook",
        "Google Data Studio",
        "BigQuery for large-scale data analysis",
        "Alteryx for data wrangling",
      ],
      communities: [
        "Kaggle Discussions",
        "Reddit r/dataanalysis",
        "LinkedIn Data Analytics Groups",
        "Data Science Slack Communities",
      ],
      events: [
        "Tableau Conference",
        "Google Cloud Data Analytics Summit",
        "Data Science Summit",
      ],
    },
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description:
      "A data scientist analyzes complex data to extract meaningful insights using machine learning, statistical modeling, and programming. They work with large datasets to solve real-world problems.",
    whatIs:
      "Data science is an interdisciplinary field that uses statistics, machine learning, and data analysis techniques to extract insights from structured and unstructured data.",
    jobDescription:
      "Data scientists build predictive models, analyze large datasets, develop machine learning algorithms, and communicate insights to stakeholders. They work in various industries, from finance to healthcare.",
    education: {
      degreeRequired: true,
      preferredDegrees: [
        "Computer Science",
        "Statistics",
        "Mathematics",
        "Data Science",
        "Engineering",
      ],
      noDegreePath: [
        "Online data science certifications",
        "Self-learning with projects",
        "Participating in Kaggle competitions",
        "Contributing to open-source ML projects",
      ],
    },
    marketTrends: {
      demandLevel: "Very High",
      popularity: "Rapidly Growing",
      jobGrowth: "35% (2023-now)",
      companies: [
        "Tech Giants (Google, Facebook, Microsoft)",
        "Finance & Banking",
        "Healthcare & Pharmaceuticals",
        "Retail & E-commerce",
        "Government & Research Organizations",
      ],
    },
    certifications: [
      "Google Data Science Professional Certificate",
      "IBM Data Science Certification",
      "AWS Certified Machine Learning – Specialty",
      "TensorFlow Developer Certificate",
    ],
    salary: [
      {
        region: "India",
        average: "₹12 LPA",
        entry: "₹6 LPA",
        senior: "₹30 LPA",
      },
      {
        region: "USA",
        average: "$120,000",
        entry: "$85,000",
        senior: "$180,000",
      },
      {
        region: "Europe",
        average: "€75,000",
        entry: "€50,000",
        senior: "€120,000",
      },
    ],
    howToStart: {
      title: "Getting Started with Data Science",
      steps: [
        "Learn Python or R for data analysis",
        "Master statistics, probability, and linear algebra",
        "Understand data wrangling and preprocessing",
        "Learn machine learning algorithms and deep learning",
        "Work on real-world projects and participate in Kaggle competitions",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Glassdoor",
      "Indeed",
      "Kaggle Jobs",
      "AngelList",
      "Toptal",
    ],
    roadmap: [
      {
        title: "Foundation Phase",
        duration: "1-2 months",
        steps: [
          "Mathematics fundamentals (Statistics, Probability, Linear Algebra)",
          "Programming (Python, R)",
          "Data manipulation (Pandas, NumPy)",
        ],
        dos: [
          "Practice Python for data manipulation",
          "Understand statistical distributions",
          "Work on simple datasets",
        ],
        donts: [
          "Ignore mathematical concepts",
          "Skip exploratory data analysis",
          "Avoid hands-on projects",
        ],
      },
      {
        title: "Machine Learning & Model Building",
        duration: "3-4 months",
        steps: [
          "Supervised and unsupervised learning",
          "Feature engineering & data preprocessing",
          "Model evaluation & hyperparameter tuning",
          "Deep learning fundamentals (TensorFlow, PyTorch)",
        ],
        dos: [
          "Work on real-world datasets",
          "Optimize ML models",
          "Understand bias-variance tradeoff",
        ],
        donts: [
          "Overfit models",
          "Ignore feature selection",
          "Skip model interpretability",
        ],
      },
      {
        title: "Advanced Topics & Deployment",
        duration: "3-6 months",
        steps: [
          "Big Data & Cloud Computing (Spark, AWS, GCP)",
          "Natural Language Processing (NLP)",
          "Computer Vision",
          "Model Deployment (Flask, FastAPI, Docker)",
        ],
        dos: [
          "Deploy models using APIs",
          "Learn data pipeline automation",
          "Work on AI-driven projects",
        ],
        donts: [
          "Ignore model scalability",
          "Skip cloud-based solutions",
          "Avoid model monitoring techniques",
        ],
      },
    ],
    requirements: {
      technical: [
        "Programming (Python, R, SQL)",
        "Machine Learning & Deep Learning",
        "Big Data & Cloud Technologies",
        "Data Visualization",
        "Model Deployment",
      ],
      softSkills: [
        "Critical thinking & problem-solving",
        "Communication & storytelling with data",
        "Domain knowledge",
        "Continuous learning mindset",
      ],
      tools: [
        "Jupyter Notebook / Google Colab",
        "TensorFlow / PyTorch",
        "SQL (PostgreSQL, MySQL, BigQuery)",
        "Docker / Kubernetes for deployment",
      ],
    },
    resources: {
      youtube: [
        "Data School - Python & Data Science",
        "Krish Naik - Machine Learning Tutorials",
        "Sentdex - Deep Learning & AI",
        "FreeCodeCamp - Data Science Full Course",
        "StatQuest - Statistics for Data Science",
      ],
      free: [
        "Google Data Science Crash Course",
        "Kaggle Learn - Machine Learning & AI",
        "MIT OpenCourseWare - Data Science",
        "Fast.ai - Deep Learning for Coders",
      ],
      paid: [
        "IBM Data Science Professional Certificate (Coursera)",
        "Machine Learning Specialization (Stanford, Coursera)",
        "Deep Learning Specialization (Andrew Ng, Coursera)",
      ],
      tools: [
        "Google Colab",
        "Apache Spark",
        "BigQuery",
        "MLflow for model tracking",
      ],
      communities: [
        "Kaggle Discussions",
        "Reddit r/datascience",
        "Data Science Slack Groups",
        "AI & ML LinkedIn Communities",
      ],
      events: [
        "NeurIPS (Neural Information Processing Systems)",
        "ICML (International Conference on Machine Learning)",
        "Data Science Summit",
      ],
    },
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning Engineer",
    description:
      "An AI/ML engineer designs and develops machine learning models, neural networks, and AI-driven applications to solve complex problems in various industries.",
    whatIs:
      "Artificial Intelligence (AI) enables machines to mimic human intelligence, while Machine Learning (ML) is a subset of AI that allows systems to learn and improve from data without explicit programming.",
    jobDescription:
      "AI/ML engineers develop, train, and optimize machine learning models, work with deep learning frameworks, build AI applications, and deploy solutions for real-world problems.",
    education: {
      degreeRequired: true,
      preferredDegrees: [
        "Computer Science",
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
        "Mathematics & Statistics",
      ],
      noDegreePath: [
        "Self-learning with AI/ML projects",
        "Online AI/ML certifications",
        "Open-source contributions",
        "Participation in Kaggle competitions",
      ],
    },
    marketTrends: {
      demandLevel: "Very High",
      popularity: "Rapidly Growing",
      jobGrowth: "40% (2023-now)",
      companies: [
        "Tech Giants (Google, OpenAI, Meta, Microsoft)",
        "Healthcare & Pharmaceuticals",
        "Autonomous Vehicles & Robotics",
        "Finance & Banking",
        "E-commerce & Retail",
      ],
    },
    certifications: [
      "Google TensorFlow Developer Certificate",
      "AWS Certified Machine Learning – Specialty",
      "Deep Learning Specialization (Coursera)",
      "IBM AI Engineering Professional Certificate",
    ],
    salary: [
      {
        region: "India",
        average: "₹15 LPA",
        entry: "₹8 LPA",
        senior: "₹40 LPA",
      },
      {
        region: "USA",
        average: "$130,000",
        entry: "$100,000",
        senior: "$200,000",
      },
      {
        region: "Europe",
        average: "€90,000",
        entry: "€60,000",
        senior: "€150,000",
      },
    ],
    howToStart: {
      title: "Getting Started with AI & ML",
      steps: [
        "Learn Python for AI/ML development",
        "Understand statistics, probability, and linear algebra",
        "Master machine learning algorithms",
        "Get hands-on experience with deep learning",
        "Work on AI/ML projects and Kaggle competitions",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-25 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Glassdoor",
      "Indeed",
      "Kaggle Jobs",
      "AI-focused startups",
      "Research Labs",
    ],
    roadmap: [
      {
        title: "Foundation Phase",
        duration: "1-2 months",
        steps: [
          "Mathematics (Linear Algebra, Probability, Statistics)",
          "Python programming (NumPy, Pandas, Matplotlib)",
          "Data preprocessing techniques",
        ],
        dos: [
          "Build a strong math foundation",
          "Practice Python for data handling",
          "Understand data cleaning techniques",
        ],
        donts: [
          "Ignore fundamental mathematics",
          "Skip data preprocessing",
          "Avoid small AI projects",
        ],
      },
      {
        title: "Machine Learning Fundamentals",
        duration: "2-3 months",
        steps: [
          "Supervised & Unsupervised Learning",
          "Feature Engineering & Model Evaluation",
          "Hyperparameter tuning & Cross-validation",
        ],
        dos: [
          "Work on real-world datasets",
          "Optimize machine learning models",
          "Understand model evaluation techniques",
        ],
        donts: [
          "Overfit models",
          "Ignore feature selection",
          "Skip model interpretability",
        ],
      },
      {
        title: "Deep Learning & AI Specialization",
        duration: "3-6 months",
        steps: [
          "Neural Networks & Backpropagation",
          "Convolutional Neural Networks (CNNs)",
          "Natural Language Processing (NLP)",
          "Reinforcement Learning",
        ],
        dos: [
          "Experiment with deep learning frameworks",
          "Train models on real-world data",
          "Optimize neural networks",
        ],
        donts: [
          "Neglect AI ethics",
          "Ignore transfer learning techniques",
          "Skip practical AI deployment skills",
        ],
      },
    ],
    requirements: {
      technical: [
        "Python (NumPy, Pandas, Matplotlib, Scikit-learn)",
        "Deep Learning (TensorFlow, PyTorch)",
        "Big Data & Cloud Technologies",
        "AI Model Deployment (Docker, FastAPI, AWS/GCP)",
      ],
      softSkills: [
        "Analytical & problem-solving skills",
        "Research mindset",
        "Effective communication",
        "Continuous learning",
      ],
      tools: [
        "Jupyter Notebook / Google Colab",
        "TensorFlow / PyTorch",
        "AWS/GCP AI Services",
        "Docker / Kubernetes",
      ],
    },
    resources: {
      youtube: [
        "DeepLearning.AI - Andrew Ng's AI Lectures",
        "Krish Naik - AI & ML Tutorials",
        "Sentdex - AI & Python",
        "FreeCodeCamp - AI/ML Full Courses",
        "StatQuest - ML & AI Concepts",
      ],
      free: [
        "Google AI Crash Course",
        "Kaggle Learn - Machine Learning & AI",
        "MIT OpenCourseWare - AI & ML",
        "Fast.ai - Deep Learning for Coders",
      ],
      paid: [
        "Deep Learning Specialization (Andrew Ng, Coursera)",
        "Machine Learning Engineering for Production (MLOps)",
        "AI for Everyone (Coursera)",
      ],
      tools: [
        "Google Colab",
        "Apache Spark",
        "BigQuery",
        "MLflow for model tracking",
      ],
      communities: [
        "Kaggle Discussions",
        "Reddit r/MachineLearning",
        "AI & ML LinkedIn Groups",
        "Deep Learning Discord Channels",
      ],
      events: [
        "NeurIPS (Neural Information Processing Systems)",
        "ICML (International Conference on Machine Learning)",
        "AAAI (Association for the Advancement of AI)",
      ],
    },
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    description:
      "A DevOps engineer bridges the gap between software development and IT operations, automating processes, improving CI/CD pipelines, and ensuring system reliability.",
    whatIs:
      "DevOps is a software development methodology that integrates development (Dev) and operations (Ops) to enhance collaboration, automate workflows, and ensure faster and more reliable software delivery.",
    jobDescription:
      "DevOps engineers are responsible for managing infrastructure, automating deployments, monitoring system performance, and ensuring security compliance. They work with cloud platforms, CI/CD pipelines, and containerization tools.",
    education: {
      degreeRequired: true,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Software Engineering",
        "Cybersecurity",
      ],
      noDegreePath: [
        "Self-learning through online courses",
        "Hands-on DevOps projects",
        "Cloud certifications",
        "Contributing to open-source DevOps tools",
      ],
    },
    marketTrends: {
      demandLevel: "Very High",
      popularity: "Rapidly Growing",
      jobGrowth: "25% (2023-now)",
      companies: [
        "Tech Giants (Google, Microsoft, Amazon)",
        "Cloud & SaaS Companies",
        "Startups & Enterprises",
        "Financial & Banking Sectors",
      ],
    },
    certifications: [
      "AWS Certified DevOps Engineer",
      "Certified Kubernetes Administrator (CKA)",
      "Docker Certified Associate",
      "Google Cloud Professional DevOps Engineer",
    ],
    salary: [
      {
        region: "India",
        average: "₹12 LPA",
        entry: "₹6 LPA",
        senior: "₹30 LPA",
      },
      {
        region: "USA",
        average: "$120,000",
        entry: "$85,000",
        senior: "$180,000",
      },
      {
        region: "Europe",
        average: "€80,000",
        entry: "€55,000",
        senior: "€130,000",
      },
    ],
    howToStart: {
      title: "Getting Started with DevOps",
      steps: [
        "Learn Linux and Shell Scripting",
        "Master cloud computing (AWS, Azure, GCP)",
        "Understand CI/CD pipelines",
        "Learn Infrastructure as Code (Terraform, Ansible)",
        "Gain experience with containerization and Kubernetes",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-25 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Glassdoor",
      "Indeed",
      "HackerRank Jobs",
      "Freelance DevOps Projects",
      "Tech Startups",
    ],
    roadmap: [
      {
        title: "Foundation Phase",
        duration: "1-2 months",
        steps: [
          "Linux fundamentals & shell scripting",
          "Networking basics (DNS, HTTP, Load Balancing)",
          "Version control (Git & GitHub)",
        ],
        dos: [
          "Practice Linux commands daily",
          "Set up Git workflows",
          "Understand basic networking concepts",
        ],
        donts: [
          "Ignore Linux system administration",
          "Skip Git fundamentals",
          "Neglect security best practices",
        ],
      },
      {
        title: "Automation & CI/CD",
        duration: "2-3 months",
        steps: [
          "Jenkins, GitHub Actions, or GitLab CI/CD",
          "Infrastructure as Code (Terraform, Ansible)",
          "Automating deployment processes",
        ],
        dos: [
          "Set up automated CI/CD pipelines",
          "Write scripts for infrastructure automation",
          "Learn YAML and JSON configurations",
        ],
        donts: [
          "Ignore automation principles",
          "Manually deploy applications",
          "Skip monitoring and logging setup",
        ],
      },
      {
        title: "Cloud & Containerization",
        duration: "3-4 months",
        steps: [
          "AWS, Azure, or Google Cloud basics",
          "Docker & Kubernetes for container orchestration",
          "Security and compliance best practices",
        ],
        dos: [
          "Deploy applications on cloud platforms",
          "Work with Kubernetes clusters",
          "Learn cloud security best practices",
        ],
        donts: [
          "Ignore cloud cost optimization",
          "Neglect role-based access control (RBAC)",
          "Avoid multi-cloud strategies",
        ],
      },
    ],
    requirements: {
      technical: [
        "Linux system administration",
        "CI/CD pipeline management",
        "Cloud services (AWS, Azure, GCP)",
        "Containerization (Docker, Kubernetes)",
        "Infrastructure as Code (Terraform, Ansible)",
      ],
      softSkills: [
        "Problem-solving and automation mindset",
        "Collaboration with developers & IT teams",
        "Strong documentation skills",
        "Continuous learning and adaptation",
      ],
      tools: [
        "Jenkins / GitHub Actions",
        "Docker / Kubernetes",
        "AWS / GCP / Azure",
        "Terraform / Ansible",
      ],
    },
    resources: {
      youtube: [
        "TechWorld with Nana - DevOps Tutorials",
        "KodeKloud - DevOps Hands-on Labs",
        "FreeCodeCamp - DevOps & Cloud Courses",
        "The Primeagen - Advanced DevOps Practices",
      ],
      free: [
        "Linux Command Line Basics (IBM Cloud)",
        "AWS Free Tier & Hands-on Labs",
        "Kubernetes Official Documentation",
        "Terraform & Ansible Open-source Guides",
      ],
      paid: [
        "Docker Mastery (Udemy)",
        "Certified Kubernetes Administrator (CKA) Training",
        "AWS DevOps Engineer Professional Course",
        "Terraform for Beginners to Advanced (Pluralsight)",
      ],
      tools: [
        "Docker & Kubernetes",
        "AWS / Azure / GCP Cloud Consoles",
        "Jenkins & GitHub Actions",
        "Prometheus & Grafana for Monitoring",
      ],
      communities: [
        "DevOps Subreddit (r/devops)",
        "Kubernetes Slack Community",
        "HashiCorp Terraform Community",
        "Cloud Native Computing Foundation (CNCF)",
      ],
      events: [
        "KubeCon + CloudNativeCon",
        "AWS re:Invent",
        "DevOps Enterprise Summit",
        "Google Cloud Next",
      ],
    },
  },
  {
    id: "software-tester",
    title: "Software Tester (QA Engineer)",
    description:
      "A software tester ensures the quality and reliability of applications by identifying bugs, verifying functionality, and automating testing processes.",
    whatIs:
      "Software testing is the process of evaluating applications to ensure they function correctly, meet requirements, and are free from defects. It includes manual and automated testing techniques.",
    jobDescription:
      "Software testers (QA Engineers) design and execute test cases, identify and report defects, collaborate with developers to improve software quality, and ensure that applications perform well under various conditions.",
    education: {
      degreeRequired: true,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Software Engineering",
        "Any technical field",
      ],
      noDegreePath: [
        "QA bootcamps",
        "Online certifications in software testing",
        "Hands-on practice with testing tools",
        "Open-source testing contributions",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Increasing",
      jobGrowth: "20% (2023-now)",
      companies: [
        "Software Development Firms",
        "Startups",
        "E-commerce & Fintech",
        "Healthcare & Banking Sectors",
      ],
    },
    certifications: [
      "ISTQB Foundation Level",
      "Certified Agile Tester (CAT)",
      "Selenium WebDriver Certification",
      "AWS Certified DevOps Engineer (QA Focus)",
    ],
    salary: [
      {
        region: "India",
        average: "₹5 LPA",
        entry: "₹3 LPA",
        senior: "₹12 LPA",
      },
      {
        region: "USA",
        average: "$85,000",
        entry: "$55,000",
        senior: "$120,000",
      },
      {
        region: "Europe",
        average: "€50,000",
        entry: "€35,000",
        senior: "€80,000",
      },
    ],
    howToStart: {
      title: "Getting Started with Software Testing",
      steps: [
        "Learn software testing fundamentals (Manual & Automated)",
        "Understand testing types (Unit, Integration, Regression, Performance)",
        "Master testing tools (Selenium, JUnit, TestNG, Cypress)",
        "Develop test automation skills with Python/Java",
        "Gain experience with bug tracking tools (JIRA, Bugzilla)",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "10-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Naukri.com",
      "Indeed",
      "Glassdoor",
      "Freelance platforms (Upwork, Toptal)",
    ],
    roadmap: [
      {
        title: "Foundation Phase",
        duration: "1-2 months",
        steps: [
          "Software Testing Life Cycle (STLC) concepts",
          "Understanding test cases, test plans, and bug reports",
          "Introduction to manual testing techniques",
        ],
        dos: [
          "Write and execute test cases",
          "Understand SDLC & STLC",
          "Learn defect tracking tools",
        ],
        donts: [
          "Ignore test documentation",
          "Skip learning industry best practices",
          "Neglect communication skills",
        ],
      },
      {
        title: "Automation & Advanced Testing",
        duration: "2-3 months",
        steps: [
          "Selenium WebDriver for test automation",
          "API testing with Postman & RestAssured",
          "Performance testing with JMeter",
          "CI/CD integration with Jenkins",
        ],
        dos: [
          "Write automated test scripts",
          "Test RESTful APIs",
          "Implement CI/CD testing strategies",
        ],
        donts: [
          "Over-rely on manual testing",
          "Neglect automation fundamentals",
          "Skip security and performance testing",
        ],
      },
      {
        title: "Performance & Security Testing",
        duration: "3-4 months",
        steps: [
          "Load testing with JMeter",
          "Security testing fundamentals",
          "Continuous testing in Agile/DevOps environments",
        ],
        dos: [
          "Analyze application performance under load",
          "Identify security vulnerabilities",
          "Collaborate with developers for quality assurance",
        ],
        donts: [
          "Ignore test coverage reports",
          "Avoid learning about DevOps testing",
          "Underestimate exploratory testing",
        ],
      },
    ],
    requirements: {
      technical: [
        "Understanding of SDLC & STLC",
        "Test automation (Selenium, Cypress, Appium)",
        "Bug tracking and reporting",
        "API testing (Postman, RestAssured)",
        "Performance testing (JMeter, LoadRunner)",
      ],
      softSkills: [
        "Analytical thinking and problem-solving",
        "Attention to detail",
        "Collaboration with development teams",
        "Clear documentation and reporting",
      ],
      tools: [
        "Selenium WebDriver",
        "Postman API Testing",
        "JIRA / Bugzilla",
        "JMeter & LoadRunner",
      ],
    },
    resources: {
      youtube: [
        "Software Testing Mentor - QA Basics",
        "Automation Step by Step - Selenium & API Testing",
        "The Testing Academy - Manual & Automation Testing",
        "QA Insights - Performance & Load Testing",
      ],
      free: [
        "ISTQB Foundation Study Material",
        "Guru99 Software Testing Tutorials",
        "Selenium WebDriver Documentation",
        "Google Testing Blog",
      ],
      paid: [
        "Selenium WebDriver with Java (Udemy)",
        "API Testing with RestAssured (Udemy)",
        "ISTQB Certification Training (Coursera)",
        "Advanced Test Automation (Pluralsight)",
      ],
      tools: [
        "Selenium & Cypress",
        "Postman & JMeter",
        "JIRA & Bugzilla",
        "Appium for Mobile Testing",
      ],
      communities: [
        "SoftwareTestingHelp Forum",
        "Reddit r/qualityassurance",
        "TestGuild Automation Podcast",
        "LinkedIn QA Community",
      ],
      events: [
        "SeleniumConf",
        "TestCon Europe",
        "QA Global Summit",
        "Automation Guild Conference",
      ],
    },
  },
  {
    id: "aws-cloud-engineer",
    title: "AWS Cloud Engineer",
    description:
      "An AWS Cloud Engineer is responsible for designing, implementing, and managing cloud solutions using Amazon Web Services (AWS) to ensure scalability, security, and performance.",
    whatIs:
      "AWS (Amazon Web Services) is a leading cloud computing platform providing on-demand infrastructure, storage, databases, networking, and machine learning solutions for businesses worldwide.",
    jobDescription:
      "AWS Cloud Engineers design and deploy cloud-based applications, manage AWS infrastructure, ensure security compliance, automate deployments, and optimize performance and cost efficiency.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Cybersecurity",
        "Cloud Computing",
      ],
      noDegreePath: [
        "AWS training and certification",
        "Hands-on experience with AWS Free Tier",
        "Open-source cloud projects",
        "Self-learning through AWS documentation",
      ],
    },
    marketTrends: {
      demandLevel: "Very High",
      popularity: "Rapidly Growing",
      jobGrowth: "25% (2023-now)",
      companies: [
        "Cloud Service Providers",
        "Tech Giants (FAANG)",
        "Fintech & Banking",
        "Healthcare & E-commerce",
      ],
    },
    certifications: [
      "AWS Certified Cloud Practitioner",
      "AWS Certified Solutions Architect – Associate",
      "AWS Certified DevOps Engineer – Professional",
      "AWS Certified Security – Specialty",
    ],
    salary: [
      {
        region: "India",
        average: "₹10 LPA",
        entry: "₹5 LPA",
        senior: "₹25 LPA",
      },
      {
        region: "USA",
        average: "$115,000",
        entry: "$85,000",
        senior: "$160,000",
      },
      {
        region: "Europe",
        average: "€70,000",
        entry: "€50,000",
        senior: "€100,000",
      },
    ],
    howToStart: {
      title: "Getting Started with AWS Cloud Engineering",
      steps: [
        "Learn cloud computing fundamentals",
        "Get familiar with AWS services (EC2, S3, Lambda, IAM)",
        "Gain hands-on experience with AWS Free Tier",
        "Understand infrastructure as code (Terraform, CloudFormation)",
        "Build real-world AWS projects",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Naukri.com",
      "Indeed",
      "AWS Careers Portal",
      "Toptal",
      "Freelance platforms (Upwork, Freelancer)",
    ],
    roadmap: [
      {
        title: "Foundation Phase",
        duration: "1-2 months",
        steps: [
          "Cloud computing basics",
          "AWS Global Infrastructure",
          "AWS Identity and Access Management (IAM)",
          "Introduction to AWS CLI & SDK",
        ],
        dos: [
          "Experiment with AWS Free Tier",
          "Understand IAM roles and policies",
          "Learn about AWS pricing and billing",
        ],
        donts: [
          "Ignore cost optimization techniques",
          "Overlook security best practices",
          "Neglect AWS documentation",
        ],
      },
      {
        title: "Core AWS Services & Deployment",
        duration: "2-3 months",
        steps: [
          "Compute services (EC2, Lambda, ECS)",
          "Storage & Databases (S3, RDS, DynamoDB)",
          "Networking (VPC, Route 53, CloudFront)",
          "Infrastructure as Code (Terraform, CloudFormation)",
        ],
        dos: [
          "Deploy applications on AWS",
          "Use AWS Well-Architected Framework",
          "Implement security best practices",
        ],
        donts: [
          "Ignore networking fundamentals",
          "Skip cost estimation techniques",
          "Overuse on-demand instances",
        ],
      },
      {
        title: "Advanced AWS & DevOps Integration",
        duration: "3-4 months",
        steps: [
          "CI/CD with AWS CodePipeline",
          "Monitoring & Logging (CloudWatch, AWS Config)",
          "Serverless & Containerization (Lambda, ECS, Kubernetes)",
          "Security & Compliance (AWS Shield, KMS)",
        ],
        dos: [
          "Automate deployments",
          "Monitor application performance",
          "Optimize cloud security",
        ],
        donts: [
          "Ignore compliance requirements",
          "Neglect disaster recovery planning",
          "Overcomplicate infrastructure design",
        ],
      },
    ],
    requirements: {
      technical: [
        "AWS core services knowledge",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Networking & security (VPC, IAM, KMS)",
        "Serverless computing (Lambda, API Gateway)",
        "Monitoring & logging (CloudWatch, AWS Config)",
      ],
      softSkills: [
        "Problem-solving and critical thinking",
        "Understanding of DevOps practices",
        "Ability to work in fast-paced environments",
        "Collaboration with cross-functional teams",
      ],
      tools: [
        "AWS CLI & SDK",
        "Terraform & CloudFormation",
        "Docker & Kubernetes",
        "Jenkins & AWS CodePipeline",
      ],
    },
    resources: {
      youtube: [
        "AWS Training & Certification - Official Channel",
        "freeCodeCamp - AWS Full Course",
        "Tech with Tim - AWS Cloud Engineering",
        "A Cloud Guru - AWS Tutorials",
      ],
      free: [
        "AWS Free Tier Hands-on Labs",
        "AWS Official Documentation",
        "Cloud Academy Free Courses",
        "Dev.to AWS Community",
      ],
      paid: [
        "AWS Certified Solutions Architect Course (Udemy)",
        "AWS DevOps Training (A Cloud Guru)",
        "Terraform on AWS (Pluralsight)",
        "AWS Security & Networking (LinkedIn Learning)",
      ],
      tools: [
        "AWS Console & CLI",
        "Terraform & CloudFormation",
        "Docker & Kubernetes",
        "Boto3 (AWS SDK for Python)",
      ],
      communities: [
        "AWS Community Forum",
        "Reddit r/aws",
        "AWS Discord & Slack Groups",
        "Cloud Native Computing Foundation",
      ],
      events: [
        "AWS re:Invent",
        "AWS Summit",
        "AWS DevDay",
        "KubeCon + CloudNativeCon",
      ],
    },
  },
  {
    id: "web-developer",
    title: "Web Developer",
    description:
      "A Web Developer is responsible for designing, building, and maintaining websites and web applications using various programming languages, frameworks, and tools.",
    whatIs:
      "Web development is the process of creating websites and web applications that run on browsers. It involves front-end (UI/UX), back-end (server-side logic), and full-stack development.",
    jobDescription:
      "Web developers create and maintain websites by coding in HTML, CSS, JavaScript, and backend technologies. They optimize performance, ensure responsiveness, and integrate APIs for dynamic functionality.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Software Engineering",
      ],
      noDegreePath: [
        "Online coding bootcamps",
        "Self-learning with open-source projects",
        "Freelancing and internships",
        "Building personal portfolio websites",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Continuously Growing",
      jobGrowth: "20% (2023-now)",
      companies: [
        "Startups",
        "Tech Giants",
        "E-commerce Businesses",
        "Freelance & Agencies",
      ],
    },
    certifications: [
      "Responsive Web Design (FreeCodeCamp)",
      "Google Mobile Web Specialist",
      "Microsoft Certified: Web Developer",
      "Full Stack Web Developer (Udacity)",
    ],
    salary: [
      {
        region: "India",
        average: "₹5 LPA",
        entry: "₹3 LPA",
        senior: "₹12 LPA",
      },
      {
        region: "USA",
        average: "$85,000",
        entry: "$60,000",
        senior: "$120,000",
      },
      {
        region: "Europe",
        average: "€50,000",
        entry: "€35,000",
        senior: "€80,000",
      },
    ],
    howToStart: {
      title: "Getting Started with Web Development",
      steps: [
        "Learn HTML, CSS, and JavaScript fundamentals",
        "Master front-end frameworks (React, Vue, or Angular)",
        "Understand backend development (Node.js, Django, Flask)",
        "Build full-stack projects and host them online",
        "Learn version control (Git, GitHub) and deployment",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "Upwork",
      "Freelancer",
      "Toptal",
      "We Work Remotely",
    ],
    roadmap: [
      {
        title: "Foundation Phase",
        duration: "1-2 months",
        steps: [
          "HTML5 & CSS3 fundamentals",
          "JavaScript basics (ES6+)",
          "Git & GitHub version control",
          "Responsive design techniques",
        ],
        dos: [
          "Build simple web pages",
          "Use Flexbox & Grid for layout",
          "Practice JavaScript DOM manipulation",
        ],
        donts: [
          "Ignore accessibility and SEO",
          "Skip code organization",
          "Overuse third-party libraries",
        ],
      },
      {
        title: "Front-End Development",
        duration: "2-3 months",
        steps: [
          "Advanced JavaScript (Promises, Async/Await)",
          "Learn React, Vue, or Angular",
          "Work with RESTful APIs and fetch data",
          "State management (Redux, Zustand, Vuex)",
        ],
        dos: [
          "Build 3+ front-end projects",
          "Ensure mobile responsiveness",
          "Follow component-based architecture",
        ],
        donts: [
          "Skip browser debugging skills",
          "Ignore performance optimization",
          "Overuse heavy frameworks",
        ],
      },
      {
        title: "Back-End Development",
        duration: "3-4 months",
        steps: [
          "Node.js and Express.js basics",
          "Learn databases (MongoDB, MySQL, PostgreSQL)",
          "Authentication (JWT, OAuth)",
          "Deploy applications (Vercel, Netlify, AWS)",
        ],
        dos: [
          "Develop full-stack projects",
          "Use proper error handling",
          "Follow RESTful API principles",
        ],
        donts: [
          "Ignore security best practices",
          "Store sensitive data in code",
          "Skip API documentation",
        ],
      },
    ],
    requirements: {
      technical: [
        "HTML, CSS, JavaScript proficiency",
        "Responsive design & accessibility",
        "Front-end frameworks (React, Vue, Angular)",
        "Backend development (Node.js, Django, Flask)",
        "Database management (MongoDB, MySQL, PostgreSQL)",
      ],
      softSkills: [
        "Problem-solving mindset",
        "Collaboration & teamwork",
        "Attention to detail",
        "Continuous learning attitude",
      ],
      tools: [
        "Visual Studio Code",
        "Git & GitHub",
        "Chrome DevTools",
        "Postman API Client",
      ],
    },
    resources: {
      youtube: [
        "Traversy Media - Web Development Tutorials",
        "Academind - Full Stack Guides",
        "FreeCodeCamp - Frontend & Backend Projects",
        "The Net Ninja - JavaScript & React Courses",
      ],
      free: [
        "MDN Web Docs (HTML, CSS, JavaScript)",
        "FreeCodeCamp Web Development Path",
        "CS50x - Harvard's Intro to CS",
        "The Odin Project - Full Stack Curriculum",
      ],
      paid: [
        "Full Stack Web Developer (Udacity)",
        "JavaScript Web Projects (Udemy)",
        "Frontend Masters - Advanced Web Development",
        "Zero to Mastery - Complete Web Developer",
      ],
      tools: ["VS Code", "Git & GitHub", "Postman", "Figma (UI/UX Design)"],
      communities: [
        "Dev.to Web Development",
        "Reddit r/webdev",
        "Hashnode Web Community",
        "Frontend Masters Slack Group",
      ],
      events: [
        "Google I/O",
        "React Summit",
        "JSConf",
        "Web Unleashed Conference",
      ],
    },
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    description:
      "A Cloud Engineer is responsible for designing, implementing, and managing cloud-based infrastructure and services using platforms like AWS, Azure, and Google Cloud.",
    whatIs:
      "Cloud engineering focuses on deploying, managing, and optimizing cloud computing environments. Cloud engineers work with cloud service providers to build scalable and secure infrastructure.",
    jobDescription:
      "Cloud engineers develop and maintain cloud infrastructure, ensure high availability, implement security measures, and automate cloud deployments. They work with DevOps, networking, and storage solutions.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Cloud Computing",
      ],
      noDegreePath: [
        "Cloud certifications",
        "Hands-on experience with cloud platforms",
        "Open-source cloud projects",
        "Self-learning via online courses",
      ],
    },
    marketTrends: {
      demandLevel: "Very High",
      popularity: "Rapidly Growing",
      jobGrowth: "25% (2023-now)",
      companies: [
        "Tech Giants (Google, Amazon, Microsoft)",
        "Enterprise IT Firms",
        "Cloud Service Providers",
        "Startups & Consultancies",
      ],
    },
    certifications: [
      "AWS Certified Solutions Architect",
      "Google Cloud Professional Cloud Engineer",
      "Microsoft Certified: Azure Solutions Architect",
      "Certified Kubernetes Administrator (CKA)",
    ],
    salary: [
      {
        region: "India",
        average: "₹8 LPA",
        entry: "₹5 LPA",
        senior: "₹20 LPA",
      },
      {
        region: "USA",
        average: "$120,000",
        entry: "$90,000",
        senior: "$160,000",
      },
      {
        region: "Europe",
        average: "€75,000",
        entry: "€50,000",
        senior: "€100,000",
      },
    ],
    howToStart: {
      title: "Getting Started as a Cloud Engineer",
      steps: [
        "Understand cloud computing fundamentals",
        "Learn networking, security, and storage basics",
        "Get hands-on experience with AWS, Azure, or GCP",
        "Learn Infrastructure as Code (Terraform, CloudFormation)",
        "Work on real-world cloud projects",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-25 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "Hired",
      "Glassdoor",
      "Google Careers",
      "Amazon Jobs",
    ],
    roadmap: [
      {
        title: "Cloud Fundamentals",
        duration: "1-2 months",
        steps: [
          "Learn cloud computing concepts",
          "Understand different cloud service models (IaaS, PaaS, SaaS)",
          "Explore AWS, Azure, and GCP basics",
          "Learn Linux and basic scripting",
        ],
        dos: [
          "Gain hands-on experience with free-tier cloud services",
          "Understand pricing and billing models",
          "Learn basic cloud security principles",
        ],
        donts: [
          "Ignore networking basics",
          "Overlook identity and access management (IAM)",
          "Focus only on one cloud provider",
        ],
      },
      {
        title: "Infrastructure & Security",
        duration: "2-3 months",
        steps: [
          "Learn Infrastructure as Code (Terraform, CloudFormation)",
          "Understand Virtual Private Cloud (VPC) and networking",
          "Implement cloud security best practices",
          "Work with CI/CD pipelines for cloud deployments",
        ],
        dos: [
          "Automate infrastructure deployments",
          "Implement monitoring and logging",
          "Optimize cloud costs",
        ],
        donts: [
          "Ignore security compliance",
          "Skip automation best practices",
          "Underestimate cloud scaling strategies",
        ],
      },
      {
        title: "Advanced Cloud Engineering",
        duration: "3-4 months",
        steps: [
          "Learn Kubernetes and container orchestration",
          "Work with hybrid and multi-cloud environments",
          "Master serverless computing (AWS Lambda, Azure Functions)",
          "Prepare for cloud certifications",
        ],
        dos: [
          "Deploy production-grade cloud applications",
          "Understand DevOps methodologies",
          "Optimize cloud performance and reliability",
        ],
        donts: [
          "Neglect disaster recovery planning",
          "Ignore documentation of cloud architectures",
          "Skip learning cloud automation tools",
        ],
      },
    ],
    requirements: {
      technical: [
        "Cloud platforms (AWS, Azure, GCP)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Networking and security fundamentals",
        "Containerization (Docker, Kubernetes)",
        "CI/CD pipelines and automation",
      ],
      softSkills: [
        "Problem-solving and troubleshooting",
        "Collaboration with DevOps teams",
        "Adaptability to new cloud technologies",
        "Continuous learning mindset",
      ],
      tools: [
        "AWS CLI / Azure CLI / GCP CLI",
        "Terraform / CloudFormation",
        "Docker / Kubernetes",
        "Prometheus & Grafana for monitoring",
      ],
    },
    resources: {
      youtube: [
        "Tech With Tim - AWS & Cloud Engineering",
        "FreeCodeCamp - Cloud Computing Tutorials",
        "NetworkChuck - Cloud Certifications Guide",
        "The Primeagen - DevOps & Cloud Engineering",
      ],
      free: [
        "AWS Free Tier for Hands-on Practice",
        "Microsoft Learn - Azure Fundamentals",
        "Google Cloud Training - Free Courses",
        "Cloud Academy Blogs & Tutorials",
      ],
      paid: [
        "AWS Certified Solutions Architect Course (Udemy)",
        "Google Cloud Professional Engineer (Coursera)",
        "Azure Cloud Engineer Bootcamp (Pluralsight)",
        "HashiCorp Terraform Training (LinkedIn Learning)",
      ],
      tools: [
        "AWS Management Console",
        "Azure Portal",
        "Google Cloud Console",
        "Kubernetes Dashboard",
      ],
      communities: [
        "r/cloudcomputing (Reddit)",
        "DevOps & Cloud Slack Groups",
        "AWS & GCP Community Forums",
        "Cloud Native Computing Foundation (CNCF)",
      ],
      events: [
        "AWS re:Invent",
        "Google Cloud Next",
        "Microsoft Ignite",
        "KubeCon + CloudNativeCon",
      ],
    },
  },
  {
    id: "database-administrator",
    title: "Database Administrator (DBA)",
    description:
      "A Database Administrator (DBA) is responsible for managing, securing, and optimizing databases to ensure high availability, performance, and data integrity.",
    whatIs:
      "Database administration involves designing, implementing, and maintaining database systems to store and manage data efficiently. DBAs work with relational (SQL) and non-relational (NoSQL) databases.",
    jobDescription:
      "Database administrators manage database performance, implement security measures, handle backups and recovery, and optimize queries to ensure efficient data access. They work with developers, system administrators, and analysts to maintain data integrity.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Data Management",
      ],
      noDegreePath: [
        "SQL and database certifications",
        "Hands-on experience with database management systems",
        "Contributing to open-source database projects",
        "Self-learning through online courses",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Stable",
      jobGrowth: "10% (2023-now)",
      companies: [
        "Financial Institutions",
        "E-commerce Companies",
        "Healthcare Organizations",
        "Tech Startups",
      ],
    },
    certifications: [
      "Oracle Certified Professional (OCP)",
      "Microsoft Certified: Azure Database Administrator Associate",
      "AWS Certified Database - Specialty",
      "MongoDB Certified DBA",
    ],
    salary: [
      {
        region: "India",
        average: "₹7 LPA",
        entry: "₹4 LPA",
        senior: "₹18 LPA",
      },
      {
        region: "USA",
        average: "$100,000",
        entry: "$70,000",
        senior: "$140,000",
      },
      {
        region: "Europe",
        average: "€60,000",
        entry: "€40,000",
        senior: "€90,000",
      },
    ],
    howToStart: {
      title: "Getting Started as a Database Administrator",
      steps: [
        "Learn SQL fundamentals and relational databases",
        "Understand database design and normalization",
        "Gain hands-on experience with MySQL, PostgreSQL, or SQL Server",
        "Learn backup, recovery, and performance tuning techniques",
        "Work on real-world database administration tasks",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "10-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "Glassdoor",
      "Monster",
      "Dice",
      "Upwork",
    ],
    roadmap: [
      {
        title: "Database Fundamentals",
        duration: "1-2 months",
        steps: [
          "Learn SQL (DDL, DML, DCL, TCL)",
          "Understand relational database concepts",
          "Get familiar with database management systems (DBMS)",
        ],
        dos: [
          "Practice writing complex SQL queries",
          "Learn about indexes and optimization",
          "Work on small database projects",
        ],
        donts: [
          "Ignore data normalization",
          "Skip understanding primary and foreign keys",
          "Neglect security best practices",
        ],
      },
      {
        title: "Database Administration Basics",
        duration: "2-3 months",
        steps: [
          "Learn database installation and configuration",
          "Understand backup and recovery strategies",
          "Optimize database performance and indexing",
        ],
        dos: [
          "Implement regular database backups",
          "Monitor database performance",
          "Ensure data security and encryption",
        ],
        donts: [
          "Ignore performance tuning",
          "Neglect access control management",
          "Overlook database automation tools",
        ],
      },
      {
        title: "Advanced DBA Skills",
        duration: "3-4 months",
        steps: [
          "Learn NoSQL databases like MongoDB, Redis, or Cassandra",
          "Work with cloud databases (AWS RDS, Azure SQL, Google Cloud Spanner)",
          "Master high availability and disaster recovery strategies",
        ],
        dos: [
          "Implement replication and clustering",
          "Ensure compliance with data regulations (GDPR, HIPAA)",
          "Automate database monitoring and maintenance",
        ],
        donts: [
          "Ignore security patches and updates",
          "Skip learning about cloud-based databases",
          "Neglect database documentation",
        ],
      },
    ],
    requirements: {
      technical: [
        "SQL and database management",
        "Performance tuning and query optimization",
        "Backup and disaster recovery",
        "Cloud database management (AWS, Azure, GCP)",
        "Scripting with Python, Bash, or PowerShell",
      ],
      softSkills: [
        "Problem-solving and troubleshooting",
        "Collaboration with developers and IT teams",
        "Attention to detail for data integrity",
        "Continuous learning mindset",
      ],
      tools: [
        "MySQL Workbench",
        "pgAdmin (PostgreSQL)",
        "SQL Server Management Studio (SSMS)",
        "MongoDB Compass",
      ],
    },
    resources: {
      youtube: [
        "Traversy Media - SQL and Database Tutorials",
        "FreeCodeCamp - SQL for Beginners",
        "The Net Ninja - Database Administration Basics",
        "Academind - PostgreSQL & MySQL Guides",
      ],
      free: [
        "SQL for Beginners (W3Schools)",
        "DBMS Notes (GeeksforGeeks)",
        "PostgreSQL Official Documentation",
        "MongoDB University Free Courses",
      ],
      paid: [
        "The Complete SQL Bootcamp (Udemy)",
        "Microsoft SQL Server DBA Training (Pluralsight)",
        "Database Administration Certification (Coursera)",
        "AWS Certified Database Specialty Course",
      ],
      tools: ["MySQL", "PostgreSQL", "MongoDB", "Oracle Database"],
      communities: [
        "r/SQL (Reddit)",
        "Database Administrators Stack Exchange",
        "SQL Server Central",
        "MongoDB Developer Community",
      ],
      events: [
        "Oracle OpenWorld",
        "Microsoft Ignite (SQL Server)",
        "PostgreSQL Conference",
        "MongoDB World",
      ],
    },
  },
  {
    id: "cyber-security",
    title: "Cyber Security Specialist",
    description:
      "A Cyber Security Specialist is responsible for protecting computer systems, networks, and data from cyber threats, ensuring security compliance, and mitigating vulnerabilities.",
    whatIs:
      "Cyber Security involves the protection of digital assets from cyber attacks, data breaches, and unauthorized access. It includes network security, ethical hacking, cryptography, and risk management.",
    jobDescription:
      "Cyber Security Specialists analyze security risks, implement protective measures, conduct penetration testing, respond to security incidents, and ensure compliance with security standards.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Cyber Security",
        "Computer Science",
        "Information Security",
      ],
      noDegreePath: [
        "Cyber security certifications",
        "Hands-on experience with penetration testing",
        "Contributing to open-source security projects",
        "Self-learning through online courses",
      ],
    },
    marketTrends: {
      demandLevel: "Very High",
      popularity: "Rapidly Growing",
      jobGrowth: "35% (2023-now)",
      companies: [
        "Financial Institutions",
        "Government Agencies",
        "Tech Companies",
        "Healthcare Organizations",
      ],
    },
    certifications: [
      "Certified Ethical Hacker (CEH)",
      "CompTIA Security+",
      "Certified Information Systems Security Professional (CISSP)",
      "Offensive Security Certified Professional (OSCP)",
    ],
    salary: [
      {
        region: "India",
        average: "₹9 LPA",
        entry: "₹5 LPA",
        senior: "₹25 LPA",
      },
      {
        region: "USA",
        average: "$115,000",
        entry: "$80,000",
        senior: "$160,000",
      },
      {
        region: "Europe",
        average: "€75,000",
        entry: "€50,000",
        senior: "€120,000",
      },
    ],
    howToStart: {
      title: "Getting Started in Cyber Security",
      steps: [
        "Learn the basics of networking and security protocols",
        "Understand cryptography and encryption techniques",
        "Get familiar with ethical hacking and penetration testing",
        "Gain experience with firewalls, IDS/IPS, and SIEM tools",
        "Work on real-world security projects and CTF challenges",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-25 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "Glassdoor",
      "CyberSecJobs",
      "HackerOne",
      "Bugcrowd",
    ],
    roadmap: [
      {
        title: "Fundamentals of Cyber Security",
        duration: "1-2 months",
        steps: [
          "Learn networking basics (OSI Model, TCP/IP)",
          "Understand security fundamentals (CIA Triad, Risk Assessment)",
          "Explore Linux & Windows security",
        ],
        dos: [
          "Practice with networking tools like Wireshark",
          "Understand security frameworks like NIST & ISO 27001",
          "Learn command-line navigation for security analysis",
        ],
        donts: [
          "Ignore basic networking concepts",
          "Skip hands-on labs and practicals",
          "Neglect continuous updates on security threats",
        ],
      },
      {
        title: "Penetration Testing & Ethical Hacking",
        duration: "2-3 months",
        steps: [
          "Learn ethical hacking methodologies",
          "Practice with penetration testing tools (Metasploit, Burp Suite)",
          "Understand web security vulnerabilities (OWASP Top 10)",
        ],
        dos: [
          "Practice ethical hacking on legal platforms (TryHackMe, Hack The Box)",
          "Learn scripting for automation (Python, Bash)",
          "Stay updated with latest vulnerabilities (CVE databases)",
        ],
        donts: [
          "Engage in illegal hacking activities",
          "Skip ethical hacking certifications",
          "Ignore the importance of social engineering awareness",
        ],
      },
      {
        title: "Advanced Security & Specialization",
        duration: "3-4 months",
        steps: [
          "Learn malware analysis & reverse engineering",
          "Master threat hunting & incident response",
          "Gain experience with cloud security (AWS, Azure, GCP)",
        ],
        dos: [
          "Get hands-on experience with SIEM tools",
          "Understand digital forensics & threat intelligence",
          "Participate in bug bounty programs",
        ],
        donts: [
          "Ignore compliance and legal aspects",
          "Neglect real-world security case studies",
          "Skip learning about cybersecurity frameworks",
        ],
      },
    ],
    requirements: {
      technical: [
        "Networking and security fundamentals",
        "Penetration testing and ethical hacking",
        "Cryptography and secure coding",
        "SIEM and threat intelligence tools",
        "Cloud and IoT security",
      ],
      softSkills: [
        "Problem-solving and critical thinking",
        "Attention to detail",
        "Incident response and crisis management",
        "Continuous learning and adaptability",
      ],
      tools: [
        "Wireshark",
        "Kali Linux",
        "Metasploit",
        "Burp Suite",
        "Splunk (SIEM)",
      ],
    },
    resources: {
      youtube: [
        "HackerSploit - Ethical Hacking Tutorials",
        "NetworkChuck - Cyber Security & Networking",
        "John Hammond - Security Research",
        "The Cyber Mentor - Penetration Testing",
      ],
      free: [
        "Cybrary - Cyber Security Training",
        "OWASP Official Documentation",
        "TryHackMe - Ethical Hacking Labs",
        "NIST Cybersecurity Framework",
      ],
      paid: [
        "Practical Ethical Hacking (TCM Security)",
        "Certified Ethical Hacker (CEH) Training (EC-Council)",
        "Cyber Security Specialization (Coursera)",
        "Penetration Testing with Kali Linux (Offensive Security)",
      ],
      tools: ["Kali Linux", "Nmap", "Burp Suite", "Splunk", "Tenable Nessus"],
      communities: [
        "r/netsec (Reddit)",
        "Hack The Box Forum",
        "OWASP Community",
        "Cyber Security Discord Groups",
      ],
      events: [
        "DEF CON",
        "Black Hat",
        "BSides Security Conference",
        "RSA Conference",
      ],
    },
  },
  {
    id: "game-developer",
    title: "Game Developer",
    description:
      "A Game Developer is responsible for designing, developing, and optimizing video games using various programming languages, game engines, and creative techniques.",
    whatIs:
      "Game development involves creating interactive digital experiences using programming, design, art, and storytelling. It includes game mechanics, physics, AI, rendering, and multiplayer networking.",
    jobDescription:
      "Game Developers build and maintain game logic, graphics, and AI, integrate audio-visual elements, and ensure performance optimization across platforms such as PC, mobile, and consoles.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Computer Science",
        "Game Development",
        "Software Engineering",
      ],
      noDegreePath: [
        "Game development bootcamps",
        "Self-learning through online courses",
        "Building portfolio projects",
        "Contributing to open-source game engines",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Rapid Growth",
      jobGrowth: "20% (2023-now)",
      companies: [
        "AAA Game Studios",
        "Indie Game Studios",
        "Tech Startups",
        "Metaverse & VR Companies",
      ],
    },
    certifications: [
      "Unity Certified Developer",
      "Unreal Engine Certification",
      "Game Design & Development (Coursera)",
      "C++ Game Development Certification",
    ],
    salary: [
      {
        region: "India",
        average: "₹7 LPA",
        entry: "₹4 LPA",
        senior: "₹20 LPA",
      },
      {
        region: "USA",
        average: "$95,000",
        entry: "$60,000",
        senior: "$150,000",
      },
      {
        region: "Europe",
        average: "€55,000",
        entry: "€35,000",
        senior: "€90,000",
      },
    ],
    howToStart: {
      title: "Getting Started with Game Development",
      steps: [
        "Learn programming languages like C++, C#, or Python",
        "Master game engines such as Unity and Unreal Engine",
        "Understand game physics, AI, and rendering techniques",
        "Build small game projects to enhance skills",
        "Explore multiplayer and networking for online games",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-25 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "AngelList",
      "IndieDB",
      "Itch.io",
      "Gamasutra Jobs",
    ],
    roadmap: [
      {
        title: "Fundamentals of Game Development",
        duration: "1-2 months",
        steps: [
          "Learn C++/C#/Python for game programming",
          "Understand game design principles",
          "Explore physics and mathematics in gaming",
        ],
        dos: [
          "Start with small 2D projects",
          "Understand object-oriented programming",
          "Learn game asset creation basics",
        ],
        donts: [
          "Skip programming fundamentals",
          "Rely too much on drag-and-drop engines",
          "Ignore performance optimization",
        ],
      },
      {
        title: "Game Engine Mastery",
        duration: "2-4 months",
        steps: [
          "Learn Unity or Unreal Engine",
          "Implement game mechanics and animations",
          "Use shaders and graphics rendering techniques",
        ],
        dos: [
          "Create at least 3-5 small games",
          "Experiment with physics engines",
          "Understand scripting languages (C# for Unity, Blueprints for Unreal)",
        ],
        donts: [
          "Ignore debugging and testing",
          "Overcomplicate game mechanics early on",
          "Neglect player experience and controls",
        ],
      },
      {
        title: "Advanced Game Development",
        duration: "3-6 months",
        steps: [
          "Master AI for NPC behavior",
          "Develop multiplayer and networking",
          "Optimize game performance and memory usage",
        ],
        dos: [
          "Create a fully playable game",
          "Use GitHub for version control",
          "Understand monetization strategies (Ads, In-app purchases)",
        ],
        donts: [
          "Ignore user feedback",
          "Underestimate the importance of marketing",
          "Skip playtesting before launch",
        ],
      },
    ],
    requirements: {
      technical: [
        "Strong C++, C#, or Python skills",
        "Proficiency in Unity or Unreal Engine",
        "Game physics and AI knowledge",
        "Graphics rendering and shader programming",
        "Networking and multiplayer game development",
      ],
      softSkills: [
        "Creativity and problem-solving",
        "Collaboration with designers and artists",
        "Understanding of player psychology",
        "Time management and iteration",
      ],
      tools: [
        "Unity Engine",
        "Unreal Engine",
        "Blender for 3D modeling",
        "Adobe Photoshop for assets",
        "Visual Studio Code",
      ],
    },
    resources: {
      youtube: [
        "Brackeys - Unity Tutorials",
        "Unreal Sensei - Unreal Engine Guides",
        "The Coding Train - Game Development Basics",
        "Game Maker's Toolkit - Game Design Principles",
      ],
      free: [
        "Unity Learn - Official Unity Tutorials",
        "Unreal Engine Documentation",
        "GDevelop - Free Game Engine",
        "MDN Web Docs - Web Game Development",
      ],
      paid: [
        "Game Development for Beginners (Udemy)",
        "Unreal Engine Masterclass (Coursera)",
        "Game AI Programming (Pluralsight)",
      ],
      tools: ["Unity", "Unreal Engine", "Godot", "Blender", "GIMP"],
      communities: [
        "r/gamedev (Reddit)",
        "Unity Developer Forum",
        "Indie Game Developers Discord",
        "Godot Engine Community",
      ],
      events: [
        "GDC (Game Developers Conference)",
        "IndieCade",
        "Unite (Unity Conference)",
        "Unreal Fest",
      ],
    },
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    description:
      "A UI/UX Designer focuses on designing intuitive and aesthetically pleasing user interfaces while enhancing user experiences through research, prototyping, and usability testing.",
    whatIs:
      "UI (User Interface) design focuses on the visual elements of a product, while UX (User Experience) design emphasizes user interactions and satisfaction. Both play crucial roles in creating user-friendly applications and websites.",
    jobDescription:
      "UI/UX Designers are responsible for creating user flows, wireframes, prototypes, and high-fidelity designs. They conduct user research, test usability, and collaborate with developers to implement designs effectively.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Graphic Design",
        "Human-Computer Interaction",
        "Computer Science",
        "Psychology",
      ],
      noDegreePath: [
        "Online UI/UX design bootcamps",
        "Self-learning through tutorials",
        "Building a portfolio with real-world projects",
        "Freelancing and open-source contributions",
      ],
    },
    marketTrends: {
      demandLevel: "Very High",
      popularity: "Growing Rapidly",
      jobGrowth: "18% (2023-now)",
      companies: [
        "Tech Companies",
        "Startups",
        "E-commerce Platforms",
        "Digital Agencies",
      ],
    },
    certifications: [
      "Google UX Design Certificate",
      "Nielsen Norman Group UX Certification",
      "Adobe Certified Expert (Adobe XD, Photoshop, Illustrator)",
      "Interaction Design Foundation Certification",
    ],
    salary: [
      {
        region: "India",
        average: "₹7 LPA",
        entry: "₹4 LPA",
        senior: "₹20 LPA",
      },
      {
        region: "USA",
        average: "$85,000",
        entry: "$55,000",
        senior: "$130,000",
      },
      {
        region: "Europe",
        average: "€50,000",
        entry: "€35,000",
        senior: "€85,000",
      },
    ],
    howToStart: {
      title: "Getting Started with UI/UX Design",
      steps: [
        "Learn UI/UX design principles and best practices",
        "Master tools like Figma, Adobe XD, and Sketch",
        "Understand user research and usability testing",
        "Create wireframes, prototypes, and mockups",
        "Build a strong portfolio with real-world projects",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "10-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Dribbble Jobs",
      "Behance Job Board",
      "AngelList",
      "Upwork",
      "Toptal",
    ],
    roadmap: [
      {
        title: "Fundamentals of UI/UX Design",
        duration: "1-2 months",
        steps: [
          "Learn design principles (color theory, typography, spacing)",
          "Understand UX research and user psychology",
          "Study accessibility and usability guidelines",
        ],
        dos: [
          "Practice designing landing pages and mobile UIs",
          "Understand user behavior and pain points",
          "Analyze well-designed applications",
        ],
        donts: [
          "Ignore user feedback",
          "Rely only on design trends without usability considerations",
          "Neglect accessibility and responsive design",
        ],
      },
      {
        title: "Mastering UI Design Tools",
        duration: "2-3 months",
        steps: [
          "Master Figma, Adobe XD, or Sketch",
          "Create wireframes and prototypes",
          "Design responsive and interactive interfaces",
        ],
        dos: [
          "Design at least 5 portfolio-worthy projects",
          "Work on real-world UI challenges",
          "Collaborate with developers to understand feasibility",
        ],
        donts: [
          "Focus only on aesthetics without usability",
          "Ignore feedback loops",
          "Use too many unnecessary animations",
        ],
      },
      {
        title: "Advanced UX Strategies",
        duration: "3-4 months",
        steps: [
          "Conduct usability testing and A/B testing",
          "Use UX research tools (Hotjar, Google Analytics)",
          "Optimize UI for better user engagement",
        ],
        dos: [
          "Apply UX writing and micro-interactions",
          "Test designs with real users",
          "Understand business goals and align with user needs",
        ],
        donts: [
          "Skip UX research before designing",
          "Forget about mobile-first design",
          "Neglect iterative improvement",
        ],
      },
    ],
    requirements: {
      technical: [
        "Proficiency in UI design tools (Figma, Sketch, Adobe XD)",
        "Understanding of user research and testing",
        "Knowledge of HTML & CSS (basic understanding)",
        "Familiarity with accessibility and UX best practices",
      ],
      softSkills: [
        "Empathy for users",
        "Problem-solving mindset",
        "Communication and teamwork",
        "Attention to detail",
      ],
      tools: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Miro (for brainstorming)",
        "InVision (for prototyping)",
      ],
    },
    resources: {
      youtube: [
        "DesignCourse - UI/UX Tutorials",
        "Flux - UI/UX Design Tips",
        "AJ&Smart - UX Research and Design",
        "CharliMarieTV - Portfolio Tips",
        "The Futur - UI/UX Career Advice",
      ],
      free: [
        "Google UX Design Course (Coursera)",
        "Figma Crash Course (YouTube)",
        "Nielsen Norman Group UX Articles",
        "Adobe XD Free Tutorials",
      ],
      paid: [
        "DesignLab UX Academy",
        "Interaction Design Foundation Membership",
        "UX/UI Bootcamp (Springboard)",
      ],
      tools: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Miro",
        "Notion (for project management)",
      ],
      communities: [
        "r/userexperience (Reddit)",
        "Designer Hangout (Slack Community)",
        "Dribbble Community",
        "UX Mastery Forum",
      ],
      events: [
        "Adobe MAX",
        "Figma Config",
        "UX Design Summit",
        "Awwwards Conference",
      ],
    },
  },

  {
    id: "mobile-app-developer",
    title: "Mobile App Developer",
    description:
      "A Mobile App Developer specializes in designing, building, and maintaining applications for mobile devices using various programming languages and frameworks.",
    whatIs:
      "Mobile app development involves creating applications for smartphones and tablets using native (Android/iOS) or cross-platform technologies like Flutter, React Native, or Xamarin.",
    jobDescription:
      "Mobile App Developers build, test, and optimize applications for Android and iOS platforms. They work with APIs, databases, and UI/UX designers to create seamless user experiences.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Computer Science",
        "Software Engineering",
        "Information Technology",
      ],
      noDegreePath: [
        "Online courses and coding bootcamps",
        "Self-learning through tutorials",
        "Freelancing and open-source contributions",
        "Building portfolio projects",
      ],
    },
    marketTrends: {
      demandLevel: "Very High",
      popularity: "Growing Rapidly",
      jobGrowth: "25% (2023-now)",
      companies: [
        "Tech Startups",
        "E-commerce Platforms",
        "Game Development Companies",
        "IT Services & Consultancies",
      ],
    },
    certifications: [
      "Google Associate Android Developer",
      "Apple Certified iOS Developer",
      "Flutter Certified Application Developer",
      "Microsoft Certified: Azure Developer Associate",
    ],
    salary: [
      {
        region: "India",
        average: "₹8 LPA",
        entry: "₹4 LPA",
        senior: "₹20 LPA",
      },
      {
        region: "USA",
        average: "$100,000",
        entry: "$70,000",
        senior: "$150,000",
      },
      {
        region: "Europe",
        average: "€60,000",
        entry: "€40,000",
        senior: "€90,000",
      },
    ],
    howToStart: {
      title: "Getting Started with Mobile App Development",
      steps: [
        "Learn a programming language (Java/Kotlin for Android, Swift for iOS, Dart for Flutter, or JavaScript for React Native)",
        "Understand mobile UI/UX principles",
        "Explore mobile development frameworks (Flutter, React Native, or native development)",
        "Build real-world projects and publish apps on Play Store/App Store",
        "Learn API integration and database management",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "AngelList",
      "Upwork",
      "Freelancer",
      "Toptal",
    ],
    roadmap: [
      {
        title: "Fundamentals of Mobile Development",
        duration: "1-2 months",
        steps: [
          "Learn programming basics (Java, Kotlin, Swift, Dart, JavaScript)",
          "Understand Object-Oriented Programming (OOP)",
          "Explore UI/UX design basics for mobile apps",
        ],
        dos: [
          "Build small UI projects",
          "Learn about app navigation",
          "Practice debugging skills",
        ],
        donts: [
          "Ignore design patterns",
          "Skip learning about mobile security",
          "Neglect understanding platform guidelines",
        ],
      },
      {
        title: "Advanced Mobile Development",
        duration: "3-4 months",
        steps: [
          "Learn state management (Provider, Redux, Riverpod, etc.)",
          "Understand API integration (REST, GraphQL)",
          "Implement authentication (OAuth, Firebase, JWT)",
          "Explore database options (SQLite, Firebase, MongoDB)",
        ],
        dos: [
          "Work on 3+ real-world projects",
          "Optimize app performance",
          "Test and debug on real devices",
        ],
        donts: [
          "Skip performance optimization",
          "Overlook security best practices",
          "Ignore user feedback for app improvements",
        ],
      },
      {
        title: "Deployment and Maintenance",
        duration: "1-2 months",
        steps: [
          "Deploy apps to Google Play Store and Apple App Store",
          "Implement app monetization (Ads, In-app purchases)",
          "Optimize and update apps based on analytics",
        ],
        dos: [
          "Follow platform guidelines for publishing",
          "Regularly update and fix bugs",
          "Monitor app performance using analytics",
        ],
        donts: [
          "Ignore store compliance policies",
          "Neglect user feedback",
          "Avoid app maintenance after deployment",
        ],
      },
    ],
    requirements: {
      technical: [
        "Proficiency in Android (Java/Kotlin) or iOS (Swift)",
        "Familiarity with cross-platform frameworks (Flutter, React Native)",
        "Understanding of RESTful APIs and databases",
        "Version control (Git/GitHub)",
        "Performance optimization techniques",
      ],
      softSkills: [
        "Problem-solving and debugging",
        "Attention to detail",
        "Communication and teamwork",
        "Agile methodology understanding",
      ],
      tools: [
        "Android Studio",
        "Xcode",
        "Flutter/Dart SDK",
        "Postman API Client",
        "Firebase for backend services",
      ],
    },
    resources: {
      youtube: [
        "Academind - Mobile App Development",
        "Traversy Media - Flutter & React Native",
        "CodeWithChris - iOS Development",
        "The Net Ninja - React Native & Flutter",
        "FreeCodeCamp - Mobile App Full Course",
      ],
      free: [
        "Google Android Developer Guides",
        "Apple Developer Documentation",
        "Flutter Official Documentation",
        "React Native Official Docs",
        "Firebase Free Courses",
      ],
      paid: [
        "Udemy - Complete Flutter/React Native Course",
        "Coursera - Mobile Development Specialization",
        "Pluralsight - iOS & Android Development Path",
      ],
      tools: [
        "Android Studio",
        "Xcode",
        "Flutter SDK",
        "Firebase",
        "Visual Studio Code",
      ],
      communities: [
        "Flutter Community (Discord, Reddit)",
        "React Native Community",
        "Google Android Developers Forum",
        "iOS Developers Slack Group",
      ],
      events: [
        "Google I/O",
        "Apple WWDC",
        "Flutter Engage",
        "React Native EU Conference",
      ],
    },
  },
  {
    id: "backend-developer",
    title: "Back-End Developer",
    description:
      "A Back-End Developer is responsible for server-side logic, database management, and API development, ensuring seamless communication between the front-end and the server.",
    whatIs:
      "Back-end development focuses on building and maintaining the server, database, and application logic that power web applications. It involves working with frameworks, APIs, and security implementations.",
    jobDescription:
      "Back-End Developers build server-side applications, design databases, create APIs, and optimize application performance. They ensure secure and scalable systems, working closely with front-end developers and DevOps teams.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Computer Science",
        "Software Engineering",
        "Information Technology",
      ],
      noDegreePath: [
        "Online courses and bootcamps",
        "Self-learning through documentation",
        "Open-source contributions",
        "Freelancing and side projects",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Growing",
      jobGrowth: "21% (2023-now)",
      companies: [
        "Tech Giants",
        "Startups",
        "E-commerce Platforms",
        "Cloud Service Providers",
      ],
    },
    certifications: [
      "AWS Certified Developer – Associate",
      "Microsoft Certified: Azure Developer",
      "Google Professional Cloud Developer",
      "MongoDB Developer Certification",
    ],
    salary: [
      {
        region: "India",
        average: "₹10 LPA",
        entry: "₹5 LPA",
        senior: "₹25 LPA",
      },
      {
        region: "USA",
        average: "$110,000",
        entry: "$75,000",
        senior: "$160,000",
      },
      {
        region: "Europe",
        average: "€65,000",
        entry: "€45,000",
        senior: "€100,000",
      },
    ],
    howToStart: {
      title: "Getting Started with Back-End Development",
      steps: [
        "Learn a back-end programming language (Node.js, Python, Java, Ruby, PHP)",
        "Understand database management (SQL, MongoDB, PostgreSQL)",
        "Master RESTful APIs and GraphQL",
        "Explore authentication methods (JWT, OAuth, Firebase Auth)",
        "Learn about caching, optimization, and security best practices",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "Glassdoor",
      "Turing",
      "Upwork",
      "Toptal",
    ],
    roadmap: [
      {
        title: "Fundamentals of Back-End Development",
        duration: "1-2 months",
        steps: [
          "Learn programming fundamentals (JavaScript, Python, Java, etc.)",
          "Understand HTTP, REST, and GraphQL APIs",
          "Basic database design and CRUD operations",
        ],
        dos: [
          "Practice database queries",
          "Explore API integrations",
          "Learn command line basics",
        ],
        donts: [
          "Ignore database indexing",
          "Skip security best practices",
          "Avoid version control (Git)",
        ],
      },
      {
        title: "Advanced Back-End Development",
        duration: "3-4 months",
        steps: [
          "Build RESTful APIs with Express, Django, or Spring Boot",
          "Implement authentication and authorization",
          "Learn cloud platforms (AWS, Azure, GCP)",
          "Optimize back-end performance (caching, load balancing)",
        ],
        dos: [
          "Work on 3+ real-world projects",
          "Implement security best practices",
          "Use CI/CD pipelines for deployment",
        ],
        donts: [
          "Ignore error handling",
          "Neglect API documentation",
          "Skip testing and debugging",
        ],
      },
      {
        title: "Deployment and Scaling",
        duration: "2-3 months",
        steps: [
          "Deploy applications using Docker and Kubernetes",
          "Monitor and optimize server performance",
          "Implement microservices architecture for scalability",
        ],
        dos: [
          "Use cloud hosting services",
          "Implement logging and monitoring",
          "Optimize database queries",
        ],
        donts: [
          "Neglect database backups",
          "Ignore scalability considerations",
          "Overlook security vulnerabilities",
        ],
      },
    ],
    requirements: {
      technical: [
        "Proficiency in back-end programming languages (Node.js, Python, Java, Ruby, PHP)",
        "Database management (MySQL, PostgreSQL, MongoDB)",
        "API development (REST, GraphQL)",
        "Authentication and security (JWT, OAuth, SSL/TLS)",
        "Version control (Git/GitHub)",
      ],
      softSkills: [
        "Problem-solving and debugging",
        "Collaboration with cross-functional teams",
        "System architecture understanding",
        "Continuous learning mindset",
      ],
      tools: [
        "Postman API Client",
        "MongoDB Compass",
        "VS Code / JetBrains IDEs",
        "Docker & Kubernetes",
        "Jest / Mocha for testing",
      ],
    },
    resources: {
      youtube: [
        "Traversy Media - Back-End Development Tutorials",
        "Academind - Node.js & Python Back-End Guides",
        "FreeCodeCamp - Full-Stack Development",
        "The Net Ninja - Back-End Crash Courses",
        "Codevolution - API Development",
      ],
      free: [
        "MDN Web Docs (JavaScript, HTTP, REST)",
        "PostgreSQL Official Documentation",
        "Node.js, Django, Spring Boot Documentation",
        "The Odin Project - Back-End Roadmap",
      ],
      paid: [
        "Udemy - The Complete Node.js Developer Course",
        "Coursera - Back-End Specialization",
        "Pluralsight - Advanced API Development",
        "Frontend Masters - Server-Side Development",
      ],
      tools: ["Postman", "MongoDB Atlas", "Docker", "AWS Lambda", "Kubernetes"],
      communities: [
        "Reddit r/backend",
        "Hashnode Back-End Community",
        "Dev.to - API & Database Discussions",
        "Back-End Developers Slack Group",
      ],
      events: [
        "AWS re:Invent",
        "Google Cloud Next",
        "Microsoft Build",
        "Node.js Interactive Conference",
      ],
    },
  },
  {
    id: "frontend-developer",
    title: "Front-End Developer",
    description:
      "A Front-End Developer is responsible for building and optimizing the user interface and experience of web applications using HTML, CSS, JavaScript, and modern frameworks.",
    whatIs:
      "Front-end development focuses on creating the visual and interactive elements of a website or application that users engage with directly. It involves technologies like HTML, CSS, JavaScript, and front-end libraries/frameworks such as React, Vue, and Angular.",
    jobDescription:
      "Front-End Developers translate UI/UX designs into functional web interfaces, optimize performance, ensure responsiveness, and integrate with back-end services using APIs. They work closely with designers and back-end developers to deliver seamless user experiences.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Software Engineering",
      ],
      noDegreePath: [
        "Self-learning through online courses",
        "Open-source contributions",
        "Front-end development bootcamps",
        "Freelancing and building personal projects",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Growing",
      jobGrowth: "23% (2023-now)",
      companies: [
        "Tech Giants",
        "Startups",
        "E-commerce Platforms",
        "Digital Agencies",
      ],
    },
    certifications: [
      "Google Mobile Web Specialist Certification",
      "Microsoft Certified: Azure Front-End Developer",
      "Meta Front-End Developer Certification",
      "Scrimba Front-End Career Path",
    ],
    salary: [
      {
        region: "India",
        average: "₹7 LPA",
        entry: "₹4 LPA",
        senior: "₹18 LPA",
      },
      {
        region: "USA",
        average: "$95,000",
        entry: "$65,000",
        senior: "$140,000",
      },
      {
        region: "Europe",
        average: "€55,000",
        entry: "€40,000",
        senior: "€85,000",
      },
    ],
    howToStart: {
      title: "Getting Started with Front-End Development",
      steps: [
        "Learn HTML, CSS, and JavaScript fundamentals",
        "Master responsive design and accessibility best practices",
        "Get comfortable with a JavaScript framework (React, Vue, Angular)",
        "Understand version control (Git/GitHub)",
        "Build real-world projects to showcase in a portfolio",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "Glassdoor",
      "We Work Remotely",
      "Toptal",
      "Freelancer.com",
    ],
    roadmap: [
      {
        title: "Foundation Phase",
        duration: "1-2 months",
        steps: [
          "Learn HTML, CSS, and JavaScript",
          "Understand the box model and flexbox/grid",
          "Build simple static web pages",
        ],
        dos: [
          "Follow coding best practices",
          "Ensure mobile responsiveness",
          "Use semantic HTML",
        ],
        donts: [
          "Ignore accessibility",
          "Skip debugging techniques",
          "Neglect browser compatibility",
        ],
      },
      {
        title: "Advanced Front-End Development",
        duration: "3-4 months",
        steps: [
          "Learn a front-end framework (React, Vue, Angular)",
          "Understand state management (Redux, Vuex, Zustand)",
          "Integrate APIs and work with REST/GraphQL",
        ],
        dos: [
          "Optimize website performance",
          "Use component-based architecture",
          "Practice JavaScript ES6+ features",
        ],
        donts: [
          "Overuse third-party libraries",
          "Ignore performance optimization",
          "Skip testing and debugging",
        ],
      },
      {
        title: "Deployment & Optimization",
        duration: "2-3 months",
        steps: [
          "Learn CI/CD and deployment using Netlify, Vercel, or Firebase",
          "Improve web accessibility (WCAG standards)",
          "Implement performance optimizations (lazy loading, caching)",
        ],
        dos: [
          "Write clean and maintainable code",
          "Improve SEO and page speed",
          "Follow responsive design principles",
        ],
        donts: [
          "Ignore security vulnerabilities",
          "Skip progressive enhancement",
          "Avoid code reviews and feedback",
        ],
      },
    ],
    requirements: {
      technical: [
        "Proficiency in HTML, CSS, and JavaScript (ES6+)",
        "Familiarity with front-end frameworks (React, Vue, Angular)",
        "Understanding of APIs and HTTP requests",
        "Version control with Git and GitHub",
        "Basic knowledge of performance optimization",
      ],
      softSkills: [
        "Creative problem-solving",
        "Strong attention to detail",
        "Effective communication and teamwork",
        "Continuous learning mindset",
      ],
      tools: [
        "VS Code with front-end extensions",
        "Chrome DevTools",
        "Figma for UI collaboration",
        "Postman for API testing",
        "Webpack, Parcel, or Vite for bundling",
      ],
    },
    resources: {
      youtube: [
        "Traversy Media - Front-End Web Development",
        "The Net Ninja - JavaScript & React Tutorials",
        "Academind - Advanced Front-End Concepts",
        "FreeCodeCamp - Full-Stack Projects",
        "Codevolution - Front-End Development",
      ],
      free: [
        "MDN Web Docs (HTML, CSS, JavaScript)",
        "CSS Tricks",
        "JavaScript.info",
        "Frontend Mentor for real-world projects",
      ],
      paid: [
        "Udemy - The Complete Front-End Developer Course",
        "Scrimba Front-End Career Path",
        "Pluralsight - Front-End Advanced Concepts",
        "Frontend Masters - React & JavaScript Courses",
      ],
      tools: [
        "Visual Studio Code",
        "GitHub & Git",
        "Figma",
        "Vite / Webpack",
        "Netlify & Vercel",
      ],
      communities: [
        "Reddit r/webdev",
        "Hashnode Front-End Community",
        "Dev.to Front-End Discussions",
        "Front-End Developers Slack Group",
      ],
      events: [
        "React Summit",
        "CSSConf",
        "Google I/O",
        "JavaScript Conference",
      ],
    },
  },
  {
    id: "network-administrator",
    title: "Network Administrator",
    description:
      "A Network Administrator is responsible for managing, maintaining, and securing an organization's computer networks, ensuring smooth connectivity, data security, and optimal network performance.",
    whatIs:
      "Network Administration involves configuring, managing, and troubleshooting networks, including LANs, WANs, VPNs, and cloud-based infrastructures. Network Administrators ensure efficient and secure data communication across systems.",
    jobDescription:
      "Network Administrators oversee the daily operations of an organization's network infrastructure. Their tasks include setting up routers, switches, and firewalls, monitoring network performance, managing user access, and implementing security measures to prevent cyber threats.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Network Engineering",
      ],
      noDegreePath: [
        "Self-learning through online courses",
        "Networking bootcamps",
        "Industry certifications (CCNA, CompTIA Network+)",
        "Hands-on practice with real or virtual network setups",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Growing",
      jobGrowth: "10% (2023-now)",
      companies: [
        "IT Service Providers",
        "Cloud Computing Companies",
        "Telecommunication Firms",
        "Financial Institutions",
      ],
    },
    certifications: [
      "Cisco Certified Network Associate (CCNA)",
      "CompTIA Network+",
      "Certified Information Systems Security Professional (CISSP)",
      "Juniper Networks Certified Internet Associate (JNCIA)",
    ],
    salary: [
      {
        region: "India",
        average: "₹6 LPA",
        entry: "₹3.5 LPA",
        senior: "₹15 LPA",
      },
      {
        region: "USA",
        average: "$80,000",
        entry: "$55,000",
        senior: "$120,000",
      },
      {
        region: "Europe",
        average: "€50,000",
        entry: "€35,000",
        senior: "€85,000",
      },
    ],
    howToStart: {
      title: "Getting Started with Network Administration",
      steps: [
        "Learn the fundamentals of networking (OSI model, TCP/IP, DNS, DHCP)",
        "Gain hands-on experience with network devices (routers, switches, firewalls)",
        "Understand network security principles and best practices",
        "Get certified with industry-recognized credentials (CCNA, Network+)",
        "Work on real-world network configurations and troubleshooting scenarios",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "Glassdoor",
      "Cisco Networking Academy",
      "TechCareers",
      "Government IT Services",
    ],
    roadmap: [
      {
        title: "Networking Fundamentals",
        duration: "1-2 months",
        steps: [
          "Understand network types (LAN, WAN, VPN, VLAN)",
          "Learn IP addressing and subnetting",
          "Set up and configure basic networking devices",
        ],
        dos: [
          "Practice using network simulators (Packet Tracer, GNS3)",
          "Understand OSI and TCP/IP models",
          "Gain hands-on experience with hardware",
        ],
        donts: [
          "Ignore security best practices",
          "Neglect IPv6 concepts",
          "Skip learning network troubleshooting",
        ],
      },
      {
        title: "Advanced Network Management",
        duration: "3-4 months",
        steps: [
          "Learn advanced routing and switching concepts",
          "Understand firewall and security configurations",
          "Implement VPNs and remote access solutions",
        ],
        dos: [
          "Set up virtual labs for testing",
          "Monitor and analyze network traffic",
          "Stay updated with new network technologies",
        ],
        donts: [
          "Rely only on theoretical knowledge",
          "Ignore performance optimization",
          "Skip cloud networking concepts",
        ],
      },
      {
        title: "Security & Cloud Integration",
        duration: "2-3 months",
        steps: [
          "Understand cybersecurity principles",
          "Implement network access control policies",
          "Learn cloud networking (AWS, Azure, Google Cloud)",
        ],
        dos: [
          "Follow best security practices",
          "Test network vulnerabilities with ethical hacking tools",
          "Gain cloud networking experience",
        ],
        donts: [
          "Overlook security updates",
          "Ignore automation and scripting for networking",
          "Avoid learning DevOps networking tools",
        ],
      },
    ],
    requirements: {
      technical: [
        "Understanding of networking protocols (TCP/IP, BGP, OSPF, DNS, DHCP)",
        "Experience with network hardware (routers, switches, firewalls)",
        "Network security knowledge (firewall rules, intrusion prevention)",
        "Cloud networking (AWS, Azure, Google Cloud)",
        "Basic knowledge of automation and scripting (Python, Bash)",
      ],
      softSkills: [
        "Analytical problem-solving",
        "Attention to detail",
        "Effective communication and teamwork",
        "Continuous learning mindset",
      ],
      tools: [
        "Cisco Packet Tracer",
        "Wireshark (Network Analysis)",
        "GNS3 (Network Simulation)",
        "Nmap (Security Scanning)",
        "Cloud Networking Tools (AWS VPC, Azure VNets)",
      ],
    },
    resources: {
      youtube: [
        "NetworkChuck - Networking & Cybersecurity",
        "Eli The Computer Guy - IT Fundamentals",
        "Professor Messer - Network+ and Security+",
        "Cisco Networking Academy - CCNA Training",
        "Practical Networking - Networking Essentials",
      ],
      free: [
        "Cisco Packet Tracer Labs",
        "CompTIA Network+ Study Materials",
        "Networking Academy (Cisco)",
        "Linux Networking Essentials",
      ],
      paid: [
        "Udemy - Complete Network Fundamentals",
        "Pluralsight - Advanced Networking & Security",
        "INE - CCNA and Network Security Courses",
      ],
      tools: [
        "Cisco Packet Tracer",
        "Wireshark",
        "Nmap",
        "GNS3",
        "AWS Networking Services",
      ],
      communities: [
        "Reddit r/networking",
        "Cisco Networking Academy",
        "CompTIA Network+ Community",
        "Networking & Security Discord Servers",
      ],
      events: [
        "Cisco Live",
        "Black Hat Cybersecurity Conference",
        "AWS re:Invent (Cloud Networking)",
        "CompTIA Network+ Certification Events",
      ],
    },
  },
  {
    id: "network-engineer",
    title: "Network Engineer",
    description:
      "A Network Engineer is responsible for designing, implementing, and maintaining network infrastructure, ensuring reliable connectivity, security, and optimal performance for organizations.",
    whatIs:
      "Network Engineering involves planning, configuring, and troubleshooting network hardware and software, including routers, switches, firewalls, and cloud networking services to support communication and data transfer within an organization.",
    jobDescription:
      "Network Engineers design and implement network solutions, configure network devices, monitor performance, optimize security measures, and collaborate with IT teams to ensure smooth operations. They work on both on-premise and cloud-based networks.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Network Engineering",
      ],
      noDegreePath: [
        "Self-learning through online courses",
        "Networking bootcamps",
        "Industry certifications (CCNA, CompTIA Network+)",
        "Hands-on experience with network simulations and real-world projects",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Rising",
      jobGrowth: "10% (2023-now)",
      companies: [
        "Telecommunications Companies",
        "Cloud Service Providers",
        "Financial Institutions",
        "Tech Startups",
        "Government Agencies",
      ],
    },
    certifications: [
      "Cisco Certified Network Associate (CCNA)",
      "Cisco Certified Network Professional (CCNP)",
      "CompTIA Network+",
      "AWS Certified Advanced Networking",
      "Juniper Networks Certified Internet Expert (JNCIE)",
    ],
    salary: [
      {
        region: "India",
        average: "₹8 LPA",
        entry: "₹4 LPA",
        senior: "₹20 LPA",
      },
      {
        region: "USA",
        average: "$95,000",
        entry: "$70,000",
        senior: "$140,000",
      },
      {
        region: "Europe",
        average: "€60,000",
        entry: "€40,000",
        senior: "€90,000",
      },
    ],
    howToStart: {
      title: "Getting Started with Network Engineering",
      steps: [
        "Learn the fundamentals of networking (OSI model, TCP/IP, DNS, DHCP)",
        "Understand routing and switching concepts",
        "Gain hands-on experience with Cisco, Juniper, or cloud networking tools",
        "Get certified with CCNA, Network+, or AWS networking certifications",
        "Work on real-world network troubleshooting and optimization",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "Glassdoor",
      "Cisco Networking Academy",
      "TechCareers",
      "Telecom Companies",
    ],
    roadmap: [
      {
        title: "Networking Basics",
        duration: "1-2 months",
        steps: [
          "Learn IP addressing and subnetting",
          "Understand network topologies",
          "Set up basic network configurations",
        ],
        dos: [
          "Use network simulators like Packet Tracer",
          "Practice subnetting and routing",
          "Understand OSI and TCP/IP models",
        ],
        donts: [
          "Ignore security principles",
          "Skip IPv6 concepts",
          "Avoid hands-on practice",
        ],
      },
      {
        title: "Advanced Network Engineering",
        duration: "3-4 months",
        steps: [
          "Implement VLANs, VPNs, and QoS",
          "Configure firewalls and network security policies",
          "Optimize network performance and monitoring",
        ],
        dos: [
          "Gain hands-on experience with Cisco and Juniper devices",
          "Monitor network traffic and performance",
          "Stay updated with networking trends",
        ],
        donts: [
          "Ignore security updates",
          "Skip learning automation and scripting",
          "Neglect cloud networking concepts",
        ],
      },
      {
        title: "Cloud & Security Specialization",
        duration: "2-3 months",
        steps: [
          "Learn cloud networking (AWS, Azure, Google Cloud)",
          "Implement network automation using Python and Ansible",
          "Understand cybersecurity best practices",
        ],
        dos: [
          "Practice with cloud networking labs",
          "Secure networks against threats",
          "Use automation to simplify networking tasks",
        ],
        donts: [
          "Ignore security vulnerabilities",
          "Avoid scripting and automation",
          "Neglect learning about SDN and NFV",
        ],
      },
    ],
    requirements: {
      technical: [
        "Deep understanding of networking protocols (TCP/IP, BGP, OSPF, DNS, DHCP)",
        "Experience with network hardware (routers, switches, firewalls)",
        "Proficiency in network security (firewall configurations, VPNs, IDS/IPS)",
        "Cloud networking expertise (AWS VPC, Azure VNets)",
        "Knowledge of network automation (Python, Ansible)",
      ],
      softSkills: [
        "Analytical problem-solving",
        "Attention to detail",
        "Effective communication and teamwork",
        "Adaptability and continuous learning",
      ],
      tools: [
        "Cisco Packet Tracer",
        "Wireshark (Network Analysis)",
        "GNS3 (Network Simulation)",
        "Nmap (Security Scanning)",
        "AWS Networking Services",
      ],
    },
    resources: {
      youtube: [
        "NetworkChuck - Networking & Cybersecurity",
        "Eli The Computer Guy - IT Fundamentals",
        "Professor Messer - CCNA & Network+ Training",
        "Practical Networking - Networking Essentials",
        "Cisco Networking Academy - Network Training",
      ],
      free: [
        "Cisco Packet Tracer Labs",
        "CompTIA Network+ Study Guides",
        "Networking Academy (Cisco)",
        "AWS Free Tier for Cloud Networking Practice",
      ],
      paid: [
        "Udemy - CCNA & Network Engineering Courses",
        "Pluralsight - Advanced Networking & Security",
        "INE - Cisco & Juniper Network Training",
      ],
      tools: [
        "Cisco Packet Tracer",
        "Wireshark",
        "GNS3",
        "Nmap",
        "Cloud Networking Tools (AWS, Azure, Google Cloud)",
      ],
      communities: [
        "Reddit r/networking",
        "Cisco Networking Academy",
        "CompTIA Network+ Community",
        "Networking Discord Servers",
      ],
      events: [
        "Cisco Live",
        "AWS re:Invent",
        "Black Hat Cybersecurity Conference",
        "Networking & Cloud Computing Summits",
      ],
    },
  },
  {
    id: "system-administrator",
    title: "System Administrator (Sysadmin)",
    description:
      "A System Administrator (Sysadmin) is responsible for managing, configuring, and maintaining computer systems, servers, and networks to ensure smooth IT operations in an organization.",
    whatIs:
      "System Administration involves managing IT infrastructure, troubleshooting hardware and software issues, maintaining security protocols, and ensuring optimal system performance across an organization’s network and servers.",
    jobDescription:
      "System Administrators install and configure operating systems, monitor system performance, implement security measures, manage user access, and ensure data backups. They work with both on-premise and cloud-based environments.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Network Administration",
      ],
      noDegreePath: [
        "Online courses and certifications",
        "Practical hands-on experience",
        "Internships in IT support",
        "Self-learning through labs and projects",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Steady",
      jobGrowth: "4% (2023-now)",
      companies: [
        "IT Service Providers",
        "Healthcare Institutions",
        "Government Agencies",
        "Financial Institutions",
        "Tech Startups",
      ],
    },
    certifications: [
      "CompTIA Linux+",
      "Microsoft Certified: Azure Administrator",
      "Red Hat Certified System Administrator (RHCSA)",
      "AWS Certified SysOps Administrator",
      "Cisco Certified CyberOps Associate",
    ],
    salary: [
      {
        region: "India",
        average: "₹7 LPA",
        entry: "₹4 LPA",
        senior: "₹15 LPA",
      },
      {
        region: "USA",
        average: "$80,000",
        entry: "$55,000",
        senior: "$120,000",
      },
      {
        region: "Europe",
        average: "€55,000",
        entry: "€35,000",
        senior: "€85,000",
      },
    ],
    howToStart: {
      title: "Getting Started with System Administration",
      steps: [
        "Learn operating system fundamentals (Windows, Linux, macOS)",
        "Understand networking basics (IP addressing, DNS, DHCP)",
        "Gain hands-on experience with system management tools",
        "Get certified in Linux, Microsoft, or AWS administration",
        "Work on real-world IT infrastructure projects",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "Glassdoor",
      "Upwork",
      "Freelancer",
      "TechCareers",
    ],
    roadmap: [
      {
        title: "Fundamentals of System Administration",
        duration: "1-2 months",
        steps: [
          "Learn OS basics (Windows Server, Linux)",
          "Understand file systems and permissions",
          "Study networking essentials",
        ],
        dos: [
          "Practice command-line administration",
          "Use virtual machines for hands-on labs",
          "Learn scripting for automation",
        ],
        donts: [
          "Ignore cybersecurity best practices",
          "Avoid manual configurations",
          "Neglect software updates and patches",
        ],
      },
      {
        title: "Advanced System Administration",
        duration: "3-4 months",
        steps: [
          "Manage Active Directory and user authentication",
          "Configure firewalls and security policies",
          "Monitor system performance and logs",
        ],
        dos: [
          "Use monitoring tools like Nagios or Zabbix",
          "Automate tasks with PowerShell or Bash",
          "Implement system backups and recovery plans",
        ],
        donts: [
          "Ignore log analysis",
          "Skip automation techniques",
          "Overlook cloud administration skills",
        ],
      },
      {
        title: "Cloud & Security Specialization",
        duration: "2-3 months",
        steps: [
          "Learn cloud administration (AWS, Azure, Google Cloud)",
          "Implement security hardening techniques",
          "Manage hybrid infrastructure environments",
        ],
        dos: [
          "Get cloud certifications",
          "Improve incident response skills",
          "Optimize cost and performance of cloud systems",
        ],
        donts: [
          "Ignore cloud security best practices",
          "Rely only on manual processes",
          "Avoid learning automation tools",
        ],
      },
    ],
    requirements: {
      technical: [
        "Strong knowledge of operating systems (Windows, Linux)",
        "Networking fundamentals (TCP/IP, VLANs, VPNs)",
        "System automation using PowerShell, Bash, or Python",
        "Experience with virtualization (VMware, Hyper-V)",
        "Cloud administration skills (AWS, Azure, Google Cloud)",
      ],
      softSkills: [
        "Problem-solving and troubleshooting",
        "Effective communication",
        "Attention to detail",
        "Continuous learning mindset",
      ],
      tools: [
        "PowerShell / Bash Scripting",
        "Nagios / Zabbix (Monitoring)",
        "VMware / VirtualBox",
        "AWS / Azure Management Console",
        "Wireshark (Network Analysis)",
      ],
    },
    resources: {
      youtube: [
        "NetworkChuck - System Administration & Networking",
        "Eli The Computer Guy - IT Basics",
        "Tech With Tim - Linux & Cloud Administration",
        "LearnLinuxTV - Linux System Administration",
        "The Cyber Mentor - Security & IT Management",
      ],
      free: [
        "Microsoft Learn (Windows Server)",
        "Linux Foundation Free Training",
        "AWS Free Tier for Cloud Labs",
        "Red Hat Open Training",
      ],
      paid: [
        "Udemy - Complete Linux Administration Course",
        "Pluralsight - Windows & Linux Server Management",
        "Coursera - Google IT Support Professional",
      ],
      tools: [
        "VirtualBox / VMware",
        "PowerShell / Bash",
        "AWS / Azure CLI",
        "Wireshark / Nmap",
      ],
      communities: [
        "Reddit r/sysadmin",
        "Microsoft Tech Community",
        "Linux Server Administrators Facebook Group",
        "SysAdmin Discord Servers",
      ],
      events: [
        "Microsoft Ignite",
        "AWS re:Invent",
        "Red Hat Summit",
        "Google Cloud Next",
      ],
    },
  },
  {
    id: "business-intelligence-analyst",
    title: "Business Intelligence (BI) Analyst",
    description:
      "A Business Intelligence (BI) Analyst gathers, processes, and analyzes business data to help organizations make informed decisions. They work with data visualization tools, databases, and reporting systems to uncover insights.",
    whatIs:
      "Business Intelligence (BI) is the process of collecting, analyzing, and presenting business data to support decision-making. BI Analysts use tools like SQL, Power BI, and Tableau to transform raw data into actionable insights.",
    jobDescription:
      "BI Analysts extract and analyze business data, create dashboards and reports, and collaborate with teams to identify trends and patterns. They work with databases, automate reporting processes, and ensure data accuracy.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Business Analytics",
        "Computer Science",
        "Statistics",
        "Finance",
      ],
      noDegreePath: [
        "Online courses and certifications",
        "Hands-on projects with real-world datasets",
        "Internships in data analysis",
        "Self-learning through BI tools",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Growing",
      jobGrowth: "14% (2023-now)",
      companies: [
        "Tech Companies",
        "Financial Institutions",
        "Healthcare Providers",
        "E-commerce Giants",
        "Consulting Firms",
      ],
    },
    certifications: [
      "Microsoft Certified: Power BI Data Analyst",
      "Google Data Analytics Professional Certificate",
      "Tableau Desktop Specialist",
      "IBM Data Analyst Professional Certificate",
      "SAS Certified BI Content Developer",
    ],
    salary: [
      {
        region: "India",
        average: "₹9 LPA",
        entry: "₹5 LPA",
        senior: "₹18 LPA",
      },
      {
        region: "USA",
        average: "$85,000",
        entry: "$60,000",
        senior: "$120,000",
      },
      {
        region: "Europe",
        average: "€60,000",
        entry: "€40,000",
        senior: "€90,000",
      },
    ],
    howToStart: {
      title: "Getting Started with Business Intelligence",
      steps: [
        "Learn SQL and database fundamentals",
        "Master data visualization tools (Power BI, Tableau)",
        "Understand data modeling and reporting techniques",
        "Gain proficiency in Excel and statistical analysis",
        "Work on real-world datasets and build reports",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "Glassdoor",
      "Upwork",
      "Freelancer",
      "AngelList",
    ],
    roadmap: [
      {
        title: "Data Fundamentals",
        duration: "1-2 months",
        steps: [
          "Learn SQL for database querying",
          "Understand basic statistics and data analysis",
          "Work with Excel for data manipulation",
        ],
        dos: [
          "Practice SQL queries daily",
          "Work with real-world datasets",
          "Understand business metrics",
        ],
        donts: [
          "Ignore data cleaning techniques",
          "Skip statistical concepts",
          "Neglect reporting best practices",
        ],
      },
      {
        title: "BI Tools & Visualization",
        duration: "2-3 months",
        steps: [
          "Learn Power BI, Tableau, or Looker",
          "Create interactive dashboards",
          "Perform ETL (Extract, Transform, Load) processes",
        ],
        dos: [
          "Build 3+ dashboard projects",
          "Use best practices for data visualization",
          "Optimize data models",
        ],
        donts: [
          "Overcomplicate dashboards",
          "Ignore mobile-friendly reporting",
          "Neglect business requirements",
        ],
      },
      {
        title: "Advanced BI & Automation",
        duration: "3-4 months",
        steps: [
          "Learn Python or R for data analysis",
          "Understand data warehousing concepts",
          "Automate reporting processes",
        ],
        dos: [
          "Integrate BI tools with SQL databases",
          "Work on real-time analytics",
          "Optimize report performance",
        ],
        donts: [
          "Ignore cloud-based BI tools",
          "Neglect automation techniques",
          "Avoid learning business context",
        ],
      },
    ],
    requirements: {
      technical: [
        "Proficiency in SQL and database management",
        "Experience with BI tools (Power BI, Tableau, Looker)",
        "Strong understanding of data modeling",
        "Basic knowledge of Python or R",
        "Data visualization and dashboard development skills",
      ],
      softSkills: [
        "Analytical thinking and problem-solving",
        "Attention to detail",
        "Strong communication skills",
        "Ability to interpret business needs",
      ],
      tools: [
        "Power BI / Tableau / Looker",
        "SQL Server / MySQL",
        "Excel / Google Sheets",
        "Python (Pandas, NumPy) / R",
        "Google Data Studio",
      ],
    },
    resources: {
      youtube: [
        "Alex The Analyst - BI & Data Analytics",
        "Simplilearn - Business Intelligence Tutorials",
        "Data School - Tableau & Power BI",
        "Edureka - BI & Data Analytics Training",
        "Maven Analytics - Power BI & Excel Tips",
      ],
      free: [
        "Google Data Analytics Course",
        "Kaggle - Free Business Intelligence Datasets",
        "Microsoft Learn - Power BI Fundamentals",
        "W3Schools SQL Tutorials",
      ],
      paid: [
        "Udemy - Business Intelligence Analyst Course",
        "Coursera - Data Analysis and Visualization with Power BI",
        "Pluralsight - Business Intelligence Fundamentals",
      ],
      tools: [
        "Power BI",
        "Tableau",
        "Google Data Studio",
        "SQL Server Management Studio",
        "Python / R for Data Analysis",
      ],
      communities: [
        "Reddit r/dataanalysis",
        "Power BI Community",
        "Tableau User Group",
        "Kaggle BI & Data Analytics",
      ],
      events: [
        "Microsoft Power Platform Summit",
        "Tableau Conference",
        "Google Cloud Next",
        "Big Data & Analytics Summit",
      ],
    },
  },
  {
    id: "information-security-analyst",
    title: "Information Security Analyst",
    description:
      "An Information Security Analyst is responsible for protecting an organization's computer systems and networks from cyber threats, data breaches, and unauthorized access. They implement security measures, monitor systems for vulnerabilities, and respond to security incidents.",
    whatIs:
      "Information Security Analysis involves safeguarding digital assets, preventing cyber threats, and ensuring compliance with security standards. Analysts use firewalls, encryption, and intrusion detection systems to protect data.",
    jobDescription:
      "Information Security Analysts identify security risks, develop protective measures, conduct vulnerability assessments, and respond to cyber threats. They also educate employees on cybersecurity best practices and ensure compliance with security policies.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Cybersecurity",
        "Computer Science",
        "Information Technology",
        "Network Security",
      ],
      noDegreePath: [
        "Online cybersecurity courses",
        "Ethical hacking certifications",
        "Self-learning through labs and simulations",
        "Participation in cybersecurity competitions (e.g., CTF challenges)",
      ],
    },
    marketTrends: {
      demandLevel: "Very High",
      popularity: "Rapidly Growing",
      jobGrowth: "35% (2023-now)",
      companies: [
        "Government Agencies",
        "Financial Institutions",
        "Healthcare Organizations",
        "Tech Companies",
        "Consulting Firms",
      ],
    },
    certifications: [
      "Certified Information Systems Security Professional (CISSP)",
      "Certified Ethical Hacker (CEH)",
      "CompTIA Security+",
      "Certified Information Security Manager (CISM)",
      "GIAC Security Essentials (GSEC)",
    ],
    salary: [
      {
        region: "India",
        average: "₹10 LPA",
        entry: "₹5 LPA",
        senior: "₹20 LPA",
      },
      {
        region: "USA",
        average: "$100,000",
        entry: "$75,000",
        senior: "$150,000",
      },
      {
        region: "Europe",
        average: "€65,000",
        entry: "€45,000",
        senior: "€100,000",
      },
    ],
    howToStart: {
      title: "Getting Started in Information Security",
      steps: [
        "Learn networking and system administration basics",
        "Understand cybersecurity concepts and threat analysis",
        "Gain proficiency in security tools (firewalls, SIEM, IDS/IPS)",
        "Practice ethical hacking and penetration testing",
        "Earn cybersecurity certifications (e.g., CEH, Security+)",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-25 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "Glassdoor",
      "CyberSecJobs",
      "Govt Cybersecurity Portals",
      "Freelance platforms (Upwork, Toptal)",
    ],
    roadmap: [
      {
        title: "Cybersecurity Fundamentals",
        duration: "1-2 months",
        steps: [
          "Learn networking concepts (TCP/IP, DNS, VPNs)",
          "Understand operating system security (Windows, Linux)",
          "Study common cyber threats and attack vectors",
        ],
        dos: [
          "Gain hands-on experience with cybersecurity labs",
          "Set up virtual machines for practice",
          "Understand security compliance frameworks",
        ],
        donts: [
          "Ignore fundamental networking knowledge",
          "Neglect system security configurations",
          "Underestimate the importance of encryption",
        ],
      },
      {
        title: "Security Tools & Ethical Hacking",
        duration: "3-4 months",
        steps: [
          "Learn penetration testing methodologies",
          "Use security tools like Metasploit, Wireshark, and Burp Suite",
          "Perform vulnerability assessments and security audits",
        ],
        dos: [
          "Participate in Capture The Flag (CTF) challenges",
          "Develop scripting skills in Python or Bash",
          "Secure personal systems and networks",
        ],
        donts: [
          "Ignore real-world security incidents",
          "Skip log analysis and SIEM tools",
          "Avoid ethical and legal considerations in hacking",
        ],
      },
      {
        title: "Advanced Cybersecurity & Specialization",
        duration: "4-6 months",
        steps: [
          "Deep dive into digital forensics and incident response",
          "Understand cloud security best practices",
          "Learn about advanced persistent threats (APTs)",
        ],
        dos: [
          "Gain hands-on experience with security frameworks (NIST, ISO 27001)",
          "Explore cybersecurity automation with AI/ML",
          "Contribute to open-source security projects",
        ],
        donts: [
          "Ignore continuous learning in cybersecurity",
          "Neglect security compliance in cloud environments",
          "Underestimate the role of security awareness training",
        ],
      },
    ],
    requirements: {
      technical: [
        "Network security and firewalls",
        "Intrusion detection and prevention systems",
        "Penetration testing and vulnerability assessment",
        "Security Information and Event Management (SIEM)",
        "Cloud security (AWS, Azure, Google Cloud)",
      ],
      softSkills: [
        "Analytical and critical thinking",
        "Problem-solving skills",
        "Attention to detail",
        "Strong communication skills",
        "Incident response and crisis management",
      ],
      tools: [
        "Kali Linux",
        "Metasploit",
        "Wireshark",
        "Burp Suite",
        "Splunk SIEM",
        "Cloud security tools (AWS Security Hub, Azure Security Center)",
      ],
    },
    resources: {
      youtube: [
        "HackerSploit - Ethical Hacking Tutorials",
        "NetworkChuck - Cybersecurity & Networking",
        "Simplilearn - Cybersecurity Certifications",
        "The Cyber Mentor - Penetration Testing",
        "Infosec Institute - Security Awareness Training",
      ],
      free: [
        "Cybrary - Free Cybersecurity Courses",
        "OWASP - Web Security Knowledge Base",
        "TryHackMe - Hands-on Cybersecurity Labs",
        "MITRE ATT&CK Framework - Threat Intelligence",
      ],
      paid: [
        "Udemy - Cybersecurity Bootcamp",
        "Offensive Security - OSCP Certification",
        "Coursera - Cybersecurity Specialization",
        "Pluralsight - Security & Ethical Hacking",
      ],
      tools: [
        "Kali Linux",
        "Wireshark",
        "Metasploit",
        "Burp Suite",
        "Nmap",
        "Splunk SIEM",
      ],
      communities: [
        "Reddit r/netsec",
        "OWASP Community",
        "Hack The Box",
        "Cybersecurity Discord Groups",
      ],
      events: [
        "Black Hat Conference",
        "DEF CON",
        "RSA Conference",
        "Cybersecurity & Cloud Expo",
      ],
    },
  },
  {
    id: "security-engineer",
    title: "Security Engineer",
    description:
      "A Security Engineer is responsible for designing, implementing, and maintaining security measures to protect an organization's IT infrastructure, applications, and data from cyber threats.",
    whatIs:
      "Security engineering involves building secure systems, implementing cybersecurity tools, and proactively identifying vulnerabilities to prevent cyber attacks. It combines software engineering, network security, and risk management.",
    jobDescription:
      "Security Engineers develop and implement security solutions, conduct vulnerability assessments, monitor networks for suspicious activity, and ensure compliance with security policies. They work closely with developers, IT teams, and security analysts to protect systems from cyber threats.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Cybersecurity",
        "Computer Science",
        "Information Technology",
        "Software Engineering",
      ],
      noDegreePath: [
        "Cybersecurity bootcamps",
        "Online security certifications",
        "Self-learning through hands-on labs",
        "Open-source security projects",
      ],
    },
    marketTrends: {
      demandLevel: "Very High",
      popularity: "Rapidly Growing",
      jobGrowth: "31% (2023-now)",
      companies: [
        "Tech Companies",
        "Financial Institutions",
        "Government Agencies",
        "Healthcare Organizations",
        "Cloud Service Providers",
      ],
    },
    certifications: [
      "Certified Information Systems Security Professional (CISSP)",
      "Certified Ethical Hacker (CEH)",
      "Offensive Security Certified Professional (OSCP)",
      "CompTIA Security+",
      "GIAC Certified Incident Handler (GCIH)",
    ],
    salary: [
      {
        region: "India",
        average: "₹12 LPA",
        entry: "₹6 LPA",
        senior: "₹25 LPA",
      },
      {
        region: "USA",
        average: "$110,000",
        entry: "$80,000",
        senior: "$160,000",
      },
      {
        region: "Europe",
        average: "€70,000",
        entry: "€50,000",
        senior: "€120,000",
      },
    ],
    howToStart: {
      title: "Getting Started in Security Engineering",
      steps: [
        "Learn networking and system security fundamentals",
        "Understand cryptography and encryption techniques",
        "Gain experience with security tools (firewalls, SIEM, IDS/IPS)",
        "Master penetration testing and ethical hacking",
        "Get hands-on experience with cloud security and DevSecOps",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-25 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "Glassdoor",
      "CyberSecJobs",
      "HackerOne",
      "Bug Bounty Platforms",
    ],
    roadmap: [
      {
        title: "Cybersecurity Fundamentals",
        duration: "1-2 months",
        steps: [
          "Learn network security (firewalls, VPNs, IDS/IPS)",
          "Understand operating system security (Windows, Linux)",
          "Study common cyber threats and attack methodologies",
        ],
        dos: [
          "Gain hands-on experience with security tools",
          "Participate in cybersecurity hackathons",
          "Learn compliance standards (ISO 27001, NIST)",
        ],
        donts: [
          "Ignore network security basics",
          "Neglect incident response and forensics",
          "Skip hands-on security labs",
        ],
      },
      {
        title: "Security Engineering & Ethical Hacking",
        duration: "3-4 months",
        steps: [
          "Master penetration testing methodologies",
          "Use security tools like Metasploit, Wireshark, and Nmap",
          "Learn security automation and scripting (Python, Bash)",
        ],
        dos: [
          "Develop secure coding practices",
          "Set up personal security labs",
          "Participate in Capture The Flag (CTF) competitions",
        ],
        donts: [
          "Ignore security best practices in software development",
          "Avoid hands-on penetration testing exercises",
          "Neglect API security and cloud security",
        ],
      },
      {
        title: "Advanced Security Engineering & Specialization",
        duration: "4-6 months",
        steps: [
          "Implement security solutions at the enterprise level",
          "Understand DevSecOps and cloud security (AWS, Azure, GCP)",
          "Master digital forensics and incident response",
        ],
        dos: [
          "Develop secure DevOps pipelines",
          "Learn zero-trust architecture principles",
          "Gain expertise in AI-powered security solutions",
        ],
        donts: [
          "Ignore real-world cybersecurity trends",
          "Skip security audits and risk assessments",
          "Underestimate the importance of security automation",
        ],
      },
    ],
    requirements: {
      technical: [
        "Network security and firewalls",
        "Intrusion detection and prevention systems (IDS/IPS)",
        "Penetration testing and vulnerability assessment",
        "Security Information and Event Management (SIEM)",
        "Cloud security and DevSecOps",
      ],
      softSkills: [
        "Problem-solving and analytical thinking",
        "Attention to detail",
        "Incident response and crisis management",
        "Strong communication skills",
        "Collaboration with development and IT teams",
      ],
      tools: [
        "Kali Linux",
        "Metasploit",
        "Wireshark",
        "Burp Suite",
        "Splunk SIEM",
        "Cloud security tools (AWS Security Hub, Azure Security Center)",
      ],
    },
    resources: {
      youtube: [
        "HackerSploit - Ethical Hacking & Security",
        "NetworkChuck - Cybersecurity & Networking",
        "The Cyber Mentor - Penetration Testing",
        "John Hammond - Hacking & Security Tutorials",
        "CyberSec Labs - Security Engineering Guides",
      ],
      free: [
        "Cybrary - Free Security Courses",
        "OWASP - Web Security Knowledge Base",
        "TryHackMe - Cybersecurity Training",
        "MITRE ATT&CK Framework - Threat Intelligence",
      ],
      paid: [
        "Udemy - Cybersecurity & Ethical Hacking",
        "Offensive Security - OSCP Certification",
        "Coursera - Cybersecurity Specialization",
        "Pluralsight - Security Engineering Courses",
      ],
      tools: [
        "Kali Linux",
        "Wireshark",
        "Metasploit",
        "Burp Suite",
        "Nmap",
        "Splunk SIEM",
      ],
      communities: [
        "Reddit r/netsec",
        "OWASP Community",
        "Hack The Box",
        "Cybersecurity Discord Groups",
      ],
      events: [
        "Black Hat Conference",
        "DEF CON",
        "RSA Conference",
        "Cybersecurity & Cloud Expo",
      ],
    },
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    description:
      "A Software Engineer is responsible for designing, developing, testing, and maintaining software applications and systems, ensuring they meet user needs and performance standards.",
    whatIs:
      "Software engineering involves applying engineering principles to software development, ensuring efficiency, reliability, and maintainability. It covers programming, system design, testing, and deployment.",
    jobDescription:
      "Software Engineers work on the development of applications and systems, write clean and scalable code, debug issues, collaborate with cross-functional teams, and ensure the quality and security of software solutions.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Software Engineering",
      ],
      noDegreePath: [
        "Coding bootcamps",
        "Online programming courses",
        "Self-learning through projects",
        "Open-source contributions",
      ],
    },
    marketTrends: {
      demandLevel: "Very High",
      popularity: "Continuously Growing",
      jobGrowth: "25% (2023-now)",
      companies: [
        "Tech Companies",
        "Startups",
        "Financial Institutions",
        "Government Agencies",
        "E-commerce Platforms",
      ],
    },
    certifications: [
      "AWS Certified Developer",
      "Microsoft Certified: Azure Developer Associate",
      "Google Associate Cloud Engineer",
      "Certified Kubernetes Application Developer (CKAD)",
      "Oracle Certified Java Programmer (OCPJP)",
    ],
    salary: [
      {
        region: "India",
        average: "₹10 LPA",
        entry: "₹5 LPA",
        senior: "₹25 LPA",
      },
      {
        region: "USA",
        average: "$110,000",
        entry: "$75,000",
        senior: "$160,000",
      },
      {
        region: "Europe",
        average: "€65,000",
        entry: "€45,000",
        senior: "€120,000",
      },
    ],
    howToStart: {
      title: "Getting Started as a Software Engineer",
      steps: [
        "Learn programming fundamentals (Python, Java, C++)",
        "Understand data structures and algorithms",
        "Master object-oriented programming (OOP)",
        "Get familiar with version control (Git/GitHub)",
        "Build projects to demonstrate skills",
        "Learn database management (SQL, NoSQL)",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-25 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "Glassdoor",
      "AngelList",
      "Stack Overflow Jobs",
      "Toptal",
    ],
    roadmap: [
      {
        title: "Programming Foundations",
        duration: "2-3 months",
        steps: [
          "Learn Python, Java, or C++",
          "Master data structures and algorithms",
          "Understand object-oriented programming",
        ],
        dos: [
          "Practice coding daily",
          "Solve coding challenges (LeetCode, CodeSignal)",
          "Understand time and space complexity",
        ],
        donts: [
          "Ignore problem-solving skills",
          "Rely only on theoretical knowledge",
          "Skip hands-on coding practice",
        ],
      },
      {
        title: "Software Development & Backend Technologies",
        duration: "3-4 months",
        steps: [
          "Understand RESTful APIs and microservices",
          "Learn database management (SQL, MongoDB)",
          "Get comfortable with backend frameworks (Node.js, Spring Boot)",
        ],
        dos: [
          "Build full-stack applications",
          "Implement authentication and authorization",
          "Follow best practices in backend security",
        ],
        donts: [
          "Ignore error handling",
          "Neglect performance optimization",
          "Skip API documentation",
        ],
      },
      {
        title: "Advanced Topics & Specialization",
        duration: "4-6 months",
        steps: [
          "Explore cloud computing (AWS, GCP, Azure)",
          "Learn DevOps tools (Docker, Kubernetes, CI/CD)",
          "Master system design principles",
        ],
        dos: [
          "Participate in coding competitions",
          "Contribute to open-source projects",
          "Stay updated with new technologies",
        ],
        donts: [
          "Avoid working on real-world projects",
          "Skip technical interview preparation",
          "Ignore code quality and documentation",
        ],
      },
    ],
    requirements: {
      technical: [
        "Programming languages (Python, Java, JavaScript, C++)",
        "Data structures and algorithms",
        "Database management (SQL, NoSQL)",
        "Software development lifecycle (SDLC)",
        "Cloud computing and DevOps practices",
      ],
      softSkills: [
        "Problem-solving and critical thinking",
        "Collaboration and teamwork",
        "Agile methodology understanding",
        "Communication and documentation skills",
        "Adaptability to new technologies",
      ],
      tools: [
        "Visual Studio Code",
        "GitHub/GitLab",
        "Postman",
        "Docker",
        "Kubernetes",
        "Jenkins",
      ],
    },
    resources: {
      youtube: [
        "Traversy Media - Full Stack Development",
        "Academind - Programming and Software Engineering",
        "CodeWithHarry - Data Structures & Algorithms",
        "The Net Ninja - Web Development & Backend Engineering",
        "Programming with Mosh - JavaScript, Python, Java Guides",
      ],
      free: [
        "Harvard CS50 - Introduction to Computer Science",
        "FreeCodeCamp - Full Stack Development",
        "MIT OpenCourseWare - Computer Science",
        "MDN Web Docs - Web Development Guides",
        "Khan Academy - Algorithms & Programming",
      ],
      paid: [
        "Udemy - Complete Software Engineering Bootcamp",
        "Coursera - Google Software Engineering Certificate",
        "Pluralsight - Software Development Courses",
        "Frontend Masters - Advanced JavaScript & Systems Design",
      ],
      tools: [
        "Visual Studio Code",
        "Eclipse/IntelliJ (for Java)",
        "Postman (for API testing)",
        "Docker (for deployment)",
        "Git & GitHub (for version control)",
      ],
      communities: [
        "Stack Overflow",
        "Reddit r/programming",
        "GitHub Open Source Community",
        "FreeCodeCamp Forum",
        "Dev.to - Software Development Community",
      ],
      events: [
        "Google I/O",
        "Microsoft Build",
        "AWS re:Invent",
        "PyCon",
        "Hackathons and Coding Bootcamps",
      ],
    },
  },
  {
    id: "qa-engineer",
    title: "Quality Assurance (QA) Engineer",
    description:
      "A QA Engineer is responsible for ensuring the quality of software applications by designing and executing test cases, identifying defects, and ensuring a smooth user experience.",
    whatIs:
      "Quality Assurance (QA) Engineering involves testing software applications to detect and fix defects before deployment. QA engineers use manual and automated testing techniques to ensure software reliability, performance, and security.",
    jobDescription:
      "QA Engineers develop and execute test plans, automate testing processes, document defects, collaborate with developers to resolve issues, and ensure the delivery of high-quality software products.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Software Engineering",
      ],
      noDegreePath: [
        "QA Bootcamps",
        "Online testing courses",
        "Self-learning through practice",
        "ISTQB Certification",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Growing with Agile and DevOps",
      jobGrowth: "20% (2023-now)",
      companies: [
        "Software Development Companies",
        "Tech Startups",
        "E-commerce Platforms",
        "Financial Institutions",
        "Healthcare Tech Companies",
      ],
    },
    certifications: [
      "ISTQB Foundation Level Certification",
      "Certified Software Tester (CST)",
      "Certified Agile Tester (CAT)",
      "Automation Testing with Selenium Certification",
      "Microsoft Certified: Azure DevOps Engineer",
    ],
    salary: [
      {
        region: "India",
        average: "₹7 LPA",
        entry: "₹4 LPA",
        senior: "₹15 LPA",
      },
      {
        region: "USA",
        average: "$85,000",
        entry: "$60,000",
        senior: "$130,000",
      },
      {
        region: "Europe",
        average: "€55,000",
        entry: "€40,000",
        senior: "€90,000",
      },
    ],
    howToStart: {
      title: "Getting Started as a QA Engineer",
      steps: [
        "Learn the basics of software testing (manual and automated)",
        "Understand software development lifecycle (SDLC) and testing methodologies",
        "Master testing tools like Selenium, JUnit, and Postman",
        "Practice bug reporting and defect tracking",
        "Gain experience in test automation frameworks",
        "Develop skills in performance and security testing",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "10-15 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "Glassdoor",
      "AngelList",
      "Stack Overflow Jobs",
      "Toptal",
    ],
    roadmap: [
      {
        title: "Foundational Testing Knowledge",
        duration: "1-2 months",
        steps: [
          "Learn manual testing concepts",
          "Understand SDLC and STLC",
          "Practice writing test cases and bug reports",
        ],
        dos: [
          "Gain knowledge of different testing types",
          "Understand test planning and execution",
          "Familiarize with defect tracking tools",
        ],
        donts: [
          "Ignore documentation skills",
          "Skip hands-on practice",
          "Neglect understanding business requirements",
        ],
      },
      {
        title: "Automation & Performance Testing",
        duration: "2-3 months",
        steps: [
          "Learn automation tools (Selenium, Cypress, JUnit)",
          "Understand API testing using Postman",
          "Explore performance testing with JMeter",
        ],
        dos: [
          "Write automation scripts",
          "Optimize test execution",
          "Develop basic coding skills (Python, Java, JavaScript)",
        ],
        donts: [
          "Ignore debugging skills",
          "Rely solely on manual testing",
          "Neglect continuous learning",
        ],
      },
      {
        title: "Advanced Testing & DevOps Integration",
        duration: "3-4 months",
        steps: [
          "Understand CI/CD pipelines",
          "Learn security testing techniques",
          "Gain knowledge of cloud-based testing",
        ],
        dos: [
          "Integrate automation with DevOps",
          "Develop API testing expertise",
          "Stay updated with new testing trends",
        ],
        donts: [
          "Avoid learning new tools",
          "Ignore testing for scalability",
          "Skip real-world project experience",
        ],
      },
    ],
    requirements: {
      technical: [
        "Knowledge of testing methodologies",
        "Experience with automation tools (Selenium, JUnit, Cypress)",
        "Understanding of SQL for database testing",
        "Familiarity with API testing (Postman, REST Assured)",
        "Basic programming knowledge (Python, Java, JavaScript)",
      ],
      softSkills: [
        "Strong analytical and problem-solving skills",
        "Attention to detail",
        "Collaboration and teamwork",
        "Good communication and reporting skills",
        "Continuous learning mindset",
      ],
      tools: [
        "Selenium",
        "JUnit/TestNG",
        "Postman",
        "JIRA/Bugzilla",
        "JMeter",
        "Git/GitHub",
      ],
    },
    resources: {
      youtube: [
        "Automation Step by Step - Selenium & API Testing",
        "QA Insights - Performance Testing Tutorials",
        "The Testing Academy - Manual & Automation Testing",
        "Software Testing Mentor - QA Learning",
        "LambdaTest - End-to-End Testing Tutorials",
      ],
      free: [
        "Guru99 - Software Testing Guide",
        "ISTQB Official Syllabus",
        "Mozilla Developer Network - API Testing",
        "OWASP - Security Testing Resources",
        "Test Automation University",
      ],
      paid: [
        "Udemy - Software Testing & Automation Courses",
        "Coursera - Google IT Automation with Python",
        "Pluralsight - Advanced Test Automation",
        "LinkedIn Learning - Agile Testing Fundamentals",
      ],
      tools: [
        "Selenium WebDriver",
        "Postman",
        "JIRA for defect tracking",
        "JMeter for performance testing",
        "Git & Jenkins for CI/CD integration",
      ],
      communities: [
        "Test Automation University",
        "Reddit r/QualityAssurance",
        "Stack Overflow - QA Community",
        "Ministry of Testing",
        "Selenium Forum",
      ],
      events: [
        "Selenium Conference",
        "Test Automation Summit",
        "Google Testing Days",
        "QA Global Summit",
        "Agile Testing & DevOps Summit",
      ],
    },
  },
  {
    id: "hr-manager",
    title: "Human Resources (HR) Manager",
    description:
      "An HR Manager oversees and manages all aspects of human resources functions, including recruitment, employee relations, benefits administration, compliance, and organizational development.",
    whatIs:
      "HR Management involves managing employee relations, talent acquisition, compliance with labor laws, performance management, and fostering a productive work environment within an organization.",
    jobDescription:
      "HR Managers recruit and retain talent, develop workplace policies, handle employee grievances, oversee compensation and benefits, and ensure compliance with labor laws and company policies.",
    education: {
      degreeRequired: true,
      preferredDegrees: [
        "Human Resources Management",
        "Business Administration",
        "Organizational Psychology",
        "Labor Relations",
      ],
      noDegreePath: [
        "HR Certifications",
        "Work experience in HR roles",
        "Online HR management courses",
        "Internships in HR departments",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Growing with remote and hybrid work models",
      jobGrowth: "10% (2023-now)",
      companies: [
        "Corporate Enterprises",
        "Tech Startups",
        "Healthcare Organizations",
        "Government Agencies",
        "Retail & Manufacturing Firms",
      ],
    },
    certifications: [
      "Professional in Human Resources (PHR)",
      "Senior Professional in Human Resources (SPHR)",
      "SHRM Certified Professional (SHRM-CP)",
      "Certified Talent Management Professional (CTMP)",
      "Certified Compensation Professional (CCP)",
    ],
    salary: [
      {
        region: "India",
        average: "₹10 LPA",
        entry: "₹5 LPA",
        senior: "₹25 LPA",
      },
      {
        region: "USA",
        average: "$85,000",
        entry: "$55,000",
        senior: "$140,000",
      },
      {
        region: "Europe",
        average: "€60,000",
        entry: "€40,000",
        senior: "€100,000",
      },
    ],
    howToStart: {
      title: "Getting Started in HR Management",
      steps: [
        "Earn a degree in Human Resources or related field",
        "Gain HR experience through internships or entry-level roles",
        "Develop knowledge of labor laws and compliance",
        "Improve communication and conflict resolution skills",
        "Get HR certifications for career advancement",
        "Stay updated with industry trends and HR technology",
      ],
      bestTimeToStart: "After graduation or with relevant HR experience",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Indeed",
      "Glassdoor",
      "Monster Jobs",
      "SHRM Career Center",
      "Naukri.com",
    ],
    roadmap: [
      {
        title: "Foundational HR Knowledge",
        duration: "2-3 months",
        steps: [
          "Learn HR fundamentals (recruitment, compliance, employee relations)",
          "Understand labor laws and workplace policies",
          "Develop strong communication and people management skills",
        ],
        dos: [
          "Gain hands-on HR experience",
          "Learn HR software tools",
          "Understand employee engagement strategies",
        ],
        donts: [
          "Neglect labor law updates",
          "Overlook employee well-being initiatives",
          "Ignore company culture development",
        ],
      },
      {
        title: "HR Specialization & Compliance",
        duration: "3-4 months",
        steps: [
          "Learn compensation and benefits management",
          "Develop performance evaluation strategies",
          "Gain knowledge in HR analytics and data-driven decision-making",
        ],
        dos: [
          "Stay updated with HR policies",
          "Improve workplace diversity and inclusion initiatives",
          "Implement effective employee retention strategies",
        ],
        donts: [
          "Ignore workplace ethics and compliance",
          "Overlook talent management programs",
          "Underestimate conflict resolution skills",
        ],
      },
      {
        title: "Advanced HR Leadership & Strategy",
        duration: "4-6 months",
        steps: [
          "Develop leadership and decision-making skills",
          "Understand strategic workforce planning",
          "Master HR technology and digital transformation",
        ],
        dos: [
          "Align HR strategies with business goals",
          "Use HR analytics for data-driven decisions",
          "Promote a positive workplace culture",
        ],
        donts: [
          "Ignore employee feedback",
          "Overlook mental health initiatives",
          "Disregard compliance and legal risks",
        ],
      },
    ],
    requirements: {
      technical: [
        "Knowledge of HR policies and labor laws",
        "Proficiency in HR software (SAP, Workday, BambooHR)",
        "Understanding of compensation and benefits structures",
        "Recruitment and talent acquisition skills",
        "HR analytics and data management",
      ],
      softSkills: [
        "Strong communication and interpersonal skills",
        "Conflict resolution and negotiation",
        "Leadership and decision-making abilities",
        "Problem-solving and adaptability",
        "Organizational and time management skills",
      ],
      tools: [
        "SAP SuccessFactors",
        "Workday",
        "BambooHR",
        "LinkedIn Talent Solutions",
        "HR Analytics Tools (Tableau, Power BI)",
      ],
    },
    resources: {
      youtube: [
        "HR University - Human Resources Courses",
        "SHRM - HR Trends & Insights",
        "HR Certification Institute - HR Career Growth",
        "Josh Bersin Academy - Future of Work",
        "HR Bartender - HR Management & Leadership",
      ],
      free: [
        "SHRM HR Essentials",
        "AIHR - Free HR Courses",
        "Harvard Business Review - HR Management Articles",
        "Coursera - HR Fundamentals (Free Audit Option)",
        "LinkedIn Learning - HR Leadership Courses",
      ],
      paid: [
        "Udemy - HR Management & Strategy Courses",
        "Coursera - Human Resource Management Specialization",
        "SHRM Learning System - HR Certification Training",
        "LinkedIn Learning - Advanced HR Leadership",
        "Harvard Business School - HR Executive Education",
      ],
      tools: [
        "BambooHR",
        "Workday",
        "SAP SuccessFactors",
        "LinkedIn Recruiter",
        "HR Analytics Software (Power BI, Tableau)",
      ],
      communities: [
        "SHRM (Society for Human Resource Management)",
        "HR Exchange Network",
        "LinkedIn HR Professionals Group",
        "HR Open Source (HROS)",
        "Reddit r/humanresources",
      ],
      events: [
        "SHRM Annual Conference",
        "HR Tech Conference",
        "LinkedIn Talent Connect",
        "Forbes Future of Work Summit",
        "HR Leadership Summit",
      ],
    },
  },
  {
    id: "power-bi-power-apps",
    title: "Power BI & Power Apps Developer",
    description:
      "A Power BI & Power Apps Developer specializes in creating interactive data visualizations and automating business processes using Microsoft’s Power Platform, including Power BI for analytics and Power Apps for application development.",
    whatIs:
      "Power BI is a business analytics tool that provides interactive visualizations and business intelligence capabilities. Power Apps is a low-code application development platform that enables users to build custom business applications.",
    jobDescription:
      "Power BI & Power Apps Developers design and implement data-driven solutions, build interactive dashboards, automate workflows, and create business applications to improve efficiency and decision-making.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Business Analytics",
        "Data Science",
      ],
      noDegreePath: [
        "Microsoft Power Platform certifications",
        "Online Power BI and Power Apps courses",
        "Hands-on experience with business intelligence projects",
        "Self-learning through practice and community forums",
      ],
    },
    marketTrends: {
      demandLevel: "High",
      popularity: "Growing with the rise of data-driven decision-making",
      jobGrowth: "15% (2023-now)",
      companies: [
        "Corporate Enterprises",
        "Consulting Firms",
        "Financial Services",
        "Healthcare Organizations",
        "Government Agencies",
      ],
    },
    certifications: [
      "Microsoft Certified: Power BI Data Analyst Associate",
      "Microsoft Certified: Power Platform App Maker Associate",
      "Microsoft Certified: Power Platform Functional Consultant Associate",
      "Microsoft Certified: Data Analyst Associate",
    ],
    salary: [
      {
        region: "India",
        average: "₹8 LPA",
        entry: "₹4 LPA",
        senior: "₹18 LPA",
      },
      {
        region: "USA",
        average: "$95,000",
        entry: "$70,000",
        senior: "$130,000",
      },
      {
        region: "Europe",
        average: "€60,000",
        entry: "€40,000",
        senior: "€90,000",
      },
    ],
    howToStart: {
      title: "Getting Started with Power BI & Power Apps",
      steps: [
        "Learn the basics of data visualization and analytics",
        "Get familiar with Power BI and DAX (Data Analysis Expressions)",
        "Understand Power Query for data transformation",
        "Learn Power Apps for low-code app development",
        "Integrate Power Automate for workflow automation",
        "Work on real-world projects and datasets",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Microsoft Careers",
      "Glassdoor",
      "Indeed",
      "Upwork",
      "Toptal",
    ],
    roadmap: [
      {
        title: "Power BI Fundamentals",
        duration: "1-2 months",
        steps: [
          "Understand data visualization principles",
          "Learn Power BI interface and features",
          "Master DAX for advanced analytics",
          "Work with Power Query for data transformation",
        ],
        dos: [
          "Build interactive dashboards",
          "Use real-world datasets",
          "Optimize reports for performance",
        ],
        donts: [
          "Ignore data accuracy",
          "Overload dashboards with unnecessary visuals",
          "Neglect report security settings",
        ],
      },
      {
        title: "Power Apps & Power Automate",
        duration: "2-3 months",
        steps: [
          "Learn Power Apps fundamentals",
          "Build canvas and model-driven apps",
          "Understand Power Automate for workflow automation",
          "Connect Power Apps with Power BI and SharePoint",
        ],
        dos: [
          "Build functional business applications",
          "Use connectors for seamless integration",
          "Ensure app responsiveness and usability",
        ],
        donts: [
          "Overcomplicate app logic",
          "Ignore security and access controls",
          "Skip testing before deployment",
        ],
      },
      {
        title: "Advanced Power Platform Integration",
        duration: "3-4 months",
        steps: [
          "Integrate Power BI with other data sources (SQL, Azure, APIs)",
          "Use AI Builder for predictive analytics",
          "Develop custom connectors for Power Apps",
          "Automate complex workflows with Power Automate",
        ],
        dos: [
          "Optimize data models for performance",
          "Leverage AI and machine learning capabilities",
          "Maintain scalability and security best practices",
        ],
        donts: [
          "Ignore data governance policies",
          "Overload workflows with unnecessary automation",
          "Use inefficient queries leading to slow performance",
        ],
      },
    ],
    requirements: {
      technical: [
        "Proficiency in Power BI and Power Apps",
        "Strong knowledge of DAX and Power Query",
        "Data modeling and visualization skills",
        "Integration with SQL, SharePoint, and Azure",
        "Experience with Power Automate for automation",
      ],
      softSkills: [
        "Analytical thinking and problem-solving",
        "Business acumen and understanding of key metrics",
        "Collaboration with stakeholders",
        "Communication and storytelling with data",
        "Continuous learning and adaptability",
      ],
      tools: [
        "Microsoft Power BI",
        "Power Apps",
        "Power Automate",
        "SQL Server",
        "Azure Data Services",
      ],
    },
    resources: {
      youtube: [
        "Guy in a Cube - Power BI Tutorials",
        "Microsoft Power BI Official Channel",
        "Enterprise DNA - DAX & Power BI Training",
        "Reza Rad - Power BI & Power Apps",
        "Microsoft Learn - Power Platform Guides",
      ],
      free: [
        "Microsoft Learn - Power BI & Power Apps Training",
        "SQLBI - DAX & Power BI Tutorials",
        "PowerApps Community Forum",
        "Power Automate Documentation",
      ],
      paid: [
        "Udemy - Power BI & Power Apps Masterclass",
        "Pluralsight - Power Platform Learning Paths",
        "Enterprise DNA - Power BI Training",
        "LinkedIn Learning - Power BI Essential Training",
      ],
      tools: [
        "Microsoft Power BI Desktop",
        "Power Apps Studio",
        "Azure Data Factory",
        "SQL Server Management Studio (SSMS)",
      ],
      communities: [
        "Power BI Community",
        "Microsoft Power Apps Forum",
        "LinkedIn Power Platform Group",
        "Reddit r/PowerBI",
        "Power Automate Users Group",
      ],
      events: [
        "Microsoft Power Platform Conference",
        "Power BI Summit",
        "DAX & Data Modeling Workshops",
        "Microsoft Build Conference",
      ],
    },
  },
  {
    id: "big-data-engineer",
    title: "Big Data Engineer",
    description:
      "A Big Data Engineer specializes in designing, building, and managing large-scale data processing systems, ensuring efficient data storage, retrieval, and analysis.",
    whatIs:
      "Big Data Engineering involves working with massive datasets, designing scalable data pipelines, and using technologies like Hadoop, Spark, and cloud platforms to process and analyze data efficiently.",
    jobDescription:
      "Big Data Engineers develop and maintain data architectures, ETL (Extract, Transform, Load) pipelines, and big data processing frameworks. They collaborate with data scientists and analysts to ensure seamless data accessibility and performance.",
    education: {
      degreeRequired: false,
      preferredDegrees: [
        "Computer Science",
        "Information Technology",
        "Data Science",
        "Software Engineering",
      ],
      noDegreePath: [
        "Big Data certifications",
        "Hands-on experience with Hadoop and Spark",
        "Open-source contributions",
        "Self-learning through projects and online courses",
      ],
    },
    marketTrends: {
      demandLevel: "Very High",
      popularity: "Rising due to increasing data-driven decision-making",
      jobGrowth: "25% (2023-now)",
      companies: [
        "Tech Giants (Google, Amazon, Facebook, Microsoft)",
        "Financial Institutions",
        "Healthcare and Biotech Companies",
        "Retail and E-commerce",
        "Cloud Service Providers",
      ],
    },
    certifications: [
      "Cloudera Certified Data Engineer",
      "Google Cloud Professional Data Engineer",
      "AWS Certified Data Analytics - Specialty",
      "Hortonworks Data Platform (HDP) Certification",
      "Microsoft Certified: Azure Data Engineer Associate",
    ],
    salary: [
      {
        region: "India",
        average: "₹12 LPA",
        entry: "₹6 LPA",
        senior: "₹30 LPA",
      },
      {
        region: "USA",
        average: "$120,000",
        entry: "$80,000",
        senior: "$180,000",
      },
      {
        region: "Europe",
        average: "€80,000",
        entry: "€50,000",
        senior: "€130,000",
      },
    ],
    howToStart: {
      title: "Getting Started with Big Data Engineering",
      steps: [
        "Learn programming languages like Python, Java, or Scala",
        "Understand SQL and NoSQL databases",
        "Master Hadoop and Spark for big data processing",
        "Get familiar with data warehousing and ETL processes",
        "Explore cloud-based big data solutions (AWS, Azure, GCP)",
        "Work on large-scale data projects",
      ],
      bestTimeToStart: "Anytime",
      weeklyHours: "15-20 hours",
    },
    whereToApply: [
      "LinkedIn Jobs",
      "Glassdoor",
      "Indeed",
      "Hired",
      "Upwork",
      "Toptal",
    ],
    roadmap: [
      {
        title: "Foundational Skills",
        duration: "1-2 months",
        steps: [
          "Learn Python, Java, or Scala for data engineering",
          "Understand relational and NoSQL databases",
          "Get familiar with Linux and Shell scripting",
        ],
        dos: [
          "Practice SQL queries",
          "Understand data structures and algorithms",
          "Work with small datasets first",
        ],
        donts: [
          "Ignore SQL fundamentals",
          "Overlook database indexing",
          "Neglect performance optimization",
        ],
      },
      {
        title: "Big Data Technologies",
        duration: "2-3 months",
        steps: [
          "Learn Hadoop ecosystem (HDFS, MapReduce, YARN)",
          "Master Apache Spark for distributed computing",
          "Explore Kafka for real-time data streaming",
        ],
        dos: [
          "Set up a local Hadoop and Spark environment",
          "Work on data processing projects",
          "Optimize Spark jobs for performance",
        ],
        donts: [
          "Skip performance tuning",
          "Ignore cloud-based big data solutions",
          "Rely only on theory—practice is key",
        ],
      },
      {
        title: "Cloud & Advanced Big Data",
        duration: "3-4 months",
        steps: [
          "Understand cloud platforms (AWS, Azure, GCP)",
          "Explore ETL pipelines and data warehousing",
          "Work on real-world big data projects",
        ],
        dos: [
          "Use cloud-based big data tools",
          "Optimize data storage and retrieval",
          "Implement security best practices",
        ],
        donts: [
          "Ignore data privacy regulations",
          "Use inefficient data models",
          "Overload pipelines with unnecessary transformations",
        ],
      },
    ],
    requirements: {
      technical: [
        "Strong programming skills (Python, Java, Scala)",
        "Proficiency in SQL and NoSQL databases",
        "Experience with Hadoop, Spark, and Kafka",
        "Cloud computing knowledge (AWS, Azure, GCP)",
        "Data warehousing and ETL expertise",
      ],
      softSkills: [
        "Analytical and problem-solving skills",
        "Data-driven mindset",
        "Collaboration with data scientists and analysts",
        "Communication and storytelling with data",
        "Continuous learning and adaptability",
      ],
      tools: [
        "Apache Hadoop",
        "Apache Spark",
        "Kafka",
        "AWS Redshift / Google BigQuery",
        "Snowflake",
      ],
    },
    resources: {
      youtube: [
        "Simplilearn - Big Data Tutorials",
        "Data Engineer One - Apache Spark & Hadoop",
        "Tech with Tim - Data Engineering Basics",
        "Google Cloud Tech - Data Engineering on GCP",
      ],
      free: [
        "Big Data University by IBM",
        "Kaggle Datasets & Notebooks",
        "Google Cloud Big Data Training",
        "AWS Free Tier for Big Data Tools",
      ],
      paid: [
        "Udacity Data Engineering Nanodegree",
        "Coursera - Big Data Specialization (University of California)",
        "Pluralsight - Hadoop and Spark Training",
      ],
      tools: [
        "Apache Hadoop & Spark",
        "Kafka",
        "AWS Glue",
        "Azure Data Factory",
        "Google BigQuery",
      ],
      communities: [
        "Reddit r/dataengineering",
        "LinkedIn Data Engineering Groups",
        "Apache Spark Community",
        "Big Data Slack Channels",
      ],
      events: [
        "Strata Data Conference",
        "Google Cloud Next",
        "AWS re:Invent",
        "Big Data & AI World",
      ],
    },
  },

];
