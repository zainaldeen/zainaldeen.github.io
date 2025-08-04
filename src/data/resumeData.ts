export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  achievements: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  period: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  website?: string;
  linkedin?: string;
  github?: string;
  gitlab?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  workExperience: WorkExperience[];
  skills: Skill[];
  education: Education[];
  contact: ContactInfo;
}

export const resumeData: ResumeData = {
  name: "Zain Aldeen Fayod",
  title: "Senior Software Engineer",
  summary: "Experienced Software Engineer with 6 years of expertise in designing, developing, and optimizing scalable, high-performance software solutions. Adept at tackling complex technical challenges and implementing industry best practices to deliver robust applications that adhere to the highest standards of technology. Highly skilled in both independent and collaborative work environments, with a proven ability to meet deadlines and consistently deliver quality solutions.",
  workExperience: [
    {
      company: "Supy.io",
      position: "Senior Software Engineer",
      period: "Apr 2022 - Present",
      achievements: [
        "Migrated legacy codebases to a modern microservices architecture, leveraging Domain-Driven Design (DDD) principles to boost scalability, maintainability, and team productivity.",
        "Designed and implemented the Central Kitchen module, enabling seamless operational integration and driving a 120% increase in client subscriptions.",
        "Developed a comprehensive Retailer Management System (RMS) covering key retail operations such as items, recipes, wastage tracking, stock transfers, production, inventory, suppliers, and orders.",
        "Orchestrated a secure and reliable data migration from Firebase to MongoDB, ensuring complete data integrity and system compatibility during the transition.",
        "Enhanced system reliability by integrating NATS messaging, resulting in a 60% reduction in downtime and improved real-time communication between services.",
        "Boosted system performance by implementing Redis caching, leading to a significant decrease in response times and a notably smoother user experience.",
        "Implemented CQRS (Command Query Responsibility Segregation) pattern to separate read and write operations, optimizing performance and maintainability.",
        "Developed a custom atomic update package on MongoDB that significantly improved performance and data consistency in concurrent environments.",
        "Contributed to the design and implementation of a centralized Audit Log system, ensuring traceability and compliance across microservices."
      ]
    },
    {
      company: "Nestech",
      position: "Senior Software Engineer",
      period: "Mar 2021 - Apr 2022",
      achievements: [
        "Architected and implemented scalable microservices-based backend systems for municipality projects using a modern tech stack, ensuring high data integrity, performance, and extensibility.",
        "Led the backend engineering team, guiding architecture decisions, mentoring team members, and ensuring the timely delivery of robust, maintainable services.",
        "Collaborated closely with frontend, QA, and product teams to translate complex government requirements into reliable microservices, aligned with domain-specific and compliance standards.",
        "Built and maintained core services using Laravel, Node.js, and supporting technologies, while ensuring smooth inter-service communication and consistent API design."
      ]
    },
    {
      company: "Badinan Soft",
      position: "Software Engineer",
      period: "Mar 2020 - Mar 2021",
      achievements: [
        "Led the development of a comprehensive Clinics Management System using Laravel and Vue.js, enhancing operational workflows and patient record handling.",
        "Applied Clean Architecture principles and common design patterns to improve code maintainability and scalability.",
        "Optimized MySQL database performance by identifying and tuning slow queries, resulting in faster system response times.",
        "Developed and integrated a shipping management module for Badinan Shipping, facilitating efficient logistics operations and real-time delivery tracking.",
        "Participated in code reviews and mentoring, fostering knowledge sharing and improving team code quality."
      ]
    },
    {
      company: "TechStream Labs",
      position: "Full Stack Engineer",
      period: "Feb 2019 - Mar 2020",
      achievements: [
        "Designed and maintained a custom ERP system using Laravel and Vue.js, supporting end-to-end business processes for mid-sized enterprises.",
        "Built features for item catalogs, order management, warehouse tracking, and reporting modules, improving operational visibility and efficiency.",
        "Implemented role-based access control (RBAC) and real-time data synchronization, ensuring secure and seamless user experiences.",
        "Contributed to frontend UI/UX improvements, leading to increased user adoption and satisfaction."
      ]
    }
  ],
  skills: [
    {
      category: "Technical Expertise",
      items: ["Problem Solving", "Algorithms", "Data Structure", "System Architecture", "Microservices", "Design Patterns"]
    },
    {
      category: "DevOps & Tools",
      items: ["VCS", "NATS", "Redis", "Docker", "CI/CD", "Cloud", "GitLab", "GitHub", "Postman"]
    },
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "PHP", "Python", "Java", "C++", "SQL"]
    },
    {
      category: "Database",
      items: ["MongoDB", "MySql", "PostgreSQL", "BigQuery"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["Nestjs", "Node.js", "Express", "Laravel", "Vue.js", "Angular"]
    },
    {
      category: "Languages",
      items: ["Arabic: Native", "English: Fluent", "German: A1", "Spanish: A1"]
    }
  ],
  education: [
    {
      institution: "Tishreen University",
      period: "2016 - 2021",
      description: "Faculty of Informatics Technology, Software Department"
    }
  ],
  contact: {
    phone: "+971 50 731 5854",
    email: "zainaldeenfayod@gmail.com",
    address: "Dubai, UAE",
    gitlab: "https://gitlab.com/users/zainaldeen/projects",
    github: "https://github.com/zain-supy-io"
  }
};