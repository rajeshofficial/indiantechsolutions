import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import MobileApp from "../../components/portfolio/single/MobileappSingle";
function MoblileAppPage() {
	return (
		<>
		<Helmet>
				<title>Mobile App Development - Indian Tech Solutions</title>
				<meta
					name="description"
					content="Professional mobile app development services to bring your ideas to life with modern design and functionality, tailored to meet your business needs."
				/>
				<meta
					name="keywords"
					content="mobile app development, app design, mobile solutions, Indian Tech Solutions"
				/>
				<link rel="canonical" href="https://indiantechsolutions.com/mobile-app-development" />
			</Helmet>
			<BreadCrumb title=" Mobile App " />
			<MobileApp />
			<Testimonial />
		</>
	);
}

export default MoblileAppPage;