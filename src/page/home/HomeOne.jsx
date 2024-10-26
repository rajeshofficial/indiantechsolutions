import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";

// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: " Web/App Design (Figma) ",
		description:
			"Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Shopify Ecommerce ",
		description:
			"Building & customizing Shopify stores, including themes, products , and user-friendly interfaces for a seamless shopping experience.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Custom Website (React)",
		description:
			" Improving website usability and accessibility using React, Angular, HTML, CSS, and JavaScript for seamless, dynamic user experiences",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Wordpress",
		description:
			"Customizing WordPress websites with tailored themes and plugins for enhanced user engagement",
		icon: "icon-design-thinking",
	},
];

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: " Shivam ",
		designation: "Fullstack developer ",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Tanveer Ahmed ",
		designation: "Senior Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Rajesh Singh ",
		designation: "Frontend developer ",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Ritik Mehta ",
		designation: "Wordpress  Developer",
		img: Team4Img,
	},
];

function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<Projects />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}

export default HomeOne;
