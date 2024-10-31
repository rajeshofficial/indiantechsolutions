import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import ShopifyEcom from "../../components/service/shopifyEcom";
import { Helmet } from "react-helmet-async";
function ShopifyPage() {
	return (
		<>
		<Helmet>
				<title> Shopify Store  Development - Indian Tech Solutions</title>
				<meta
					name="description"
					content="Leading agency for web solutions including React, WordPress, Shopify, and mobile applications."
				/>
				<meta
					name="keywords"
					content="Shopify Ecommerse  development, Shopify design, Web solutions, Indian Tech Solutions"
				/>
				<link rel="canonical" href="https://indiantechsolutions.com/single-portfolio" />
			</Helmet>
			<BreadCrumb title="Shopify Ecommerse" />
			<ShopifyEcom />
			<Testimonial />
		</>
	);
}

export default ShopifyPage;
