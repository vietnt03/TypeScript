import { useState,useEffect } from "react"
import { Link } from 'react-router-dom'
import { DeleteProducts } from "../../../api/product"
import { IProduct } from "../../../models"
import { getAll } from "../../../api/product"
import { Image } from "antd";



const Productlist = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProduct = async () => {
        try {
            const { data } = await getAll()
            // console.log(data.);
            setProducts(data)

        } catch (err) {

        }
    }
    const handlRomve = async (id: string | number) => {
        DeleteProducts(id).then(() => {
            setProducts(products.filter((products) => products.id != id))
        }).catch((err) => {
            console.log(err.error);

        })
    }

    useEffect(() => {
        fetchProduct()
    }, [])

  return<>

<div>
            
        </div>
        <div className="flex justify-around">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Quản Lý Dự Án</h1>
            <Link
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
            to={"add"}
          >
            Add 
          </Link>


        </div>

        <table className="table-auto  my-5 w-full " >
            <thead>
                <tr className="text-center ">
                    <th id="th_id">ID</th>
                    <th >Name</th>
                    <th >Image</th>
                    <th >Price</th>
                    <th >Price gốc</th>
                    <th >Describe</th>
                    <th  >Action </th>
                </tr>
            </thead>
      <tbody>
      {products.map((products, index) => {

return (
    <tr className="text-center">
        <th >{index + 1}</th>
        <td className="font-bold">{products.name}</td>
        <td className="w-36 m-auto" >
           
            <Image
    width={200}
    src= {products.images[0].base_url}
  />
        </td>



        <td className="w-36">{products.price}</td>
        <td className="w-36 text-red-400 line-through">{products.original_price}</td>
        <td className="w-56"></td>
        <td>

        <button onClick={() => handlRomve(products.id)} data-name="${projects.name}" data-id="${projects.id}" className="bg-red-500 text-white hover:bg-blue-700 btn-remove border-0 p-2 rounded-md mx-1">
                                    Remove
                                </button>
            <button>  <Link to={"edit/" + products.id}> Update</Link></button>
           
              

         
        </td>
    </tr>
)
})}




      </tbody>
  </table>
</>
}

export default Productlist