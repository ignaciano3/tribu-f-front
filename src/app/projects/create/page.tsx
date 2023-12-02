"use client";
import ProjectForm from "@/components/projectForm";
import { Usuario } from "@/types/types";
import { getUsuarios } from "@/api/proyectos";

const CreateProjectPage = async () => {
  const employees: any[] = await getUsuarios();
  return (
    <>
      <ProjectForm employees={employees}></ProjectForm>
    </>
  );
};

export default CreateProjectPage;
