export default function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 52 30" className={`h-[30px] w-[52px] flex-none ${className}`} aria-hidden>
      <path d="M9 0h15L15 30H0zM37 0h15L43 30H28z" fill="currentColor" />
    </svg>
  );
}
