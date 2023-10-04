import Shimmers from "./Shimmer";
import { useParams } from "react-router-dom";
import { IMG_PROD_URL } from '../utility/mockData';
import useResturant from "../utility/useRestaurant";
import { API_RES } from "../utility/mockData"
import RestMain from "../components/RestMain";
import { useState } from "react";
const RestaurantList = () => {

    const { resid } = useParams();

    const resListapi = useResturant(API_RES, resid);
    const [showIndex, setShowIndex] = useState(0)

    if (resListapi === null) return <Shimmers />;

    const { name, avgRatingString, cuisines, areaName, } = resListapi?.data?.cards[0]?.card?.card?.info;
    // const { itemCards } = resListapi?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    // console.log(resListapi?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

    const resCategory = resListapi?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="container">
            <div className=" col-8 m-auto " >
                <div className="card-details my-2" >
                    <div className="card" >
                        <div className="card-body" key={name}>
                            <h1 className="card-text text-center"><b>{name}</b></h1>
                            <p className="card-text">
                                {avgRatingString}</p>
                            <p className="card-text">{cuisines.join(", ")}</p>
                            <p className="card-text">{areaName}</p>
                        </div>
                    </div>
                </div>

                {resCategory.map((Category, index) =>
                    <RestMain
                        key={Category?.card?.card.title}
                        data={Category?.card?.card}
                        showAccorten={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}

                    />

                )}
            </div>
        </div>
    )
}
export default RestaurantList;