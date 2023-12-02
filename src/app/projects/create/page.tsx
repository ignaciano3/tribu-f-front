"use client";
import ProjectForm from "@/components/projectForm";
import { Usuario } from "@/types/types";

const getUsuarios = async () => {
  // esto se lo tendria que mejorar metiendo variables
  // de entorno y sacandolo a un helper
  const url = process.env.proyectosApiUrl + "employees/get_employees";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const CreateProjectPage = async () => {
  const employees: any[] = await getUsuarios();
  return (
    <>
      <ProjectForm employees={employees}></ProjectForm>
    </>
  );
};

export default CreateProjectPage;
