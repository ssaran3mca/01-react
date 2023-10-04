import { useContext, useEffect, useState } from 'react';
import CardDetails from './Restaurant';
import Shimmers from './Shimmer';
import { Link } from 'react-router-dom';
import { API_HONE } from '../utility/mockData';
import useOnline from '../utility/useOnline';
import UserLogin from '../utility/userContext';
const BodyLayout = () => {
    const [apiData, setapiData] = useState([]);
    const [filterData, setfilterData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(API_HONE);
        const json = await data.json();
        setapiData(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterData(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    // console.log('json');
    const [SearchBox, setSearchBox] = useState([]);
    const onlinestatus = useOnline();
    if (onlinestatus === false) {
        return (
            <h1>offline : Please check yout internet connection </h1>
        )
    }
    const { loggedInUser, setUserName } = useContext(UserLogin);

    return apiData.length == 0 ? <Shimmers /> : (

        <div className="container">

            <form className="form-inline my-2 my-lg-5 text-center">
                <label>
                    <input className="form-control mr-sm-2  my-2" type="text" placeholder={SearchBox}
                        onChange={(e) => {
                            setSearchBox(e.target.value);
                        }}
                        value={SearchBox} />
                </label>
                <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit"
                    onClick={(e) => {
                        const filterBox = apiData.filter(
                            (res) => res.info.name.toLowerCase().includes(SearchBox.toLowerCase())
                        )
                        setfilterData(filterBox);
                        e.preventDefault();
                    }

                    } >Filter search</button>
                <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit"
                    onClick={(e) => {
                        const resObjs1 = apiData.filter(
                            (res) => res.info.avgRatingString > 4
                        )
                        setfilterData(resObjs1);
                        e.preventDefault();
                    }

                    } >Hottal</button>
                <label>
                    <input className="form-control mr-sm-2  my-2" type="text"
                        // value={loggedInUser}
                        placeholder={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </label>
            </form>
            <div className="row">
                {
                    filterData.map((restaurant) => (
                        <div className=" col-3" key={restaurant.info.id}>
                            <Link key={restaurant.info.id} to={"restaurantlist/" + restaurant.info.id}><CardDetails resData={restaurant} /> </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BodyLayout;