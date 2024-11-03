import BreadCrumb from "../../components/common/Breadcrumb";
import Projects from "../../components/home-one/projects";
import WordpressPortfolio from "../../components/portfolio/single/WordpressPort";
function WpPortfolio() {
	return (
		<>
			<BreadCrumb title=" Wordpress Portfolio - bras health care " />
			<WordpressPortfolio />
			<Projects />
		</>
	);
}

export default WpPortfolio;
