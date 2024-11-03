import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";
// import { Helmet } from "react-helmet-async";

function HeroSection() {

	return (
		<>
		{/* <Helmet>
				<title>Indian Tech Solution | Leading Web & Mobile App Development Agency</title>
				<meta
					name="description"
					content="Indian Tech Solution offers innovative web and mobile app development solutions for businesses. Our expertise includes React, Angular, Shopify, WordPress, and more, helping clients stand out online."
				/>
				<meta
					name="keywords"
					content="Indian Tech Solution, web development agency, mobile app development agency, custom development solutions, React developers, Angular experts, Shopify design, WordPress, Wix"
				/>
				<meta property="og:title" content="Indian Tech Solution - Premier Web & Mobile App Development Services" />
				<meta
					property="og:description"
					content="Transform your business with Indian Tech Solution's cutting-edge web and mobile app development services, specializing in React, Angular, Shopify, and WordPress."
				/>
				<meta property="og:type" content="website" />
			</Helmet> */}
		<div className="aximo-hero-section dark-bg">
			<div className="container position-relative">
				<div className="row">
					<div className="col-lg-8">
						<HeroContent />
					</div>
					<div className="col-lg-4">
						<HeroThumbs />
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default HeroSection;
