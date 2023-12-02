"use client";
import TaskForm from "@/components/TaskForm";
import { Usuario } from "@/types/types";
import { getUsuarios } from "@/api/proyectos";

export default async function CreateTaskPage({
  params,
}: {
  params: { id: string };
}) {
  const employees: any[] = await getUsuarios();
  return (
    <>
      <TaskForm project_id={params.id} employees={employees}></TaskForm>
    </>
  );
}
