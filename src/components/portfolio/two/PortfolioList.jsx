import Portfolio1Img from "../../../assets/images/portfolio/WebDevelopment.jpg";
import Portfolio2Img from "../../../assets/images/portfolio/UiUx.jpg";
import Portfolio3Img from "../../../assets/images/portfolio/mobileAppDevelopment.jpg";
import Portfolio4Img from "../../../assets/images/portfolio/Wordpress.jpg";
import Portfolio5Img from "../../../assets/images/portfolio/WixP.jpg";
import Portfolio6Img from "../../../assets/images/portfolio/p_6.png";
import Portfolio7Img from "../../../assets/images/portfolio/Shopify.jpg";
import Portfolio8Img from "../../../assets/images/portfolio/p_8.png";

import PortfolioCard from "./PortfolioCard";

const portfolioListData = [
	{
		id: crypto.randomUUID(),
		title: "Custom Web Development",
		description: "Creating tailored websites that cater to specific business needs, ensuring unique functionality and design.",
		img: Portfolio1Img,
		path: "/React-website", // Unique path for each portfolio item
	},
	{
		id: crypto.randomUUID(),
		title: "UI/UX Design",
		description: "Designing user-friendly and visually appealing interfaces for websites and mobile applications to enhance user engagement.",
		img: Portfolio2Img,
		path: "/ui-ux-design",
	},
	{
		id: crypto.randomUUID(),
		title: "Mobile Application Development",
		description: "Building robust and responsive mobile applications that work seamlessly on Android and iOS platforms.",
		img: Portfolio3Img,
		path: "/mobile-app-development",
	},
	{
		id: crypto.randomUUID(),
		title: "WordPress Development",
		description: "Creating versatile WordPress websites tailored for easy management and optimal performance.",
		img: Portfolio4Img,
		path: "/wordpress-portfolio",
	},
	{
		id: crypto.randomUUID(),
		title: "Wix Development",
		description: "Designing and developing websites on Wix for quick, customizable, and user-friendly solutions.",
		img: Portfolio5Img,
		path: "/wix-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Web Solutions",
		description: "Providing all web-related solutions, from domain and hosting to website optimization and SEO services.",
		img: Portfolio6Img,
		path: "/",
	},
	{
		id: crypto.randomUUID(),
		title: "Shopify",
		description: "Building responsive and feature-rich e-commerce sites with product management, payment gateways, and more.",
		img: Portfolio7Img,
		path: "/single-portfolio",
	},
	{
		id: crypto.randomUUID(),
		title: "Website Redesign",
		description: "Revamping existing websites with updated design, functionality, and mobile responsiveness.",
		img: Portfolio8Img,
		path: "/React-website",
	},
];


function PortfolioList() {
	return (
		<>
	
	
		<div className="section aximo-project-page aximo-section-padding5">
			
			
			<div className="container">
				<div className="row">
					{portfolioListData.map((portfolio) => (
						<PortfolioCard key={portfolio.id} portfolio={portfolio} />
					))}
				</div>
			</div>
		</div>
		</>
	);
}

export default PortfolioList;
