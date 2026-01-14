import Container from "@/components/Container";
import { BellIcon, Logo, MailIcon } from "@/components/Icons";

const navItems = ["Home", "Services", "Beauticians", "Appointments"] as const;

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-black/10">
      <Container className="h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Logo
            width={28}
            height={28}
            fill="currentColor"
            className="text-primary"
          />
          <span className="text-lg font-semibold tracking-tight text-primary">
            Beautiworx
          </span>
        </div>

        {/* Middle: Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((label) => {
            const isActive = label === "Home";
            return (
              <a
                key={label}
                href="#"
                className={[
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-text-primary"
                    : "text-text-primary/60 hover:text-text-primary",
                ].join(" ")}
              >
                {label}
                {isActive && (
                  <span className="block mt-3 h-[3px] w-full bg-primary rounded" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-text-primary/70 hover:text-text-primary hover:bg-black/3 transition-colors"
            aria-label="Messages"
          >
            <MailIcon fill="currentColor" className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-text-primary/70 hover:text-text-primary hover:bg-black/3 transition-colors"
            aria-label="Notifications"
          >
            <BellIcon fill="currentColor" className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-semibold leading-none text-white">
              12
            </span>
          </button>

          <a
            href="#"
            className="hidden sm:inline-flex text-sm font-medium text-text-primary/70 hover:text-text-primary transition-colors"
          >
            Sign Up
          </a>

          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Log In
          </a>
        </div>
      </Container>
    </header>
  );
}

