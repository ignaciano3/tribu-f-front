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
  id: number;
  title: String;
  severity: string;
  priority: string;
  state: string;
  client_id: number;
  product_id: number;
  description: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  creation_date: Date;
  expected_duration_days: number;
  end_date: Date;
  project_id_leader: string;
  state: string;
}

export interface Task {
  id: number;
  name: string;
  state: string;
  description: string;
  project_id: number;
  priority: string;
  responsible_id: number;
  creation_date: Date;
  end_date: Date;
}

export interface CreateTicket {
  title: string;
  severity: string;
  priority: string;
  state: string;
  description: string;
  product_id: string;
}
