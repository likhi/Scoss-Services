export interface InternshipCourse {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  skills: string[];
  icon: string;
}

export interface InternshipTestQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const internshipCourses: InternshipCourse[] = [
  {
    id: "web-dev",
    title: "Full Stack Web Development",
    description: "Learn modern web development with React, Node.js, and databases. Build real-world applications and master responsive design principles.",
    duration: "3 months",
    level: "Intermediate",
    skills: ["React", "Node.js", "MongoDB", "REST APIs", "HTML/CSS/JavaScript", "Git", "Deployment"],
    icon: "🌐",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Masterclass",
    description: "Master SEO, social media marketing, content strategy, and analytics. Learn to drive traffic and create data-driven marketing campaigns.",
    duration: "2 months",
    level: "Beginner",
    skills: ["SEO", "SEM", "Social Media Marketing", "Content Strategy", "Google Analytics", "Email Marketing", "A/B Testing"],
    icon: "📱",
  },
  {
    id: "it-infrastructure",
    title: "IT Infrastructure & Cloud Solutions",
    description: "Understand cloud architecture, network administration, security practices, and infrastructure management on AWS and Azure.",
    duration: "4 months",
    level: "Advanced",
    skills: ["AWS", "Azure", "Linux", "Networking", "System Administration", "Cloud Security", "DevOps"],
    icon: "☁️",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Fundamentals",
    description: "Learn security principles, threat detection, ethical hacking basics, and compliance standards to protect digital assets.",
    duration: "3 months",
    level: "Intermediate",
    skills: ["Network Security", "Ethical Hacking", "Penetration Testing", "Compliance", "Threat Analysis", "Security Protocols"],
    icon: "🔒",
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description: "Build native and cross-platform mobile applications using React Native and Flutter with modern development practices.",
    duration: "3 months",
    level: "Intermediate",
    skills: ["React Native", "Flutter", "Mobile UI/UX", "APIs", "Testing", "App Deployment", "Performance Optimization"],
    icon: "📲",
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    description: "Learn data analysis, visualization, machine learning basics, and predictive modeling using Python and industry tools.",
    duration: "4 months",
    level: "Advanced",
    skills: ["Python", "Pandas", "SQL", "Data Visualization", "Machine Learning", "Statistical Analysis", "Tableau/PowerBI"],
    icon: "📊",
  },
];

export const internshipTestQuestions: InternshipTestQuestion[] = [
  {
    id: "q1",
    question: "What is the primary goal of web accessibility?",
    options: [
      "To make websites look better",
      "To ensure people with disabilities can use and enjoy websites",
      "To increase website speed",
      "To reduce server costs",
    ],
    correctAnswer: 1,
    explanation: "Web accessibility ensures that all people, including those with disabilities, can perceive, understand, navigate, and interact with websites effectively.",
  },
  {
    id: "q2",
    question: "Which of the following is a key principle of responsive design?",
    options: [
      "Using fixed pixel widths",
      "Mobile-first approach with flexible layouts",
      "Supporting only desktop browsers",
      "Using only images for content",
    ],
    correctAnswer: 1,
    explanation: "Responsive design uses flexible grids, flexible images, and media queries to adapt content to different screen sizes and devices.",
  },
  {
    id: "q3",
    question: "What does API stand for?",
    options: [
      "Advanced Programming Interface",
      "Application Programming Interface",
      "Applied Programming Instruction",
      "Advanced Protocol Integration",
    ],
    correctAnswer: 1,
    explanation: "API (Application Programming Interface) is a set of protocols and tools for building software applications that specify how components should interact.",
  },
  {
    id: "q4",
    question: "Which tool is commonly used for version control in software development?",
    options: ["Figma", "Git", "Slack", "Jira"],
    correctAnswer: 1,
    explanation: "Git is a distributed version control system that allows developers to track code changes, collaborate, and manage project history.",
  },
  {
    id: "q5",
    question: "What is the purpose of SEO in digital marketing?",
    options: [
      "To create social media content",
      "To improve website visibility in search engine results",
      "To design website graphics",
      "To manage email campaigns",
    ],
    correctAnswer: 1,
    explanation: "SEO (Search Engine Optimization) improves a website's visibility and ranking in search engine results, driving organic traffic.",
  },
  {
    id: "q6",
    question: "Which cloud service model provides the most control to users?",
    options: ["SaaS", "PaaS", "IaaS", "All provide equal control"],
    correctAnswer: 2,
    explanation: "IaaS (Infrastructure as a Service) gives users the most control over computing resources, while SaaS provides the least control as you use a complete application.",
  },
  {
    id: "q7",
    question: "What does HTTPS provide that HTTP does not?",
    options: [
      "Faster loading times",
      "Encryption and security",
      "Better SEO rankings",
      "More storage capacity",
    ],
    correctAnswer: 1,
    explanation: "HTTPS uses SSL/TLS encryption to secure data transmission between the user's browser and the website server, protecting sensitive information.",
  },
  {
    id: "q8",
    question: "In agile development, what is a sprint?",
    options: [
      "A complete project",
      "A time-boxed iteration of work (usually 1-4 weeks)",
      "A type of bug",
      "A deployment process",
    ],
    correctAnswer: 1,
    explanation: "A sprint is a fixed time period (typically 1-4 weeks) in agile development during which the team completes a set of tasks and delivers incremental product improvements.",
  },
  {
    id: "q9",
    question: "What is the main advantage of using cloud services?",
    options: [
      "No internet required",
      "Scalability, flexibility, and cost efficiency",
      "Offline functionality",
      "No need for security",
    ],
    correctAnswer: 1,
    explanation: "Cloud services offer scalability to handle varying workloads, flexibility to choose services needed, and cost efficiency by paying only for resources used.",
  },
  {
    id: "q10",
    question: "Which of the following is a best practice for password security?",
    options: [
      "Using simple words for easy memory",
      "Sharing passwords with trusted colleagues",
      "Using strong, unique passwords and enabling two-factor authentication",
      "Resetting passwords rarely",
    ],
    correctAnswer: 2,
    explanation: "Strong, unique passwords combined with two-factor authentication significantly reduce the risk of unauthorized access and account compromise.",
  },
];
