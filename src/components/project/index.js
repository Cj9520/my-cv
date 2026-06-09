import { useEffect, useState, useRef } from "react";
import Animatedletters from "../Animatedletters";
import Loader from "react-loaders";
import "./index.scss";

const projectsData = [
    {
        id: 1,
        title: "My Portfolio Website",
        description:
            "A personal portfolio built with React showcasing projects and contact info. Features animated letters, 3D cube, and smooth transitions.",
        technologies: ["React", "Sass", "Netlify"],
        link: "https://your-portfolio.example.com",
        repo: "https://github.com/yourname/portfolio",
        emoji: "🎨",
        accentColor: "#FFD700",
        category: "Frontend",
    },
    {
        id: 2,
        title: "Todo App",
        description:
            "A CRUD todo application with local storage and filters. Supports priority tagging, due dates, and dark/light theme switching.",
        technologies: ["React", "Context API", "CSS"],
        link: "https://todo.example.com",
        repo: "https://github.com/yourname/todo-app",
        emoji: "✅",
        accentColor: "#00E5FF",
        category: "Frontend",
    },
    {
        id: 3,
        title: "API Service",
        description:
            "A small Node/Express REST API with JWT authentication, MongoDB integration, and comprehensive Swagger documentation.",
        technologies: ["Node.js", "Express", "MongoDB"],
        link: "https://api.example.com",
        repo: "https://github.com/yourname/api-service",
        emoji: "⚡",
        accentColor: "#69FF47",
        category: "Backend",
    },
    {
        id: 4,
        title: "Voice Notes App",
        description:
            "AI-powered voice notes with real-time transcription via Whisper, LexRank summarization, and keyword extraction.",
        technologies: ["React", "Python", "Whisper"],
        link: "https://voice-notes.example.com",
        repo: "https://github.com/yourname/voice-notes",
        emoji: "🎙️",
        accentColor: "#E040FB",
        category: "AI / ML",
    },
];

const FILTERS = ["All", "Frontend", "Backend", "AI / ML"];

const ProjectCard = ({ project, index }) => {
    const [hovered, setHovered] = useState(false);
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = ((e.clientX - cx) / (rect.width / 2)) * 8;
        const dy = ((e.clientY - cy) / (rect.height / 2)) * -8;
        setTilt({ x: dy, y: dx });
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setTilt({ x: 0, y: 0 });
    };

    return (
        <article
            ref={cardRef}
            className={`project-card project-card--${index}`}
            aria-labelledby={`proj-${project.id}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{
                transform: hovered
                    ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px) scale(1.02)`
                    : "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)",
                "--accent": project.accentColor,
            }}
        >
            {/* Glow blob */}
            <div className="card-glow" style={{ background: project.accentColor }} />

            {/* Top bar */}
            <div className="card-header">
                <span className="card-emoji">{project.emoji}</span>
                <span className="card-category" style={{ color: project.accentColor, borderColor: project.accentColor }}>
                    {project.category}
                </span>
            </div>

            {/* Body */}
            <div className="project-body">
                <h2 id={`proj-${project.id}`}>{project.title}</h2>
                <p className="project-description">{project.description}</p>

                <div className="technologies">
                    {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag" style={{ "--tag-accent": project.accentColor }}>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer actions */}
            <div className="project-actions">
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        style={{ "--btn-accent": project.accentColor }}
                    >
                        <span className="btn-icon">🌐</span>
                        Live Demo
                    </a>
                )}
                {project.repo && (
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-repo"
                        style={{ "--btn-accent": project.accentColor }}
                    >
                        <span className="btn-icon">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </span>
                        Source
                    </a>
                )}
            </div>

            {/* Shine overlay */}
            <div className={`card-shine ${hovered ? "card-shine--active" : ""}`} />
        </article>
    );
};

const Project = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const [activeFilter, setActiveFilter] = useState("All");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setLetterClass("text-animate-hover"), 3000);
        const t2 = setTimeout(() => setVisible(true), 500);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    const filtered = activeFilter === "All"
        ? projectsData
        : projectsData.filter(p => p.category === activeFilter);

    return (
        <>
            <div className="container project-page">

                {/* Ambient background blobs */}
                <div className="ambient-blob ambient-blob--1" />
                <div className="ambient-blob ambient-blob--2" />

                {/* Header */}
                <header className={`projects-header ${visible ? "projects-header--visible" : ""}`}>
                    <div className="heading-wrap">
                        <h1>
                            <Animatedletters
                                letterClass={letterClass}
                                strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
                                idx={15}
                            />
                        </h1>
                        <p className="projects-subtitle">
                            Things I've built — from ideas to deployments.
                        </p>
                    </div>

                    {/* Filter pills */}
                    <nav className="filter-bar" aria-label="Project filter">
                        {FILTERS.map(f => (
                            <button
                                key={f}
                                className={`filter-pill ${activeFilter === f ? "filter-pill--active" : ""}`}
                                onClick={() => setActiveFilter(f)}
                            >
                                {f}
                                {activeFilter === f && <span className="filter-pip" />}
                            </button>
                        ))}
                    </nav>
                </header>

                {/* Grid */}
                <section className={`projects-grid ${visible ? "projects-grid--visible" : ""}`} aria-label="Projects">
                    {filtered.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </section>

                {/* Count badge */}
                <p className="projects-count">
                    Showing <strong>{filtered.length}</strong> of <strong>{projectsData.length}</strong> projects
                </p>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Project;