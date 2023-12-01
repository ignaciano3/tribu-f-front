export interface Usuario {
  nombre: string;
  apellido: string;
  legajo: number;
}

export interface Cliente {
  id: string;
  razon_social: string;
  cuit: number;
}

export interface Product {
  id: string;
  name: string;
  version: string;
}

export interface Ticket {
  id: Number;
  title: String;
  severity: string;
  priority: string;
  state: string;
  client_id: Number;
  product_id: Number;
  description: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface Project {
  id: Number;
  name: string;
  description: string;
  creation_date: Date;
  expected_duration_days: Number;
  end_date: Date;
  project_id_leader: Number;
  state: string;
}

export interface Task {
  name: string;
  state: string;
  description: string;
  project_id: Number;

  creation_date: Date;
  end_date: Date;
}


export interface CreateTicket {
  title: string;
  severity: string;
  priority: string;
  state: string;
  description: string;
}