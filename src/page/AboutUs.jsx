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
			<BreadCrumb title="About Us" />
			<About />
			<Story />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}

export default AboutUs;
