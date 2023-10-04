import { useState } from "react";
import RestAllList from "../components/RestAllList";
const RestMain = ({ data, showAccorten, setShowIndex }) => {
    // console.log(data)

    // const [showAccorten, setshowAccorten] = useState(false);
    const handleClick = () => {
        setShowIndex()
    }
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mb-2" id="headingOne">
                        <button className="accordion-button " onClick={handleClick}>
                            <spna className="me-1"> <b>{data.title} </b>  </spna> <span> ({data.itemCards.length})</span>
                        </button>
                    </h2>
                    {showAccorten && <RestAllList items={data.itemCards} />}
                </div>
            </div>
        </div >

    )
}
export default RestMain;