import Single1Img from "../../../assets/images/portfolio/p_single.webp";
import Single2Img from "../../../assets/images/portfolio/p_single2.png";
import Star2Img from "../../../assets/images/v1/star2.png";
const projectResolveSteps = [
    {
        id: crypto.randomUUID(),
        title: "Concept Development",
        text: "Based on user research and feedback, the development team outlined the key features and design elements for the website. They created wireframes and prototypes to visualize the user experience."
    },
    {
        id: crypto.randomUUID(),
        title: "Development and Testing",
        text: "After finalizing the design, the project moved into the development phase. The team utilized modern web technologies to build the site, followed by rigorous testing to ensure functionality and responsiveness."
    },
    {
        id: crypto.randomUUID(),
        title: "Launch and Evaluation",
        text: "The website was launched successfully and received positive user engagement. The project was deemed a success, allowing for further enhancements based on user feedback and analytics."
    }
];

function PortfolioDetails() {
	return (
		<div className="aximo-project-single-section">
			<div className="container">
				<div className="aximo-project-single-thumb">
					<img src={Single1Img} alt="Single" />
				</div>
				<div className="aximo-project-info-wrap">
					<div className="aximo-project-info">
						<h3>Client:</h3>
						<h4><a href="https://urbanmati.com/" target="_blank" rel="noopener noreferrer">
                                Urbanmati, Delhi
                            </a></h4>
					</div>
					<div className="aximo-project-info">
						<h3>Date:</h3>
						<h4>June</h4>
					</div>
					<div className="aximo-project-info">
						<h3>Duration:</h3>
						<h4>Two Months</h4>
					</div>
					<div className="aximo-project-info">
						<h3>Cost:</h3>
						<h4>50k Rs</h4>
					</div>
				</div>
				<div className="aximo-project-single-wrap">
					<div className="row">
						<div className="col-lg-4 order-lg-2">
							<div className="aximo-project-single-thumb2 ">
								<img src={Single2Img} alt="Single 2" />
							</div>
						</div>
						<div className="col-lg-8">
							<div className="aximo-default-content m-right-gap">
								<h2>
									How we initiate and
									<span className="aximo-title-animation">
										resolve the project
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>
								<p>
								The project was initiated to establish a clothing brand on Shopify, aimed at addressing the growing demand for stylish, sustainable fashion
								</p>
								<div className="aximo-resolve-project-wrap">
									{projectResolveSteps.map((item, index) => (
										<div key={item.id} className="aximo-resolve-project-item">
											<h3>
												{index + 1}. {item.title}:
											</h3>
											<p>{item.text}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PortfolioDetails;
