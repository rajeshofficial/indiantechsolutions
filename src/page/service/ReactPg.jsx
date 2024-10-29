import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import CustomWebsite from "../../components/service/customWebsite";
function ReactPage() {
	return (
		<>
			<BreadCrumb title="React Custom website " />
			<CustomWebsite />
			<Testimonial />
		</>
	);
}

export default ReactPage;