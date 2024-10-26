import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.png";
import StarImg from "../../../assets/images/v1/star.png";
import User1Img from "../../../assets/images/v1/user1.png";
import User2Img from "../../../assets/images/v1/user2.png";
import User3Img from "../../../assets/images/v1/user3.png";
function HeroContent() {
	return (
		<div className="aximo-hero-content">
			<h1>
				<span className="aximo-title-animation">
				One Stop for All-in-One 
					<img src={StarImg} alt="StarImg" />
				</span>{" "}
				Web Solutions
			</h1>
			<p>
				{`We’re a dynamic development studio specializing in modern solutions like React,Angular , Shopify, WordPress, and Wix. Our innovative approach helps clients stand out in today’s fast-paced digital landscape.`}
			</p>
			<div className="aximo-hero-user-wrap">
				<div className="aximo-hero-user-thumb">
					<div className="aximo-hero-user-thumb-item">
						<img src={User1Img} alt="User1Img" />
					</div>
					<div className="aximo-hero-user-thumb-item">
						<img src={User3Img} alt="User3Img" />
					</div>
					<div className="aximo-hero-user-thumb-item">
						<img src={User2Img} alt="User2Img" />
					</div>
				</div>
				<div className="aximo-hero-user-data">
					<p>Believed by more than a thousand people</p>
				</div>
			</div>
			<Link className="aximo-call-btn" to="/contact-us">
				Book a free consultation <i className="icon-call"></i>
			</Link>
			<div className="aximo-hero-shape">
				<img src={ShapeImg} alt="ShapeImg" />
			</div>
		</div>
	);
}

export default HeroContent;
