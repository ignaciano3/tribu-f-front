"use client";
import EditProjectForm from "@/components/EditProjectForm";
import { Project } from "@/types/types";
import { getProject } from "@/api/proyectos";

export default async function EditProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProject(params.id);

  return (
    <>
      <EditProjectForm project={project}></EditProjectForm>
    </>
  );
}
