import { Component } from "react";

class UserdetailsClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10,
            count2: 20,
        }
    }
    componentDidMount() {
        // console.log("Child componentDidMount", this.state);
    }
    render() {
        // console.log("Child render", this.state);
        const { name, phone } = this.props;
        const { count, count2 } = this.state;
        return (
            <div className="text-center mb-5">
                <h2 >Name : {name} {count2}- <span>Count: {count}</span></h2>
                <hr />
                <button onClick={() => {
                    this.setState({
                        count: count + 1,
                        count2: count2 + 2,
                    })
                }}> Incress count value</button>
                <h3>Email : Saravanan@gmail.com</h3>
                <h3>Phone : {phone}</h3>
            </div>
        )
    }
}
export default UserdetailsClass;