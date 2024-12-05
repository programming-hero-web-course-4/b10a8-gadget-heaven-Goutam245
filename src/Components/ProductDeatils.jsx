import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "./Heading";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { addProductLocalStorage, setWishListLocalStorage } from "../Utilites";
const ProductDeatils = () => {
    const { id } = useParams();
    const data = useLoaderData();

    useEffect(()=>{
        document.title = "Product Details | Gedzet-Zone";
    })

    const [product, setProuct] = useState({});
    useEffect(() => {
        const singleData = data.find(product => product.product_id === parseInt(id));
        setProuct(singleData);
    }, [data, id]);
    const { product_title, product_image, price, availability, rating, description, specification } = product;

    const handleAddItem = (product) => {
        addProductLocalStorage(product);
    }

    const handleWishItem = (product) => {
        setWishListLocalStorage(product);
    }

    return (
        <div className="flex flex-col pb-20 md:pb-[250px]">
            <div className="bg-[#9538E2] py-10 md:pb-[250px] md:relative">
                <Heading
                    title={'Product Details'}
                    subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}>
                </Heading>
                <div className="w-full md:w-[768px] mx-auto flex flex-col sm:flex-row border-2 border-dashed border-blue-300 bg-white px-6 py-4 rounded-lg md:absolute top-[400px] left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 mt-10 sm:mt-0">
                    <img className="w-64 md:w-fll" src={product_image} alt="" />
                    <div>
                        <h3 className="text-xl font-bold">{product_title}</h3>
                        <p className="text-base font-semibold">Price: ${price}</p>
                        <button className="px-3 border bg-blue-300 rounded-full">{availability}</button>
                        <p>{description}</p>
                        <h3>Sepcification: </h3>
                        <div>
                            {specification && specification.map((list) => <li className="list-disc" key={list}>{list}</li>)}
                        </div>
                        <p>Rating: {rating}</p>
                        <div className="rating">
                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-blue-500" />
                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-blue-500" />
                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-blue-400" />
                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-blue-300" />
                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-blue-200" />
                        </div>
                        <div className="flex items-center gap-3">
                            <button onClick={()=> handleAddItem(product)} className="btn btn-outline bg-[blue] text-white">Add To Card</button>
                            <div onClick={()=> handleWishItem(product)} className="btn btn-outline bg-[blue] text-white rounded-full"><MdOutlinePlaylistAdd size={20} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDeatils;