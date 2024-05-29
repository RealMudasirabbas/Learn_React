function ImageUrl(person, size) {
    return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}




// function ImageUrl(imageId, size = "s") {
//     return "https://i.imgur.com/" + imageId + size + ".jpg";
// }

export default ImageUrl
