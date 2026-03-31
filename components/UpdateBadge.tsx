type Props = {
  status: "new" | "updated" | "unchanged";
};

const styles = {
  new: "bg-emerald-100 text-emerald-700 border-emerald-200",
  updated: "bg-amber-100 text-amber-700 border-amber-200",
  unchanged: "bg-stone-100 text-stone-600 border-stone-200",
};

export function UpdateBadge({ status }: Props) {
  return (
    <span className={`rounded-full border px-2 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${styles[status]}`}>
      {status}
    </span>
  );
}
