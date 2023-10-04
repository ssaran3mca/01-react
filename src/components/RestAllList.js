import { useDispatch } from 'react-redux';
import { IMG_PROD_URL } from '../utility/mockData';
import { addItem } from '../utility/cardSlice'
const RestAllList = ({ items }) => {
    // const [itemCards] = items
    // console.log(itemCards.data);
    // console.log(items);
    const dispatch = useDispatch();
    const handleClickAdd = (item) => {
        dispatch(addItem(item))
    };
    return (
        <div >
            {/* <div>{items[0].card.info.name}</div> */}

            {items.map((item) => (
                < div >
                    <div key={item.card.info.id} id="{item.card.info.id}" className="accordion-collapse collapse show" >
                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-10">
                                    <b>{item.card.info.name} - Rs : {item.card.info.defaultPrice / 100}</b>
                                    <p>    <small>{item.card.info.description}</small></p>
                                </div>
                                <div className="col-2 position-relative">
                                    <img src={IMG_PROD_URL + item.card.info.imageId} className='img-fluid rounded-start' />
                                    <button className='btn btn btn-light add-btn' onClick={() => handleClickAdd(item)}>  Add + </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )



            )}

        </div>
    )
}
export default RestAllList;