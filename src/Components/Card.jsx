import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const Card = ({ product }) => {
    const navigate = useNavigate();
    const { product_id, product_title, product_image, price } = product;
    return (
        <div className="border border-blue-400 border-dashed px-0 py-5 rounded-lg flex flex-col items-center justify-center">
            <img src={product_image} alt="" />
            <div className='space-y-1 text-center'>
                <h1 className='text-xl font-bold'>{product_title}</h1>
                <p className='font-semibold text-gray-600'>Price: ${price}</p>
                <button onClick={()=>navigate(`/product/${product_id}`)} className="btn  btn-info  text-white px-8">View Details</button>
            </div>
        </div>
    );
};
Card.propTypes = {
    product: PropTypes.object.isRequired,
}
export default Card;