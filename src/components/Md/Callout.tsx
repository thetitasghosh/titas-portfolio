type CalloutProps = {
  type?: "note" | "tip" | "warning";
  title?: string;
  children: React.ReactNode;
};

const colorMap = {
  note: "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100",
  tip: "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100",
  warning:
    "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100",
};

export function Callout({ type = "note", title, children }: CalloutProps) {
  return (
    <div className={`rounded-xl p-4 text-sm ${colorMap[type]}`}>
      {title && <div className="mb-1 font-semibold">{title}</div>}
      {children}
    </div>
  );
}
