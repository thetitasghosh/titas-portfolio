import React from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";

// Optional: import your custom MDX components
import { Quote } from "@/components/Md/Quote";
import { Callout } from "@/components/Md/Callout";
import { Highlight } from "@/components/Md/Highlight";
import { ArrowUpLeft } from "lucide-react";
import { Link } from "next-view-transitions";
export async function generateMetadata({ params }) {
  const filePath = path.join(
    process.cwd(),
    "src/contents",
    `${params.viewSlug}.mdx`,
  );
  const fileContent = await fs.readFile(filePath, "utf-8");

  const { frontmatter } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    // openGraph: {
    //   title: frontmatter.title,
    //   description: frontmatter.description,
    //   url: `https://yourdomain.com/view/${params.slug}`,
    //   images: [
    //     {
    //       url: frontmatter.image || "/default-og.png",
    //       width: 1200,
    //       height: 630,
    //       alt: frontmatter.title,
    //     },
    //   ],
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: frontmatter.title,
    //   description: frontmatter.description,
    //   images: [frontmatter.image || "/default-og.png"],
    // },
  };
}
const ViewPost = async ({ params }) => {
  const { viewSlug } = params;

  const filePath = path.join(process.cwd(), "src/contents", `${viewSlug}.mdx`);
  const fileContent = await fs.readFile(filePath, "utf-8");

  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
    },
    components: {
      Quote,
      Callout,
      Highlight,
    },
  });

  return (
    <div className="mt-20 flex min-h-screen w-full items-center justify-center laptop:mt-10">
      <div className="redd container relative flex flex-col gap-6 px-6 text-left tablet:px-[10%] laptop:px-[15%] desktop:px-[20%]">
        <Link href={"/view"}>
          <div className="absolute left-5 top-5">
            <ArrowUpLeft className="transition-all duration-500 hover:-translate-x-1 hover:-translate-y-1" />
          </div>
        </Link>
        <h1 className="text-3xl font-semibold">{frontmatter.title}</h1>
        <article className="prose dark:prose-invert space-y-1.5">
          {content}
        </article>
      </div>
    </div>
  );
};

export default ViewPost;
