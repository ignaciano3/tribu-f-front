"use client"
import { Project } from "@/types/types";
import Button from "@/components/button";
import ProjectCard from "@/components/projectCard";

const getProject = async () => {
    //poner nuestra base de datos
      const response = await fetch("https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/clientes-psa/1.0.0/m/api/clientes")//poner nuestra base de datos
    const data = await response.json()
    return data
  }
  
function HeaderItem({ title }: { title: string }) {
    return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{title}</th>
}

const ProyectCard = () => {
    let project: Project = 
        { id: 35135468, name: "Counter Strike 2", state: "En proceso" };
    return (
        <>  
            <ProjectCard project={project}></ProjectCard>
           <div className="container max-w-7xl mx-auto mt-8">
              <div className="mb-4">
                  <h1 className="text-3xl font-bold decoration-gray-400">Proyectos</h1>
                  
              </div>
            </div>
        </>
    )
}
    
export default ProjectCard;