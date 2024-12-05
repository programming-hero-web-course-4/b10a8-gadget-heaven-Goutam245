import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ProductCard = () => {
    const { category } = useParams();
    const data = useLoaderData();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (category) {
            const filterProductCategory = [...data].filter(product => product.category === category);
            setProducts(filterProductCategory);
        }
        else{
            setProducts(data);
        }
    }, [data, category]);
    return (
        <div className="w-11/12 mx-auto px-2">
            {
                products.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        products.map((product, idx) => <Card key={idx} product={product}></Card>)
                    }
                </div> : <div className="flex flex-col items-center justify-center h-[230px]">
                    <h1 className="text-center text-6xl font-bold text-blue-400">Not Found Data, Coming Soon</h1>
                </div>
            }
        </div>
    );
};

export default ProductCard;