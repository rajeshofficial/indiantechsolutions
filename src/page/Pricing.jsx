import BreadCrumb from "../components/common/Breadcrumb";
import AutoSlider from "../components/home-one/auto-slider";
import Testimonial from "../components/home-one/testimonial";
import PricingFaq from "../components/pricing/PricingFaq";
import PricingPlan from "../components/pricing/PricingPlan";
function Pricing() {
	return (
		<>
		<Helmet>
        <title>Pricing - Indian Tech Solutions </title>
        <meta name="description" content="Explore our pricing plans  for website development  ." />
		<meta name="keywords" content="Indian Tech Solutions, website development price , website making price , website price " />
		
      </Helmet>

			<BreadCrumb title="Pricing" />
			<PricingPlan />
			<Testimonial />
			<AutoSlider />
			<PricingFaq />
		</>
	);
}

export default Pricing;
