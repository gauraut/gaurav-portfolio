import { Mail, Linkedin, Github, BookOpen } from "lucide-react";
import React from "react";

/**
 * Terminal‑style footer for gauravraut.com
 * --------------------------------------------------
 * – Dark background, green mono‑spaced text (classic shell look)
 * – Icons: Email, LinkedIn, GitHub, Google Scholar (book icon)
 * – Each icon vertically stacked with label (Email me, LinkedIn, GitHub, Scholar)
 * --------------------------------------------------
 */
const Footer: React.FC = () => {
  const linkClass = "flex flex-col items-center transition hover:text-green-200";

  return (
    <footer className="bg-black py-6 text-green-400">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Icon row */}
        <div className="flex space-x-8">
          <a
            href="mailto:gauraut14@gmail.com"
            aria-label="Email me"
            className={linkClass}
          >
            <Mail className="h-6 w-6" />
            <span className="font-mono text-xs pt-1">Email&nbsp;me</span>
          </a>

          <a
            href="https://www.linkedin.com/in/gauraut"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={linkClass}
          >
            <Linkedin className="h-6 w-6" />
            <span className="font-mono text-xs pt-1">LinkedIn</span>
          </a>

          <a
            href="https://github.com/gauraut"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={linkClass}
          >
            <Github className="h-6 w-6" />
            <span className="font-mono text-xs pt-1">GitHub</span>
          </a>

          <a
            href="https://scholar.google.com/citations?user=agHWQhEAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar"
            className={linkClass}
          >
            <BookOpen className="h-6 w-6" />
            <span className="font-mono text-xs pt-1">Scholar</span>
          </a>
        </div>

        {/* Name with terminal prompt */}
        <p className="font-mono text-sm">
          <span className="select-none">&gt;</span> Gaurav&nbsp;Raut
          <span className="animate-pulse">_</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;