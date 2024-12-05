import PropTypes from 'prop-types';
const Heading = ({title, subtitle}) => {
    return (
        <div className="w-full lg:w-1/2 mx-auto text-center space-y-3">
            <h1 className="text-4xl px-1 sm:text-6xl text-white font-bold">{title}</h1>
            <p className="text-base text-white px-1">{subtitle}</p>
        </div>
    );
};
Heading.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}
export default Heading;