import Avatar from "./Avatar";
import Props from "./Props";



function SizeProp(props) {

    
    return (
        <>
        <Avatar
            size={40}
            person={{
                name: "Gregorio Y. Zara",
                imageId: "7vQD0fP",
            }}
            />
        <Props {...props}/>
            </>
    );
}

export default SizeProp