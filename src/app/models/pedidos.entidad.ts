export interface PedidosEntidad{
    id:number,
    tipo:string,
    cantidad:number,
    idusuario?:number,
    nombre:string,
    descripcion?:string,
    precio:number,
    img?:string
}