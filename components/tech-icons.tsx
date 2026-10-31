"use client";

import * as React from "react";
import * as si from "simple-icons";

// 1. Flutter (Official Simple Icons #02569B)
export function FlutterIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#02569B" xmlns="http://www.w3.org/2000/svg">
      <path d={si.siFlutter.path} />
    </svg>
  );
}

// 2. Dart (Official Simple Icons #0175C2)
export function DartIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#0175C2" xmlns="http://www.w3.org/2000/svg">
      <path d={si.siDart.path} />
    </svg>
  );
}

// 3. Next.js (Official Simple Icons with dark mode support)
export function NextjsIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d={si.siNextdotjs.path} />
    </svg>
  );
}

// 4. React (Official Cyan Atom #61DAFB)
export function ReactIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#61DAFB" xmlns="http://www.w3.org/2000/svg">
      <path d={si.siReact.path} />
    </svg>
  );
}

// 5. Node.js (Official Simple Icons Hexagon #5FA04E)
export function NodejsIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#5FA04E" xmlns="http://www.w3.org/2000/svg">
      <path d={si.siNodedotjs.path} />
    </svg>
  );
}

// 6. JavaScript (Official Yellow Tile with Black Monogram)
export function JavascriptIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path
        d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
        fill="#000000"
      />
    </svg>
  );
}

// 7. MongoDB (Official Simple Icons Leaf #47A248)
export function MongodbIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#47A248" xmlns="http://www.w3.org/2000/svg">
      <path d={si.siMongodb.path} />
    </svg>
  );
}

// 8. PostgreSQL (Official Full-Color Slonik Elephant)
export function PostgresqlIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <img
      src="/icons/postgresql.png"
      alt="PostgreSQL"
      className={`${className} object-contain`}
      width={28}
      height={28}
    />
  );
}

// 9. Firebase (Official Multi-Color 3-part Flame)
export function FirebaseIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.89 15.67L6.5 2.11c.07-.37.54-.48.77-.18l3.46 4.47-6.84 9.27z" fill="#FFC400" />
      <path d="M13.88 9.36l2.16-4.13c.18-.35.68-.34.84.02l3.23 7.24-6.23-3.13z" fill="#FFA000" />
      <path d="M3.89 15.67l8.03 4.54a2.22 2.22 0 0 0 2.16 0l5.98-3.4-3.95-8.86-12.22 7.72z" fill="#FF6F00" />
    </svg>
  );
}

// 10. AWS (Official Devicon Amazon Web Services Original)
export function AwsIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-[#252f3e] dark:fill-white"
        fill="#252f3e"
        d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64Zm-17.094 6.403c1.387 0 2.82-.254 4.336-.758 1.516-.508 2.863-1.433 4-2.695.672-.8 1.18-1.684 1.43-2.695.254-1.012.422-2.23.422-3.665v-1.765a34.401 34.401 0 0 0-3.871-.719 31.816 31.816 0 0 0-3.961-.25c-2.82 0-4.883.547-6.274 1.684-1.387 1.136-2.062 2.734-2.062 4.84 0 1.98.504 3.453 1.558 4.464 1.012 1.051 2.485 1.559 4.422 1.559Zm33.809 4.547c-.758 0-1.262-.125-1.598-.422-.34-.254-.633-.84-.887-1.64L40.715 29.98c-.25-.843-.38-1.39-.38-1.687 0-.672.337-1.05 1.013-1.05h4.125c.8 0 1.347.124 1.644.421.336.25.59.84.84 1.64l7.074 27.876 6.57-27.875c.208-.84.462-1.39.797-1.64.34-.255.93-.423 1.688-.423h3.367c.8 0 1.348.125 1.684.422.336.25.633.84.8 1.64l6.653 28.212 7.285-28.211c.25-.84.547-1.39.84-1.64.336-.255.887-.423 1.644-.423h3.914c.676 0 1.055.336 1.055 1.051 0 .21-.043.422-.086.676-.043.254-.125.59-.293 1.05L80.801 62.57c-.254.84-.547 1.387-.887 1.64-.336.255-.883.423-1.598.423h-3.62c-.801 0-1.348-.13-1.684-.422-.34-.297-.633-.844-.801-1.684l-6.527-27.16-6.485 27.117c-.21.844-.46 1.391-.8 1.684-.337.297-.926.422-1.684.422Zm54.105 1.137c-2.187 0-4.379-.254-6.484-.758-2.106-.504-3.746-1.055-4.84-1.684-.676-.379-1.137-.8-1.305-1.18a2.919 2.919 0 0 1-.254-1.18v-2.148c0-.882.336-1.304.97-1.304.25 0 .503.043.757.129.25.082.629.25 1.05.418a23.102 23.102 0 0 0 4.634 1.476c1.683.336 3.324.504 5.011.504 2.653 0 4.715-.465 6.145-1.39 1.433-.926 2.191-2.274 2.191-4 0-1.18-.379-2.145-1.136-2.946-.758-.8-2.192-1.516-4.254-2.191l-6.106-1.895c-3.074-.969-5.348-2.398-6.734-4.293-1.39-1.855-2.106-3.918-2.106-6.105 0-1.77.38-3.328 1.137-4.676a10.829 10.829 0 0 1 3.031-3.453c1.262-.965 2.696-1.684 4.38-2.188 1.683-.504 3.452-.715 5.304-.715.926 0 1.894.043 2.82.168.969.125 1.852.293 2.738.461.84.211 1.641.422 2.399.676.758.254 1.348.504 1.77.758.59.336 1.011.672 1.261 1.05.254.34.379.802.379 1.391v1.98c0 .884-.336 1.348-.969 1.348-.336 0-.883-.171-1.597-.507-2.403-1.094-5.098-1.641-8.086-1.641-2.399 0-4.293.379-5.598 1.18-1.309.797-1.98 2.02-1.98 3.746 0 1.18.421 2.191 1.261 2.988.844.8 2.403 1.602 4.633 2.316l5.98 1.895c3.032.969 5.22 2.316 6.524 4.043 1.305 1.727 1.938 3.707 1.938 5.895 0 1.812-.38 3.453-1.094 4.882-.758 1.434-1.77 2.696-3.074 3.707-1.305 1.051-2.864 1.809-4.672 2.36-1.895.586-3.875.883-6.024.883Zm0 0"
      />
      <path
        fill="#FF9900"
        d="M118 73.348c-4.432.063-9.664 1.052-13.621 3.832-1.223.883-1.012 2.062.336 1.894 4.508-.547 14.44-1.726 16.21.547 1.77 2.23-1.976 11.62-3.663 15.79-.504 1.26.59 1.769 1.726.8 7.41-6.231 9.348-19.242 7.832-21.137-.757-.925-4.388-1.79-8.82-1.726zM1.63 75.859c-.927.116-1.347 1.236-.368 2.121 16.508 14.902 38.359 23.872 62.613 23.872 17.305 0 37.43-5.43 51.281-15.66 2.273-1.688.297-4.254-2.02-3.204-15.534 6.57-32.421 9.77-47.788 9.77-22.778 0-44.8-6.273-62.653-16.633-.39-.231-.755-.304-1.064-.266z"
      />
    </svg>
  );
}

