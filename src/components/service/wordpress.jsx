import SingleImg from "../../assets/images/service/service-single.png";
import Star2Img from "../../assets/images/v1/star2.png";
import WorkingApproach from "./WorkingApproach";
function WordPress() {
	return (
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
                                    WordPress for
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
                                    Modern Website Development
								</h2>
								<p>
                                WordPress is a powerful and versatile platform widely used for website creation and management. It offers an extensive range of features and customization options,{" "}
								</p>
								<p>
                                making it a preferred choice for both beginners and experienced developers. Here is a brief overview of the key components of WordPress:
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<div className="aximo-user-interface">
								<h3> Customization and Flexibility:</h3>
								<ul>
									<li>
                                    WordPress provides a flexible framework, allowing users to create websites ranging from simple blogs to complex e-commerce stores.
									</li>
									<li>
									It supports an extensive library of themes and plugins, enabling users to customize the appearance and functionality of their websites with ease..
									</li>
									<li>
                                    Key aspects of customization include theme selection, layout control, widget placement, and plugin integration.
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="aximo-user-interface">
								<h3>Content Management System (CMS):</h3>
								<ul>
									<li>
									WordPress operates as a robust CMS, making content creation, management, and publishing straightforward for users at all levels.
									</li>
									<li>
									With a user-friendly interface, it allows for efficient handling of multimedia elements, SEO optimization, and scheduling posts.
									</li>
									<li>
									Key aspects of the CMS include a visual editor, media library, SEO plugins, and content scheduling options.
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
	);
}

export default WordPress;
