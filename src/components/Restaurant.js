import { useContext } from 'react';
import { URL_IMG } from '../utility/mockData';
import UserLogin from '../utility/userContext'
const CardDetails = (props) => {
    const { resData } = props;
    const { cloudinaryImageId,
        name,
        avgRatingString,
        cuisines,
        areaName } = resData.info;
    const { loggedInUser } = useContext(UserLogin)
    return (

        <div className="card-details my-2" >
            <div className="card" >
                <img className="card-img-top" src={URL_IMG + cloudinaryImageId} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"><b>{name}</b></p>
                    <p className="card-text">
                        {/* <span className="pe-3"> <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span> */}
                        {avgRatingString}</p>
                    <p className="card-text">{cuisines.join(", ")}</p>
                    <p className="card-text">{areaName}</p>
                    <p>{loggedInUser}</p>
                </div>
            </div>
        </div>


    );
}
export default CardDetails;