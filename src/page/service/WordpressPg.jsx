import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import WordPress from "../../components/service/wordpress";
import { Helmet } from "react-helmet-async";
function ShopifyPage() {
	return (
		<>
		<Helmet>
    <title>WordPress Development Services - Indian Tech Solutions</title>
    <meta name="description" content="Expert WordPress development and design services, creating responsive, user-friendly websites that enhance your online presence." />
    <meta name="keywords" content="WordPress development, WordPress design, custom WordPress solutions, eCommerce on WordPress, responsive web design, Indian Tech Solutions" />
    <link rel="canonical" href="https://indiantechsolutions.com/wordpress-portfoliot" />
</Helmet>

			<BreadCrumb title="Wordpres Website" />
			<WordPress/>
			<Testimonial />
		</>
	);
}

export default ShopifyPage;