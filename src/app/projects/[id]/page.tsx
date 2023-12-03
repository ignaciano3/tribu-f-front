import ProjectCard from "@/components/ProjectCard";
import { GetProject, GetUsuario } from "@/api/proyectos";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const project = await GetProject(id);
  console.log("project en ProjectPage: ", project);
  const employee = await GetUsuario(project?.project_leader_id ?? "");
  return (
    <>
      <ProjectCard project={project} employee={employee} />
    </>
  );
}
