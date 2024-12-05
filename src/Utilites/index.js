import toast from "react-hot-toast";

const getProductLoacalStorage = ()=>{
    const getItems = localStorage.getItem('item');
    if(getItems){
        return JSON.parse(getItems);
    }
    return [];
}

const addProductLocalStorage = (product)=>{
    const getItems = getProductLoacalStorage();
    const isExist = getItems.find(item => item.product_id === product.product_id);
    if(isExist){
        return toast.error('Allready Added to Card!');
    }
    getItems.push(product);
    localStorage.setItem('item', JSON.stringify(getItems));
    toast.success('Successfully Added to Card !');
}

const removeLoclaStorage = (id) => {
    const getItems = getProductLoacalStorage();
    const remainingProduct = getItems.filter(product => product.product_id !== id);
    localStorage.setItem('item', JSON.stringify(remainingProduct));
    toast.success('Successfully Removed to Card !');
}

//For wish List
const getWisthListLocalStorage = () =>{
    const wishList = localStorage.getItem('wish-list');
    if(wishList){
        return JSON.parse(wishList);
    }
    return [];
}

const setWishListLocalStorage = (product) => {
    const wishList = getWisthListLocalStorage();
    const isExist = wishList.find(item => item.product_id === product.product_id);
    if(isExist){
        return toast.error('Allready Added to wish list !');
    }
    wishList.push(product);
    localStorage.setItem('wish-list', JSON.stringify(wishList));
    toast.success('Successfully Added to wish list !');
}

const removeWishList = (id) => {
    const wishList = getWisthListLocalStorage();
    const remainingProduct = wishList.filter(product => product.product_id !== id);
    localStorage.setItem('wish-list', JSON.stringify(remainingProduct));
    toast.success('Successfully Removed to wish list !');
}

export {getProductLoacalStorage, addProductLocalStorage, removeLoclaStorage, getWisthListLocalStorage, setWishListLocalStorage, removeWishList};