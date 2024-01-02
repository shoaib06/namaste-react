const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisine, rating, cft, image } = resData.info;
    const { deliveryTime } = resData.order;

    return (


        <div className="res-card"  >
            <img className="res-logo" src={image.url} />
            <h3>{name}</h3>
            <h4>{cuisine.map((cuisine) => cuisine.name).join(', ')}</h4>
            <h4>{rating.aggregate_rating}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{cft.text}</h4>
        </div>
    )


}

export default RestaurantCard;