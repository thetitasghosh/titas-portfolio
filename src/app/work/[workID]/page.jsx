import { WORKS } from "@/data/workData";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { workID } = params;

  // Find the specific project by slug (workID)
  const project = WORKS.find((item) => item.slug === workID);

  // Return title and other metadata only if the project exists
  if (project) {
    return {
      title: project.title,
      description: project.description || "Project description here",
      // You can also add more metadata such as open graph or twitter card metadata
    };
  }

  // Fallback metadata if no project is found
  return {
    title: "Project Not Found",
    description: "This project does not exist in our database.",
  };
}
export default function ItemPage({ params }) {
  const workitem = WORKS.find((item) => item.slug === params.workID);

  if (!workitem) {
    return <div>Item not found</div>;
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black">
      <div className="redd z-50 flex h-full w-full justify-between px-5 pb-10 pt-52 mix-blend-exclusion desktop:items-end desktop:pt-0 desktop:text-5xl">
        <h1>{workitem.title}</h1>
        <p>{workitem.type}</p>
      </div>
      <div className="redd absolute h-full w-full">
        <Image
          src={workitem.img}
          alt="projects"
          width={1000}
          height={1000}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
