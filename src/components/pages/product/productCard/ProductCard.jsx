// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactStarsRating from 'react-stars-rating';

const ProductCard = ({ brand }) => {
    const { _id, name, brandName, type, price, des, rating, image } = brand || {};
    const num = parseInt(_id);
    return (
        <>
            <div className="card shadow-xl h-full">
                <figure className="px-2 pt-2">
                    <img src={image} alt="Car" className="rounded-xl h-[50vh]" />
                </figure>
                <div className="pt-10 pl-10">
                    <p>
                        <ReactStarsRating
                            value={rating}
                        />
                    </p>
                </div>
                <p className="mx-6 p-1 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                    {brandName}
                </p>
                <p className="mx-6 p-1 mt-3 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                    {name}
                </p>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {type}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {price} $
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {des}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    {/* <Link to={`/details/${  }`}> */}
                    <div className="md:flex gap-10 justify-between md:mb-5">
                        <div className="form-control md:w-1/2 mb-2 lg:mb-0">
                            <Link to={`/details/${num}`}> <button
                                className="block w-full select-none rounded-lg bg-gray-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Details
                            </button></Link>
                        </div>
                        <div className="form-control md:w-1/2">
                            <Link to={``}> <button
                                className="block w-full select-none rounded-lg bg-gray-500 text-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Update
                            </button></Link>
                        </div>
                    </div>

                    {/* </Link> */}
                </div>
            </div>
        </>
    );
};

ProductCard.propTypes = {
    brand: PropTypes.node
}

export default ProductCard;