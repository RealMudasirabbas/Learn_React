import  ImageSizeUrl  from "../../utils/ImageSizeUrl";

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
            src={ImageSizeUrl(person, imageThumbnailSize)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default Avatar;