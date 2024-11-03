import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
import About from "../components/home-one/about";
import AutoSlider from "../components/home-one/auto-slider";
import Teams from "../components/home-one/teams";
// Teams images
import Team1Img from "../assets/images/team/team1.png";
import Team2Img from "../assets/images/team/team2.png";
import Team3Img from "../assets/images/team/team3.png";
import Team4Img from "../assets/images/team/team4.png";
import { Helmet } from "react-helmet-async";

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Rajesh Singh",
		designation: "frontend developer ",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Tanveer Ahmed",
		designation: "Senior Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Shivam ",
		designation: "Full Stack developer ",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "ritik mehta ",
		designation: "Wordpress Developer",
		img: Team4Img,
	},
];

function AboutUs() {
	return (
		<>
		
		<Helmet>
				<title>About Us - Indian Tech Solution | Web and Mobile App Development Agency</title>
				<meta
					name="description"
					content="Indian Tech Solution offers top-notch web and mobile app development services. Our expertise helps businesses stand out with tailored digital solutions."
				/>
				<meta
					name="keywords"
					content="Indian Tech Solution, web development agency, mobile app development agency, custom software development, digital solutions, UI/UX design, responsive web design, eCommerce development, enterprise applications, tech consulting"
				/>
				<meta property="og:title" content="About Us - Indian Tech Solution" />
				<meta
					property="og:description"
					content="Discover how Indian Tech Solution can help elevate your business through expert web and mobile app development services."
				/>
				<meta property="og:type" content="website" />
			</Helmet>
			<BreadCrumb title="About Us" />
			<About />
			<Story />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}

export default AboutUs;
