import Star2Img from "../../../assets/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
import { Helmet } from "react-helmet-async";
function Story() {
	return (
		<>
		<Helmet>
				<title>Our Story - Indian Tech Solutions</title>
				<meta
					name="description"
					content="Learn about Indian Tech Solutions, founded in 2020 by a tech enthusiast. Now a trusted tech agency with 15+ team members delivering high-quality digital solutions."
				/>
				<meta
					name="keywords"
					content="Indian Tech Solutions, tech agency, digital solutions, web solutions, trusted technology agency"
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://indiantechsolutions.com/about-us" />
			</Helmet>

		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="aximo-section-title center title-description">
					<h2>
						<span className="aximo-title-animation">
							We think our story is
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="star" />
							</span>
						</span>
						worth sharing with you
					</h2>
					<p>
					Founded in 2020, Indian Tech Solutions started as a solo venture by a tech enthusiast passionate about web solutions. Initially working as a freelancer, we quickly began receiving more orders, leading to the establishment of Indian Tech Solutions. Today, we’re proud to be a trusted technology agency with a skilled team of over 15 professionals dedicated to delivering high-quality digital solutions
					</p>
				</div>

				<div className="row">
					<StoryPhotos />
				</div>

				<div className="aximo-story-content">
					<StoryContent />
				</div>
			</div>
		</div>
		</>
	);
}

export default Story;
