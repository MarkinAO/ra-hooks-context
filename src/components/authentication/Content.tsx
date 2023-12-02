import { useContext } from "react";
import Access from "./context";
import News from "./News";

export default function Content() {
    const { access } = useContext(Access);

    return(
        <>
            { !access && 
                <div className="content">
                    <h1>Neto Social</h1>
                    <div>Facebook and VK killer.</div>
                </div>
            }
            { access && <News /> }
        </>
    )
}