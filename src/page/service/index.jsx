import BreadCrumb from "../../components/common/Breadcrumb";
import TwoColumnFaq from "../../components/contact/TwoColumnFaq";
import AutoSlider from "../../components/home-one/auto-slider";
import Services from "../../components/home-one/services";
import WhyChooseUs from "../../components/home-one/why-choose-us";
import { Helmet } from "react-helmet-async";

const services = [
    {
        id: crypto.randomUUID(),
        title: "UI/UX Design",
        description:
            "Creating user-centric interfaces and enhancing user experiences to make digital products accessible, intuitive, and visually engaging.",
        icon: "icon-design-tools",
        path: "/ui-ux",
    },
    {
        id: crypto.randomUUID(),
        title: "Full Stack Development",
        description:
            "Developing and managing both frontend and backend services, delivering high-performing app across web and mobile platforms.",
        icon: "icon-branding",
        path: "/react-website",
    },
    {
        id: crypto.randomUUID(),
        title: "Mobile App Development ",
        description:
            "Developing feature-rich and user-centric mobile applications, meticulously optimized for peak performance on both Android and iOS platforms.",
        icon: "icon-branding",
        path: "/mobile-app-development",
    },
    
    
    {
        id: crypto.randomUUID(),
        title: "Shopify Development",
        description:
            "Building and customizing Shopify stores to create unique, user-friendly e-commerce experiences with enhanced functionality and optimized performance.",
        icon: "icon-web",
        path: "/Shopify-Ecommerce",
    },
    {
        id: crypto.randomUUID(),
        title: "Wordpresss Development",
        description:
            "Creating dynamic, responsive user interfaces using wordpresss and wp plugins , ensuring an appealing and accessible experience for all users.",
        icon: "icon-design-thinking",
        path: "/Wordpress-Portfolio",
    },
  
    {
        id: crypto.randomUUID(),
        title: "Wix Development",
        description:
            "Designing and customizing professional websites on Wix with tailored functionality, creating visually appealing, responsive sites with a seamless user experience.",
        icon: "icon-rating-stars-1",
        path: "/wix-web",
    },
   
   
];

function ServicePage() {
	return (
		<>
         
            <Helmet>
                <title>Our Services | Indian Tech Solution</title>
                <meta
                    name="description"
                    content="Explore our wide range of services including UI/UX design, full-stack development, mobile app development, and more to elevate your digital presence."
                />
                <meta
                    name="keywords"
                    content="UI/UX Design, Full Stack Development, Mobile App Development, Shopify Development, WordPress Development, Wix Development, Indian Tech Solution"
                />
                <meta property="og:title" content="Our Services | Indian Tech Solution" />
                <meta
                    property="og:description"
                    content="Discover top-notch services at Indian Tech Solution: UI/UX design, mobile app development, Shopify customization, and more."
                />
                <meta property="og:type" content="website" />
            </Helmet>
			<BreadCrumb title="Service" />
			<Services services={services} />
			<AutoSlider />
			<WhyChooseUs />
			<TwoColumnFaq />
		</>
	);
}

export default ServicePage;
