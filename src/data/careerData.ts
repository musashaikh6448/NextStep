// careerData.ts
import { CareerData } from "../types/careerTypes";

export const careerData: CareerData[] = [
  {
    id: "bca",
    title: "BCA (Bachelor of Computer Applications)",
    description:
      "Comprehensive undergraduate program in computer applications and software development",
    overview: {
      duration: "3 Years (6 Semesters)",
      scope:
        "Prepares students for IT careers with focus on programming, software development, and system management",
      futureProspects: [
        "MCA (Master of Computer Applications)",
        "MBA in IT Management",
        "MS in Computer Science/IT",
        "Certifications in Emerging Technologies",
        "PG Diploma in Cloud Computing",
        "Certified Ethical Hacker (CEH)",
        "DevOps Engineering Certification",
        "AI/ML Certification",
        "Cybersecurity Specialist Certification",
        "Data Science & Big Data Analytics",
      ],
      careerPaths: [
        "Software Developer",
        "Web Developer",
        "Mobile App Developer",
        "Database Administrator",
        "Cloud Solutions Architect",
        "IT Consultant",
        "DevOps Engineer",
        "UI/UX Designer",
        "Quality Assurance Engineer",
        "Cybersecurity Analyst",
        "AI/ML Engineer",
        "Data Scientist",
        "Blockchain Developer",
        "Game Developer",
        "Network Security Engineer",
      ],
    },
    skills: [
      "Problem Solving",
      "Algorithm Design",
      "Software Development Lifecycle",
      "Data Structures",
      "Communication Skills",
      "Team Collaboration",
      "Project Management",
      "Critical Thinking",
      "Time Management",
      "Technical Documentation",
      "Analytical Thinking",
      "Networking Basics",
      "Cybersecurity Awareness",
      "Agile Methodologies",
      "Cloud Computing Concepts",
    ],
    technicalSkills: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL/NoSQL Databases",
      "HTML/CSS",
      "React/Angular/Vue",
      "Node.js/Express",
      "Android/iOS Development",
      "RESTful APIs",
      "Git/GitHub",
      "Docker/Kubernetes",
      "AWS/Azure Fundamentals",
      "TensorFlow/PyTorch",
      "Blockchain Development",
      "Big Data Technologies (Hadoop, Spark)",
      "Cybersecurity Tools (Wireshark, Kali Linux)",
    ],
    steps: [
      {
        id: "year1",
        title: "Foundation Year",
        description: "Focus on programming basics and web fundamentals",
        duration: "Year 1",
        resources: [
          {
            title: "CS50 Introduction to Computer Science",
            url: "https://cs50.harvard.edu/",
            type: "course",
          },
          {
            title: "Java Programming Masterclass",
            url: "https://udemy.com/java-programming",
            type: "course",
          },
          {
            title: "Web Development 101 Guide",
            url: "https://frontendmasters.com/guides/web-development/",
            type: "article",
          },
          {
            title: "Introduction to Python",
            url: "https://realpython.com/python-beginners-guide/",
            type: "course",
          },
        ],
      },
      {
        id: "year2",
        title: "Intermediate Skills",
        description: "Advanced programming and database management",
        duration: "Year 2",
        resources: [
          {
            title: "Full Stack Web Development Guide",
            url: "https://freecodecamp.org",
            type: "article",
          },
          {
            title: "Database Systems Concepts",
            url: "https://coursera.org/specializations/database-systems",
            type: "course",
          },
          {
            title: "Advanced Python Programming",
            url: "https://realpython.com",
            type: "course",
          },
          {
            title: "Data Structures and Algorithms",
            url: "https://geeksforgeeks.org/data-structures",
            type: "course",
          },
        ],
      },
      {
        id: "year3",
        title: "Advanced Specialization",
        description: "Industry-ready skills and project development",
        duration: "Year 3",
        resources: [
          {
            title: "Cloud Computing Fundamentals",
            url: "https://aws.amazon.com/training/",
            type: "course",
          },
          {
            title: "Mobile Development Bootcamp",
            url: "https://udacity.com/mobile-development",
            type: "course",
          },
          {
            title: "Agile Methodology Guide",
            url: "https://agilemanifesto.org/",
            type: "article",
          },
          {
            title: "Introduction to AI & Machine Learning",
            url: "https://coursera.org/ai-intro",
            type: "course",
          },
        ],
      },
    ],
    certifications: [
      {
        name: "AWS Certified Developer",
        provider: "Amazon Web Services",
        level: "Associate",
        link: "https://aws.amazon.com/certification/",
      },
      {
        name: "Oracle Certified Java Programmer",
        provider: "Oracle University",
        level: "Professional",
        link: "https://education.oracle.com/",
      },
      {
        name: "Microsoft Certified: Azure Fundamentals",
        provider: "Microsoft",
        level: "Fundamental",
        link: "https://learn.microsoft.com/certifications/",
      },
      {
        name: "Google Cloud Associate Engineer",
        provider: "Google Cloud",
        level: "Associate",
        link: "https://cloud.google.com/certification",
      },
      {
        name: "Certified Kubernetes Administrator",
        provider: "The Linux Foundation",
        level: "Professional",
        link: "https://training.linuxfoundation.org/certification/cka/",
      },
      {
        name: "Certified Ethical Hacker (CEH)",
        provider: "EC-Council",
        level: "Advanced",
        link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
      },
    ],
    careerProspects: [
      {
        title: "Full-Stack Development",
        description:
          "Develop end-to-end web applications using modern frameworks",
      },
      {
        title: "Data Analytics",
        description:
          "Analyze and interpret complex digital data to support decision-making",
      },
      {
        title: "Cloud Engineering",
        description: "Design and implement cloud infrastructure solutions",
      },
      {
        title: "Mobile Development",
        description: "Create cross-platform mobile applications",
      },
      {
        title: "DevOps Engineering",
        description: "Manage CI/CD pipelines and cloud infrastructure",
      },
      {
        title: "AI & Machine Learning",
        description: "Develop intelligent systems for automation and analytics",
      },
      {
        title: "Blockchain Development",
        description: "Work on decentralized applications and smart contracts",
      },
    ],
    salary: {
      starting: "₹3-6 LPA",
      midLevel: "₹8-15 LPA",
      senior: "₹20+ LPA",
      factors: [
        "Technical Expertise",
        "Industry Certification",
        "Company Reputation",
        "Geographic Location",
        "Negotiation Skills",
        "Portfolio Strength",
        "Specialization Domain",
        "Project Experience",
        "Soft Skills",
      ],
    },
    jobPlatforms: [
      "LinkedIn Jobs",
      "Naukri.com",
      "Indeed",
      "Glassdoor",
      "AngelList",
      "HackerEarth",
      "Stack Overflow Jobs",
      "GitHub Jobs",
      "Turing.com",
      "RemoteOK",
      "We Work Remotely",
      "Outsourcely",
    ],
    dos: [
      "Master at least 2 programming languages",
      "Build 5+ real-world projects for portfolio",
      "Participate in hackathons and coding challenges",
      "Network with IT professionals through meetups",
      "Learn about cloud platforms (AWS/Azure/GCP)",
      "Contribute to open-source projects",
      "Attend tech conferences and workshops",
      "Create technical blog/content",
      "Practice DSA regularly",
      "Stay updated with industry trends",
    ],
    donts: [
      "Don't ignore mathematics and logical reasoning",
      "Avoid relying solely on college curriculum",
      "Don't postpone internship opportunities",
      "Avoid neglecting communication skills development",
      "Don't copy code without understanding",
      "Avoid procrastinating project work",
      "Don't ignore version control practices",
      "Avoid focusing only on theoretical knowledge",
      "Don’t ignore soft skills and teamwork",
    ],
    futurePreparation: [
      "Learn DevOps tools (Docker, Kubernetes)",
      "Explore AI/ML fundamentals with Python",
      "Study cybersecurity best practices",
      "Practice agile development methodologies",
      "Understand blockchain technology basics",
      "Learn IoT and Edge Computing",
      "Explore Quantum Computing basics",
      "Study Big Data technologies",
      "Master Microservices architecture",
    ],
  },
  {
    id: "btech-cs",
    title: "B.Tech in Computer Science",
    description:
      "A four-year undergraduate program that covers theoretical and practical aspects of computer science and engineering.",
    overview: {
      duration: "4 Years (8 Semesters)",
      scope:
        "Prepares students for software development, data science, AI, cybersecurity, and network engineering roles.",
      futureProspects: [
        "M.Tech in Computer Science",
        "MBA in IT & Management",
        "MS in Data Science/AI/ML",
        "Cybersecurity Certifications (CISSP, CEH, OSCP)",
        "Cloud Computing Certifications (AWS, GCP, Azure)",
        "Big Data & Blockchain Certifications",
        "DevOps Engineer Certifications",
        "AI & Machine Learning Specialization",
        "PG Diploma in Cybersecurity",
        "IoT & Embedded Systems Specialization",
        "Robotics & Automation Engineering",
      ],
      careerPaths: [
        "Software Engineer",
        "Data Scientist",
        "AI/ML Engineer",
        "Blockchain Developer",
        "Cybersecurity Specialist",
        "Cloud Engineer",
        "IoT Engineer",
        "Embedded Systems Engineer",
        "Game Developer",
        "DevOps Engineer",
        "Robotics Engineer",
        "AR/VR Developer",
        "System Architect",
        "IT Consultant",
        "Database Administrator",
      ],
    },
    skills: [
      "Programming & Problem-Solving",
      "Data Structures & Algorithms",
      "Operating Systems & Computer Networks",
      "Machine Learning & AI",
      "Cloud Computing & DevOps",
      "Cybersecurity & Ethical Hacking",
      "Database Management Systems",
      "Full Stack Development",
      "Networking & Distributed Systems",
      "Software Testing & Debugging",
      "Project Management",
      "Mathematical & Logical Thinking",
      "Parallel & Distributed Computing",
      "Version Control (Git/GitHub)",
      "Soft Skills & Communication",
    ],
    technicalSkills: [
      "C, C++, Java, Python, R",
      "HTML, CSS, JavaScript, TypeScript",
      "React.js, Angular, Vue.js, Svelte",
      "Node.js, Express.js, Django, Flask",
      "SQL, NoSQL (MongoDB, PostgreSQL, Firebase)",
      "AWS, Azure, Google Cloud, IBM Cloud",
      "Kubernetes, Docker, Jenkins, Terraform",
      "TensorFlow, PyTorch, Scikit-Learn, OpenCV",
      "Cybersecurity Tools (Nmap, Kali Linux, Metasploit, Wireshark)",
      "Hadoop, Spark, Apache Kafka",
      "Microservices Architecture",
      "GraphQL & RESTful APIs",
      "CI/CD Pipelines",
      "Reverse Engineering & Malware Analysis",
      "Penetration Testing & Incident Response",
    ],
    steps: [
      {
        id: "year1",
        title: "Core Programming & Basics",
        description:
          "Learn fundamental programming concepts and problem-solving skills.",
        duration: "Year 1",
        resources: [
          {
            title: "CS50 Introduction to Computer Science",
            url: "https://cs50.harvard.edu/",
            type: "course",
          },
          {
            title: "Introduction to C and C++ Programming",
            url: "https://udacity.com/cpp",
            type: "course",
          },
          {
            title: "Data Structures & Algorithms in Python",
            url: "https://coursera.org/specializations/data-structures-algorithms",
            type: "course",
          },
          {
            title: "Operating Systems Concepts",
            url: "https://nptel.ac.in/courses/106/106/106106144/",
            type: "course",
          },
        ],
      },
      {
        id: "year2",
        title: "Advanced Programming & Networking",
        description:
          "Deep dive into OS, networking, and full-stack development.",
        duration: "Year 2",
        resources: [
          {
            title: "Networking Fundamentals",
            url: "https://cisco.com/",
            type: "course",
          },
          {
            title: "Full Stack Development Guide",
            url: "https://freecodecamp.org",
            type: "article",
          },
          {
            title: "Database Management Systems",
            url: "https://dbms.io/",
            type: "article",
          },
          {
            title: "Computer Networking: Principles, Protocols & Practice",
            url: "https://inria.fr/",
            type: "book",
          },
        ],
      },
      {
        id: "year3",
        title: "Specialization & Industry Readiness",
        description:
          "Master advanced topics and industry-driven specializations.",
        duration: "Year 3",
        resources: [
          {
            title: "Machine Learning Specialization",
            url: "https://coursera.org/ml-specialization",
            type: "course",
          },
          {
            title: "Cybersecurity Fundamentals",
            url: "https://tryhackme.com/",
            type: "platform",
          },
          {
            title: "Cloud Computing Essentials",
            url: "https://aws.amazon.com/training/",
            type: "course",
          },
          {
            title: "IoT & Embedded Systems",
            url: "https://udacity.com/iot",
            type: "course",
          },
        ],
      },
    ],
    certifications: [
      {
        name: "Certified Ethical Hacker (CEH)",
        provider: "EC-Council",
        level: "Advanced",
        link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
      },
      {
        name: "AWS Certified Solutions Architect",
        provider: "Amazon Web Services",
        level: "Professional",
        link: "https://aws.amazon.com/certification/",
      },
      {
        name: "Google Cloud Professional Data Engineer",
        provider: "Google Cloud",
        level: "Professional",
        link: "https://cloud.google.com/certification/data-engineer",
      },
      {
        name: "Microsoft Certified: Azure Solutions Architect",
        provider: "Microsoft",
        level: "Expert",
        link: "https://learn.microsoft.com/certifications/azure-solutions-architect/",
      },
    ],
    careerProspects: [
      {
        title: "Software Engineering",
        description: "Develop and maintain large-scale software applications.",
      },
      {
        title: "Data Science & AI",
        description:
          "Work with large datasets to extract insights and develop AI models.",
      },
      {
        title: "Cloud Engineering",
        description: "Manage cloud-based infrastructure and deployments.",
      },
      {
        title: "Cybersecurity",
        description: "Secure networks and systems against cyber threats.",
      },
      {
        title: "IoT & Embedded Systems",
        description: "Develop smart devices and embedded solutions.",
      },
    ],
    salary: {
      starting: "₹4-10 LPA",
      midLevel: "₹12-25 LPA",
      senior: "₹40+ LPA",
      factors: [
        "Technical Expertise",
        "Industry Certification",
        "Company Reputation",
        "Geographic Location",
        "Negotiation Skills",
        "Portfolio Strength",
        "Specialization Domain",
        "Project Experience",
        "Soft Skills",
      ],
    },
    jobPlatforms: [
      "LinkedIn Jobs",
      "Naukri.com",
      "Indeed",
      "Glassdoor",
      "AngelList",
      "HackerEarth",
      "GitHub Jobs",
      "Turing.com",
      "Hired",
      "Outsourcely",
    ],
    dos: [
      "Learn DSA thoroughly",
      "Build full-stack projects",
      "Participate in open-source contributions",
      "Stay updated with emerging tech trends",
      "Gain real-world experience through internships",
      "Contribute to coding communities (LeetCode, CodeForces)",
      "Master Linux & Shell Scripting",
      "Explore AI & Cloud Computing",
      "Develop a strong GitHub profile",
      "Work on open-source projects",
    ],
    donts: [
      "Don't rely only on theoretical knowledge",
      "Avoid skipping foundational subjects like OS & DBMS",
      "Don't ignore soft skills like communication & teamwork",
      "Don’t ignore competitive coding",
      "Avoid memorizing concepts without understanding",
      "Don’t delay starting internships & networking",
    ],
    futurePreparation: [
      "Explore emerging fields like AI, Blockchain, and Quantum Computing",
      "Master cloud platforms and DevOps practices",
      "Understand cybersecurity and ethical hacking concepts",
      "Gain experience in containerization and orchestration",
      "Study decentralized application development",
    ],
  },
  {
    id: "bsc-it",
    title: "B.Sc. in Information Technology",
    description:
      "A three-year undergraduate program focusing on software development, database management, networking, cybersecurity, and IT infrastructure.",
    overview: {
      duration: "3 Years (6 Semesters)",
      scope:
        "Prepares students for careers in software development, IT infrastructure management, cybersecurity, cloud computing, and database administration.",
      futureProspects: [
        "M.Sc. in Information Technology",
        "MCA (Master of Computer Applications)",
        "MBA in IT & Management",
        "PG Diploma in Data Science/AI/ML",
        "Cloud Computing Certifications (AWS, GCP, Azure)",
        "Cybersecurity Certifications (CEH, CISSP, OSCP)",
        "Big Data & Blockchain Certifications",
        "Web & Mobile App Development Specialization",
        "ITIL (Information Technology Infrastructure Library) Certification",
      ],
      careerPaths: [
        "Software Developer",
        "Web Developer",
        "IT Support Engineer",
        "Cloud Engineer",
        "Cybersecurity Analyst",
        "Database Administrator",
        "Network Engineer",
        "Mobile App Developer",
        "Data Analyst",
        "UI/UX Designer",
        "Technical Support Specialist",
        "System Administrator",
        "IT Consultant",
        "SEO Specialist",
        "Game Developer",
      ],
    },
    skills: [
      "Programming & Problem-Solving",
      "Software Development & Testing",
      "Database Management Systems (DBMS)",
      "Networking & IT Infrastructure",
      "Cybersecurity & Ethical Hacking",
      "Cloud Computing & DevOps",
      "Web Development (Frontend & Backend)",
      "Data Analysis & Business Intelligence",
      "Operating Systems & Virtualization",
      "Project Management",
      "Digital Marketing & SEO",
      "Networking & System Administration",
      "Mobile App Development",
      "Version Control (Git/GitHub)",
      "Soft Skills & Communication",
    ],
    technicalSkills: [
      "C, C++, Java, Python, PHP",
      "HTML, CSS, JavaScript, TypeScript",
      "React.js, Angular, Vue.js",
      "Node.js, Express.js, Laravel, Django",
      "SQL, NoSQL (MySQL, MongoDB, Firebase)",
      "AWS, Azure, Google Cloud",
      "Cybersecurity Tools (Kali Linux, Metasploit, Wireshark)",
      "Linux, Windows Server Administration",
      "CI/CD Pipelines (Jenkins, GitHub Actions)",
      "Docker, Kubernetes, Virtual Machines",
      "Mobile App Development (Flutter, React Native)",
      "Blockchain Basics & Cryptocurrency",
      "Cloud Security & Ethical Hacking",
      "Penetration Testing & Incident Response",
      "Business Intelligence & Data Visualization (Power BI, Tableau)",
    ],
    steps: [
      {
        id: "year1",
        title: "Fundamentals of IT & Programming",
        description:
          "Learn basic programming, computer fundamentals, and web development.",
        duration: "Year 1",
        resources: [
          {
            title: "Introduction to Computer Science",
            url: "https://cs50.harvard.edu/",
            type: "course",
          },
          {
            title: "HTML, CSS, and JavaScript Basics",
            url: "https://freecodecamp.org/",
            type: "course",
          },
          {
            title: "C Programming for Beginners",
            url: "https://udacity.com/c-programming",
            type: "course",
          },
          {
            title: "Networking Fundamentals",
            url: "https://cisco.com/",
            type: "course",
          },
        ],
      },
      {
        id: "year2",
        title: "Software Development & Cybersecurity",
        description:
          "Dive into software engineering, database management, and cybersecurity concepts.",
        duration: "Year 2",
        resources: [
          {
            title: "Full Stack Development Guide",
            url: "https://freecodecamp.org/",
            type: "article",
          },
          {
            title: "Cybersecurity Essentials",
            url: "https://tryhackme.com/",
            type: "platform",
          },
          {
            title: "Database Management & SQL",
            url: "https://sqlzoo.net/",
            type: "course",
          },
          {
            title: "Python for Data Science",
            url: "https://datacamp.com/",
            type: "course",
          },
        ],
      },
      {
        id: "year3",
        title: "Advanced IT & Specialization",
        description:
          "Gain expertise in cloud computing, DevOps, and AI/ML basics.",
        duration: "Year 3",
        resources: [
          {
            title: "AWS Cloud Practitioner Certification",
            url: "https://aws.amazon.com/training/",
            type: "course",
          },
          {
            title: "Machine Learning with Python",
            url: "https://coursera.org/ml-specialization",
            type: "course",
          },
          {
            title: "DevOps Essentials",
            url: "https://docker.com/",
            type: "course",
          },
          {
            title: "Ethical Hacking & Penetration Testing",
            url: "https://udemy.com/ethical-hacking/",
            type: "course",
          },
        ],
      },
    ],
    certifications: [
      {
        name: "Certified Ethical Hacker (CEH)",
        provider: "EC-Council",
        level: "Advanced",
        link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
      },
      {
        name: "AWS Certified Solutions Architect",
        provider: "Amazon Web Services",
        level: "Professional",
        link: "https://aws.amazon.com/certification/",
      },
      {
        name: "Google IT Support Professional Certificate",
        provider: "Google",
        level: "Beginner",
        link: "https://grow.google/certificates/it-support/",
      },
      {
        name: "Microsoft Certified: Azure Administrator Associate",
        provider: "Microsoft",
        level: "Intermediate",
        link: "https://learn.microsoft.com/certifications/azure-administrator/",
      },
    ],
    careerProspects: [
      {
        title: "Software Development",
        description:
          "Develop applications and web-based solutions for businesses.",
      },
      {
        title: "IT Support & Networking",
        description:
          "Manage IT infrastructure, network security, and troubleshooting.",
      },
      {
        title: "Cybersecurity & Ethical Hacking",
        description: "Protect systems from cyber threats and vulnerabilities.",
      },
      {
        title: "Data Analysis & Business Intelligence",
        description: "Analyze and visualize data for better decision-making.",
      },
      {
        title: "Cloud Computing & DevOps",
        description: "Manage cloud infrastructure and streamline deployments.",
      },
    ],
    salary: {
      starting: "₹3-7 LPA",
      midLevel: "₹8-15 LPA",
      senior: "₹25+ LPA",
      factors: [
        "Technical Expertise",
        "Industry Certification",
        "Company Reputation",
        "Geographic Location",
        "Negotiation Skills",
        "Portfolio Strength",
        "Specialization Domain",
        "Project Experience",
        "Soft Skills",
      ],
    },
    jobPlatforms: [
      "LinkedIn Jobs",
      "Naukri.com",
      "Indeed",
      "Glassdoor",
      "AngelList",
      "HackerEarth",
      "GitHub Jobs",
      "Turing.com",
      "Hired",
      "Upwork",
    ],
    dos: [
      "Build projects in web & mobile development",
      "Learn DSA & problem-solving",
      "Explore cybersecurity & cloud computing",
      "Gain practical experience through internships",
      "Contribute to open-source projects",
      "Get industry-relevant certifications",
      "Stay updated with the latest IT trends",
      "Network with professionals via LinkedIn & hackathons",
    ],
    donts: [
      "Don't ignore practical skills & projects",
      "Avoid skipping database & networking fundamentals",
      "Don't rely solely on classroom learning",
      "Avoid neglecting cybersecurity basics",
      "Don’t underestimate the power of soft skills",
      "Avoid job hunting without building a strong portfolio",
    ],
    futurePreparation: [
      "Master cloud platforms like AWS, Azure, GCP",
      "Explore AI, Blockchain, and Cybersecurity",
      "Understand DevOps & CI/CD practices",
      "Develop strong problem-solving & debugging skills",
      "Work on real-world projects & freelancing",
    ],
  },
  {
    id: "btech-ai",
    title: "B.Tech in Artificial Intelligence",
    description:
      "A four-year undergraduate program focused on artificial intelligence, machine learning, deep learning, and data science with applications in various industries.",
    overview: {
      duration: "4 Years (8 Semesters)",
      scope:
        "Prepares students for careers in AI, data science, deep learning, robotics, NLP, and AI-driven software engineering.",
      futureProspects: [
        "M.Tech in AI & Data Science",
        "MBA in AI & Business Analytics",
        "MS in Machine Learning/AI/Deep Learning",
        "Ph.D. in AI & Robotics",
        "Google TensorFlow Developer Certification",
        "AWS AI & ML Certification",
        "Advanced Data Science & AI Certifications",
        "AI Ethics & Responsible AI Certifications",
        "Specialization in NLP & Speech Processing",
        "Computer Vision & Robotics Engineering",
      ],
      careerPaths: [
        "AI Engineer",
        "Machine Learning Engineer",
        "Data Scientist",
        "Computer Vision Engineer",
        "Natural Language Processing (NLP) Engineer",
        "Deep Learning Engineer",
        "AI Research Scientist",
        "AI & Robotics Engineer",
        "Autonomous Systems Developer",
        "AI Software Developer",
        "AI in Cybersecurity Specialist",
        "Edge AI Developer",
        "AI Product Manager",
      ],
    },
    skills: [
      "Programming & Problem-Solving",
      "Machine Learning & AI",
      "Deep Learning & Neural Networks",
      "Data Structures & Algorithms",
      "Big Data Analytics & Data Science",
      "Computer Vision & Image Processing",
      "Natural Language Processing (NLP)",
      "Reinforcement Learning & Robotics",
      "Cloud Computing & AI Deployment",
      "AI Model Optimization & Explainability",
      "Data Engineering & Feature Engineering",
      "Probability, Statistics & Linear Algebra",
      "Ethical AI & AI Governance",
    ],
    technicalSkills: [
      "Python, R, MATLAB",
      "TensorFlow, PyTorch, Scikit-Learn",
      "OpenCV, YOLO, Hugging Face Transformers",
      "AWS SageMaker, Google Vertex AI",
      "SQL, NoSQL, MongoDB, PostgreSQL",
      "Docker, Kubernetes, MLflow",
      "Hadoop, Apache Spark, Kafka",
      "Generative AI & GPT Models",
      "NLP Libraries (spaCy, NLTK, BERT)",
      "AI Ethics & Bias Detection",
      "Edge AI (TinyML, TensorFlow Lite)",
      "Quantum Computing & AI",
      "AutoML & MLOps Pipelines",
    ],
    steps: [
      {
        id: "year1",
        title: "Foundation of AI & Programming",
        description: "Learn programming, data structures, and AI fundamentals.",
        duration: "Year 1",
        resources: [
          {
            title: "CS50 Introduction to Computer Science",
            url: "https://cs50.harvard.edu/",
            type: "course",
          },
          {
            title: "Python for Beginners",
            url: "https://freecodecamp.org/",
            type: "course",
          },
          {
            title: "Mathematics for AI",
            url: "https://khanacademy.org/math/",
            type: "course",
          },
          {
            title: "Intro to Machine Learning",
            url: "https://coursera.org/learn/machine-learning/",
            type: "course",
          },
        ],
      },
      {
        id: "year2",
        title: "Intermediate AI & Data Science",
        description: "Learn ML algorithms, statistics, and AI applications.",
        duration: "Year 2",
        resources: [
          {
            title: "Machine Learning with Python",
            url: "https://coursera.org/ml-specialization",
            type: "course",
          },
          {
            title: "Deep Learning Specialization",
            url: "https://deeplearning.ai/",
            type: "course",
          },
          {
            title: "Data Science & Big Data Analytics",
            url: "https://datacamp.com/",
            type: "course",
          },
          {
            title: "AI Ethics & Responsible AI",
            url: "https://ai.google/responsible-ai/",
            type: "course",
          },
        ],
      },
      {
        id: "year3",
        title: "Advanced AI & Deep Learning",
        description: "Work on deep learning, NLP, and AI model deployment.",
        duration: "Year 3",
        resources: [
          {
            title: "Advanced Computer Vision",
            url: "https://opencv.org/",
            type: "course",
          },
          {
            title: "NLP Specialization",
            url: "https://huggingface.co/",
            type: "course",
          },
          {
            title: "MLOps & Model Deployment",
            url: "https://mlflow.org/",
            type: "course",
          },
          {
            title: "AI for Robotics",
            url: "https://coursera.org/ai-robotics",
            type: "course",
          },
        ],
      },
      {
        id: "year4",
        title: "Industry Projects & Specialization",
        description: "Gain real-world experience with AI projects & research.",
        duration: "Year 4",
        resources: [
          {
            title: "Reinforcement Learning",
            url: "https://deepmind.com/",
            type: "course",
          },
          {
            title: "AI in Healthcare & Finance",
            url: "https://stanford.edu/ai-in-healthcare/",
            type: "course",
          },
          {
            title: "Quantum AI & Computing",
            url: "https://quantumai.google/",
            type: "course",
          },
        ],
      },
    ],
    certifications: [
      {
        name: "Google TensorFlow Developer Certification",
        provider: "Google",
        level: "Intermediate",
        link: "https://developers.google.com/certification/tensorflow",
      },
      {
        name: "AWS Certified Machine Learning – Specialty",
        provider: "Amazon Web Services",
        level: "Advanced",
        link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
      },
      {
        name: "Microsoft Certified: Azure AI Engineer",
        provider: "Microsoft",
        level: "Professional",
        link: "https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/",
      },
      {
        name: "IBM AI Engineering Professional Certificate",
        provider: "IBM",
        level: "Beginner",
        link: "https://www.coursera.org/professional-certificates/ai-engineering",
      },
    ],
    careerProspects: [
      {
        title: "AI Engineering",
        description: "Design and develop AI-powered applications and systems.",
      },
      {
        title: "Data Science & Machine Learning",
        description:
          "Work on predictive analytics and data-driven decision-making.",
      },
      {
        title: "Computer Vision & Robotics",
        description:
          "Develop AI-powered vision and robotic automation systems.",
      },
      {
        title: "NLP & Speech Processing",
        description:
          "Build AI systems for voice assistants and language translation.",
      },
      {
        title: "AI in Finance & Healthcare",
        description:
          "Implement AI in fintech, medical diagnostics, and research.",
      },
    ],
    salary: {
      starting: "₹6-12 LPA",
      midLevel: "₹18-30 LPA",
      senior: "₹50+ LPA",
      factors: [
        "AI Model Performance & Optimization",
        "Industry Certification",
        "Domain Expertise (Healthcare, Finance, Robotics, etc.)",
        "Company Reputation",
        "Geographic Location",
        "Negotiation Skills",
        "Portfolio Strength",
        "Research & Patents",
        "MLOps & Deployment Skills",
      ],
    },
    jobPlatforms: [
      "LinkedIn Jobs",
      "Naukri.com",
      "Indeed",
      "Glassdoor",
      "AngelList",
      "GitHub Jobs",
      "AI Job Boards (AI-Jobs.net, Kaggle, etc.)",
      "HackerRank AI Challenges",
      "Turing.com",
    ],
    dos: [
      "Build AI/ML projects and publish them on GitHub",
      "Learn TensorFlow & PyTorch in-depth",
      "Participate in AI hackathons & Kaggle competitions",
      "Understand AI model optimization techniques",
      "Stay updated with AI research papers (ArXiv, Google AI)",
    ],
    donts: [
      "Don’t ignore mathematics & statistics",
      "Avoid relying only on pre-trained models",
      "Don’t skip MLOps & AI deployment skills",
      "Avoid neglecting AI ethics & bias detection",
    ],
    futurePreparation: [
      "Explore AI in autonomous systems & self-driving cars",
      "Master AI ethics & explainability",
      "Research AI applications in quantum computing",
      "Develop AI solutions for real-world problems",
    ],
  },
  {
    id: "bdes",
    title: "Bachelor of Design (B.Des)",
    description:
      "A four-year undergraduate program focused on various aspects of design, including UI/UX, graphic design, fashion, animation, and product design.",
    overview: {
      duration: "4 Years (8 Semesters)",
      scope:
        "Prepares students for careers in graphic design, UI/UX, product design, animation, interior design, and fashion design.",
      futureProspects: [
        "M.Des (Master of Design)",
        "MBA in Design Management",
        "Specialization in UI/UX Design",
        "Certification in Animation & VFX",
        "Fashion Technology & Apparel Management",
        "Automobile & Industrial Design Specialization",
        "AR/VR & 3D Modeling Expertise",
        "Game Design & Development",
        "Multimedia & Motion Graphics",
      ],
      careerPaths: [
        "UI/UX Designer",
        "Graphic Designer",
        "Industrial Designer",
        "Fashion Designer",
        "Interior Designer",
        "Animation & VFX Artist",
        "Game Designer",
        "Automobile Designer",
        "Product Designer",
        "Illustrator & Concept Artist",
        "Motion Graphics Designer",
        "AR/VR Designer",
        "Design Researcher",
      ],
    },
    skills: [
      "Creative Thinking & Design Fundamentals",
      "Typography & Color Theory",
      "Graphic Design & Branding",
      "User Experience (UX) & User Interface (UI) Design",
      "3D Modeling & Animation",
      "Illustration & Storyboarding",
      "Fashion Sketching & Textile Design",
      "Product Design & Prototyping",
      "Interior & Spatial Design",
      "Motion Graphics & Visual Effects",
      "Design Psychology & Market Trends",
      "Augmented Reality (AR) & Virtual Reality (VR) Design",
    ],
    technicalSkills: [
      "Adobe Photoshop, Illustrator, InDesign",
      "Figma, Sketch, Adobe XD (UI/UX)",
      "Blender, Maya, 3ds Max (3D Design & Animation)",
      "Cinema 4D, After Effects (Motion Graphics)",
      "AutoCAD, SolidWorks (Product & Interior Design)",
      "CorelDRAW, Procreate (Graphic Design & Illustration)",
      "ZBrush, Substance Painter (3D Sculpting & Texturing)",
      "Marvelous Designer, CLO 3D (Fashion Design)",
      "Unity, Unreal Engine (Game Design & AR/VR)",
      "Hand Sketching & Digital Drawing",
    ],
    steps: [
      {
        id: "year1",
        title: "Design Foundation & Basics",
        description:
          "Develop basic design skills, sketching, and digital tools.",
        duration: "Year 1",
        resources: [
          {
            title: "Principles of Design",
            url: "https://www.coursera.org/learn/graphic-design",
            type: "course",
          },
          {
            title: "Learn Adobe Photoshop & Illustrator",
            url: "https://www.udemy.com/course/adobe-photoshop-illustrator/",
            type: "course",
          },
          {
            title: "Fundamentals of UI/UX Design",
            url: "https://www.figma.com/resources/",
            type: "course",
          },
        ],
      },
      {
        id: "year2",
        title: "Advanced Digital Design & UI/UX",
        description: "Master UI/UX tools, 3D modeling, and branding.",
        duration: "Year 2",
        resources: [
          {
            title: "UI/UX Design Specialization",
            url: "https://www.coursera.org/specializations/ui-ux-design",
            type: "course",
          },
          {
            title: "Motion Graphics in After Effects",
            url: "https://motiondesign.school/",
            type: "course",
          },
          {
            title: "3D Design with Blender",
            url: "https://www.blender.org/",
            type: "course",
          },
        ],
      },
      {
        id: "year3",
        title: "Specialization & Industry Projects",
        description:
          "Work on real-world projects in animation, product design, fashion, or UI/UX.",
        duration: "Year 3",
        resources: [
          {
            title: "3D Product Design",
            url: "https://learn.foundry.com/",
            type: "course",
          },
          {
            title: "Game Design & AR/VR",
            url: "https://www.unrealengine.com/",
            type: "course",
          },
          {
            title: "Fashion & Textile Design",
            url: "https://www.nift.ac.in/",
            type: "course",
          },
        ],
      },
      {
        id: "year4",
        title: "Internships & Portfolio Development",
        description:
          "Gain hands-on experience through internships and build a strong portfolio.",
        duration: "Year 4",
        resources: [
          {
            title: "Building a Design Portfolio",
            url: "https://dribbble.com/",
            type: "platform",
          },
          {
            title: "Design Thinking & Problem Solving",
            url: "https://www.ideou.com/",
            type: "course",
          },
        ],
      },
    ],
    certifications: [
      {
        name: "Adobe Certified Professional",
        provider: "Adobe",
        level: "Beginner-Advanced",
        link: "https://certifiedprofessional.adobe.com/",
      },
      {
        name: "Google UX Design Certificate",
        provider: "Google",
        level: "Intermediate",
        link: "https://grow.google/certificates/ux-design/",
      },
      {
        name: "Autodesk Certified Professional",
        provider: "Autodesk",
        level: "Advanced",
        link: "https://www.autodesk.com/certification/",
      },
      {
        name: "Unity Certified 3D Artist",
        provider: "Unity",
        level: "Advanced",
        link: "https://unity.com/certifications",
      },
    ],
    careerProspects: [
      {
        title: "UI/UX Design",
        description:
          "Design user-friendly digital interfaces for web & mobile applications.",
      },
      {
        title: "Graphic & Motion Design",
        description:
          "Create brand identities, illustrations, and animated content.",
      },
      {
        title: "Product & Industrial Design",
        description:
          "Develop physical and digital products for various industries.",
      },
      {
        title: "Fashion & Textile Design",
        description:
          "Design clothing, textiles, and apparel for brands and retailers.",
      },
      {
        title: "Animation & Game Design",
        description: "Work on 2D/3D animation, gaming assets, and VFX.",
      },
    ],
    salary: {
      starting: "₹4-8 LPA",
      midLevel: "₹12-20 LPA",
      senior: "₹30+ LPA",
      factors: [
        "Design Portfolio & Projects",
        "Industry Certifications",
        "Company Reputation",
        "Specialization (UI/UX, Animation, Fashion, etc.)",
        "Geographic Location",
        "Experience & Innovation",
        "Software Proficiency",
      ],
    },
    jobPlatforms: [
      "LinkedIn Jobs",
      "Dribbble",
      "Behance",
      "Indeed",
      "Naukri.com",
      "AngelList",
      "99designs",
      "Toptal",
      "Creative Bloq",
    ],
    dos: [
      "Build a strong design portfolio",
      "Learn industry-standard design tools",
      "Stay updated with design trends",
      "Network with professionals on Dribbble & Behance",
      "Gain real-world experience through internships",
    ],
    donts: [
      "Don’t ignore design fundamentals like typography & color theory",
      "Avoid relying only on digital tools—sketching is important",
      "Don’t copy other designers—focus on originality",
      "Avoid skipping UX research in UI/UX design",
      "Don’t ignore soft skills like client communication & collaboration",
    ],
    futurePreparation: [
      "Explore emerging fields like AR/VR design & AI-generated art",
      "Master interactive UI/UX design techniques",
      "Understand sustainable & eco-friendly design trends",
      "Develop expertise in niche areas like automotive design or game UI",
    ],
  },
  {
    id: "bba-tech",
    title: "BBA Tech (Bachelor of Business Administration & Technology)",
    description:
      "A four-year interdisciplinary program combining business administration with technology, focusing on management, IT, analytics, and entrepreneurship.",
    overview: {
      duration: "4 Years (8 Semesters)",
      scope:
        "Prepares students for leadership roles in IT management, data analytics, digital marketing, fintech, and business consulting.",
      futureProspects: [
        "MBA in Business Analytics / IT Management",
        "MS in Data Science / AI & Business Intelligence",
        "Certified Scrum Master (CSM) for Project Management",
        "Google Digital Marketing & Data Analytics Certifications",
        "AWS Cloud Practitioner & Solutions Architect",
        "Cybersecurity & Ethical Hacking Certifications",
        "SAP Business & ERP Management Certifications",
        "Entrepreneurship & Startup Incubation Programs",
      ],
      careerPaths: [
        "Business Analyst",
        "IT Project Manager",
        "Data Analyst",
        "Digital Marketing Specialist",
        "Product Manager",
        "Cybersecurity Consultant",
        "Cloud Solutions Architect",
        "FinTech Specialist",
        "E-Commerce Manager",
        "Technology Consultant",
      ],
    },
    skills: [
      "Business Strategy & Management",
      "Financial Analysis & Investment Planning",
      "Data Analytics & Business Intelligence",
      "Digital Marketing & SEO",
      "IT Project Management & Agile Methodologies",
      "Cloud Computing & DevOps Basics",
      "Cybersecurity Fundamentals",
      "Entrepreneurship & Innovation",
      "E-commerce & FinTech Management",
      "Product Development & UX Research",
    ],
    technicalSkills: [
      "SQL & Database Management",
      "Excel & Power BI (Data Visualization)",
      "Python / R (for Data Analytics)",
      "Tableau & Google Data Studio",
      "Google Analytics & SEO Tools",
      "AWS / Azure / Google Cloud Basics",
      "CRM Software (Salesforce, HubSpot)",
      "Blockchain & FinTech Technologies",
      "Cybersecurity Tools (Kali Linux, Wireshark)",
      "Scrum & Agile Project Management",
    ],
    steps: [
      {
        id: "year1",
        title: "Foundation in Business & Technology",
        description: "Learn fundamental business principles and tech basics.",
        duration: "Year 1",
        resources: [
          {
            title: "Introduction to Business Management",
            url: "https://www.coursera.org/specializations/wharton-business-foundations",
            type: "course",
          },
          {
            title: "Python for Data Science",
            url: "https://www.datacamp.com/courses/intro-to-python-for-data-science",
            type: "course",
          },
          {
            title: "Excel & Google Sheets Mastery",
            url: "https://www.udemy.com/course/excel-google-sheets/",
            type: "course",
          },
        ],
      },
      {
        id: "year2",
        title: "Data Analytics & IT Management",
        description:
          "Develop expertise in business intelligence, data analysis, and IT governance.",
        duration: "Year 2",
        resources: [
          {
            title: "SQL for Business Analysts",
            url: "https://mode.com/sql-tutorial/",
            type: "course",
          },
          {
            title: "Google Data Analytics Certification",
            url: "https://grow.google/certificates/data-analytics/",
            type: "certification",
          },
          {
            title: "Cloud Computing Basics (AWS, GCP, Azure)",
            url: "https://www.aws.training/",
            type: "course",
          },
        ],
      },
      {
        id: "year3",
        title: "Digital Marketing, FinTech & Strategy",
        description:
          "Explore marketing, financial technology, and business strategies.",
        duration: "Year 3",
        resources: [
          {
            title: "Google Digital Marketing & E-commerce",
            url: "https://grow.google/certificates/digital-marketing-ecommerce/",
            type: "certification",
          },
          {
            title: "FinTech & Blockchain for Business",
            url: "https://www.coursera.org/learn/fintech-blockchain-business",
            type: "course",
          },
          {
            title: "Product Management & Business Strategy",
            url: "https://www.mindtheproduct.com/",
            type: "resource",
          },
        ],
      },
      {
        id: "year4",
        title: "Internships & Specialization",
        description:
          "Gain hands-on experience in industry projects and internships.",
        duration: "Year 4",
        resources: [
          {
            title: "Harvard Business Review Case Studies",
            url: "https://hbr.org/",
            type: "resource",
          },
          {
            title: "Agile & Scrum Certification",
            url: "https://www.scrum.org/",
            type: "certification",
          },
          {
            title: "Data Visualization & Power BI",
            url: "https://powerbi.microsoft.com/en-us/",
            type: "course",
          },
        ],
      },
    ],
    certifications: [
      {
        name: "Google Data Analytics Certification",
        provider: "Google",
        level: "Beginner",
        link: "https://grow.google/certificates/data-analytics/",
      },
      {
        name: "AWS Certified Cloud Practitioner",
        provider: "Amazon Web Services",
        level: "Beginner-Intermediate",
        link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
      },
      {
        name: "Certified Scrum Master (CSM)",
        provider: "Scrum Alliance",
        level: "Intermediate",
        link: "https://www.scrumalliance.org/",
      },
      {
        name: "Digital Marketing & E-commerce Certification",
        provider: "Google",
        level: "Beginner-Intermediate",
        link: "https://grow.google/certificates/digital-marketing-ecommerce/",
      },
      {
        name: "Tableau Data Visualization Certification",
        provider: "Tableau",
        level: "Intermediate",
        link: "https://www.tableau.com/learn/certification",
      },
    ],
    careerProspects: [
      {
        title: "Business Analytics & Intelligence",
        description:
          "Analyze business data and provide insights for decision-making.",
      },
      {
        title: "IT Project Management",
        description: "Manage technology-driven projects and teams.",
      },
      {
        title: "Digital Marketing & E-commerce",
        description: "Drive online marketing campaigns and sales strategies.",
      },
      {
        title: "Cloud & Cybersecurity Consulting",
        description:
          "Help businesses secure their digital assets and optimize cloud operations.",
      },
      {
        title: "FinTech & Blockchain Management",
        description:
          "Work on financial technology solutions like crypto, payments, and investment platforms.",
      },
    ],
    salary: {
      starting: "₹5-10 LPA",
      midLevel: "₹15-25 LPA",
      senior: "₹35+ LPA",
      factors: [
        "Industry Certifications",
        "Technical & Business Expertise",
        "Company Reputation",
        "Specialization (Business Analytics, FinTech, Digital Marketing, etc.)",
        "Location & Market Demand",
        "Work Experience & Internships",
        "Networking & Professional Skills",
      ],
    },
    jobPlatforms: [
      "LinkedIn Jobs",
      "Naukri.com",
      "Indeed",
      "Glassdoor",
      "AngelList",
      "Toptal",
      "HackerRank (for Business Analysts)",
      "Google Jobs",
    ],
    dos: [
      "Develop strong data & business analysis skills",
      "Learn cloud computing & cybersecurity basics",
      "Gain hands-on experience through internships",
      "Stay updated with tech & business trends",
      "Build a strong professional network",
    ],
    donts: [
      "Don’t rely only on theoretical knowledge",
      "Avoid ignoring emerging tech trends like AI & Blockchain",
      "Don’t overlook business communication & negotiation skills",
      "Avoid skipping internships & real-world projects",
    ],
    futurePreparation: [
      "Explore AI-driven business solutions",
      "Master data storytelling & visualization",
      "Develop expertise in strategic consulting & digital transformation",
      "Stay ahead in digital marketing & automation tools",
    ],
  },
  {
    id: "btech-ce",
    title: "B.Tech in Civil Engineering",
    description:
      "A four-year undergraduate program focusing on the design, construction, and maintenance of infrastructure such as buildings, roads, bridges, and dams.",
    overview: {
      duration: "4 Years (8 Semesters)",
      scope:
        "Prepares students for careers in construction, structural design, geotechnical engineering, project management, and environmental sustainability.",
      futureProspects: [
        "M.Tech in Structural Engineering",
        "M.Tech in Geotechnical Engineering",
        "M.Tech in Transportation Engineering",
        "MBA in Construction Management",
        "Certified Project Management Professional (PMP)",
        "LEED Green Associate Certification",
        "Autodesk Certified Professional (AutoCAD, Revit, BIM)",
        "Drone Surveying & GIS Certifications",
      ],
      careerPaths: [
        "Structural Engineer",
        "Geotechnical Engineer",
        "Construction Manager",
        "Transportation Engineer",
        "Environmental Engineer",
        "Project Manager",
        "Urban Planner",
        "Surveying & GIS Engineer",
        "Hydraulics & Water Resource Engineer",
        "Sustainability Consultant",
      ],
    },
    skills: [
      "Structural Analysis & Design",
      "Surveying & Mapping",
      "Construction Management & Estimation",
      "Geotechnical Engineering",
      "Hydraulics & Water Resource Management",
      "Environmental Sustainability & Green Building",
      "Transportation Engineering",
      "Material Science & Strength of Materials",
      "Building Information Modeling (BIM)",
      "Risk Assessment & Project Safety",
    ],
    technicalSkills: [
      "AutoCAD, Revit, SketchUp",
      "STAAD Pro, ETABS, SAP2000 (Structural Analysis)",
      "Primavera P6 & MS Project (Project Management)",
      "ArcGIS, QGIS (Geospatial & Mapping Tools)",
      "MATLAB & Python (for Engineering Simulations)",
      "ANSYS (Finite Element Analysis)",
      "Surveying Tools (Total Station, GPS, Drones)",
      "Civil 3D & InfraWorks (Infrastructure Design)",
      "Green Building Standards (LEED, GRIHA)",
    ],
    steps: [
      {
        id: "year1",
        title: "Foundation in Civil Engineering",
        description:
          "Learn basic engineering concepts, material science, and surveying techniques.",
        duration: "Year 1",
        resources: [
          {
            title: "Introduction to Civil Engineering",
            url: "https://www.coursera.org/learn/civil-engineering",
            type: "course",
          },
          {
            title: "Basic Surveying & Mapping",
            url: "https://www.udemy.com/course/surveying/",
            type: "course",
          },
          {
            title: "Engineering Mechanics & Strength of Materials",
            url: "https://nptel.ac.in/courses/112103108",
            type: "course",
          },
        ],
      },
      {
        id: "year2",
        title: "Structural & Geotechnical Engineering",
        description:
          "Deep dive into structural design, soil mechanics, and project planning.",
        duration: "Year 2",
        resources: [
          {
            title: "Structural Analysis & Design Fundamentals",
            url: "https://www.coursera.org/learn/structural-analysis",
            type: "course",
          },
          {
            title: "Soil Mechanics & Geotechnical Engineering",
            url: "https://nptel.ac.in/courses/105106142",
            type: "course",
          },
          {
            title: "Introduction to BIM & Revit",
            url: "https://www.autodesk.com/certification/learn/revit",
            type: "certification",
          },
        ],
      },
      {
        id: "year3",
        title: "Transportation, Water Resources & Construction Management",
        description:
          "Explore highways, drainage systems, project estimation, and sustainability.",
        duration: "Year 3",
        resources: [
          {
            title: "Transportation Engineering & Road Design",
            url: "https://nptel.ac.in/courses/105103189",
            type: "course",
          },
          {
            title: "Construction Planning & Project Management",
            url: "https://www.coursera.org/learn/construction-project-management",
            type: "course",
          },
          {
            title: "Sustainable Infrastructure & Smart Cities",
            url: "https://www.futurelearn.com/courses/sustainable-cities",
            type: "course",
          },
        ],
      },
      {
        id: "year4",
        title: "Internships & Specialization",
        description:
          "Gain real-world experience in construction projects, structural audits, and urban development.",
        duration: "Year 4",
        resources: [
          {
            title: "Primavera P6 for Project Scheduling",
            url: "https://www.udemy.com/course/primavera-p6-project-scheduling/",
            type: "course",
          },
          {
            title: "Urban Planning & GIS Mapping",
            url: "https://www.esri.com/training/catalog/search/",
            type: "course",
          },
          {
            title: "Autodesk Certification (Revit, Civil 3D)",
            url: "https://www.autodesk.com/certification",
            type: "certification",
          },
        ],
      },
    ],
    certifications: [
      {
        name: "Autodesk Certified Professional (Revit, AutoCAD, Civil 3D)",
        provider: "Autodesk",
        level: "Intermediate",
        link: "https://www.autodesk.com/certification",
      },
      {
        name: "Certified Project Management Professional (PMP)",
        provider: "PMI",
        level: "Advanced",
        link: "https://www.pmi.org/certifications/project-management-pmp",
      },
      {
        name: "LEED Green Associate",
        provider: "US Green Building Council",
        level: "Intermediate",
        link: "https://www.usgbc.org/credentials/leed-green-associate",
      },
      {
        name: "STAAD Pro & ETABS Structural Analysis Certification",
        provider: "Bentley / CSI",
        level: "Advanced",
        link: "https://www.bentley.com/en/learn/training",
      },
    ],
    careerProspects: [
      {
        title: "Structural Engineering",
        description:
          "Design and analyze structures such as buildings, bridges, and dams.",
      },
      {
        title: "Construction Project Management",
        description:
          "Manage large-scale infrastructure and construction projects.",
      },
      {
        title: "Urban & Environmental Planning",
        description: "Develop sustainable and smart city solutions.",
      },
      {
        title: "Geotechnical Engineering",
        description:
          "Study soil mechanics and foundation engineering for construction projects.",
      },
      {
        title: "Water Resource & Hydraulics Engineering",
        description:
          "Design water supply systems, drainage, and flood control projects.",
      },
    ],
    salary: {
      starting: "₹4-8 LPA",
      midLevel: "₹12-20 LPA",
      senior: "₹30+ LPA",
      factors: [
        "Technical Expertise & Certifications",
        "Experience in Infrastructure Projects",
        "Location & Government vs. Private Sector",
        "Industry Demand (Real Estate, Public Works, Smart Cities)",
        "Specialization (Structural, Transportation, Geotechnical, etc.)",
        "Software & Technical Skills (BIM, GIS, CAD)",
      ],
    },
    jobPlatforms: [
      "LinkedIn Jobs",
      "Naukri.com",
      "Indeed",
      "Glassdoor",
      "Construction Placements",
      "Government Job Portals (PWD, NHAI, Railways)",
      "Urban Planning & GIS Careers",
    ],
    dos: [
      "Gain hands-on experience with real projects",
      "Learn structural and project management software",
      "Stay updated with sustainable and smart city trends",
      "Develop skills in GIS, drone surveying, and BIM",
      "Network with civil engineers and attend industry events",
    ],
    donts: [
      "Don’t ignore safety regulations and risk management",
      "Avoid relying only on theoretical knowledge",
      "Don’t neglect soft skills like communication and leadership",
      "Avoid skipping internships and field experience",
    ],
    futurePreparation: [
      "Explore sustainable infrastructure and green building solutions",
      "Develop expertise in smart cities and urban planning",
      "Master advanced structural analysis and earthquake-resistant design",
      "Stay updated with automation in construction and AI-driven project management",
    ],
  },
  {
    id: "btech-ce",
    title: "B.Tech in Computer Engineering",
    description:
      "A four-year undergraduate program that combines hardware and software knowledge, focusing on computer systems, embedded systems, networking, and software development.",
    overview: {
      duration: "4 Years (8 Semesters)",
      scope:
        "Prepares students for careers in embedded systems, software engineering, cybersecurity, networking, AI, and IoT.",
      futureProspects: [
        "M.Tech in Computer Engineering",
        "MS in Artificial Intelligence & Machine Learning",
        "MBA in IT & Management",
        "Cloud Computing Certifications (AWS, Azure, GCP)",
        "Cybersecurity Certifications (CEH, CISSP)",
        "Embedded Systems & IoT Certifications",
        "DevOps & Kubernetes Certifications",
        "Blockchain Development Specialization",
      ],
      careerPaths: [
        "Software Engineer",
        "Hardware Engineer",
        "Embedded Systems Engineer",
        "Cybersecurity Specialist",
        "Cloud Engineer",
        "Data Scientist",
        "AI/ML Engineer",
        "Blockchain Developer",
        "IoT Engineer",
        "System Architect",
      ],
    },
    skills: [
      "Programming & Algorithm Design",
      "Microprocessors & Microcontrollers",
      "Computer Architecture & Operating Systems",
      "Embedded Systems & IoT",
      "Cybersecurity & Ethical Hacking",
      "Networking & Cloud Computing",
      "Full Stack Development",
      "AI & Machine Learning",
      "Blockchain & Cryptography",
    ],
    technicalSkills: [
      "C, C++, Java, Python, Rust",
      "HTML, CSS, JavaScript, TypeScript",
      "React.js, Angular, Vue.js",
      "Node.js, Express.js, Django, Flask",
      "SQL, NoSQL (MongoDB, PostgreSQL)",
      "AWS, Azure, Google Cloud",
      "Kubernetes, Docker, Terraform",
      "TensorFlow, PyTorch, OpenCV",
      "Networking Protocols (TCP/IP, DNS, HTTP, MQTT)",
      "Embedded C, ARM, Raspberry Pi, Arduino",
    ],
    steps: [
      {
        id: "year1",
        title: "Fundamentals of Computer Engineering",
        description:
          "Learn basic programming, data structures, and hardware concepts.",
        duration: "Year 1",
        resources: [
          {
            title: "CS50: Introduction to Computer Science",
            url: "https://cs50.harvard.edu/",
            type: "course",
          },
          {
            title: "Introduction to C and C++ Programming",
            url: "https://udacity.com/cpp",
            type: "course",
          },
          {
            title: "Computer Architecture & Assembly Language",
            url: "https://nptel.ac.in/courses/106103180",
            type: "course",
          },
        ],
      },
      {
        id: "year2",
        title: "Operating Systems, Networks, & Databases",
        description:
          "Deep dive into OS, networking, databases, and system programming.",
        duration: "Year 2",
        resources: [
          {
            title: "Operating Systems & Linux Administration",
            url: "https://www.udacity.com/course/linux-command-line--ud595",
            type: "course",
          },
          {
            title: "Computer Networks & TCP/IP",
            url: "https://www.coursera.org/learn/computer-networking",
            type: "course",
          },
          {
            title: "SQL & NoSQL Database Fundamentals",
            url: "https://www.udemy.com/course/sql-database-for-beginners/",
            type: "course",
          },
        ],
      },
      {
        id: "year3",
        title: "Embedded Systems, Cybersecurity & Cloud",
        description:
          "Explore embedded systems, ethical hacking, and cloud computing.",
        duration: "Year 3",
        resources: [
          {
            title: "Embedded Systems Design & Programming",
            url: "https://www.udemy.com/course/embedded-systems-programming/",
            type: "course",
          },
          {
            title: "Ethical Hacking & Cybersecurity Fundamentals",
            url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
            type: "certification",
          },
          {
            title: "AWS Certified Solutions Architect",
            url: "https://aws.amazon.com/certification/",
            type: "certification",
          },
        ],
      },
      {
        id: "year4",
        title: "AI, Blockchain & IoT Specialization",
        description:
          "Focus on advanced fields like AI, IoT, and blockchain development.",
        duration: "Year 4",
        resources: [
          {
            title: "Machine Learning with Python",
            url: "https://www.coursera.org/learn/machine-learning",
            type: "course",
          },
          {
            title: "Blockchain Fundamentals & Smart Contracts",
            url: "https://www.udemy.com/course/blockchain-and-bitcoin-fundamentals/",
            type: "course",
          },
          {
            title: "IoT & Edge Computing",
            url: "https://www.coursera.org/learn/iot",
            type: "course",
          },
        ],
      },
    ],
    certifications: [
      {
        name: "Certified Ethical Hacker (CEH)",
        provider: "EC-Council",
        level: "Advanced",
        link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
      },
      {
        name: "AWS Certified Solutions Architect",
        provider: "Amazon Web Services",
        level: "Professional",
        link: "https://aws.amazon.com/certification/",
      },
      {
        name: "Google Cloud Certified Professional Data Engineer",
        provider: "Google Cloud",
        level: "Professional",
        link: "https://cloud.google.com/certification/data-engineer",
      },
      {
        name: "CompTIA Security+ (Cybersecurity)",
        provider: "CompTIA",
        level: "Intermediate",
        link: "https://www.comptia.org/certifications/security",
      },
    ],
    careerProspects: [
      {
        title: "Software Engineering",
        description: "Develop and maintain software applications and systems.",
      },
      {
        title: "Cybersecurity & Ethical Hacking",
        description: "Protect systems and networks from cyber threats.",
      },
      {
        title: "Embedded Systems & IoT",
        description:
          "Develop smart devices, IoT applications, and hardware solutions.",
      },
      {
        title: "Cloud & DevOps Engineering",
        description:
          "Deploy and manage cloud infrastructure and DevOps pipelines.",
      },
      {
        title: "Artificial Intelligence & Data Science",
        description:
          "Develop AI models, analyze big data, and create intelligent systems.",
      },
    ],
    salary: {
      starting: "₹5-10 LPA",
      midLevel: "₹12-25 LPA",
      senior: "₹40+ LPA",
      factors: [
        "Technical Expertise",
        "Industry Certification",
        "Company Reputation",
        "Geographic Location",
        "Negotiation Skills",
        "Specialization Domain",
        "Project Experience",
        "Soft Skills",
      ],
    },
    jobPlatforms: [
      "LinkedIn Jobs",
      "Naukri.com",
      "Indeed",
      "Glassdoor",
      "AngelList",
      "HackerEarth",
      "GitHub Jobs",
    ],
    dos: [
      "Master DSA and algorithms",
      "Build hands-on projects in software and embedded systems",
      "Stay updated with cybersecurity and cloud trends",
      "Gain real-world experience through internships",
      "Contribute to open-source projects",
    ],
    donts: [
      "Don’t ignore fundamentals like OS & DBMS",
      "Avoid only focusing on theoretical knowledge",
      "Don’t neglect soft skills like teamwork and communication",
      "Avoid skipping internships and industry certifications",
    ],
    futurePreparation: [
      "Explore AI, Blockchain, and Quantum Computing",
      "Gain expertise in DevOps and containerization",
      "Master cloud platforms and cybersecurity tools",
      "Develop cross-platform skills in web and mobile development",
    ],
  },
  {
    id: "msc-cs",
    title: "M.Sc in Computer Science",
    description:
      "A two-year postgraduate program focusing on advanced topics in computer science, including software engineering, data science, AI, and cybersecurity.",
    overview: {
      duration: "2 Years (4 Semesters)",
      scope:
        "Prepares students for specialized roles in software development, AI, data science, cybersecurity, and research.",
      futureProspects: [
        "Ph.D. in Computer Science",
        "MBA in IT & Management",
        "Advanced Certifications in AI, ML, Cybersecurity",
        "Cloud Computing Certifications (AWS, GCP, Azure)",
        "Blockchain & Web3 Certifications",
        "DevOps Engineer Certifications",
        "Big Data & Data Engineering Certifications",
        "Quantum Computing & Cryptography Specialization",
      ],
      careerPaths: [
        "Software Engineer",
        "AI/ML Engineer",
        "Data Scientist",
        "Cybersecurity Specialist",
        "Cloud Engineer",
        "Blockchain Developer",
        "IoT Engineer",
        "DevOps Engineer",
        "Computer Vision Engineer",
        "Software Architect",
      ],
    },
    skills: [
      "Advanced Data Structures & Algorithms",
      "Machine Learning & Deep Learning",
      "Cybersecurity & Ethical Hacking",
      "Cloud Computing & DevOps",
      "Big Data Analytics",
      "Full Stack Development",
      "Quantum Computing & Cryptography",
      "IoT & Embedded Systems",
      "Natural Language Processing (NLP)",
    ],
    technicalSkills: [
      "Python, R, Java, C++",
      "HTML, CSS, JavaScript, TypeScript",
      "React.js, Angular, Vue.js",
      "Node.js, Express.js, Django, Flask",
      "SQL, NoSQL (MongoDB, PostgreSQL)",
      "AWS, Azure, Google Cloud",
      "Kubernetes, Docker, Terraform",
      "TensorFlow, PyTorch, OpenCV",
      "Big Data Technologies (Hadoop, Spark)",
      "Blockchain Development (Solidity, Hyperledger)",
    ],
    steps: [
      {
        id: "year1",
        title: "Advanced Computer Science Fundamentals",
        description:
          "Deepen knowledge in algorithms, data structures, and system design.",
        duration: "Year 1",
        resources: [
          {
            title: "Advanced Data Structures & Algorithms",
            url: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
            type: "course",
          },
          {
            title: "System Design & Architecture",
            url: "https://www.educative.io/courses/grokking-the-system-design-interview",
            type: "course",
          },
          {
            title: "Advanced Python for Software Development",
            url: "https://realpython.com/",
            type: "course",
          },
        ],
      },
      {
        id: "year2",
        title: "Specialization & Research",
        description:
          "Focus on AI, cybersecurity, cloud computing, or other advanced fields.",
        duration: "Year 2",
        resources: [
          {
            title: "Deep Learning Specialization",
            url: "https://www.coursera.org/specializations/deep-learning",
            type: "course",
          },
          {
            title: "Cybersecurity Fundamentals",
            url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
            type: "certification",
          },
          {
            title: "Cloud & DevOps Engineering",
            url: "https://www.udacity.com/course/cloud-developer-nanodegree--nd9991",
            type: "course",
          },
        ],
      },
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        provider: "Amazon Web Services",
        level: "Professional",
        link: "https://aws.amazon.com/certification/",
      },
      {
        name: "Google Cloud Professional Data Engineer",
        provider: "Google Cloud",
        level: "Professional",
        link: "https://cloud.google.com/certification/data-engineer",
      },
      {
        name: "Certified Ethical Hacker (CEH)",
        provider: "EC-Council",
        level: "Advanced",
        link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
      },
      {
        name: "TensorFlow Developer Certificate",
        provider: "Google",
        level: "Intermediate",
        link: "https://www.tensorflow.org/certificate",
      },
    ],
    careerProspects: [
      {
        title: "Artificial Intelligence & Machine Learning",
        description:
          "Develop AI models and intelligent systems for various industries.",
      },
      {
        title: "Data Science & Big Data Analytics",
        description: "Analyze large datasets and develop predictive models.",
      },
      {
        title: "Cybersecurity & Ethical Hacking",
        description: "Protect systems and networks from cyber threats.",
      },
      {
        title: "Cloud & DevOps Engineering",
        description: "Deploy and manage scalable cloud infrastructures.",
      },
      {
        title: "Software Architecture & Development",
        description: "Design and build large-scale software applications.",
      },
    ],
    salary: {
      starting: "₹6-12 LPA",
      midLevel: "₹15-30 LPA",
      senior: "₹50+ LPA",
      factors: [
        "Technical Expertise",
        "Industry Certification",
        "Company Reputation",
        "Geographic Location",
        "Negotiation Skills",
        "Specialization Domain",
        "Project Experience",
        "Soft Skills",
      ],
    },
    jobPlatforms: [
      "LinkedIn Jobs",
      "Naukri.com",
      "Indeed",
      "Glassdoor",
      "AngelList",
      "HackerEarth",
      "GitHub Jobs",
    ],
    dos: [
      "Master algorithms and system design",
      "Work on AI and data science projects",
      "Stay updated with cybersecurity trends",
      "Gain real-world experience through internships",
      "Contribute to open-source and research papers",
    ],
    donts: [
      "Don’t rely only on theoretical knowledge",
      "Avoid ignoring soft skills like leadership & communication",
      "Don’t skip hands-on projects and real-world applications",
      "Avoid limiting yourself to one technology; diversify your skills",
    ],
    futurePreparation: [
      "Explore Quantum Computing & Blockchain",
      "Master cloud platforms and DevOps tools",
      "Gain expertise in cybersecurity and ethical hacking",
      "Develop skills in NLP, reinforcement learning, and deep learning",
    ],
  },
  {
    id: "mca",
    title: "MCA - Master of Computer Applications",
    description:
      "A two-year postgraduate program focused on advanced software development, system architecture, database management, cloud computing, and cybersecurity.",
    overview: {
      duration: "2 Years (4 Semesters)",
      scope:
        "Prepares students for specialized roles in software development, full-stack engineering, AI, cybersecurity, cloud computing, and IT consulting.",
      futureProspects: [
        "Ph.D. in Computer Science",
        "MBA in IT & Management",
        "Advanced Certifications in AI, ML, Cloud Computing, Cybersecurity",
        "DevOps & Cloud Engineering Certifications (AWS, GCP, Azure)",
        "Data Science & Big Data Certifications",
        "Blockchain Development Certifications",
        "Software Architecture & Design Specialization",
      ],
      careerPaths: [
        "Software Engineer",
        "Full Stack Developer",
        "Mobile App Developer",
        "Cloud Engineer",
        "AI/ML Engineer",
        "Cybersecurity Analyst",
        "Data Scientist",
        "IT Consultant",
        "DevOps Engineer",
        "Blockchain Developer",
        "Game Developer",
        "System Architect",
      ],
    },
    skills: [
      "Software Development & System Design",
      "Full Stack Web Development",
      "Mobile App Development (Android & iOS)",
      "Cybersecurity & Ethical Hacking",
      "Cloud Computing & DevOps",
      "Artificial Intelligence & Machine Learning",
      "Data Science & Analytics",
      "Big Data & Database Management",
      "Blockchain & Smart Contracts",
      "Internet of Things (IoT)",
    ],
    technicalSkills: [
      "Programming Languages: Java, Python, C++, JavaScript, Kotlin, Swift",
      "Web Technologies: HTML, CSS, JavaScript, TypeScript, React.js, Angular, Vue.js",
      "Backend Development: Node.js, Express.js, Django, Spring Boot",
      "Databases: SQL (MySQL, PostgreSQL), NoSQL (MongoDB, Firebase)",
      "Cloud Platforms: AWS, Azure, Google Cloud",
      "DevOps Tools: Docker, Kubernetes, Jenkins, Terraform",
      "AI/ML Frameworks: TensorFlow, PyTorch, OpenCV",
      "Big Data Technologies: Hadoop, Spark, Apache Kafka",
      "Blockchain: Solidity, Hyperledger Fabric",
    ],
    steps: [
      {
        id: "year1",
        title: "Core Computer Science & Software Development",
        description:
          "Learn programming fundamentals, algorithms, data structures, and system design.",
        duration: "Year 1",
        resources: [
          {
            title: "Data Structures & Algorithms",
            url: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
            type: "course",
          },
          {
            title: "Web Development Bootcamp",
            url: "https://www.udemy.com/course/the-web-developer-bootcamp/",
            type: "course",
          },
          {
            title: "Java Programming & Object-Oriented Design",
            url: "https://www.coursera.org/specializations/java-object-oriented",
            type: "course",
          },
        ],
      },
      {
        id: "year2",
        title: "Advanced Specialization & Capstone Project",
        description:
          "Choose a specialization in AI, cybersecurity, cloud computing, or software architecture.",
        duration: "Year 2",
        resources: [
          {
            title: "Machine Learning Specialization",
            url: "https://www.coursera.org/specializations/machine-learning",
            type: "course",
          },
          {
            title: "Certified Ethical Hacker (CEH)",
            url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
            type: "certification",
          },
          {
            title: "AWS Cloud Architect",
            url: "https://www.udacity.com/course/cloud-developer-nanodegree--nd9991",
            type: "course",
          },
        ],
      },
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        provider: "Amazon Web Services",
        level: "Professional",
        link: "https://aws.amazon.com/certification/",
      },
      {
        name: "Google Cloud Professional Cloud Developer",
        provider: "Google Cloud",
        level: "Professional",
        link: "https://cloud.google.com/certification/cloud-developer",
      },
      {
        name: "Certified Ethical Hacker (CEH)",
        provider: "EC-Council",
        level: "Advanced",
        link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
      },
      {
        name: "TensorFlow Developer Certificate",
        provider: "Google",
        level: "Intermediate",
        link: "https://www.tensorflow.org/certificate",
      },
      {
        name: "Docker Certified Associate (DCA)",
        provider: "Docker",
        level: "Intermediate",
        link: "https://www.docker.com/certification/",
      },
    ],
    careerProspects: [
      {
        title: "Software Development & Full-Stack Engineering",
        description:
          "Develop web, mobile, and enterprise applications with modern tech stacks.",
      },
      {
        title: "Data Science & AI Engineering",
        description:
          "Leverage machine learning and deep learning to solve business problems.",
      },
      {
        title: "Cybersecurity & Ethical Hacking",
        description:
          "Secure systems, perform penetration testing, and ensure data security.",
      },
      {
        title: "Cloud & DevOps Engineering",
        description:
          "Deploy, manage, and optimize cloud infrastructures and CI/CD pipelines.",
      },
      {
        title: "Blockchain & Smart Contracts",
        description:
          "Develop decentralized applications and blockchain-based solutions.",
      },
    ],
    salary: {
      starting: "₹6-15 LPA",
      midLevel: "₹15-30 LPA",
      senior: "₹40+ LPA",
      factors: [
        "Technical Expertise",
        "Industry Certifications",
        "Company & Industry",
        "Geographical Location",
        "Experience & Projects",
        "Negotiation Skills",
      ],
    },
    jobPlatforms: [
      "LinkedIn Jobs",
      "Naukri.com",
      "Indeed",
      "Glassdoor",
      "AngelList",
      "HackerEarth",
      "GitHub Jobs",
    ],
    dos: [
      "Master full-stack development & system design",
      "Build real-world projects and contribute to open-source",
      "Gain experience through internships & hackathons",
      "Stay updated with AI, cybersecurity, and cloud trends",
      "Develop problem-solving and algorithmic skills",
    ],
    donts: [
      "Don’t rely only on theoretical knowledge",
      "Avoid skipping hands-on coding & real-world projects",
      "Don’t ignore soft skills like communication & teamwork",
      "Avoid limiting yourself to one tech stack; diversify skills",
      "Don’t underestimate the importance of certifications",
    ],
    futurePreparation: [
      "Specialize in AI/ML, Blockchain, or Cloud Engineering",
      "Master DevOps tools and containerization",
      "Gain expertise in cybersecurity and ethical hacking",
      "Develop problem-solving abilities for competitive programming",
    ],
  },
  {
    id: "mtech-cs",
    title: "M.Tech in Computer Science",
    description:
      "A two-year postgraduate program specializing in advanced computer science concepts, research, and technology-driven solutions in AI, cybersecurity, cloud computing, and software engineering.",
    overview: {
      duration: "2 Years (4 Semesters)",
      scope:
        "Prepares students for advanced research, software development, system architecture, AI engineering, and specialized roles in IT industries.",
      futureProspects: [
        "Ph.D. in Computer Science & Research",
        "MBA in Technology Management",
        "Advanced AI & ML Certifications",
        "Cybersecurity & Ethical Hacking Certifications",
        "Cloud Computing (AWS, GCP, Azure) Certifications",
        "Big Data & Data Science Specialization",
        "Quantum Computing & Cryptography Certifications",
        "Software Architecture & Engineering Specialization",
      ],
      careerPaths: [
        "Software Architect",
        "Machine Learning Engineer",
        "Cybersecurity Specialist",
        "Cloud Solutions Architect",
        "Data Scientist",
        "DevOps Engineer",
        "Blockchain Developer",
        "Research Scientist (AI, Cryptography, Networking)",
        "Embedded Systems Engineer",
        "Game Developer",
        "System Architect",
      ],
    },
    skills: [
      "Advanced Algorithms & Data Structures",
      "Machine Learning & Artificial Intelligence",
      "Cloud Computing & DevOps",
      "Cybersecurity & Ethical Hacking",
      "Big Data & Data Science",
      "Embedded Systems & IoT",
      "Quantum Computing & Cryptography",
      "Full Stack Development",
      "High-Performance Computing",
    ],
    technicalSkills: [
      "Programming Languages: C++, Python, Java, R",
      "AI/ML Tools: TensorFlow, PyTorch, OpenCV",
      "Cloud Platforms: AWS, Azure, Google Cloud",
      "Web Technologies: HTML, CSS, JavaScript, TypeScript, React.js, Vue.js",
      "Backend Development: Node.js, Spring Boot, Django, Flask",
      "Databases: MySQL, PostgreSQL, MongoDB, Firebase",
      "Big Data Tools: Hadoop, Spark, Apache Kafka",
      "Cybersecurity: Metasploit, Wireshark, Kali Linux",
      "Blockchain: Solidity, Hyperledger Fabric",
    ],
    steps: [
      {
        id: "year1",
        title: "Core Research & Advanced Technologies",
        description:
          "Focus on research, system architecture, and theoretical computer science.",
        duration: "Year 1",
        resources: [
          {
            title: "Advanced Data Structures & Algorithms",
            url: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
            type: "course",
          },
          {
            title: "AI & Machine Learning Specialization",
            url: "https://www.coursera.org/specializations/deep-learning",
            type: "course",
          },
          {
            title: "System Design & Distributed Computing",
            url: "https://www.educative.io/courses/grokking-the-system-design-interview",
            type: "course",
          },
        ],
      },
      {
        id: "year2",
        title: "Specialization & Thesis Research",
        description:
          "Work on a thesis or research paper in AI, cybersecurity, blockchain, or cloud computing.",
        duration: "Year 2",
        resources: [
          {
            title: "Cybersecurity Research & Ethical Hacking",
            url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
            type: "certification",
          },
          {
            title: "Quantum Computing & Cryptography",
            url: "https://www.ibm.com/quantum-computing/",
            type: "research",
          },
          {
            title: "Cloud Architecture & DevOps",
            url: "https://www.udacity.com/course/cloud-developer-nanodegree--nd9991",
            type: "course",
          },
        ],
      },
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        provider: "Amazon Web Services",
        level: "Professional",
        link: "https://aws.amazon.com/certification/",
      },
      {
        name: "Google Cloud Professional Data Engineer",
        provider: "Google Cloud",
        level: "Professional",
        link: "https://cloud.google.com/certification/data-engineer",
      },
      {
        name: "Certified Ethical Hacker (CEH)",
        provider: "EC-Council",
        level: "Advanced",
        link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
      },
      {
        name: "TensorFlow Developer Certificate",
        provider: "Google",
        level: "Intermediate",
        link: "https://www.tensorflow.org/certificate",
      },
      {
        name: "Docker Certified Associate (DCA)",
        provider: "Docker",
        level: "Intermediate",
        link: "https://www.docker.com/certification/",
      },
    ],
    careerProspects: [
      {
        title: "Artificial Intelligence & Machine Learning",
        description:
          "Develop AI models, deep learning systems, and neural networks for real-world applications.",
      },
      {
        title: "Cybersecurity & Ethical Hacking",
        description:
          "Protect digital assets, conduct penetration testing, and develop secure systems.",
      },
      {
        title: "Cloud Computing & DevOps",
        description:
          "Manage cloud platforms, CI/CD pipelines, and scalable infrastructure.",
      },
      {
        title: "Big Data & Analytics",
        description:
          "Analyze large-scale datasets and develop AI-powered predictive models.",
      },
      {
        title: "Quantum Computing & Cryptography",
        description:
          "Research quantum computing applications and cryptographic security measures.",
      },
      {
        title: "Software Architecture & Research",
        description:
          "Design and optimize large-scale software systems, leading technical innovations.",
      },
    ],
    salary: {
      starting: "₹10-18 LPA",
      midLevel: "₹20-40 LPA",
      senior: "₹50+ LPA",
      factors: [
        "Technical Expertise",
        "Industry Certifications",
        "Company & Industry",
        "Geographical Location",
        "Experience & Research Contributions",
        "Negotiation Skills",
      ],
    },
    jobPlatforms: [
      "LinkedIn Jobs",
      "Naukri.com",
      "Indeed",
      "Glassdoor",
      "AngelList",
      "HackerEarth",
      "GitHub Jobs",
    ],
    dos: [
      "Engage in research and publish technical papers",
      "Master AI, cybersecurity, or cloud technologies",
      "Participate in hackathons and coding competitions",
      "Work on open-source and real-world projects",
      "Stay updated with emerging trends like quantum computing",
    ],
    donts: [
      "Don’t ignore practical implementations of theoretical concepts",
      "Avoid focusing only on one technology stack",
      "Don’t neglect technical writing and documentation skills",
      "Avoid skipping cybersecurity fundamentals and best practices",
      "Don’t hesitate to contribute to research projects and innovation challenges",
    ],
    futurePreparation: [
      "Pursue research in AI, cybersecurity, or blockchain",
      "Explore opportunities in academia or research labs",
      "Gain expertise in quantum computing and cryptography",
      "Contribute to open-source AI/ML and cybersecurity projects",
      "Develop skills in edge computing, robotics, and embedded AI",
    ],
  },
  {
    id: "pg-ds",
    title: "PG Diploma in Data Science",
    description:
      "A one-year postgraduate diploma program designed to equip students with fundamental and advanced data science skills, including machine learning, big data analytics, cloud computing, and AI.",
    overview: {
      duration: "1 Year (2 Semesters)",
      scope:
        "Prepares students for careers in data science, machine learning, artificial intelligence, business analytics, and big data engineering.",
      futureProspects: [
        "Master’s in Data Science / AI / Analytics",
        "Advanced Certifications in AI & ML",
        "Big Data & Cloud Computing Certifications",
        "Cybersecurity & Ethical Hacking Certifications",
        "Ph.D. in Data Science & AI",
        "Quantum Computing & Cryptography Specialization",
      ],
      careerPaths: [
        "Data Scientist",
        "Machine Learning Engineer",
        "AI Researcher",
        "Big Data Engineer",
        "Data Analyst",
        "Business Intelligence Analyst",
        "Cloud Data Engineer",
        "Deep Learning Engineer",
        "NLP Engineer",
        "Quantitative Analyst (Finance)",
      ],
    },
    skills: [
      "Statistics & Probability for Data Science",
      "Machine Learning & Deep Learning",
      "Data Engineering & Big Data Technologies",
      "Cloud Computing & DevOps for Data Science",
      "Data Visualization & Business Intelligence",
      "AI & Natural Language Processing (NLP)",
      "Time Series Forecasting & Predictive Analytics",
      "Reinforcement Learning & AI Optimization",
    ],
    technicalSkills: [
      "Python, R, SQL, Scala",
      "Pandas, NumPy, Matplotlib, Seaborn",
      "TensorFlow, PyTorch, Scikit-Learn",
      "Big Data Technologies: Hadoop, Spark, Kafka",
      "Cloud Platforms: AWS, Google Cloud, Azure",
      "Deep Learning: OpenCV, Keras, FastAI",
      "Databases: MySQL, PostgreSQL, MongoDB",
      "BI Tools: Power BI, Tableau, Looker",
    ],
    steps: [
      {
        id: "semester1",
        title: "Data Science Fundamentals",
        description:
          "Learn core concepts of data analysis, machine learning, and statistics.",
        duration: "Semester 1",
        resources: [
          {
            title: "Python for Data Science",
            url: "https://www.datacamp.com/courses/intro-to-python-for-data-science",
            type: "course",
          },
          {
            title: "Machine Learning Foundations",
            url: "https://www.coursera.org/learn/machine-learning",
            type: "course",
          },
          {
            title: "Statistics & Probability for Data Science",
            url: "https://www.khanacademy.org/math/statistics-probability",
            type: "course",
          },
        ],
      },
      {
        id: "semester2",
        title: "Specialization & Advanced Topics",
        description:
          "Focus on deep learning, big data, cloud computing, and AI-driven analytics.",
        duration: "Semester 2",
        resources: [
          {
            title: "Deep Learning Specialization",
            url: "https://www.coursera.org/specializations/deep-learning",
            type: "course",
          },
          {
            title: "Big Data Engineering & Analytics",
            url: "https://www.edx.org/course/big-data-analytics",
            type: "course",
          },
          {
            title: "Cloud & DevOps for Data Science",
            url: "https://www.udacity.com/course/cloud-developer-nanodegree--nd9991",
            type: "course",
          },
        ],
      },
    ],
    certifications: [
      {
        name: "AWS Certified Data Analytics",
        provider: "Amazon Web Services",
        level: "Professional",
        link: "https://aws.amazon.com/certification/certified-data-analytics-specialty/",
      },
      {
        name: "Google Professional Data Engineer",
        provider: "Google Cloud",
        level: "Professional",
        link: "https://cloud.google.com/certification/data-engineer",
      },
      {
        name: "IBM Data Science Professional Certificate",
        provider: "IBM",
        level: "Intermediate",
        link: "https://www.coursera.org/professional-certificates/ibm-data-science",
      },
      {
        name: "Microsoft Certified: Azure Data Scientist",
        provider: "Microsoft",
        level: "Advanced",
        link: "https://learn.microsoft.com/en-us/certifications/azure-data-scientist/",
      },
      {
        name: "TensorFlow Developer Certificate",
        provider: "Google",
        level: "Intermediate",
        link: "https://www.tensorflow.org/certificate",
      },
    ],
    careerProspects: [
      {
        title: "Data Science & Machine Learning",
        description:
          "Develop predictive models, AI-driven analytics, and business intelligence solutions.",
      },
      {
        title: "Big Data Engineering",
        description:
          "Handle large-scale data processing, distributed computing, and cloud-based analytics.",
      },
      {
        title: "Artificial Intelligence & Deep Learning",
        description:
          "Build AI-powered applications for healthcare, finance, and e-commerce.",
      },
      {
        title: "Cloud Data Engineering",
        description:
          "Work with cloud-based data warehouses and scalable infrastructure.",
      },
      {
        title: "Financial Analytics & Quantitative Research",
        description:
          "Apply data science techniques in stock market analysis, risk assessment, and financial forecasting.",
      },
    ],
    salary: {
      starting: "₹6-15 LPA",
      midLevel: "₹15-30 LPA",
      senior: "₹40+ LPA",
      factors: [
        "Industry & Company Type",
        "Technical Expertise & Certifications",
        "Experience in AI & Big Data",
        "Geographical Location",
        "Communication & Analytical Skills",
        "Research & Innovation Contributions",
      ],
    },
    jobPlatforms: [
      "LinkedIn Jobs",
      "Naukri.com",
      "Indeed",
      "Glassdoor",
      "AngelList",
      "HackerRank",
      "Kaggle Jobs",
    ],
    dos: [
      "Master Python, R, SQL, and Big Data technologies",
      "Work on real-world data science projects",
      "Participate in Kaggle competitions and open-source AI projects",
      "Stay updated with new AI/ML trends",
      "Contribute to research and technical papers",
    ],
    donts: [
      "Don’t focus only on theoretical knowledge",
      "Avoid neglecting cloud and big data skills",
      "Don’t ignore soft skills like communication and storytelling with data",
      "Avoid skipping statistical and mathematical foundations",
    ],
    futurePreparation: [
      "Advance to Master's or Ph.D. in Data Science or AI",
      "Gain expertise in AI Ethics, NLP, and Reinforcement Learning",
      "Master cloud-based AI services like AWS SageMaker and Google AI Platform",
      "Explore deep learning applications in healthcare, finance, and robotics",
    ],
  },
];
