import Portfolio1Img from "../../../assets/images/portfolio/p_1.png";
import Portfolio2Img from "../../../assets/images/portfolio/p_2.png";
import Portfolio3Img from "../../../assets/images/portfolio/p_3.png";
import PortfolioCard from "./PortfolioCard";
import Star2Img from "../../../assets/images/v1/star2.png";
import { Helmet } from "react-helmet-async";
const portfolioListData = [
	{
		id: crypto.randomUUID(),
		title: "Product Design",
		description: "Developing the look and feel of physical products, aesthetics, and functionality.",
		img: Portfolio1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Logo and Branding",
		description: "Creating or refreshing a companys logo and developing a cohesive visual identity.",
		img: Portfolio2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "App UI/UX Design",
		description: "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
		img: Portfolio3Img,
	},
];
function PortfolioList() {
	return (
		<>
		<Helmet>
			<title>Our Creative Web Projects | Indian Tech Solution</title>
			<meta
				name="description"
				content="Explore our portfolio showcasing product design, branding, and app UI/UX design projects. See how Indian Tech Solution brings creativity to web solutions."
			/>
			<meta
				name="keywords"
				content="Indian Tech Solution, portfolio, product design, branding, UI/UX design, creative web projects"
			/>
			<meta property="og:title" content="Our Creative Web Projects | Indian Tech Solution" />
			<meta
				property="og:description"
				content="Discover our creative portfolio with projects in product design, branding, and UI/UX design. We bring innovation and functionality to web solutions."
			/>
			<meta property="og:type" content="website" />
		</Helmet>
		<div className="aximo-project-one-column">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Have a wide range of
						<span className="aximo-title-animation">
							creative  web projects
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="star" />
							</span>
						</span>
					</h2>
				</div>
				{portfolioListData.map((portfolio) => (
					<PortfolioCard key={portfolio.id} portfolio={portfolio} />
				))}
			</div>
		</div>
		</>
	);
}

export default PortfolioList;
