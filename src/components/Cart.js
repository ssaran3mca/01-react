import RestAllList from "./RestAllList";
import { clearItem } from "../utility/cardSlice";
import { useDispatch, useSelector } from "react-redux";

const CartDetails = () => {
    const cartItems = useSelector((store) => store.carts.items)


    const dispatch = useDispatch();
    const handleClickDelete = () => {
        dispatch(clearItem())
    }
    return (
        <>
            <h1 className="text-center my-5">Cart <span className="btn btn-outline-success"
                onClick={handleClickDelete}> Delete cart</span> </h1>
            <div className="container">
                <div className=" col-8 m-auto " >
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <RestAllList items={cartItems} />
                        </div>
                    </div>
                </div>
            </div>
            {cartItems.length === 0 &&
                <h1 className="text-center mt-5">Please add Your cart </h1>}
        </>
    )
}
export default CartDetails