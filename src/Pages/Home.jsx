import { Link, Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Heading from "../Components/Heading";
import { useEffect } from "react";
const Home = () => {
    useEffect(()=> {
        document.title = "Gedzet | Gedzet-Zone";
    }, []);
    const categoriesData = useLoaderData();
    return (
        <div>
            <div className="bg-[#9538E2] pt-2 pb-40 sm:pb-[280px] rounded-b-xl w-11/12 mx-auto">
                <Heading
                    title={'Upgrade Your Tech Accessorize with Gadzet Zone Accessories'}
                    subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}>
                </Heading>
                <div className="text-center mt-4">
                    <Link to="/dashboard" className="btn btn-primary text-[#] text-base font-bold">Shop Now</Link>
                </div>
            </div>
            <Banner></Banner>
            <h1 className="text-4xl font-bold text-center">Explore Cutting-Edge Gadgets</h1>
            <div className="flex flex-col sm:flex-row justify-center gap-10 py-10 w-11/12 mx-auto">
                <div className=" sm:w-[20%] h-[360px] bg-gray-200 flex justify-center py-6 rounded-lg">
                    <Categories categoriesData={categoriesData}></Categories>
                </div>
                <div className=" sm:w-[80%]">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Home;



{/* <Heading
    >
</Heading> */}

