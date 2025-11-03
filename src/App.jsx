import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';

const PORTFOLIO_DATA = {
    name: "Aayush Gupta",
    tagline: "Full Stack Developer | Data Science | CSE @ Panjab University",
    bio: "Hey there! 👋 I'm Aayush Gupta, a Computer Science Engineering student with a passion for Data Science and Machine Learning.",

    skills: [
        "React", "Next.js", "Node.js", "Express.js", "Tailwind CSS",
        "C++", "Python", "Javascript", "SQL", "AWS/GCP", "Machine Learning", 
        "Deep Learning", "Generative AI", "Data Structures and Algorithm", 
        "System Design", "OOPs", "Django", "Tensorflow", "Docker", "Linux", 
        "Git", "MySQL", "MongoDB" 
    ],
    projects: [
        { id: 1, title: "LET'S CONNECT - Video Meeting Platform", description: "Engineered a real-time video meeting platform capable of supporting 150+ simultaneous participants, maintaining a consistent 99.9% service availability, and providing high-quality communication across varying network conditions. Enhanced secure authentication using Clerk API and responsive design for optimal user experience. ", tags: ["Next.js", "TypeScript", "Tailwind CSS","Clerk Authentication","Stream.io","Shadcn UI","Socket.io"], link: "https://let-s-connect-ten.vercel.app/" },
        { id: 2, title: "Trash Tracker - Citizen Garbage Reporting", description: "Deployed a citizen-driven, 24/7 cleanliness reporting system that enabled immediate identification of sanitation issues, resulting in elimination of previous municipal response delays through the integration of automated, real-time dashboard alerts.  • Integrated GPS tracking, Google authentication, JWT tokens, automated mailing and Choropleth Map. ", tags: ["React.js", "Node.js","Express.js", "MongoDB","GPS Tracking","Json Web Token(JWT)","Database Design","Rest APIs"], link: "https://trashtrackerfrontend.onrender.com/" },
        { id: 3, title: "Gen-AI Content Summarizer", description: "Implemented PDF parsing, vector embedding, and semantic search for document Q&A;  integrated YouTube transcript extraction and summarization; ensured secure API key management and robust error handling. • Engineered a natural language to SQL translation feature, accelerating data querying speed by 20% .", tags: ["Python", "Langchain", "Gemini API","Llama 3.1","ChromaDB","sqlite3","Prompt Engineering"], link: "https://ai-contentsummarizer.streamlit.app/" },
        { id: 4, title: "WhatsApp Chat Analyzer", description: "Developed Python-based tool to analyze 50,000+ messages of a WhatsApp chat, extracting meaningful insights. • Executed analysis of message frequency, user activity patterns, word usage and emoji trends on file size limit of 200 MB. ", tags: ["Python", "Pandas", "Matplotlib","WordCloud","Seaborn","Streamlit","NLTK"], link: "https://whatsappchatanalysis-vfcmmjbrpccg9xrujbcu2w.streamlit.app/" },
    ],
    experience: [
        { 
            id: 1, 
            title: "Data Science Intern", 
            company: "Unified Mentor", 
            duration: "07/2024 - 08/2024", 
            bullets: [
                "Built predictive models for Employee Attrition and Bird Strike Incident forecasting using Python (Pandas, scikit-learn, NumPy, Seaborn) for feature engineering and data preprocessing.",
                "Applied Grid Search and Cross-Validation to tune model parameters, reaching 98% accuracy on test datasets.",
                "Created SQL data pipelines connecting preprocessing, training, and result processing for automated model deployment.",
                "Developed machine learning models across HR Analytics and Aviation Safety domains, processing datasets with multiple prediction targets."
            ], 
            technologies: ["Python", "scikit-learn", "Pandas", "SQL"] 
        },
        { 
            id: 2, 
            title: "Machine Learning Intern", 
            company: "MDART DIC, Panjab University", 
            duration: "10/2023 - 06/2024", 
            bullets: [
                "Built 5 deep learning models (GANs, U-Nets, Autoencoders) for skull image reconstruction from CT scans, reducing processing time by 50% compared to traditional filtered backprojection methods.",
                "Trained models on large-scale CT and fundus image datasets, applying data preprocessing techniques including normalization, augmentation, and noise reduction for model accuracy.",
                "Selected the best-performing model based on reconstruction quality metrics and integrated it into a FastAPI web service for real-time medical image processing",
                "Deployed the system for radiology workflows, enabling clinicians to process skull reconstruction tasks with faster turnaround times in clinical environments."
            ],
            technologies: ["React", "Redux", "Sass", "Jest"] 
        }
    ],
    education: [
        { 
            id: 1, 
            degree: "B.E. in Computer Science and Engineering", 
            institution: "University Institute of Engineering and Technology, Panjab University, Chandigarh", 
            duration: "2022 - 2026", 
            bullets: [
                "CGPA : 8.56",
            ]
        },
        { 
            id: 2, 
            degree: "Class 12 (CBSE)", 
            institution: "Arya Senior Secondary School, Karnal", 
            duration: "2021 - 2022", 
            bullets: [
                "Percentage : 94.6%",
            ]
        }
    ],
    socialLinks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/aayush-gupta-294354248/", icon: "Linkedin" },
        { name: "GitHub", url: "https://github.com/Aayushgupta218", icon: "Github" },
        { name: "LeetCode", url: "https://leetcode.com/u/Aayushgupta_218/", icon: "LeetCode" },
        { name: "Email", url: "mailto:aggarwalaayush220@gmail.com", icon: "Mail" },
        
    ],
    patents: [
        {
            id: 1,
            title: "METHOD FOR GENERATING CUSTOM CRANIAL IMPLANTS USING DEEP LEARNING",
            patentNumber: "Indian Patent #569335",
            status: "Granted",
            date: "16 September 2025",
            description: "Developed and optimized 5+ deep learning models (GANs, U-Nets, Autoencoders) for Skull Image Reconstruction, achieving nearly 50% faster processing compared to traditional methods through fine-tuned architectures for accuracy and efficiency.",
            inventors: ["Aayush Gupta"],
            category: "Deep Learning"
        }
    ],
     achievements: [
        {
            id: 1,
            title: "Research Work Presentor",
            organization: "CHASCON 2024 - National Level Conference on Viksit Bharat",
            date: "November 2024",
            description: "Presented my work in the conference aimed at emerging technologies in the Engineering Section",
            category: "Conference",
            icon: "Trophy"
        },
        // {
        //     id: 2,
        //     title: "",
        //     organization: "State Institute of Technology",
        //     date: "2022-2024",
        //     description: "Consistently maintained GPA above 3.8 for 6 consecutive semesters",
        //     category: "Academic",
        //     icon: "Star"
        // },
      ],
    resumeURL: "#"
};

