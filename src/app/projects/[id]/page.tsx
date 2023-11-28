import ProjectCard from "@/components/projectCard";
import { Project } from "@/types/types";

const getProject = async (id : string) : Promise<Project> => {
  //poner nuestra base de datos
  const href = "http://127.0.0.1:8000/proyectos/get_proyecto/" + id;
  const response = await fetch(href); //poner nuestra base de datos
  if (response.ok){
    const data = await response.json();
    return data;
  } else {
    throw new Error("Hubo un error en el back");
  }
    
};

export default async function ProjectPage ({ params }: { params: { id: string } }) {
  console.log("ID: ", params.id)
  //const router = useRouter();
  //const id = router.query;
  //const router = useRouter();
  
  //const { id } = router.query;
  const project = await getProject(params.id);
  console.log("page/ PROYECTO: ", JSON.stringify(project, null, 2));
  // const project: Project = {
  //   id: 1,params
  //   name: "Counter Strike",
  //   state: "En proceso",
  // };

   // Check if id is available before calling getProject
   //const project: Project | undefined = id ? getProject(id) : undefined;

   // Check if project is undefined and handle accordingly
  //  if (!project) {
  //    return <p>Project not found</p>; // or render a loading state or redirect
  //  }
  return (
    <>
      <ProjectCard project={project} />
    </>
  );
};