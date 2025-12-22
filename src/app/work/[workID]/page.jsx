import { Button } from "@/components/ui/button";
import { WORKS } from "@/data/workData";
import WorkHeader from "@/components/Animation/work-header";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "flex min-h-screen w-full items-center justify-center px-5 pt-16",
        // workitem.color === "yourmaker"
        //   ? "via-yourmaker to-030% bg-gradient-to-tl from-white from-20% to-white"
        //   : "bg-white",
      )}
    >
      <div
        id="container"
        className={cn(
          "borderr container flex h-full flex-col items-center justify-center gap-5",
        )}
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
          <div
            id="image-frame"
            className="redd h-fit w-full overflow-hidden rounded-xl"
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
          id="desktop-mock-up"
          className="redd relative flex h-fit w-full flex-col items-center justify-center gap-10 p-2"
        >
          {workitem.desktop_mock.map((data, i) => {
            return (
              <div
                key={i}
                id="image-frame"
                className="redd h-[50%] w-full overflow-hidden rounded-md"
              >
                <Image
                  alt={""}
                  src={data}
                  width={1980}
                  height={1080}
                  // style={{ height: "900px" }}
                  className="redd h-fit w-full object-contain laptop:h-[920px]"
                />
              </div>
            );
          })}
        </div>
        <div
          id="laptop-mock-up"
          className="redd relative flex h-fit w-full flex-col items-center justify-center gap-10 p-2"
        >
          {workitem.laptop_mock.map((data, i) => {
            return (
              <div
                key={i}
                id="image-frame"
                className="redd h-fit w-full overflow-hidden rounded-md"
              >
                <Image
                  alt={""}
                  src={data}
                  width={1000}
                  height={500}
                  // style={{ height: "900px" }}
                  className="redd h-fit w-full object-contain laptop:h-[920px]"
                />
              </div>
            );
          })}
        </div>
        <div className="mb-10 flex h-full w-full items-center justify-around">
          {workitem.mobile_mock.map((data, i) => {
            return (
              <div
                key={i}
                id="mock-up"
                className="redd relative flex h-full w-full items-center justify-center p-2"
              >
                {" "}
                {/* <span className="absolute z-[99] font-black text-white desktop:text-8xl">
            {workitem.title}
          </span> */}
                <div
                  id="image-frame"
                  className="redd h-[30rem] w-full overflow-hidden rounded-md"
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
    </div>
  );
}
