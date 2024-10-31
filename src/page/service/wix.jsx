import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import WixSingle from "../../components/portfolio/single/wixSingle";
import { Helmet } from "react-helmet-async";
function WixPage() {
	return (
		<><Helmet>
		<title>Wix Development Services - Indian Tech Solutions</title>
    <meta name="description" content="Professional Wix development and design services tailored for your business, ensuring a seamless user experience and modern aesthetics." />
    <meta name="keywords" content="Wix development, Wix website design, custom Wix solutions, eCommerce on Wix, user-centric design, Indian Tech Solutions" />
    <link rel="canonical" href="https://indiantechsolutions.com/wix-web" />

</Helmet>

			<BreadCrumb title="wix website" />
			<WixSingle/>
			<Testimonial />
		</>
	);
}

export default WixPage;