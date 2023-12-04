export interface Usuario {
  nombre: string;
  apellido: string;
  legajo: number;
}

export interface Cliente {
  id: string;
  "razon social": string;
  cuit: number;
}

export interface Version {
  product_id: string;
  version : string;
  id: string;
}

export interface Product {
  id: string;
  name: string;
  version: string;
}

export interface Ticket {
  id: number;
  title: string;
  description: string;
  severity: string;
  priority: string;
  state: string;
  version_id: number;
  date_creacion: string;
  client_id: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  creation_date: Date;
  expected_duration_days: number;
  end_date: Date;
  project_leader_id: string;
  state: string;
}

export interface Task {
  id: number;
  name: string;
  state: string;
  description: string;
  project_id: number;
  priority: string;
  responsible_id: string;
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

export interface UpdateTicket {
  title: string;
  severity: string;
  priority: string;
  state: string;
  description: string;
}

export interface CreateTicketParams {
  version_id: string;
  client_id: string;
}

