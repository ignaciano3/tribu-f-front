import ProjectForm from "@/components/projectForm";
import { GetUsuarios } from "@/api/proyectos";

const CreateProjectPage = async () => {
  const employees: any[] = await GetUsuarios();
  return (
    <>
      <ProjectForm employees={employees}></ProjectForm>
    </>
  );
};

export default CreateProjectPage;
