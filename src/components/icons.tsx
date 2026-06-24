import type { SocialIcon } from "@/data/content";

type IconProps = { className?: string };

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.4H5.67v7.94h2.67zM7 9.24a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.1v-4.35c0-2.33-1.24-3.41-2.9-3.41a2.5 2.5 0 0 0-2.27 1.25v-1.07H10.5c.04.75 0 7.95 0 7.95h2.67v-4.44c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.35.73 1.35 1.8v4.26h2.67z" />
    </svg>
  );
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

export function EmailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function TwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.9 2H22l-7.1 8.1L23.2 22h-6.6l-5.2-6.8L5.5 22H2.3l7.6-8.7L1.2 2h6.8l4.7 6.2L18.9 2zm-1.1 18h1.8L7.3 3.9H5.4L17.8 20z" />
    </svg>
  );
}

export function ScholarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2 1 8l11 6 9-4.9V16h2V8L12 2zM5 13.2V17c0 1.66 3.13 3 7 3s7-1.34 7-3v-3.8l-7 3.8-7-3.8z" />
    </svg>
  );
}

export function LinkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden>
      <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
      <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden>
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export function SocialGlyph({ icon, className }: { icon: SocialIcon; className?: string }) {
  switch (icon) {
    case "linkedin":
      return <LinkedInIcon className={className} />;
    case "github":
      return <GitHubIcon className={className} />;
    case "email":
      return <EmailIcon className={className} />;
    case "twitter":
      return <TwitterIcon className={className} />;
    case "scholar":
      return <ScholarIcon className={className} />;
    default:
      return <LinkIcon className={className} />;
  }
}
