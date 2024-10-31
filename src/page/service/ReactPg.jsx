import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import Reactwebsite from "../../components/portfolio/single/ReactWebSingle";
import { Helmet } from "react-helmet-async";
function ReactPage() {
	return (
		<>
		<Helmet>
				<title> website Development - Indian Tech Solutions</title>
				<meta
					name="description"
					content="Leading agency for web solutions including React, Angular ,html ,CSS custom websites ."
				/>
				<meta
					name="keywords"
					content="website  development, Website design, Web solutions, Indian Tech Solutions"
				/>
				<link rel="canonical" href="https://indiantechsolutions.com/React-website" />
			</Helmet>
			<BreadCrumb title="React Custom website " />
			<Reactwebsite />
			<Testimonial />
		</>
	);
}

export default ReactPage;