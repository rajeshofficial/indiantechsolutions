import SingleImg from "../../assets/images/service/Custom.png";
import Star2Img from "../../assets/images/v1/star2.png";
import WorkingApproach from "./WorkingApproach";
import { Helmet } from "react-helmet-async";
function CustomWebsite() {
	return (
        <>       {/* Helmet for SEO and page metadata */}
        <Helmet>
          <title>Custom Website Development | YourWebsiteName</title>
          <meta name="description" content="Build a custom website with React and Angular for speed, flexibility, and ease of use. Perfect for all business sizes." />
          <meta name="keywords" content="Custom Website, React, Angular, Web Development, Business Websites" />
        </Helmet>

		<div className="section aximo-section-padding2 pb-0">
			<div className="container">
				<div className="aximo-service-details-wrap">
					<div className="aximo-service-details-thumb">
						<img src={SingleImg} alt="Single img" />
					</div>
					<div className="row">
						<div className="col-lg-8">
							<div className="aximo-default-content">
								<h2>
									<span className="aximo-title-animation">
                                   Custom Website 
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
                                  React/Angular
								</h2>
								<p>
    Our team builds websites using React, a powerful tool that ensures your site is lightning-fast, fully customizable, and user-friendly. With React, we create dynamic, high-performing sites tailored to your needs.
</p>
<p>
    Perfect for businesses of all sizes, our React websites offer a seamless user experience, adaptable features, and the flexibility to grow with you. Let us help you make a strong, lasting impression online.
</p>
							</div>
						</div>
					</div>
                    <div className="row">
    <div className="col-lg-6">
        <div className="aximo-user-interface">
            <h3>Customization and Flexibility:</h3>
            <ul>
                <li>
                    We design highly adaptable websites that can suit a range of needs—from personal blogs to full-scale e-commerce platforms.
                </li>
                <li>
                    Our sites are built with a wide variety of customization options, allowing you to shape the look and functionality of your site to fit your brand perfectly.
                </li>
                <li>
                    Customizable elements include themes, layouts, content sections, and advanced features tailored specifically for your audience.
                </li>
            </ul>
        </div>
    </div>
    <div className="col-lg-6">
        <div className="aximo-user-interface">
            <h3>Effortless Content Management:</h3>
            <ul>
                <li>
                    Our React websites make managing and updating your content easy, so you can keep your site fresh and engaging.
                </li>
                <li>
                    With user-friendly tools, you’ll be able to manage multimedia, improve SEO, and schedule posts without technical hassle.
                </li>
                <li>
                    Key features include a responsive editor, media integration, SEO support, and flexible scheduling for content updates.
                </li>
            </ul>
        </div>
    </div>
</div>

					<div className="aximo-faq-wrap">
						<WorkingApproach />
					</div>
				</div>
			</div>
		</div>
        </>
	);
   
}

export default CustomWebsite ;
