import { iAlumno } from "../Interfaces/i-alumno"

export class Alumno implements iAlumno {
        id: string;
        nombre: string;
        apellido: string;
        mail: string;
        estado: boolean;

    constructor(
        id: string,
        nombre: string,
        apellido: string,
        mail: string,
        estado: boolean,
        ){
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.mail = mail;
            this.estado = estado;
        }
    }
