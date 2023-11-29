"use client";
import EditProjectForm from "@/components/EditProjectForm";
import { Project } from "@/types/types";

const getProject = async (id: string): Promise<Project> => {
  //poner nuestra base de datos
  const url = process.env.proyectosApiUrl + "projects/get_project/" + id;

  const response = await fetch(url); //poner nuestra base de datos
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Hubo un error en el back");
  }
};

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  console.log("ID: ", params.id);
  //const router = useRouter();
  //const id = router.query;
  //const router = useRouter();

  //const { id } = router.query;
  const project = await getProject(params.id);
  console.log("page/ PROYECTO: ", JSON.stringify(project, null, 2));

  return (
    <>
      <EditProjectForm project={project}></EditProjectForm>
    </>
  );
}
