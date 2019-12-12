import * as React from "react"


export type ImageProps = {
    src:string
}
 
export type ImageState = {
    
}
 
class Product extends React.Component<ImageProps, ImageState> {
    render() { 
        let className="image"

        return ( <img  className = {className} src={this.props.src}></img>  );
    }
}
 
export default Product;