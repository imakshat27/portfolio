import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer site-width">
      <p>© {new Date().getFullYear()} Akshat Agarwal</p>
      <span>Always a work in progress.</span>
      <a href="#intro-title">
        Back to the top <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </footer>
  );
}
