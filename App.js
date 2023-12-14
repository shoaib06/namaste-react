import React from "react";
import ReactDOM from "react-dom/client";

/* 
-Header
    -Logo
    - Nav Items
        - Home
        - About Us
        - Cart
-Body
    - Search
    - Restuarant Container
        -Restaurant Cards
            - Img
            - Name, Star Rating, cuisine, delivery time
            
-Footer
    -Copyright
    -Links
    -Address
    - Contact
*/

const resLists = require('./resource/restuarant.json');
const data = resLists.sections.SECTION_SEARCH_RESULT;

const Header = () => {
    return (

        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisine, rating, cft, image } = resData.info;
    const { deliveryTime } = resData.order;
    // console.log(resData);
    // return;
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

const Body = () => {
    // return;
    // console.log(data)
    return (

        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">

                {
                    data.map((res, index) => {
                        return <RestaurantCard key={res.info.resId} resData={res} />

                    })


                }


            </div>
        </div>
    )
}

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);