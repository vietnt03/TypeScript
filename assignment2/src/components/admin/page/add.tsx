import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams, useNavigate } from 'react-router-dom'
import { AddProducts } from '../../../api/product';
import { addForm,addSchema } from '../../../models';

const AddProducts_Admin = () => {

    const navigate = useNavigate()
    const { register, watch, handleSubmit, formState: { errors } } = useForm<addForm>({
        resolver: yupResolver(addSchema),

    
    })


    const onSubmit = async (data: addForm) => {
        try {

            const response = await AddProducts(data);
            console.log(response);
            navigate('/admin')

        } catch (err) {
            console.log(err);

        }

    }


    return <>
        <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row w-full" >

                <div className="md:w-2/5 p-4">
                    <h2 className="text-xl font-bold mb-4">Thêm ảnh sản phẩm</h2>
                    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                       
                        <img width={250} src={watch(`images.${0}.base_url`)} alt="Product image" />
                       

                      
                    </div>
                    <span>Link img</span>
                    <input type="text" {...register(`images.${0}.base_url`)} className="mt-4 p-2 rounded-lg border border-gray-300 w-full" />
                    {errors.images && errors.images.message}
                </div>

                <div className="w-full">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-name">
                            Tên sản phẩm
                        </label>
                        <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-name" type="text"  {...register("name")} />
                        <p className='text-red-600 text-[10px]'>
                            {errors.name && errors.name.message}
                        </p>
                    </div>
                    <div className="price flex">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
                                Giá gốc sản phẩm
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="number"  {...register("original_price")} />
                            <p className='text-red-600 text-[10px]'>
                                {errors.original_price && errors.original_price.message}
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
                                Giá Khuyến Mãi
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="number"  {...register("price")} />
                            <p className='text-red-600 text-[10px]'>
                                {errors.price && errors.price.message}
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                       
                        
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-description">
                            Đặc Điểm Nổi Bật
                        </label>
                        <textarea rows={4} className="appearance-none block w-full   text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-description"  {...register("description")} ></textarea>
                        <p className='text-red-600 text-[10px]'>
                            {errors.description && errors.description.message}
                        </p>
                    </div>

                    <button className="bg-[#00B0D7] hover:bg-blue-400 p-2 rounded-md">Thêm</button>
                </div>

            </div >
        </form>
    </>
}

export default AddProducts_Admin