import { WORKS } from "@/data/workData";

export async function generateStaticParams() {
  // Generate static parameters from local data
  return WORKS.map((itm) => ({ workID: itm.slug }));
}

export default function ItemPage({ params }) {
  const workitem = WORKS.find((item) => item.slug === params.workID);

  if (!workitem) {
    return <div>Item not found</div>;
  }

  return (
    <div className="flex h-screen w-full bg-black flex-col items-center justify-center">
      <h1>Title:{workitem.title}</h1>
      <p>Type:{workitem.type}</p>
    </div>
  );
}
