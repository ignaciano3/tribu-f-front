"use client";
import { Project } from "@/types/types";
import { useRouter } from 'next/navigation';
import ProjectCard from "@/components/projectCard";
import Button from "@/components/button";


const getProject = async ({id}: {id: string}) => {
  //poner nuestra base de datos
  const response = await fetch(`http://127.0.0.1:8000/proyectos/get_proyecto/${id}`); //poner nuestra base de datos
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

export default function ProyectCard() {
  //const router = useRouter();
  //const id = router.query.id as string;
  //const { id } = router.query;
  const project: Project = {
    id: 1,
    name: "Counter Strike",
    state: "En proceso",
  };
  //const project: Project = getProject(id);
  return (
    <>
      <ProjectCard project={project} />
    </>
  );
};
