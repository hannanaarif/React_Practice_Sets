/*
Build a React component which takes an image, image height and image width as props and
sets the height and width of the image and displays the image on DOM. Image link
- https://picsum.photos/200
*/

function ImageComponent({image,height,width}){
    return(<>
    <img src={image} style={{height,width}}/>
    </>)

}
export default ImageComponent;