import EditProjectForm from "@/components/EditProjectForm";
import { GetProject, GetUsuarios } from "@/api/proyectos";

export default async function EditProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await GetProject(params.id);
  const employees = await GetUsuarios();
  return (
    <>
      <EditProjectForm project={project} employees={employees} />
    </>
  );
}
