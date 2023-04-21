import instance from ".";
import { IProduct,addForm,updateForm } from "../models";

 const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}
 const getById = (id:  string) => {
    const uri = "/products/" + id   
    return instance.get(uri)
}
 const update = (id: string, body: updateForm) => {
    const uri = "/products/" + id
    return instance.put(uri, body)
}
const DeleteProducts = (id: string | number) => {
    return instance.delete("/products/" + id)
}
const AddProducts = (products: addForm) => {
    return instance.post("/products", products)
}
export {getAll,getById,update,DeleteProducts,AddProducts}