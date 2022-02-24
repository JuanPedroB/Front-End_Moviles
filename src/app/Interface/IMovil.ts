import { Antutu } from "./Antutu";
import { Bateria } from "./Bateria";
import { Pantalla } from "./Pantalla";
import { Procesador } from "./Procesador";
import { Ram } from "./Ram";

export interface IMovil{
    id : number;
    marca : string;
    modelo: string;
    pantalla: Pantalla;
    ram: Ram;
    procesador: Procesador;
    antutu: Antutu;
    bateria: Bateria;
    precio: number;
}