"use client";
import { Project } from "@/types/types";
import ProjectForm from "@/components/projectForm";
import Button from "@/components/button";

const CreateProject = async () => {
  return (
    <>
      <div>
        <div className="container max-w-7xl mx-auto mt-8">
          <div className="mb-4">
            <h1 className="text-3xl font-bold decoration-gray-400">
              Proyectos
            </h1>
          </div>
          <ProjectForm></ProjectForm>
        </div>
      </div>
    </>
  );
};

export default ProjectForm;
