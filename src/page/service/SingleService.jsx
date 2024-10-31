import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import ServiceDetails from "../../components/service/ServiceDetails";
import { Helmet } from "react-helmet-async";
function SingleService() {
	return (
		<>
			<Helmet>
			<title>UI/UX Design Services - Indian Tech Solutions</title>
<meta name="description" content="Elevate your brand with our expert UI/UX design services, creating intuitive and engaging digital experiences for web and mobile applications." />
<meta name="keywords" content="UI/UX design, user experience, user interface design, responsive design, digital product design, Indian Tech Solutions" />
<link rel="canonical" href="https://indiantechsolutions.com/ui-ux" />

</Helmet>
			<BreadCrumb title="Ui Ux Design " />
			<ServiceDetails />
			<Testimonial />
		</>
	);
}

export default SingleService;
