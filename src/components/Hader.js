import { useEffect, useState, useContext } from 'react';
import { LOGO_URL } from '../utility/mockData'
import { Link } from 'react-router-dom';
import useOnline from '../utility/useOnline'
import UserLogin from '../utility/userContext';
import { useSelector } from 'react-redux';
const Heading = () => {

    const [logIN, setlogIn] = useState("logIn");
    const onlinestatu = useOnline();
    useEffect(() => {
        // console.log("useEffect");
    }, [logIN])

    const { loggedInUser } = useContext(UserLogin);
    // console.log(loggedInUser);

    const cartItems = useSelector((store) => store.carts.items);
    console.log(cartItems);
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={LOGO_URL} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" to="/">Online status {onlinestatu ? <span>S</span> : <span>N</span>}</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Grasary">Grasary</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/cart' >Cart -({cartItems.length})</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit" onClick={() => {
                                logIN === 'logIn' ? setlogIn('Logout') : setlogIn('logIn')
                            }}>{logIN}</button>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">  {loggedInUser}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Heading;