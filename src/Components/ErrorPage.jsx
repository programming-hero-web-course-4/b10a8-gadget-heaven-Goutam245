import errorImage from '../assets/images (1).jfif'
const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center h-screen gap-8'>
                <h1 className='text-5xl font-bold'>Page Not Found 404!</h1>
                <img className='rounded-lg' src={errorImage} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;