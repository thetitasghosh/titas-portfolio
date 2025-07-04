import { promises as fs } from "fs";
import path from "path";
// import Link from "next/link";
import { Link } from "next-view-transitions";
import { compileMDX } from "next-mdx-remote/rsc";

export const metadata = {
  title: "View",
  description:
    "Reflections, mental models, and quiet thoughts on building and living with clarity.",
};

export default async function View() {
  const dir = path.join(process.cwd(), "src/contents");
  const files = await fs.readdir(dir);

  const views = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(dir, filename);
      const content = await fs.readFile(filePath, "utf8");
      const { frontmatter } = await compileMDX({
        source: content,
        options: { parseFrontmatter: true },
      });

      return {
        slug: filename.replace(".mdx", ""),
        ...frontmatter,
      };
    }),
  );

  return (
    <div className="flex min-h-screen w-full items-start justify-center px-6 pt-16">
      <div id="container" className="borderr container h-full space-y-2">
        <div id="header" className="w-full pt-10 text-2xl desktop:text-5xl">
          <h1>Views ↴</h1>
        </div>
        <div className="redd flex w-full flex-col items-center justify-center">
          <ul className="mt-10 space-y-10">
            {views.map(({ slug, title, description, date }) => (
              <li key={slug}>
                <Link href={`/view/${slug}`}>
                  <div className="redd group relative w-fit text-xl font-semibold">
                    {title}
                    <div className="absolute bottom-1 right-0 h-[0.05rem] w-0 bg-neutral-950 transition-all duration-700 group-hover:left-0 group-hover:w-full"></div>
                  </div>
                </Link>
                <p className="text-sm text-neutral-500">{date}</p>
                <p className="mt-1 text-xs text-neutral-700 dark:text-neutral-300">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
