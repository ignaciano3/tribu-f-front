import ProjectCard from "@/components/ProjectCard";
import { getProject, getUsuario } from "@/api/proyectos";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const project = await getProject(id);
  const employee = await getUsuario(project?.project_leader_id ?? "");
  return (
    <>
      <ProjectCard project={project} employee={employee} />
    </>
  );
}
