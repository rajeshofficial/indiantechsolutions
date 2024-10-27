import StarImg from "../../assets/images/v1/star2.png";
import PricingCard from "./PricingCard";
import { useState } from "react";
const pricingPlanData = [
	{
		id: crypto.randomUUID(),
		title: "Custom Web Development ",
		price: [
			{ id: 1, value: 299 },
			{
				id: 2,
				value: 99,
			},
		],
		description: " Custom Web Development  packages offered a range of services and features to create websites",
		features: [
			"Consultation & Discovery",
			"Responsive Design",
			"E-commerce Integration",
			"Custom Web Design",
			"Testing and Quality Assurance",
		],
		highlighted: false,
	},
	{
		id: crypto.randomUUID(),
		title: "UX/UI Design (Web/Mobile",
		price: [
			{ id: 1, value: 199 },
			{
				id: 2,
				value: 59,
			},
		],
		description: "UX/UI package offered a set of services aimed at designing user-friendly UI/UX for web and Mobile app",
		features: [
			"Information Architecture",
			"Wireframing & Prototyping",
			"Usability Testing",
			"Visual Design &",
			"User Interface (UI) Design",
		],
		highlighted: true,
	},
	{
		id: crypto.randomUUID(),
		title: "Wordpress Website ",
		price: [
			{ id: 1, value: 199 },
			{
				id: 2,
				value: 99,
			},
		],
		description: "We create WordPress websites for your portfolio and products with custom design and SEO. ",
		features: [
			"Hosting services ",
			"Stationery & Website Design",
			"Social Media Assets",
			" Custom Plugins ",
			"SEO to rank on google ",
		],
		highlighted: false,
	},
	{
		"id": crypto.randomUUID(),
		"title": "Shopify E-commerce Website",
		"price": [
			{ "id": 1, "value": 399 },
			{ "id": 2, "value": 99 }
		],
		"description": "We build Shopify e-commerce sites to showcase and sell your products with custom design and SEO",
		"features": [
			"Hosting services",
			"Custom Shopify Theme Design",
			"Product Listing & Catalog Management",
			"Payment Gateway Integration",
			"SEO to rank on Google",
			"Mobile-optimized design"
		],
		"highlighted": false
	},
];
function PricingPlan() {
	const frequencies = [
		{ id: 1, label: "Annually" },
		{ id: 2, label: "Monthly" },
	];

	const [frequency, setFrequency] = useState(frequencies[0]);

	function handleChange(e) {
		if (e.target.checked) {
			setFrequency(frequencies[1]);
		} else {
			setFrequency(frequencies[0]);
		}
	}

	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-pricing-title">
					<h2>
						Pick from one of our
						<span className="aximo-title-animation">
							ready packages
							<span className="aximo-title-icon">
								<img src={StarImg} alt="star" />
							</span>
						</span>
					</h2>
				</div>
				<div className="pricing-btn">
					<label>Billed monthly</label>
					<div className="toggle-btn">
						<input
							className="form-check-input btn-toggle price-deck-trigger"
							type="checkbox"
							onChange={handleChange}
						/>
					</div>
					<label>Billed annually</label>
				</div>
				<div className="row" id="table-price-value">
					{pricingPlanData.map((plan) => (
						<PricingCard key={plan.id} plan={plan} frequency={frequency} />
					))}
				</div>
				
			</div>
			
		</div>
		
	);
}
export default PricingPlan;
