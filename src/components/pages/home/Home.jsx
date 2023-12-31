import Cards from "./cards/Cards";
import Extra from "./extra/Extra";
import SingleCar from "./singleCar/SingleCar";

const Home = () => {

    const containerStyle = {
        backgroundImage: 'url("https://img.freepik.com/free-photo/modern-car-futuristic-road_23-2151021107.jpg?t=st=1701797946~exp=1701801546~hmac=c3fea2c111d9dd7fd0d9a522a24503631a1eecd5982f97875d180b5f5a7dede8&w=996")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <>
            <div style={containerStyle}>
                <div className="flex items-center justify-center h-[91vh] px-8 lg:px-0">
                    <h1 className="lg:text-5xl text-3xl text-white font-bold">Find Your Favorite Car In A Minute!</h1>
                </div>
            </div>
            <SingleCar></SingleCar>
            <Cards></Cards>
            <Extra></Extra>
        </>
    );
};

export default Home;