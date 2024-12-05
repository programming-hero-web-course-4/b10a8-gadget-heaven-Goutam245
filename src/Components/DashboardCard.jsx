import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const DashboardCard = ({ product, handleRemove }) => {
    useEffect(()=>{
        document.title = "Dashboard Cart | Gedzet-Zone";
    },[]);
    const {product_id, product_title, product_image, warranty, price, description } = product;
    return (
        <div className='flex justify-between border-2 border-dashed border-blue-300 rounded-xl px-5 py-2 items-center mb-6'>
            <div className='flex flex-col sm:flex-row  sm:gap-3 sm:items-center'>
                <img className='w-32 sm:h-32 ' src={product_image} alt="" />
                <div>
                    <h1 className='text-xl font-bold'>{product_title}</h1>
                    <p className='text-base'>{description}</p>
                    <p className='text-base'>{warranty}</p>
                    <h4 className='text-base font-semibold'>Price: ${price}</h4>
                </div>
            </div>
            <div onClick={()=> handleRemove(product_id)} className='btn btn-outline btn-info'><RiDeleteBin6Line size={28} /></div>
        </div>
    );
};
DashboardCard.propTypes = {
    product: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired,
}
export default DashboardCard;