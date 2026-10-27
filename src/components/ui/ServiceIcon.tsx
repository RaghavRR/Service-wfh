import {
  Code,
  FileText,
  Megaphone,
  Palette,
  PenTool,
  Share2,
  type LucideProps,
} from "lucide-react";
import type { ServiceIcon as IconKey } from "@/data/services";

const map = {
  branding: Palette,
  web: Code,
  marketing: Megaphone,
  illustration: PenTool,
  content: FileText,
  social: Share2,
} satisfies Record<IconKey, React.ComponentType<LucideProps>>;

export default function ServiceIcon({
  name,
  ...props
}: { name: IconKey } & LucideProps) {
  const Icon = map[name];
  return <Icon strokeWidth={1.5} {...props} />;
}
