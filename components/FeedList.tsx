import { FeedCard } from "@/components/FeedCard";
import type { RankedCluster } from "@/lib/types";

type Props = {
  items: RankedCluster[];
};

export function FeedList({ items }: Props) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <FeedCard key={item.id} item={item} />
      ))}
    </div>
  );
}
