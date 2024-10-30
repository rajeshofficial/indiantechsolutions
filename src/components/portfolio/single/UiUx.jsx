
import Single2Img from "../../../assets/images/portfolio/p_single2.png";
import wordpressbg from "../../../assets/images/portfolio/craftdelhi.webp"
import Star2Img from "../../../assets/images/v1/star2.png";
const projectResolveSteps = [
    {
      id: crypto.randomUUID(),
      title: "Concept Development",
      text: "The design team outlined core elements based on user research, creating wireframes and prototypes to shape the visual and user experience."
    },
    {
      id: crypto.randomUUID(),
      title: "Design Finalization",
      text: "Once wireframes were approved, the team refined the design with high-fidelity mockups, ensuring visual consistency and user-friendly layouts."
    },
    {
      id: crypto.randomUUID(),
      title: "User Testing and Feedback",
      text: "Designs were tested with users to gather insights, allowing adjustments that enhanced usability and visual appeal before final approval."
    }
  ];
  

function UiUxPortfolio() {
	return (
		<div className="aximo-project-single-section">
			<div className="container">
				<div className="aximo-project-single-thumb">
					<img src={wordpressbg} alt="Single" />
				</div>
				<div className="aximo-project-info-wrap">
					<div className="aximo-project-info">
						<h3>Client:</h3>
						<h4> Craftdelhi , India </h4>
					</div>
					<div className="aximo-project-info">
						<h3>Date:</h3>
						<h4>March</h4>
					</div>
					<div className="aximo-project-info">
						<h3>Duration:</h3>
						<h4>3 months  Months</h4>
					</div>
					<div className="aximo-project-info">
						<h3>Cost:</h3>
						<h4>70k Rs</h4>
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
                                CraftDelhi is a multi-vendor platform designed for handmade gifts, featuring 40 screens optimized across desktop, mobile, and app interfaces. The design ensures a smooth, user-friendly experience for both vendors and customers, supporting diverse screen requirements
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

export default UiUxPortfolio;
