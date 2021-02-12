import * as React from "react"


export type ImageProps = {
    src:string,
    className:string
}
 
export type ImageState = {
    
}
 
class Product extends React.Component<ImageProps, ImageState> {
    render() { 

        return ( <div className = {this.props.className}><img   src={this.props.src}></img></div>  );
    }
}
 
export default Product;