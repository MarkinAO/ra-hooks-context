import { itemData } from './models';

interface DetailsProps {
    item: itemData | undefined
}

export default function Details(props: DetailsProps) {    
    const { item } = props;
    if(!item) return;

    return(
        <>
            <div className="itemContainer">            
                <img src={item?.avatar} alt="" className="itemImg" />
                <div className="listItem">{item?.name}</div>
                <div className="listItem">{"City: " + item?.details.city}</div>
                <div className="listItem">{"Company: " + item?.details.company}</div>
                <div className="listItem">{"Position: " + item?.details.position}</div>
            </div>
        </>
    )
}