// === Icon Components ===
const MenuIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
);

const XIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const MailIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

const CodeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const UserIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const FolderOpenIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 15h4"></path>
        <path d="M17 8h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9c.78 0 1.48.33 1.98.86L12 7h7c1.1 0 2 .9 2 2v3"></path>
    </svg>
);

const ArrowUpRightIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
);

const BriefcaseIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        <rect x="2" y="6" width="20" height="14" rx="2"></rect>
        <path d="M10 12h4"></path>
    </svg>
);

const GraduationCapIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6m-2-2v4m-2-4v4m-2-4v4m-2-4v4m-2-4v4m-2-4v4m-2-4v4m-2-4v4m-2-4v4M12 2l10 5-10 5-10-5 10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
    </svg>
);

const LinkedinIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 0-6 6v7h-4v-7a6 6 0 0 0-6-6v-1h4v1a6 6 0 0 0 6 6v-1h4v-1a6 6 0 0 0 6-6v-1z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const GithubIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1.12-3.32c1.7-.19 3.5-.85 3.5-3.72a4.67 4.67 0 0 0-1.23-3.23c.12-.3.51-1.52-.12-3.18 0 0-1.02-.32-3.35 1.25a11.97 11.97 0 0 0-6 0c-2.33-1.57-3.35-1.25-3.35-1.25-.63 1.66-.24 2.88-.12 3.18A4.67 4.67 0 0 0 5 11.83c0 2.87 1.8 3.53 3.5 3.72A4.8 4.8 0 0 0 7 18v4"></path>
        <path d="M9 18h6"></path>
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.47.5.09.68-.22.68-.48v-1.74c-2.81.61-3.4-1.35-3.4-1.35-.46-1.16-1.13-1.46-1.13-1.46-.92-.63.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.9 1.55 2.37 1.1 2.95.84.09-.66.35-1.1.63-1.35-2.25-.26-4.63-1.13-4.63-5.04 0-1.1.39-1.99 1.03-2.69-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.7 9.7 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.92-2.38 4.78-4.63 5.04.36.31.68.91.68 1.83v2.73c0 .26.18.57.68.48A9.99 9.99 0 0 0 22 12c0-5.52-4.48-10-10-10z"></path>
    </svg>
);

const LeetCodeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.858 2.133 8.062-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.381 1.38 1.38 0 0 0 1.38 1.381h8.375a1.38 1.38 0 0 0 1.38-1.38 1.38 1.38 0 0 0-1.38-1.382z"/>
    </svg>
);


const DownloadIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
);


const TrophyIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55.47.98.97 1.21C11.56 18.75 12 19.38 12 20s-.44 1.25-1.03 1.79c-.5.23-.97.56-.97 1.21"></path>
        <path d="M14 14.66V17c0 .55-.47.98-.97 1.21C12.44 18.75 12 19.38 12 20s.44 1.25 1.03 1.79c.5.23.97.56.97 1.21"></path>
        <rect x="6" y="2" width="12" height="12" rx="2"></rect>
    </svg>
);

const CertificateIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3v4a1 1 0 0 0 1 1h4"></path>
        <path d="M18 18v-7h-3a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"></path>
        <path d="M8 12h8"></path>
        <path d="M8 16h6"></path>
        <circle cx="18" cy="18" r="3"></circle>
        <path d="m20.2 20.2 1.8 1.8"></path>
    </svg>
);

const PatentIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14,2 14,8 20,8"></polyline>
        <path d="M12 18v-6l-3 3"></path>
        <path d="M9 15l3 3 3-3"></path>
    </svg>
);

const StarIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
    </svg>
);

// Icon mapping for social links
const IconMap = {
    Mail: MailIcon,
    Linkedin: LinkedinIcon,
    Github: GithubIcon,
    LeetCode: LeetCodeIcon,
};

// === Custom Hooks ===
function useCustomCursor() {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const rafRef = useRef();
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const updateCursor = () => {
            const dx = mousePos.current.x - cursorPos.current.x;
            const dy = mousePos.current.y - cursorPos.current.y;
            
            const easing = 0.40;
            cursorPos.current.x += dx * easing;
            cursorPos.current.y += dy * easing;

            cursor.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
            rafRef.current = requestAnimationFrame(updateCursor);
        };

        const handleMouseMove = (e) => {
            mousePos.current.x = e.clientX - (isHovering ? 20 : 8);
            mousePos.current.y = e.clientY - (isHovering ? 20 : 8);
            
            const interactive = e.target.closest('[data-interactive="true"]');
            setIsHovering(!!interactive);
        };

        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        rafRef.current = requestAnimationFrame(updateCursor);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [isHovering]);

    return { cursorRef, isHovering };
}

function useIntersectionObserver(threshold = 0.1) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            { threshold, rootMargin: '50px' }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold]);

    return [elementRef, isVisible];
}

