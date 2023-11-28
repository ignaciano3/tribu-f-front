"use client";
import { Project } from "@/types/types";
import { useRouter } from 'next/navigation';
import ProjectCard from "@/components/projectCard";
import Button from "@/components/button";
import { useSearchParams } from "next/navigation";

const getProject = async ({id}: {id: any}) => {
  //poner nuestra base de datos
  const href = `http://127.0.0.1:8000/proyectos/get_proyecto/` + id;

  const response = await fetch("http://127.0.0.1:8000/proyectos/get_proyecto/3"); //poner nuestra base de datos
  const data = await response.json();
  return data;
};

function HeaderItem({ title }: { title: string }) {
  return (
    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
      {title}
    </th>
  );
}

const ProjectPage = async () => {
  const id = useSearchParams().get("id");
  console.log(id);
  //const router = useRouter();
  //const id = router.query;
  //const router = useRouter();
  
  //const { id } = router.query;
  const project: Project = getProject(id as String);
  // const project: Project = {
  //   id: 1,
  //   name: "Counter Strike",
  //   state: "En proceso",
  // };

   // Check if id is available before calling getProject
   //const project: Project | undefined = id ? getProject(id) : undefined;

   // Check if project is undefined and handle accordingly
  //  if (!project) {
  //    return <p>Project not found</p>; // or render a loading state or redirect
  //  }
  console.log(project);
  return (
    <>
      <ProjectCard project={project} />
    </>
  );
};


export default ProjectPage;