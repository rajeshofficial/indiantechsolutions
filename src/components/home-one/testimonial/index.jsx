import Star2Img from "../../../assets/images/v1/star2.png";
import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.png";
import Thumb3Img from "../../../assets/images/v1/t_thumb3.png";
import Thumb4Img from "../../../assets/images/v1/t_thumb4.png";
import TestimonialCard from "./TestimonialCard";
import { Helmet } from "react-helmet-async";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Best Shopify customization ",
		description:
			" Indian Tech solution did an amazing job on our Shopify store! They customized our site perfectly with Liquid coding and added helpful apps that streamline our sales and reviews. The site looks great, is easy to navigate, and has made a real difference in our business. Highly recommended!.",
		author: "Muskan Goel",
		designation: "Founder of Urbanmati.com",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Exceptional creativity and vision",
		description:
			"We’re thrilled with the website Indian Tech Solution built for Bras Healthcare. The site perfectly represents our commitment to quality and global reach in healthcare. It’s user-friendly, informative, and has helped us better connect with clients worldwide. The team was professional , Highly recommended!",
		author: "Anil Sharma ",
		designation: "Co-founder ",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Innovative and professional",
		description:
			"Indian Tech Solution did an outstanding job with the Sustainable Development Map website. The platform is beautifully designed, intuitive, and effectively highlights crucial sustainability data. Their team took our ideas and created a visually engaging and informative site that’s easy for users to navigate. They were responsive, skilled, and dedicated to delivering exactly what we needed. Highly recommend their services",
		author: "Abdul Shah",
		designation: "Student ",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Transformed our Web Design ",
		description:
			"Indian Tech Solution delivered a stunning design for the Sustainable Development Map website. The intuitive layout and visually appealing elements make it easy to explore vital sustainability data. Their attention to detail and creativity transformed our ideas into a user-friendly platform. The team was responsive and truly dedicated to achieving our vision. We highly recommend their expertise for anyone looking to create a compelling online presence!",
		author: "Danial Mark",
		designation: " Director",
		img: Thumb4Img,
	},
];

function Testimonial() {
	return (
		<>
			<Helmet>
				<title>Client Testimonials | Indian Tech Solution</title>
				<meta
					name="description"
					content="Read testimonials from satisfied clients of Indian Tech Solution. Discover how we have helped businesses with Shopify customization, web development, and custom solutions."
				/>
				<meta
					name="keywords"
					content="Indian Tech Solution, client testimonials, Shopify customization, web development, client satisfaction, eCommerce solutions"
				/>
				<meta property="og:title" content="Client Testimonials | Indian Tech Solution" />
				<meta
					property="og:description"
					content="Our clients appreciate our commitment to excellence in web development, Shopify customization, and innovative solutions that drive success."
				/>
				<meta property="og:type" content="website" />
			</Helmet>
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Clients are always
						<span className="aximo-title-animation">
							satisfied with us
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial) => (
						<TestimonialCard key={testimonial.id} testimonial={testimonial} />
					))}
				</div>
			</div>
		</div>
		</>
	);
}

export default Testimonial;
