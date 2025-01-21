import { Button } from "@/components/ui/button";
import { WORKS } from "@/data/workData";
import WorkHeader from "@/components/Animation/work-header";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex min-h-screen w-full items-center justify-center px-5 pt-16">
      <div
        id="container"
        className="borderr container flex h-full flex-col items-center justify-center gap-5"
      >
        <WorkHeader
          date={workitem.date}
          site={workitem.site}
          title={workitem.title}
          service={workitem.service}
        />
        <div
          id="cover"
          className="redd relative flex h-60 w-full items-center justify-center p-2 desktop:h-screen"
        >
          {" "}
          {/* <span className="absolute z-[99] font-black text-white desktop:text-8xl">
            {workitem.title}
          </span> */}
          <div
            id="image-frame"
            className="redd h-full w-full overflow-hidden rounded-md desktop:h-[95%]"
          >
            <Image
              alt={workitem.title}
              src={workitem.cover_img}
              width={1000}
              height={1000}
              className="size-full object-contain"
            />
          </div>
        </div>
        <div
          id="mock-up"
          className="redd relative flex h-fit w-full items-center justify-center p-2"
        >
          {" "}
          {/* <span className="absolute z-[99] font-black text-white desktop:text-8xl">
            {workitem.title}
          </span> */}
          <div
            id="image-frame"
            className="redd h-[90%] w-full overflow-hidden rounded-md"
          >
            <Image
              alt={workitem.title}
              src={workitem.desktop_mock}
              width={1000}
              height={500}
              className="redd h-full w-full object-contain"
            />
          </div>
        </div>
        <div
          id="mock-up"
          className="redd relative flex h-fit w-full items-center justify-center p-2"
        >
          {" "}
          {/* <span className="absolute z-[99] font-black text-white desktop:text-8xl">
            {workitem.title}
          </span> */}
          <div
            id="image-frame"
            className="redd h-[90%] w-full overflow-hidden rounded-md"
          >
            <Image
              alt={workitem.title}
              src={workitem.laptop_mock}
              width={1000}
              height={500}
              className="redd h-full w-full object-contain"
            />
          </div>
        </div>
        {workitem.images.map((data, i) => {
          return (
            <div
              key={i}
              id="mock-up"
              className="redd relative flex h-fit w-full items-center justify-center p-2"
            >
              {" "}
              {/* <span className="absolute z-[99] font-black text-white desktop:text-8xl">
            {workitem.title}
          </span> */}
              <div
                id="image-frame"
                className="redd h-[90%] w-full overflow-hidden rounded-md"
              >
                <Image
                  alt={""}
                  src={data}
                  width={1000}
                  height={500}
                  className="redd h-full w-full object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
