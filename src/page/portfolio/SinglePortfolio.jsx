import BreadCrumb from "../../components/common/Breadcrumb";
import Projects from "../../components/home-one/projects";
import PortfolioDetails from "../../components/portfolio/single/PortfolioDetails";
function SinglePortfolio() {
	return (
		<>
		<Helmet>
				<title>Portfolio Details - Indian tech solutions </title>
				<meta 
					name="description" 
					content="Explore our portfolio showcasing expertise in web and mobile app development. Discover projects demonstrating innovation, design, and technical excellence." 
				/>
				<meta 
					name="keywords" 
					content="web development, mobile app development, portfolio, projects, digital solutions, UI/UX design, software development" 
				/>
			</Helmet>
			<BreadCrumb title="Portfolio Deatails" />
			<PortfolioDetails />
			<Projects />
		</>
	);
}

export default SinglePortfolio;
