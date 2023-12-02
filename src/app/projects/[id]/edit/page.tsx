"use client";
import EditProjectForm from "@/components/EditProjectForm";
import { getProject, getUsuarios } from "@/api/proyectos";

export default async function EditProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProject(params.id);
  const employees: any[] = await getUsuarios();
  return (
    <>
      <EditProjectForm
        project={project}
        employees={employees}
      ></EditProjectForm>
    </>
  );
}
