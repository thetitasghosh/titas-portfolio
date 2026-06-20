import { WORKS } from "@/data/workData";
import WorkDetailPage from "@/components/pages/work-detail-page";

export async function generateMetadata({ params }) {
  const { workID } = params;

  // Find the specific project by slug (workID)
  const project = WORKS.find((item) => item.slug === workID);

  // Return title and other metadata only if the project exists
  if (project) {
    return {
      title: project.title,
      description: project.description || "Project details and showcase.",
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

  return <WorkDetailPage workitem={workitem} />;
}
