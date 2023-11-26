import { Project } from "@/types/types";
import ProjectGridRow from "@/components/projectGridRow";
import Button from "@/components/button";

const getProjects = async () => {
  //poner nuestra base de datos
  const response = await fetch(
    "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/clientes-psa/1.0.0/m/api/clientes"
  ); //poner nuestra base de datos
  const data = await response.json();
  return data;
};

function HeaderItem({ title }: { title: string }) {
  return (
    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
      {title}
    </th>
  );
}

const ProjectGrid = async () => {
  //const list = await getProjects();
  let list: Project[] = [
    { id: 35135468, name: "Counter Strike 2", state: "En proceso" },
    { id: 48733457, name: "Whatsapp Azul", state: "Bloqueado" },
    { id: 12578394, name: "GTA VI", state: "No iniciado" },
    { id: 99853785, name: "Ubuntu 23.00", state: "No iniciado" },
    { id: 15145789, name: "Wikipedia 2", state: "En proceso" },
    { id: 62350978, name: "Whatsapp Rojo", state: "En proceso" },
  ];
  //const list = [Project(1, "nombre", "estado")];
  return (
    <>
      <div className="container max-w-7xl mx-auto mt-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Proyectos</h1>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <HeaderItem title="ID" />
                    <HeaderItem title="Nombre" />
                    <HeaderItem title="Estado" />
                    <HeaderItem title="" />
                  </tr>
                </thead>

                <tbody>
                  {list.map((project: Project) => (
                    <ProjectGridRow key={project.name} project={project} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <div></div>
        <div>
          <Button children="Nuevo proyecto" href="/projects/create" />
        </div>
      </div>
    </>
  );
};

export default ProjectGrid;
