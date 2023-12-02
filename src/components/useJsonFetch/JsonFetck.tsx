import "./JsonFetch.css";
import ResponseData from "./ResponseData";
import ResponseError from "./ResponseError";
import ResponseLoad from "./ResponseLoad";

export default function JsonFetch() {
    return(
        <>
            <div className="container">
                <div><b>url запроса</b></div>
                <div><b>data</b></div>
                <div><b>loading</b></div>
                <div><b>error</b></div>            
            </div>
            <ResponseData />
            <ResponseError />
            <ResponseLoad />
        </>        
    )
}