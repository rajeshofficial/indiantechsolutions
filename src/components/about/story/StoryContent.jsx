import React from "react";
import { Helmet } from "react-helmet-async";
function StoryContent() {
	return (
		<>
		 <Helmet>
                <title>Our Vision & Mission - Indian Tech Solutions</title>
                <meta
                    name="description"
                    content="We start by getting to know your business inside and out. Once we understand your specific needs, we craft a tailored design system using best practices to make your brand stand out "
                />
                <meta
                    name="keywords"
                    content="Indian Tech Solutions, business empowerment, creative design solutions, digital success, brand experiences, mission and vision"
                />
                <meta name="robots" content="index, follow" />
            </Helmet>
		<div className="row">
			<div className="col-lg-6">
				<h3>Our core vision</h3>
				<p>
				Helping businesses craft memorable and visually captivating brand experiences that engage audiences and fuel success in today’s digital world..{" "}
				</p>
				<p>
				Our team consists of talented designers and developers with a broad range of expertise and backgrounds, equipping us to take on projects of any size and complexity. We’re inspired by creativity and innovation, bringing fresh ideas and solutions to every challenge
				</p>
			</div>
			<div className="col-lg-6">
				<h3>Our main mission</h3>
				<p>
				Our mission is to partner with businesses of all sizes—whether startups or established brands—to deliver innovative and custom design solutions that elevate their digital presence{" "}
				</p>
				<p>
				We are dedicated to developing websites and mobile applications that inspire and connect our clients with their audiences in the marketplace. By focusing on understanding each client’s unique needs, we deliver designs that not only meet but also exceed expectations.
				</p>
			</div>
		</div>
		</>
	);
}

export default StoryContent;
