import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css"
function Slider({ imge }) {
    return (<div className="box">
        <Carousel useKeyboardArrows={true}>
            {imge.map((URL, index) => 
            (<div className="slide" >
                <img alt="sample_file" src={URL} key={index} />
            </div>))}
        </Carousel>    </div>);
}
export default Slider;