// 11. Git (Official Simple Icons #F05032)
export function GitIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#F05032" xmlns="http://www.w3.org/2000/svg">
      <path d={si.siGit.path} />
    </svg>
  );
}

// 12. Postman (Official Astronaut Simple Icons #FF6C37)
export function PostmanIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#FF6C37" xmlns="http://www.w3.org/2000/svg">
      <path d={si.siPostman.path} />
    </svg>
  );
}

// 13. Figma (Official Multi-Color 5-shape Logo)
export function FigmaIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 38 57" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

// 14. GitHub Actions (Official Workflow Graph Simple Icons #2088FF)
export function GithubActionsIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#2088FF" xmlns="http://www.w3.org/2000/svg">
      <path d={si.siGithubactions.path} />
    </svg>
  );
}

// 15. HTML5 (Official Dual-Tone Shield)
export function Html5Icon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="#E44D26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" />
      <path fill="#F16529" d="M12 21.95l6.76-1.92 1.63-18.03H12v19.95z" />
      <path fill="#EBEBEB" d="M12 10.75H8.7l-.23-2.62H12V5.51H5.41l.7 8.01H12v-2.77zm0 5.42l-.02.01-2.88-.78-.18-2.06H6.3l.35 4.1 5.35 1.48V16.17z" />
      <path fill="#FFFFFF" d="M12 10.75h3.31l-.31 3.48-3 0.81v2.73l5.35-1.48.74-8.29.24-2.63H12v2.63h3.76l-.23 2.62H12v2.75z" />
    </svg>
  );
}

// 16. CSS3 (Official Dual-Tone Blue Shield)
export function Css3Icon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" />
      <path fill="#33A9DC" d="M12 21.95l6.76-1.92 1.63-18.03H12v19.95z" />
      <path fill="#EBEBEB" d="M12 10.75H8.7l-.23-2.62H12V5.51H5.41l.7 8.01H12v-2.77zm0 5.42l-.02.01-2.88-.78-.18-2.06H6.3l.35 4.1 5.35 1.48V16.17z" />
      <path fill="#FFFFFF" d="M12 10.75h3.31l-.31 3.48-3 0.81v2.73l5.35-1.48.74-8.29H12v2.75zm0-5.24v2.62h6.43l.23-2.62H12z" />
    </svg>
  );
}

// 17. Supabase (Official Emerald Lightning Simple Icons #3ECF8E)
export function SupabaseIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#3ECF8E" xmlns="http://www.w3.org/2000/svg">
      <path d={si.siSupabase.path} />
    </svg>
  );
}

// 18. Android Studio (Official Full-Color Compass & Robot)
export function AndroidStudioIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <img
      src="/icons/android-studio.png"
      alt="Android Studio"
      className={`${className} object-contain`}
      width={28}
      height={28}
    />
  );
}

// 19. Google Play (Official 4-Color Triangle)
export function GooglePlayIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="#00C1FF" d="M38.8 8.1C33.6 13.5 30.5 21.7 30.5 32v448c0 10.3 3.1 18.5 8.3 23.9l1.4 1.4L274 271.5v-6.9L40.2 6.7l-1.4 1.4z" />
      <path fill="#00E676" d="M352.5 350.2l-78.5-78.7v-6.9l78.5-78.7 1.8 1 93 52.8c26.5 15 26.5 39.6 0 54.7l-93 52.8-1.8 3z" />
      <path fill="#FF3A44" d="M354.3 349.2L274 268.9 40.2 505.3c8.8 9.3 23.3 10.4 39.7 1.1l274.4-157.2" />
      <path fill="#FFC107" d="M354.3 162.8L79.9 5.6C63.5-3.7 49-2.6 40.2 6.7L274 243.1l80.3-80.3z" />
    </svg>
  );
}

// 20. App Store (Official Apple App Store Blue Squircle)
export function AppStoreIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#007AFF" xmlns="http://www.w3.org/2000/svg">
      <path d={si.siAppstore.path} />
    </svg>
  );
}

// 21. GitHub (Official Simple Icons Mark)
export function GithubIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d={si.siGithub.path} />
    </svg>
  );
}
