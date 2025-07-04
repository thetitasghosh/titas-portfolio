export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-yellow-200 px-1 py-0.5 text-black dark:bg-yellow-700 dark:text-white">
      {children}
    </span>
  );
}
