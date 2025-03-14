/*
Build a React component to display an image with a caption. The image and caption should be
passed as props.
const imageLink =
 'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
const caption = 'Spring Flowers'
*/


function Image({imageLink,caption}) {
    return (
        <div>
            <img src={imageLink} alt={caption} />
        </div>
    )
}

export default Image;