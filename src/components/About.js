import Userdetails from './UserDetails';
import UserdetailsClass from './UserdetailsClass';
import { Component } from "react";
import UserLogin from '../utility/userContext';
class About extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        // this.timer = setInterval(() => {
        //     console.log("Mohana")
        // }, 1000);
    }
    componentWillUnmount() {
        // setInterval(() => {
        //     console.log("Mohana")
        // }, 500);
        // clearInterval(this.timer)
    }

    render() {

        return (
            <div className='container'>
                <div className=" col-3 mb-5 " >
                    <h1>About ss</h1>
                </div>
                <div>
                    <UserLogin.Consumer>
                        {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
                    </UserLogin.Consumer>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className='card p-5 mb-5 bg-warning '>
                            <Userdetails name="Saran Fucntion" phone="8745693214" />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='card p-5 bg-danger text-white'>
                            <UserdetailsClass name="Mona Class" phone="7896321456" />
                            <UserdetailsClass name="saran Class" phone="8531088339" />
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}
// const About = () => {
//     return (
//         <div className='container'>
//             <div className=" col-3 mb-5 " >
//                 <h1>About ss</h1>
//             </div>
//             <div className='row'>
//                 <div className='col-6'>
//                     <div className='card p-5 mb-5 bg-warning '>
//                         <Userdetails name="Saran Fucntion" phone="8745693214" />
//                     </div>
//                 </div>
//                 <div className='col-6'>
//                     <div className='card p-5 bg-danger text-white'>
//                         <UserdetailsClass name="Mona Class" phone="7896321456" />
//                         <UserdetailsClass name="Mona Class" phone="7896321456" />
//                     </div>
//                 </div>
//             </div>

//         </div>

//     );
// }
export default About;