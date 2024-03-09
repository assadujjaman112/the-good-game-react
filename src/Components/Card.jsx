

const Card = ({item}) => {
    return (
        <div className="bg-gray-200 px-2 py-5 rounded-lg flex justify-center">
            <div className="w-32 h-80 ">
                <img src={item.image_url} alt="" className="w-full h-full"/>
            </div>
        </div>
    );
};

export default Card;