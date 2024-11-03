
import Single2Img from "../../../assets/images/portfolio/p_single2.png";
import wordpressbg from "../../../assets/images/portfolio/MobileApp.jpg"
import Star2Img from "../../../assets/images/v1/star2.png";
import { Helmet } from "react-helmet-async";
const projectResolveSteps = [
    {
		id: crypto.randomUUID(),
		title: "Introductory Screen",
		text: "Welcomes users with a clean, visually appealing start page, inviting them to begin tracking habits with a single click."
	  },
	  {
		id: crypto.randomUUID(),
		title: "Goals and Habits Organization",
		text: "Displays a comprehensive list of daily, monthly, and yearly goals, allowing users to categorize habits and mark them as completed."
	  },
	  {
		id: crypto.randomUUID(),
		title: "Time-Based Habit Tracking",
		text: "Includes separate sections for morning and bedtime routines, helping users focus on habits that fit their daily schedule."
	  }
];

function MobileApp() {
	return (

		<>
		<Helmet>
    <title>Habit Tracker Mobile App - indian tech solutions </title>
    <meta name="description" content="A modern, intuitive habit tracker app designed for organizing and maintaining positive habits, with time-based tracking for optimal routine management." />
    <meta name="keywords" content="habit tracker, mobile app, project, portfolio, daily goals, time-based tracking, morning routine, bedtime habits, productivity app, goal setting" />
    <meta name="author" content="Rajesh Singh " />
    <meta property="og:title" content="Habit Tracker Mobile App - Indian Tech solutions " />
    <meta property="og:description" content="Explore the details of a modern and intuitive habit tracker app, designed to help users organize and maintain habits with time-based tracking and comprehensive goal management." />
  
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.indiantechsolutions.com/mobile-app-development" />
 
</Helmet>
		<div className="aximo-project-single-section">
			<div className="container">
				<div className="aximo-project-single-thumb">
					<img src={wordpressbg} alt="Single" />
				</div>
				<div className="aximo-project-info-wrap">
					<div className="aximo-project-info">
						<h3>Client:</h3>
						<h4>
                                Habit Tracker , UK  ,
                            </h4>
					</div>
					<div className="aximo-project-info">
						<h3>Date:</h3>
						<h4>jully</h4>
					</div>
					<div className="aximo-project-info">
						<h3>Duration:</h3>
						<h4>4 Months</h4>
					</div>
					<div className="aximo-project-info">
						<h3>Cost:</h3>
						<h4>270k Rs</h4>
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
								Developed a modern and intuitive habit tracker app designed to help users build and maintain positive habits. The app features a welcoming onboarding screen, a streamlined goals list for easy habit selection, and sections dedicated to morning and bedtime habits to promote time-specific routines. With its user-friendly layout, the app empowers users to track progress daily, fostering personal growth and healthy habits in a visually appealing and organized manner.
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
		</>
	);
}

export default MobileApp;
