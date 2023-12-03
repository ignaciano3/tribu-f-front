import ProjectTable from "@/components/ProjectTable";
import { GetProjects } from "@/api/proyectos";
import React from "react";

export default async function ProjectGrid() {
  const projects = await GetProjects();
  return (
    <>
      <ProjectTable projects={projects}></ProjectTable>
    </>
  );
}
/*
export default async function ProjectGrid() {
  const projects = await getProjects();
  // const [originalProjects, setOriginalProjects] = useState([]);
  // const [filteredProjects, setFilteredProjects] = useState([]);
  // const [search, setSearch] = useState("");

  // const loadProjects = async () => {
  //   try {
  //     const loadedProjects = await getProjects();
  //     setOriginalProjects(loadedProjects);
  //     setFilteredProjects(loadedProjects); // Inicialmente, muestra todos los proyectos
  //   } catch (error) {
  //     console.error("Error al cargar proyectos:", error);
  //   }
  // };

  // // useEffect(() => {
  // //loadProjects();
  // // }, []);
  // //const loadedProjects = await getProjects();

  // const handleSearchChange = (e: any) => {
  //   setSearch(e.target.value);
  // };

  // const handleSearchButtonClick = () => {
  //   const searchTerm = search.toLowerCase();
  //   const filtered = originalProjects.filter((project: Project) =>
  //     project.name.toLowerCase().includes(searchTerm)
  //   );
  //   setFilteredProjects(filtered);
  // };

  // const resetSearch = () => {
  //   setSearch("");
  //   setFilteredProjects(originalProjects);
  // };
  return (
    <>
      <div className="container max-w-7xl mx-auto mt-8">
        <div className="flex justify-between mb-8 max-h-10">
          <h1 className="text-3xl font-bold decoration-gray-400">Proyectos</h1>
          <div className="flex">
            <input
              className="mr-5 rounded-lg bg-gray-100 p-4"
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Buscar proyecto"
            />
            <button
              className="mr-8 border border-gray-700 px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 dark:text-white ,hover:bg-gray-800 dark:text-white dark:hover:bg-gray-800"
              onClick={handleSearchButtonClick}
            >
              Buscar
            </button>

            <Nuevo title="Crear nuevo proyecto" href="/projects/create" />
          </div>
        </div>
        <div className="flex flex-col">
          <table className="min-w-full">
            <thead>
              <tr>
                <HeaderItem title="ID" />
                <HeaderItem title="Nombre" />
                <HeaderItem title="Estado" />
                <HeaderItem title="Fecha de creación" />
              </tr>
            </thead>
            <tbody>
              {projects.map((project: Project) => (
                <ProjectGridRow key={project.name} project={project} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
*/
/*
export default async function ProjectGrid() {
  const projects = await getProjects();
  const router = useRouter();
  const search = router.query.search || "";

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    router.push(`/?search=${searchTerm}`);
  };

  const handleSearchButtonClick = () => {
    // Puedes realizar acciones adicionales aquí si es necesario
  };

  // Obtén tus proyectos de la manera adecuada

  // Filtrar proyectos según el valor de búsqueda
  const filteredProjects = projects.filter((project: any) =>
    project.name.toLowerCase().includes(search.toString().toLowerCase())
  );

  return (
    <>
      <div className="container max-w-7xl mx-auto mt-8">
        <div className="flex justify-between mb-8 max-h-10">
          <h1 className="text-3xl font-bold decoration-gray-400">Proyectos</h1>
          <div className="flex">
            <input
              className="mr-5 rounded-lg bg-gray-100 p-4"
              type="text"
              value={search.toString()}
              onChange={handleSearchChange}
              placeholder="Buscar proyecto"
            />
            <button
              className="mr-8 border border-gray-700 px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 dark:text-white ,hover:bg-gray-800 dark:text-white dark:hover:bg-gray-800"
              onClick={handleSearchButtonClick}
            >
              Buscar
            </button>

            <Nuevo title="Crear nuevo proyecto" href="/projects/create" />
          </div>
        </div>
        <div className="flex flex-col">
          <table className="min-w-full">
            <thead>
              <tr>
                <HeaderItem title="ID" />
                <HeaderItem title="Nombre" />
                <HeaderItem title="Estado" />
                <HeaderItem title="Fecha de creación" />
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project: Project) => (
                <ProjectGridRow key={project.name} project={project} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
*/
