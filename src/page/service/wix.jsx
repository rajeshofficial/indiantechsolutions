import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import WixSingle from "../../components/portfolio/single/wixSingle";
function WixPage() {
	return (
		<>
			<BreadCrumb title="wix-website" />
			<WixSingle/>
			<Testimonial />
		</>
	);
}

export default WixPage;