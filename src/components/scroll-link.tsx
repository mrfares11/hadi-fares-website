"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const SCROLL_KEY = "scroll-target";

// Navigates to a homepage section WITHOUT leaving a #hash in the URL.
// Plain left-clicks are handled in JS (scroll on the homepage, or a clean
// push to "/" + deferred scroll from subpages); modified clicks (new tab)
// and no-JS visitors fall back to the normal /#hash link.
export function ScrollLink({
  target,
  className,
  children,
  onNavigate,
}: {
  target: string;
  className?: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }
    e.preventDefault();
    onNavigate?.();
    if (pathname === "/") {
      document.getElementById(target)?.scrollIntoView();
    } else {
      sessionStorage.setItem(SCROLL_KEY, target);
      router.push("/");
    }
  };

  return (
    <Link href={`/#${target}`} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

// Mounted on the homepage: completes a ScrollLink navigation that started on
// another page. Jumps instantly, like a native anchor arrival.
export function ScrollRestore() {
  const pathname = usePathname();

  useEffect(() => {
    const target = sessionStorage.getItem(SCROLL_KEY);
    if (!target) return;
    sessionStorage.removeItem(SCROLL_KEY);
    requestAnimationFrame(() => {
      document
        .getElementById(target)
        ?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
    });
  }, [pathname]);

  return null;
}
