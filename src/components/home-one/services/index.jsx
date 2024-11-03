import Star2Img from "../../../assets/images/v1/star2.png";
import ServiceCard from "./ServiceCard";
// import { Helmet } from "react-helmet-async";


function Services({ services }) {
	return (
		<>
		{/* <Helmet>
			<title>Effective Web Solutions | Indian Tech Solution</title>
			<meta
				name="description"
				content="Indian Tech Solution provides tailored web solutions, including web development, app development, UI/UX design, and eCommerce services to help businesses succeed online."
			/>
			<meta
				name="keywords"
				content="Indian Tech Solution, web solutions, web development services, app development, eCommerce solutions, UI/UX design"
			/>
			<meta property="og:title" content="Effective Web Solutions | Indian Tech Solution" />
			<meta
				property="og:description"
				content="Discover our comprehensive range of web solutions designed to elevate your digital presence, including web development, app development, and design services."
			/>
			<meta property="og:type" content="website" />
		</Helmet> */}
		<div className="section aximo-section-padding4">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						We provide effective
						<span className="aximo-title-animation">
							web  solutions
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="aximo-service-wrap">
					<div className="row">
						{services.map((item) => (
							<ServiceCard key={item.id} service={item} />
						))}
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default Services;
