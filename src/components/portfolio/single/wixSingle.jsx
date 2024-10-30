
import Single2Img from "../../../assets/images/portfolio/p_single2.png";
import wixbgimage from "../../../assets/images/portfolio/wix.jpg"
import Star2Img from "../../../assets/images/v1/star2.png";
const projectResolveSteps = [
    {
        id: crypto.randomUUID(),
        title: "Layout and Navigation Setup",
        text: "Designed a smooth, intuitive layout to highlight key salon services, enabling clients to easily find and book appointments."
      },
      {
        id: crypto.randomUUID(),
        title: "Wix Design Customization",
        text: "Used Wix's customization tools to create a stylish, branded look, enhancing visual appeal and consistency throughout the website."
      },
      {
        id: crypto.randomUUID(),
        title: "Client-Centric Enhancements",
        text: "Incorporated feedback-driven improvements to refine user experience, making online booking and service browsing seamless."
      }
  ];
  

function WixSingle() {
	return (
		<div className="aximo-project-single-section">
			<div className="container">
				<div className="aximo-project-single-thumb">
					<img src={wixbgimage} alt="Single" />
				</div>
				<div className="aximo-project-info-wrap">
					<div className="aximo-project-info">
						<h3>Client:</h3>
						<h4> Mane  , Burleigh, Queensland
                        </h4>
					</div>
					<div className="aximo-project-info">
						<h3>Date:</h3>
						<h4>Jan</h4>
					</div>
					<div className="aximo-project-info">
						<h3>Duration:</h3>
						<h4> 20 days </h4>
					</div>
					<div className="aximo-project-info">
						<h3>Cost:</h3>
						<h4>26k Rs</h4>
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
                                Experience premium salon services with a stylish, user-friendly website designed on Wix. Our platform showcases treatments, allows easy online booking, and highlights special offers. Perfect for clients seeking a seamless, informative, and visually engaging salon experience
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

export default WixSingle;
