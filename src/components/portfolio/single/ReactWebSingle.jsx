
import Single2Img from "../../../assets/images/portfolio/p_single2.png";
import DifferentEra from "../../../assets/images/portfolio/differentera.png"
import Star2Img from "../../../assets/images/v1/star2.png";
const projectResolveSteps = [
    {
      id: crypto.randomUUID(),
      title: "Vision Creation",
      text: "Crafted a bold concept with high-impact visuals and a minimalist layout to captivate users."
    },
    {
      id: crypto.randomUUID(),
      title: "Mockup Development",
      text: "Developed sleek mockups featuring striking typography and a cohesive dark theme for a contemporary look."
    },
    {
      id: crypto.randomUUID(),
      title: "Iterative Feedback",
      text: "Gathered user feedback to refine the design, enhancing usability and visual elegance throughout the process."
    }
  ];
  

function Reactwebsite() {
	return (
		<div className="aximo-project-single-section">
			<div className="container">
				<div className="aximo-project-single-thumb">
					<img src={ DifferentEra} alt="Single" />
				</div>
				<div className="aximo-project-info-wrap">
					<div className="aximo-project-info">
						<h3>Client:</h3>
						<h4> Dffrntra , Us </h4>
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
						<h4>110k Rs</h4>
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
                                The DFFRNTERA site features a minimalist, dark-themed design with bold typography and smooth animations, creating a modern, high-impact look. It uses scrolling effects and large, concise text blocks to showcase projects and services. This style can be recreated in React by implementing a modular layout, dark theme, and animated transitions.
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

export default Reactwebsite;
