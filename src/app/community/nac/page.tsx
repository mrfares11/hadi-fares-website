import type { Metadata } from "next";
import { CommunityPage } from "@/components/community-page";
import { community, site } from "@/data/content";

const data = community.find((c) => c.slug === "nac")!;

export const metadata: Metadata = {
  title: `${data.role} · ${site.name}`,
  description: data.card,
};

export default function NacPage() {
  return <CommunityPage data={data} />;
}
