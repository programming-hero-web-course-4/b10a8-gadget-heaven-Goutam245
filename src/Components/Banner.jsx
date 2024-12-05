import baneer_image from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="relative pb-[150px] sm:pb-[280px]">
            <div className="max-w-6xl mx-auto border border-dashed border-blue-300 rounded-xl p-6 flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img className="w-full h-52 sm:h-[450px] rounded-xl" src={baneer_image} alt="" />
            </div>
        </div>
    );
};

export default Banner;