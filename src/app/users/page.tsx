import UserGridRow from "@/components/userGridRow";
import { Usuario } from "@/types/types";

const getUsuarios = async () => {
  // esto se lo tendria que mejorar metiendo variables
  // de entorno y sacandolo a un helper
  
  const response = await fetch(
    "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos"
  );
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

const UserGrid = async () => {
  const usuarios = await getUsuarios();

  return (
    <>
      {/* ACA EMPIEZA LA GRILLA */}

      <div className="container max-w-7xl mx-auto mt-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Usuarios</h1>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <HeaderItem title="ID" />
                    <HeaderItem title="Nombre" />
                    <HeaderItem title="Apellido" />
                  </tr>
                </thead>

                <tbody>
                  {usuarios.map((usuario: Usuario) => (
                    <UserGridRow key={usuario["legajo"]} usuario={usuario} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserGrid;
