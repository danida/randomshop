export type ProductsType = Array<ProductType>

export type ProductType = {
    id:number,
    price:number,
    color?:string | null,
    description?:string| null,
    name:string,
    size?:number | null,
}