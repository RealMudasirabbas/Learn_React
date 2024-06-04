import Panel from "./Panel.jsx";
import { getImageUrl } from "../utils/ImageUrl.jsx";



export default function Profile({ person }) {
    
    return (
        <Panel>
            <Header scientist = {person}/>
            <Avatar scientist = {person} />
        </Panel>
    );
}

function Header({scientist}) {
    return <h1>{scientist.name}</h1>;
}

function Avatar({scientist}) {
    return (
        <img
            className="avatar"
            src={getImageUrl(scientist)}
            alt={scientist.name}
            width={50}
            height={50}
        />
    );
}