// === Components ===
function AnimatedSection({ id, children, title, icon: Icon }) {
    const [sectionRef, isVisible] = useIntersectionObserver();

    return (
        <section 
            id={id} 
            ref={sectionRef} 
            className={`
                transition-all duration-500 ease-out p-6 md:p-12 lg:p-20 min-h-[60vh]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
        >
            <div className="max-w-6xl mx-auto">
                {title && (
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-400 mb-12 flex items-center">
                        {Icon && <Icon className="w-8 h-8 mr-3 text-indigo-500" />}
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
}

function AchievementCard({ achievement }) {
    const getIcon = (iconName) => {
        const iconMap = {
            Trophy: TrophyIcon,
            Star: StarIcon,
            Certificate: CertificateIcon,
            Patent: PatentIcon
        };
        return iconMap[iconName] || StarIcon;
    };

    const IconComponent = getIcon(achievement.icon);

    return (
        <div className="bg-gray-800 border border-gray-700/50 rounded-xl p-6 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                    <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                        <span className="text-xs font-mono text-indigo-400 bg-indigo-900/40 px-2 py-1 rounded-full">
                            {achievement.category}
                        </span>
                    </div>
                </div>
                <span className="text-sm text-gray-400 font-mono">{achievement.date}</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
            <p className="text-md font-semibold text-indigo-300 mb-3">{achievement.organization}</p>
            <p className="text-gray-400 text-base">{achievement.description}</p>
        </div>
    );
}


function PatentCard({ patent }) {
    const getStatusColor = (status) => {
        return status === 'Granted' ? 'text-green-400 bg-green-900/40' : 'text-yellow-400 bg-yellow-900/40';
    };

    return (
        <div className="bg-gray-800 border border-gray-700/50 rounded-xl p-6 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                    <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                        <PatentIcon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <span className={`text-xs font-mono px-2 py-1 rounded-full ${getStatusColor(patent.status)}`}>
                            {patent.status}
                        </span>
                        <span className="text-xs font-mono text-indigo-400 bg-indigo-900/40 px-2 py-1 rounded-full">
                            {patent.category}
                        </span>
                    </div>
                </div>
                <span className="text-sm text-gray-400 font-mono">{patent.date}</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{patent.title}</h3>
            <p className="text-md font-semibold text-indigo-300 mb-2">{patent.patentNumber}</p>
            <p className="text-gray-400 text-base mb-3">{patent.description}</p>
            
            <div className="border-t border-gray-700/50 pt-3">
                <p className="text-sm text-gray-400">
                    <span className="font-medium">Inventors:</span> {patent.inventors.join(', ')}
                </p>
            </div>
        </div>
    );
}

function PatentsAchievements() {
    return (
        <AnimatedSection id="patents-achievements" title="Patents & Achievements" icon={TrophyIcon}>
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Patents Section */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <PatentIcon className="w-6 h-6 mr-3 text-indigo-400" />
                        Patents & Intellectual Property
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {PORTFOLIO_DATA.patents.map(patent => (
                            <PatentCard key={patent.id} patent={patent} />
                        ))}
                    </div>
                </div>

                {/* Achievements Section */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <StarIcon className="w-6 h-6 mr-3 text-indigo-400" />
                        Awards & Achievements
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PORTFOLIO_DATA.achievements.map(achievement => (
                            <AchievementCard key={achievement.id} achievement={achievement} />
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = useMemo(() => [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Patents & Achievements", href: "#patents-achievements" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ], []);

    const smoothScroll = useCallback((e, targetId) => {
        e.preventDefault();
        setIsOpen(false);
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90 backdrop-blur-sm shadow-2xl border-b border-indigo-800/50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <a 
                    href="#hero" 
                    onClick={(e) => smoothScroll(e, '#hero')} 
                    data-interactive="true" 
                    className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-200 rounded-lg p-2"
                >
                    <CodeIcon className="inline w-6 h-6 mr-1" />
                    {PORTFOLIO_DATA.name.split(' ')[0]}
                </a>

                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => smoothScroll(e, item.href)}
                            data-interactive="true"
                            className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-lg font-medium transition-colors duration-200 relative group"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"></span>
                        </a>
                    ))}
                </nav>

                <button
                    className="md:hidden text-gray-300 hover:text-indigo-400 p-2 rounded-lg transition-colors duration-200"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    data-interactive="true"
                >
                    {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
            </div>

            <div className={`md:hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <nav className="flex flex-col px-4 space-y-2">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => smoothScroll(e, item.href)}
                            data-interactive="true"
                            className="text-gray-300 hover:bg-gray-800 hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

function Hero() {
    return (
        <AnimatedSection id="hero">
            <div className="pt-24 min-h-screen flex items-center justify-center text-center">
                <div className="max-w-4xl">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 animate-fade-in">
                        Hi, I'm <span className="text-indigo-400">{PORTFOLIO_DATA.name}</span>.
                    </h1>
                    <p className="text-xl sm:text-3xl text-gray-400 font-light mb-8 animate-fade-in-delayed">
                        {PORTFOLIO_DATA.tagline}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="#projects"
                            data-interactive="true"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            View Projects
                        </a>
                        <a
                            href={"https://drive.google.com/file/d/1VHG_0UCtFu8iYqVlfol3296pzrFSdZcs/view?usp=sharing"}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            data-interactive="true"
                            className="inline-flex items-center justify-center px-6 py-3 border border-indigo-400 text-base font-medium rounded-full text-indigo-400 bg-gray-900 hover:bg-indigo-900/50 transition-all duration-200 transform hover:scale-105"
                        >
                            <DownloadIcon className="w-5 h-5 mr-2" />
                            Download Resume
                        </a>
                        <a
                            href="#contact"
                            data-interactive="true"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-700 hover:bg-gray-600 transition-all duration-200 transform hover:scale-105"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}

function About() {
    return (
        <AnimatedSection id="about" title="About Me" icon={UserIcon}>
            <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                <div className="lg:col-span-2 text-gray-300 text-lg space-y-6">
                    <p>{PORTFOLIO_DATA.bio}</p>
                    <p> I'm currently in my final year at University Institute of Engineering and Technology, Panjab University, where I've maintained an impressive<span className='text-amber-300'> 8.56 CGPA</span>  while building expertise in cutting-edge technologies.</p>
                    <p>I have hands-on professional experience through impactful internships  - working as a <span className="text-amber-300">Data Science Intern at Unified Mentor </span>
                      where I built predictive analytics models achieving 98% accuracy, 
                      and as a <span className='text-amber-300'>Machine Learning Intern at MDART DIC, Panjab University</span>, where I developed <span className='text-amber-300'>5+ deep learning models</span> for medical 
                      image reconstruction that achieved 50% faster processing than traditional methods.
                      </p>
                      <p>
                      I've successfully delivered <span className='text-amber-300'>4+ major projects</span> spanning from real-time video conferencing platforms supporting 150+ participants to AI-powered content summarization tools, 
                      and full-stack web applications using the MERN stack. My expertise in <span className='text-amber-300'>full-stack development</span> combined with modern frameworks like <span className='text-amber-300'>React.js, Next.js, Node.js, and Express.js</span> allows me to build end-to-end solutions from database design to responsive user interfaces
                      I'm constantly exploring emerging technologies in <span className='text-amber-300'>Deep Learning, Computer Vision, and System Design</span> while building scalable 
                      applications that make a meaningful impact.
                      </p>
                      <p>
                      Beyond technical skills, I bring strong problem-solving abilities - having solved <span className='text-amber-300'>500+ coding problems</span> across platforms and achieved recognition at 
                      national-level competitions including CHASCON 2024 and <span className='text-amber-300'>Naukri Campus Young Turks (93.9 percentile)</span>.
                      I excel in collaborative environments with proven adaptive learning skills and change agility, making me ready to contribute effectively to dynamic tech teams 
                      while continuing to <span className='text-amber-300'>grow as a software engineer specializing in AI/ML solutions</span>.
                      </p>


        
                </div>
                <div className="lg:col-span-1 mt-10 lg:mt-0">
                    <h3 className="text-2xl font-semibold text-white mb-6 border-b border-indigo-700 pb-2">Core Competencies</h3>
                    <div className="flex flex-wrap gap-3">
                        {PORTFOLIO_DATA.skills.map((skill, index) => (
                            <span key={`${skill}-${index}`} className="px-4 py-2 bg-indigo-800/50 text-indigo-200 text-sm font-medium rounded-full transition-all duration-200 hover:bg-indigo-700/70 hover:scale-105">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}

// Fixed TimelineItem to handle both bullets and description
function TimelineItem({ title, secondary, duration, bullets, description, tags, isLast }) {
    return (
        <div className="flex relative pb-12">
            <div className={`h-full w-0.5 absolute inset-0 left-2 bg-indigo-700/50 ${isLast ? 'hidden' : ''}`}></div>
            
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-600 inline-flex items-center justify-center text-white relative z-10 -ml-1.5 shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-300 animate-ping absolute opacity-75"></div>
            </div>

            <div className="flex-grow pl-6 transition-transform duration-200 hover:scale-[1.01] rounded-lg">
                <div className="bg-gray-800 p-5 rounded-lg border border-gray-700/50">
                    <p className="font-mono text-sm text-indigo-400 mb-1">{duration}</p>
                    <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                    <p className="text-md font-semibold text-gray-300 mb-4">{secondary}</p>
                    
                    {/* Handle both bullets array and single description */}
                    {bullets ? (
                        <ul className="space-y-2 mb-4">
                            {bullets.map((bullet, index) => (
                                <li key={index} className="text-gray-400 text-base flex items-start">
                                    <span className="text-indigo-400 mr-3 mt-1 text-sm">•</span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-400 text-base mb-4">{description}</p>
                    )}
                    
                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {tags.map(tag => (
                                <span key={tag} className="text-xs font-mono text-indigo-400 bg-indigo-900/40 px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function Experience() {
    return (
        <AnimatedSection id="experience" title="Professional Journey" icon={BriefcaseIcon}>
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {PORTFOLIO_DATA.experience.map((job, index) => (
                        <TimelineItem
                            key={job.id}
                            title={job.title}
                            secondary={job.company}
                            duration={job.duration}
                            bullets={job.bullets}
                            tags={job.technologies}
                            isLast={index === PORTFOLIO_DATA.experience.length - 1}
                        />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

function Education() {
    return (
        <AnimatedSection id="education" title="Educational Journey" icon={GraduationCapIcon}>
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {PORTFOLIO_DATA.education.map((edu, index) => (
                        <TimelineItem
                            key={edu.id}
                            title={edu.degree}
                            secondary={edu.institution}
                            duration={edu.duration}
                            bullets={edu.bullets} // Now using bullets instead of description
                            tags={[]} 
                            isLast={index === PORTFOLIO_DATA.education.length - 1}
                        />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

function ProjectCard({ project }) {
    return (
        <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            data-interactive="true" 
            className="block group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-xl overflow-hidden"
        >
            <div className="bg-gray-800 border border-gray-700/50 rounded-xl p-6 h-full flex flex-col justify-between transition-colors duration-200 group-hover:bg-gray-700/80">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <FolderOpenIcon className="w-8 h-8 text-indigo-400" />
                        <ArrowUpRightIcon className="w-6 h-6 text-gray-400 group-hover:text-indigo-300 transition-colors duration-200" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors duration-200">{project.title}</h3>
                    <p className="text-gray-400 text-base mb-4">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-indigo-400 bg-indigo-900/40 px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}

function Projects() {
    return (
        <AnimatedSection id="projects" title="My Work" icon={CodeIcon}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PORTFOLIO_DATA.projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <div className="text-center mt-16">
                <a 
                    href="https://github.com/Aayushgupta218" 
                    data-interactive="true" 
                    className="inline-flex items-center justify-center px-8 py-3 border border-indigo-500 text-lg font-medium rounded-full text-indigo-400 bg-gray-900 hover:bg-indigo-900/50 transition-all duration-200 transform hover:scale-105"
                >
                    View All on GitHub
                </a>
            </div>
        </AnimatedSection>
    );
}

function Contact() {
    return (
        <AnimatedSection id="contact" title="Get In Touch" icon={MailIcon}>
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-8 border border-indigo-700/50 text-center">
                <p className="text-lg text-gray-400 mb-8">
                    The best way to reach me is through one of my professional profiles below.
                    I look forward to connecting!
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {PORTFOLIO_DATA.socialLinks.map((link) => {
                        const IconComponent = IconMap[link.icon];
                        return (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-interactive="true"
                                className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-900 border border-gray-700 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all duration-200 transform hover:-translate-y-1"
                            >
                                {IconComponent && <IconComponent className="w-8 h-8 mb-2" />}
                                <span className="text-sm font-medium">{link.name}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </AnimatedSection>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-indigo-900/20 py-8 text-center">
            <div className="max-w-6xl mx-auto px-4">
                <p className="text-gray-500 text-sm">
                  &copy;  Developed and Code by Aayush Gupta |  {new Date().getFullYear()}.
                </p>
                
            </div>
        </footer>
    );
}

// === Main App Component ===
function App() {
    const { cursorRef, isHovering } = useCustomCursor();

    return (
        <div className="bg-gray-900 min-h-screen font-inter">
            {/* Fixed the style element - removed jsx and global attributes */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
                * {
                    cursor: none !important;
                }
                
                /* Faster, GPU-accelerated animations */
                @keyframes fadeIn {
                    0% { opacity: 0; transform: translate3d(0, 10px, 0); }
                    100% { opacity: 1; transform: translate3d(0, 0, 0); }
                }
                @keyframes fadeInDelayed {
                    0% { opacity: 0; transform: translate3d(0, 15px, 0); }
                    100% { opacity: 1; transform: translate3d(0, 0, 0); }
                }
                
                .animate-fade-in {
                    animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                .animate-fade-in-delayed {
                    animation: fadeInDelayed 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
                }
                
                /* Performance optimizations */
                .will-change-transform {
                    will-change: transform;
                }
                .backface-visibility-hidden {
                    backface-visibility: hidden;
                }
            `}</style>
            
            {/* Optimized Custom Cursor */}
            <div
                ref={cursorRef}
                className={`fixed top-0 left-0 rounded-full pointer-events-none z-[1000] mix-blend-difference bg-indigo-400/70 will-change-transform backface-visibility-hidden transition-all ${
                    isHovering ? 'w-10 h-10 duration-150' : 'w-4 h-4 duration-100'
                }`}
            />

            <Header />
            <main>
                <Hero />
                <div className="bg-gray-800/50 border-t border-b border-indigo-900/20">
                    <About />
                </div>
                <Experience />
                <div className="bg-gray-800/50 border-t border-b border-indigo-900/20">
                    <Education />
                </div>
                <PatentsAchievements /> {/* Add this new section */}
                <div className="bg-gray-800/50 border-t border-b border-indigo-900/20"></div>
                <Projects />
                <div className="bg-gray-800/50 border-t border-b border-indigo-900/20">
                    <Contact />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
