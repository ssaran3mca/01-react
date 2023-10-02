import { useRouteError } from "react-router-dom";
const ErrorMessage = () => {
    const err = useRouteError();
    return (
        <div className="container">
            <div className="pt-5 text-center">
                <h1> {err.statusText} </h1>
                <h3> Something went wrong</h3>
                <h3>{err.status}</h3>
            </div>
        </div>
    )
};
export default ErrorMessage;