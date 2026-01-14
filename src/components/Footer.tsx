import Container from "@/components/Container";
import { FacebookIcon, InstagramIcon, Logo, XIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Top strip */}
      <div className="h-10 w-full bg-primary" />

      <Container className="py-14">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Left */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <Logo
                width={24}
                height={24}
                fill="currentColor"
                className="text-primary"
              />
              <span className="text-lg font-semibold tracking-tight text-primary">
                Beautiworx
              </span>
            </div>

            <div className="mt-7">
              <h3 className="text-base font-semibold text-text-primary">
                Disclaimers:
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-primary/50">
                This platform provides AI-assisted tools to support the proposal
                creation process. While every effort is made to ensure accuracy,
                users are responsible for reviewing, validating, and finalizing
                all content prior to submission. Use of this service constitutes
                acceptance of these terms.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="lg:text-right">
            <div className="space-y-3 text-sm text-text-primary">
              <p>info@xyz1234.com</p>
              <p>Whatsapp: +8899036154</p>
            </div>

            <div className="mt-8 flex items-center gap-4 lg:justify-end">
              <a href="#" aria-label="Facebook">
                <FacebookIcon width={36} height={36} />
              </a>
              <a
                href="#"
                aria-label="X"
                className="text-text-primary"
              >
                <XIcon width={34} height={34} fill="currentColor" />
              </a>
              <a href="#" aria-label="Instagram">
                <InstagramIcon width={36} height={36} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-primary/40" />

        {/* Bottom row */}
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm text-text-primary">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-text-primary/30 text-xs">
              ©
            </span>
            <span className="text-text-primary/70">
              2025 - All rights Reseaved
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-text-primary/70">
            <a href="#" className="hover:text-text-primary transition-colors">
              Contact Us
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

