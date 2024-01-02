import RestaurantCard from './RestaurantCard';
import restList from '../utils/restuarant';
import { useState } from 'react';
const data = restList.sections.SECTION_SEARCH_RESULT;

  

// const listofRestuarant = 

const Body = () => {
    const [listofRestuarant,setListofRestuarant] = useState(data);
    return (

        <div className="body">
            <div className="filter">
                <button className='btn topBtn'
                    onClick={()=>{
                        const filteredList = listofRestuarant.filter(
                            (res)=> res.info.rating.aggregate_rating>4
                        );
                        setListofRestuarant(filteredList)
                    }}
                >Top Rated</button>
            </div>
            <div className="res-container">

                {
                    listofRestuarant.map((res, index) => {
                        return <RestaurantCard key={res.info.resId} resData={res} />

                    })


                }


            </div>
        </div>
    )
}

export default Body;