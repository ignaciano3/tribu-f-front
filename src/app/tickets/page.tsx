import Table from "@/components/Table/Table";
import fetchWithTimeOut from "@/helpers/fetchWithTimeout";

async function getTickets() {
  return values;
}

const values = [
  {id: "#10258", title: "Ticket 1", status: "En proceso", project: "Proyecto 1 v1.2", updated: "Hace 28 minutos", client: "Ignacio", priority: "Alta", severity: "S1"},
  {id: "#10232", title: "Ticket 2", status: "Cerrado", project: "Proyecto 2 v2.1", updated: "Hace 5 minutos", client: "Facundo", priority: "Media", severity: "S2"},
  {id: "#10267", title: "Ticket 3", status: "Abierto", project: "Proyecto 3 v1.2", updated: "Hace 15 minutos", client: "Martina", priority: "Baja", severity: "S4"},
];

export default async function Tickets() {
  //const product = getProduct();
  const tickets = await getTickets();

  return (
    <div>
      <Table data={tickets} />
    </div>
  );
}

/*
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tickets</title>
<style>
  body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4; }
  .container { max-width: 960px; margin: 20px auto; background-color: #fff; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
  h2 { text-align: center; }
  .table-wrapper { overflow-y: auto; max-height: 400px; }
  table { width: 100%; border-collapse: collapse; }
  th, td { text-align: left; padding: 8px; border-bottom: 1px solid #ddd; }
  th { background-color: #f2f2f2; }
  .btn { padding: 10px 15px; background-color: #5c85d6; color: white; border: none; border-radius: 4px; cursor: pointer; text-decoration: none; }
  .btn:hover { background-color: #3d5fa3; }
  .btn-create { background-color: #4CAF50; margin-top: 20px; display: block; width: 200px; margin-left: auto; margin-right: auto; }
  .btn-create:hover { background-color: #367B35; }
  .dropdown { padding: 5px; }
</style>
</head>
<body>

<div class="container">
  <h2>Tickets</h2>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>ID ticket</th>
          <th>Título</th>
          <th>Estado</th>
          <th>Proyecto</th>
          <th>Actualizado</th>
          <th>Cliente</th>
          <th>Prioridad</th>
          <th>Severidad</th>
          <th>Ver más</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#10258</td>
          <td>Ticket 1</td>
          <td><select class="dropdown"><option value="en_proceso">En proceso</option><option value="cerrado">Cerrado</option><option value="abierto">Abierto</option></select></td>
          <td>Proyecto 1 v1.2</td>
          <td>Hace 28 minutos</td>
          <td>Ignacio</td>
          <td>Alta</td>
          <td>S1</td>
          <td><a href="#" class="btn">Ver</a></td>
        </tr>
        <tr>
          <td>#10232</td>
          <td>Ticket 2</td>
          <td><select class="dropdown"><option value="en_proceso">En proceso</option><option selected value="cerrado">Cerrado</option><option value="abierto">Abierto</option></select></td>
          <td>Proyecto 2 v2.1</td>
          <td>Hace 5 minutos</td>
          <td>Facundo</td>
          <td>Media</td>
          <td>S2</td>
          <td><a href="#" class="btn">Ver</a></td>
        </tr>
        <tr>
          <td>#10267</td>
          <td>Ticket 3</td>
          <td><select class="dropdown"><option value="en_proceso">En proceso</option><option value="cerrado">Cerrado</option><option selected value="abierto">Abierto</option></select></td>
          <td>Proyecto 3 v1.2</td>
          <td>Hace 15 minutos</td>
          <td>Martina</td>
          <td>Baja</td>
          <td>S4</td>
          <td><a href="#" class="btn">Ver</a></td>
        </tr>
          <td>#10244</td>
          <td>Ticket 4</td>
          <td><select class="dropdown"><option value="en_proceso">En proceso</option><option value="cerrado">Cerrado</option><option selected value="abierto">Abierto</option></select></td>
          <td>Proyecto 3 v2.2</td>
          <td>Hace 23 minutos</td>
          <td>Victoria</td>
          <td>Media</td>
          <td>S4</td>
          <td><a href="#" class="btn">Ver</a></td>
      </tbody>
    </table>
  </div>
  <button class="btn btn-create">Crear nuevo ticket</button>
</div>

</body>
</html>

*/
