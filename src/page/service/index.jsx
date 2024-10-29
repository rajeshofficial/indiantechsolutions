import BreadCrumb from "../../components/common/Breadcrumb";
import TwoColumnFaq from "../../components/contact/TwoColumnFaq";
import AutoSlider from "../../components/home-one/auto-slider";
import Services from "../../components/home-one/services";
import WhyChooseUs from "../../components/home-one/why-choose-us";

const services = [
    {
        id: crypto.randomUUID(),
        title: "UI/UX Design",
        description:
            "Creating user-centric interfaces and enhancing user experiences to make digital products accessible, intuitive, and visually engaging.",
        icon: "icon-design-tools",
    },
    {
        id: crypto.randomUUID(),
        title: "Full Stack Development",
        description:
            "Developing and managing both frontend and backend services, delivering seamless, high-performing applications across web and mobile platforms.",
        icon: "icon-branding",
    },
    {
        id: crypto.randomUUID(),
        title: "Shopify Development",
        description:
            "Building and customizing Shopify stores to create unique, user-friendly e-commerce experiences with enhanced functionality and optimized performance.",
        icon: "icon-web",
    },
    {
        id: crypto.randomUUID(),
        title: "Frontend Development",
        description:
            "Creating dynamic, responsive user interfaces using modern web technologies, ensuring an appealing and accessible experience for all users.",
        icon: "icon-design-thinking",
    },
  
    {
        id: crypto.randomUUID(),
        title: "Wix Development",
        description:
            "Designing and customizing websites on Wix with tailored functionality, creating visually appealing sites with a seamless user experience.",
        icon: "icon-rating-stars-1",
    },
    {
        id: crypto.randomUUID(),
        title: "Web Application Design",
        description:
            "Designing intuitive and responsive web applications that prioritize usability and aesthetics, enhancing functionality and user satisfaction.",
        icon: "icon-chef",
    },
   
];

function ServicePage() {
	return (
		<>
			<BreadCrumb title="Service" />
			<Services services={services} />
			<AutoSlider />
			<WhyChooseUs />
			<TwoColumnFaq />
		</>
	);
}

export default ServicePage;
