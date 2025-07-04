import { cn } from "@/lib/utils";

export function Quote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="py-5">
      <blockquote
        className={cn(
          "border-l-4 border-neutral-500 pl-4 italic text-neutral-600 dark:text-neutral-300",
          className,
        )}
      >
        {children}
      </blockquote>
    </div>
  );
}
