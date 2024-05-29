import  ImageUrl  from "../../utils/ImageUrl";

function Avatar({ person, size }) {

    
        let imageThumbnailSize;
        if (size > 90) {
            imageThumbnailSize = "b"
        } else {
            imageThumbnailSize = "s"
        }
    
    return (
        <img
            className="avatar"
            src={ImageUrl(person, imageThumbnailSize)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default Avatar;