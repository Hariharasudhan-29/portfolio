import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex gap-6 mb-8">
          <a
            href="https://github.com/Hariharasudhan-29"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-500 hover:text-white transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/hariharasudhan-it/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-500 hover:text-white transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:hariharasudhanvelmurugan@gmail.com"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-500 hover:text-white transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-500 hover:text-white transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 text-center">
          &copy; {currentYear} Hariharasudhan V. All rights reserved. <br className="md:hidden" />
          Built with Next.js & Tailwind CSS.
        </p>

        <a
          href="#"
          className="flex items-center gap-2 text-sm font-medium hover:text-primary-500 transition-colors"
        >
          Back to Top <ArrowUp className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}
