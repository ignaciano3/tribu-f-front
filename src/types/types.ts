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
  severity: string;
  priority: string;
  status: string;
  client_id: Number;
  product_id: Number;

  // Posible a agregar
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Project {
  id: Number;
  name: string;
  description: string;
  createdAt:Date;
  finishEstimatedAt:Date;
  finishAt:Date;
  //leader: string;
  
  //estimatedTime: Number;
  state: string;
}


export interface Task{
  id:Number;
  name:string;
  //createdAt:Date;
  //description: string;
  state: string;
}