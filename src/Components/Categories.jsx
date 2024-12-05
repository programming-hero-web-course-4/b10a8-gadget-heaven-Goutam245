import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
const Categories = ({ categoriesData }) => {
    const navigate = useNavigate();
    return (
        <div>
            <NavLink to='/' className={({ isActive }) => `font-bold btn hover:bg-[gold] hover:text-white w-32 ${isActive ? 'bg-[blue] text-white' : ''}`}>
                <button onClick={() => navigate('/')}>All Products</button>
            </NavLink>
            <div className='flex flex-col'>
                {
                    categoriesData.map(category => <NavLink
                        key={category.id}
                        to={`/category/${category.category}`}
                        className={({ isActive }) => `font-bold mt-3 w-32 btn hover:bg-[blue] hover:text-white ${isActive ? 'bg-[blue] text-white' : ''}`}
                    >{category.category}</NavLink>)
                }
            </div>
        </div>
    );
};
Categories.propTypes = {
    categoriesData: PropTypes.array.isRequired,
}
export default Categories;