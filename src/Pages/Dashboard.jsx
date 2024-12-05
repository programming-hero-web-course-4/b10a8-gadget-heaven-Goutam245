import { useEffect, useState } from "react";
import DashboardCard from "../Components/DashboardCard";
import DashboardWish from "../Components/DashboardWish";
import Heading from "../Components/Heading";
import { getProductLoacalStorage, getWisthListLocalStorage, removeLoclaStorage, removeWishList } from "../Utilites";
import successful_icon from '../assets/Group.png';
import {useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [products, setProucts] = useState([]);
    const [wihsList, setWishList] = useState([]);
    const [checkBtn, setcheckBtn] = useState(true);
    useEffect(() => {
        document.title = "Dashboard | Gedzet-Zone";
    })
    useEffect(() => {
        const addedItemLoacalStorage = getProductLoacalStorage();
        setProucts(addedItemLoacalStorage);
    }, []);

    useEffect(() => {
        const wishListLocalStorage = getWisthListLocalStorage();
        setWishList(wishListLocalStorage)
    }, []);

    const navigate = useNavigate();
    const handleRemove = (id) => {
        removeLoclaStorage(id);
        const addedItemLoacalStorage = getProductLoacalStorage();
        setProucts(addedItemLoacalStorage);
    }

    const hadleRemoveWishList = (id) => {
        removeWishList(id);
        const addedItemLoacalStorage = getWisthListLocalStorage();
        setWishList(addedItemLoacalStorage);
    }

    const handleSort = () => {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        setProucts(sorted);
        setWishList(sorted);
    }
    const handleBtnType = (sortType) => {
        if (sortType === 'cart') {
            setcheckBtn(true);
        }
        else {
            setcheckBtn(false);
        }
    }
    const totalPrice = products.reduce((current, item) => current + item.price, 0);
    const tolalPriceFixed = parseFloat(totalPrice.toFixed(2));

    const handlePurchase = () => {
        document.getElementById('customModal').showModal();
    }

    const handleCloseBtn = () => {
        localStorage.removeItem('item');
        localStorage.removeItem('wish-list');
        const addedItemLoacalStorage = getProductLoacalStorage();
        setProucts(addedItemLoacalStorage);
        const wishListLocalStorage = getWisthListLocalStorage();
        setWishList(wishListLocalStorage);
        navigate('/');
    }
    return (
        <div>
            <div className="bg-[#9538E2] pt-5 pb-20 ">
                <Heading
                    title={'Dashboard'}
                    subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}>
                </Heading>
                <div className="flex items-center justify-center gap-3 mt-3">
                    <button onClick={() => handleBtnType('cart')} className={`btn px-7 text-base ${checkBtn ? 'btn-primary' : ''}`}>Cart</button>
                    <button onClick={() => handleBtnType('wish')} className={`btn px-7 text-base ${checkBtn ? '' : 'btn-primary'}`}>Wishlist</button>
                </div>
            </div>
            <div className="max-w-5xl mx-auto">
                <div className='flex flex-col sm:flex-row items-center justify-between my-4 '>
                    {
                        checkBtn ? <h1 className="hidden sm:block text-2xl font-semibold">Cart List</h1> : <h1 className="hidden sm:block text-2xl font-semibold">Wish List</h1>
                    }
                    <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                        <h3 className="text-xl font-bold">Total cost: {tolalPriceFixed} </h3>
                        <button onClick={handleSort} className='btn text-base btn-primary hover:bg-[#483458] text-white'>Sort by Price</button>
                        <button onClick={handlePurchase} className='btn text-base btn-primary hover:bg-[#483458] text-white'>Purchase</button>
                    </div>
                </div>
                {
                    checkBtn ? products.map((product, idx) => <DashboardCard key={idx} product={product} handleRemove={handleRemove}></DashboardCard>) : wihsList.map((product, idx) => <DashboardWish key={idx} product={product} handleRemove={hadleRemoveWishList}></DashboardWish>)
                }
            </div>
            {/* Modal */}
            <dialog id="customModal" className="modal">
                <div className="modal-box flex flex-col items-center justify-center gap-2">
                    <img src={successful_icon} alt="" />
                    <h3 className="font-bold text-3xl">Payment Successfully</h3>
                    <p className="text-lg font-semibold">Thanks for purchasing.</p>
                    <p className="text-lg font-semibold">Total Amonunt: {tolalPriceFixed}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={(()=> handleCloseBtn())} className='btn text-base btn-primary hover:bg-[#483458] text-white'>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Dashboard;