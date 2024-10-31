import BreadCrumb from "../../components/common/Breadcrumb";
import PortfolioList from "../../components/portfolio/two/PortfolioList";
import { Helmet } from "react-helmet-async";
function PortfolioTwoColumn() {
	return (
		<>
		<Helmet>
				<title>Portfolio - Indian Tech Solutions</title>
				<title>Mobile App Development - Indian Tech Solutions</title>
	<meta
		name="description"
		content="Expert mobile app development services that bring your business ideas to life with innovative design and functionality."
	/>
	<meta
		name="keywords"
		content="mobile app development, app design, mobile solutions, Indian Tech Solutions"
	/>
				<link rel="canonical" href="https://indiantechsolutions.com/portfolio-two" />
			</Helmet>
			<BreadCrumb title="Portfolio" />
			<PortfolioList />
		</>
	);
}

export default PortfolioTwoColumn;
