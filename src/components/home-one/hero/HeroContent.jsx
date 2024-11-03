import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.png";
import StarImg from "../../../assets/images/v1/star.png";
import User1Img from "../../../assets/images/v1/user1.png";
import User2Img from "../../../assets/images/v1/user2.png";
import User3Img from "../../../assets/images/v1/user3.png";
import { Helmet } from "react-helmet-async";
function HeroContent() {
	return (
		<>
		<Helmet>
				<title>Indian Tech Solution | One-Stop Web & Mobile App Development</title>
				<meta
					name="description"
					content="Indian Tech Solution offers all-in-one web and mobile app development services, including React, Angular, Shopify, WordPress, and Wix. Transform your digital presence with our modern solutions."
				/>
				<meta
					name="keywords"
					content="Indian Tech Solution, web development agency, mobile app development agency, custom web solutions, React development, Angular development, Shopify experts, WordPress, Wix"
				/>
				<meta property="og:title" content="Indian Tech Solution - All-in-One Web & Mobile App Development" />
				<meta
					property="og:description"
					content="Get comprehensive web solutions with Indian Tech Solution. Specializing in React, Angular, Shopify, WordPress, and Wix for standout digital experiences."
				/>
				<meta property="og:type" content="website" />
			</Helmet>
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
					<p>Crafting websites that not only look stunning but work seamlessly</p>
				</div>
			</div>
			<Link className="aximo-call-btn" to="/contact-us">
				Book a free consultation <i className="icon-call"></i>
			</Link>
			<div className="aximo-hero-shape">
				<img src={ShapeImg} alt="ShapeImg" />
			</div>
		</div>
		</>
	);
}

export default HeroContent;
