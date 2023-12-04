import AsosNewTaskForm from "@/components/AsosNewTaskForm";
import { GetProjects, GetUsuarios } from "@/api/proyectos";

export default async function AsosOldTaskPage({
  params,
}: {
  params: { idTicket: string };
}) {
  const projects = await GetProjects();
  const employees = await GetUsuarios();
  return (
    <>
      <AsosNewTaskForm
        projects={projects}
        idTicket={params.idTicket}
        employees={employees}
      />
    </>
  );
}
