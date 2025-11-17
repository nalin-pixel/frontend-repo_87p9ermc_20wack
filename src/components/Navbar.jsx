import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-lg shadow-cyan-500/30" />
            <span className="text-white/90 text-lg font-semibold tracking-wide">LumiLED Ads</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/5 text-white/80 hover:bg-white/10 transition-colors">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
