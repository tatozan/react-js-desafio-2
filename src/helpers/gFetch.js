import imagenProyecto1 from "../assets/images/1.jpg"
import imagenProyecto2 from "../assets/images/2.jpg"
import imagenProyecto3 from "../assets/images/3.jpg"
import imagenProyecto4 from "../assets/images/4.jpg"

const products = [
    {id: "1",name: "VIVIENDA C13", price: 10000, description:"Proyecto de Vivienda Unifamiliar con todo el contenido para que la puedas ejecutar en cualquier terreno.", stock: 10, categoria: "planos", img: imagenProyecto1},
    {id: "2",name: "VIVIENDA B21", price: 20000, description:"Proyecto de Vivienda Unifamiliar con todo el contenido para que la puedas ejecutar en cualquier terreno.", stock: 10, categoria: "planos", img: imagenProyecto2},
    {id: "3",name: "VIVIENDA J20", price: 15000, description:"Proyecto de Vivienda Unifamiliar con todo el contenido para que la puedas ejecutar en cualquier terreno.", stock: 10, categoria: "proyectos", img: imagenProyecto3},
    {id: "4",name: "VIVIENDA F6", price: 17000, description:"Proyecto de Vivienda Unifamiliar con todo el contenido para que la puedas ejecutar en cualquier terreno.", stock: 10, categoria: "proyectos", img: imagenProyecto4},
];
export const gFetch = (url) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(products);
        }, 3000);        
    });
}