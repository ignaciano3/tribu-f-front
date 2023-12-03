import ProjectForm from "@/components/projectForm";
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
