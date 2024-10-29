import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import WordPress from "../../components/service/wordpress";
function ShopifyPage() {
	return (
		<>
			<BreadCrumb title="Wordpres Website" />
			<WordPress/>
			<Testimonial />
		</>
	);
}

export default ShopifyPage;