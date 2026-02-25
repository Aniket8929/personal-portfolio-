import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Aniket8929", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">

        <div className="flex items-baseline gap-3 mb-2 flex-wrap">
          <h1 className="text-[12vw] md:text-8xl font-black tracking-tighter leading-none">
            Aniket
          </h1>
          <span className="w-3 h-3 rounded-full bg-lime-400 mb-2 shrink-0" />
          <h1 className="text-[12vw] md:text-8xl font-black tracking-tighter leading-none">
            Rai
          </h1>
        </div>

        <p className="text-neutral-500 text-xs  tracking-widest uppercase mb-10">
          Frontend Developer · MERN Stack
        </p>

        <div className="h-px bg-linear-to-r from-white via-neutral-700 to-transparent mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <p className="text-neutral-400 text-sm leading-relaxed font-light max-w-sm md:max-w-xs">
              Passionate about building{" "}
              <span className="text-white font-medium">
                modern, responsive
              </span>{" "}
              and scalable web applications that deliver great user experiences.
            </p>
          </div>

          <div>
            <p className="text-xs  tracking-widest uppercase text-neutral-600 mb-5">
              Navigate
            </p>
            <ul className="space-y-1">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 py-1 text-sm"
                  >
                    <span className="text-lime-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 inline-block">
                      →
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs  tracking-widest uppercase text-neutral-600 mb-5">
              Find Me On
            </p>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map(({ icon, href, label }) => {
                const Icon = icon
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-2 px-3 py-2.5 border border-neutral-800 rounded-lg text-neutral-500 hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-200 text-xs "
                  >
                    <Icon size={13} />
                    <span>{label}</span>
                  </a>
                )
              })}
            </div>
          </div>

        </div>

        <div className="mt-14 pt-5 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-neutral-600 text-xs ">
            © {new Date().getFullYear()} Aniket Kumar Rai · All rights reserved
          </p>
          <div className="flex items-center gap-2 text-xs  text-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            Available for work
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;