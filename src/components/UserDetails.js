import { useEffect, useState } from "react";

const Userdetails = (props) => {
    const { name, phone } = props;
    // console.log(props);
    const [count, setCount] = useState(20);
    const [count1, setCount1] = useState(20);
    useEffect(() => {
        const timer = setInterval(() => {
            // console.log({ setCount })
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);
    return (
        <div className="text-center">
            <h2 >Name : {name} - {count1}<span>Count: {count}</span></h2>
            <hr />
            <button onClick={() => {
                setCount(count + 1);
                setCount1(count1 + 2);
            }}>
                Incress count value
            </button>
            <h3>Email : Saravanan@gmail.com</h3>
            <h3>Phone : {phone}</h3>
        </div>
    )
}
export default Userdetails;