import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import Reactwebsite from "../../components/portfolio/single/ReactWebSingle";
function ReactPage() {
	return (
		<>
			<BreadCrumb title="React Custom website " />
			<Reactwebsite />
			<Testimonial />
		</>
	);
}

export default ReactPage;