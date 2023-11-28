export default function TicketForm() {
  return (
    <form action="/submit-ticket" method="post">
      <div>
        <label>Título</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="No funciona el botón de guardar"
        />
      </div>
      <div>
        <label>Descripción</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Describe el problema"
        />
      </div>
      <div>
        <label htmlFor="severity">Severidad</label>
        <select id="severity" name="severity">
          <option value="S1">S1</option>
          <option value="S2">S2</option>
          <option value="S3">S3</option>
          <option value="S4">S4</option>
        </select>
      </div>
      <div>
        <label htmlFor="priority">Prioridad</label>
        <select id="priority" name="priority">
          <option value="alta">Alta</option>
          <option value="media">Media</option>
          <option value="baja">Baja</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="tareasAsociadas">Tareas Asociadas</label>
        <select id="tareasAsociadas" name="tareasAsociadas[]" multiple></select>
        <button type="button" className="create-task-button">
          Crear tarea
        </button>
      </div>
      <div>
        <label htmlFor="user-email">Email usuario</label>
        <input
          type="email"
          id="user-email"
          name="user-email"
          placeholder="name@example.com"
        />
      </div>
      <div className="buttons">
        <button type="button" className="cancel-button">
          Cancelar
        </button>
        <button type="submit" className="create-button">
          Crear
        </button>
      </div>
    </form>
  );
}
