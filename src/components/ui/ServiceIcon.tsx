import type { ServiceIcon as IconKey } from "@/data/services";

const paths: Record<IconKey, React.ReactNode> = {
  branding: (
    <>
      <circle cx="15" cy="15" r="15" />
      <circle cx="45" cy="15" r="15" />
      <circle cx="15" cy="45" r="15" />
      <circle cx="45" cy="45" r="15" />
    </>
  ),
  web: (
    <path
      fillRule="evenodd"
      d="M0 0h45a15 15 0 0 1 0 30 15 15 0 0 1 0 30H0zM30 22c1 5 3 7 8 8-5 1-7 3-8 8-1-5-3-7-8-8 5-1 7-3 8-8z"
    />
  ),
  marketing: <path d="M0 0c13 0 30 13 30 30C30 13 47 0 60 0v60H48c-9 0-18-9-18-18 0 9-9 18-18 18H0z" />,
  illustration: (
    <>
      <path d="M15 0h45v60H40V30H15z" />
      <circle cx="15" cy="45" r="15" />
    </>
  ),
  content: (
    <path
      fillRule="evenodd"
      d="M0 0h60v60H0zM30 8c3 15 7 19 22 22-15 3-19 7-22 22-3-15-7-19-22-22 15-3 19-7 22-22z"
    />
  ),
  social: (
    <path d="M0 0h20a10 10 0 0 1 10 10A10 10 0 0 1 40 0h20v20a10 10 0 0 1-10 10 10 10 0 0 1 10 10v20H40a10 10 0 0 1-10-10 10 10 0 0 1-10 10H0V40a10 10 0 0 1 10-10A10 10 0 0 1 0 20z" />
  ),
};

export default function ServiceIcon({
  name,
  className = "size-[60px]",
}: {
  name: IconKey;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 60 60" fill="currentColor" className={className} aria-hidden>
      {paths[name]}
    </svg>
  );
}
