import "./BannerItem.css";
import { Carousel } from "antd";
import Banner1 from "../../assets/images/banner1.png";
import Banner2 from "../../assets/images/banner2.jpg";
import Banner3 from "../../assets/images/banner3.jpg";
import Banner4 from "../../assets/images/banner4.jpg";

function BannerItem() {
  const contentStyle = {
    height: "400px",
    color: "#fff",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <Carousel autoplay className="Carousel">
        <div style={contentStyle}>
          <img
            alt="banner1"
            src={Banner1}
            style={{ width: 800, height: 400 }}
          />
        </div>
        <div style={contentStyle}>
          <img
            alt="banner2"
            src={Banner2}
            style={{ width: 800, height: 400 }}
          />
        </div>
        <div style={contentStyle}>
          <img
            alt="banner3"
            src={Banner3}
            style={{ width: 800, height: 400 }}
          />
        </div>
        <div style={contentStyle}>
          <img
            alt="banner4"
            src={Banner4}
            style={{ width: 800, height: 400 }}
          />
        </div>
      </Carousel>
    </>
  );
}

export default BannerItem;
