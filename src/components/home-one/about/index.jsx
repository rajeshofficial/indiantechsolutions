import Video from "./Video";
import Star2Img from "../../../assets/images/v1/star2.png";
import AboutCounter from "./AboutCounter";
// import { Helmet } from "react-helmet-async";


function About() {
	return (
		<>
		{/* <Helmet>
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
			</Helmet> */}

		<div className="section aximo-section-padding">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title">
					<div className="row">
						<div className="col-lg-7">
							<h2>
								<span className="aximo-title-animation">
									We make your
									<span className="aximo-title-icon">
										<img src={Star2Img} alt="Star2Img" />
									</span>
								</span>{" "}
								business stand out
							</h2>
						</div>
						<div className="col-lg-4 offset-lg-1 d-flex align-items-center">
							<p>
								We work closely with our clients to know their objectives, target audience, unique
								needs, and practical web design solutions.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<Video />
					</div>
					<div className="col-lg-4">
						<AboutCounter />
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default About;
