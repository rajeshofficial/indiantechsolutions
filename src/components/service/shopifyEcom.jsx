
import shopifyImgBG from "../../assets/images/service/Shopify.png"
import Star2Img from "../../assets/images/v1/star2.png";
import WorkingApproach from "./WorkingApproach";
function ShopifyEcom() {
	return (
		
		<div className="section aximo-section-padding2 pb-0">
			
			<div className="container">
				<div className="aximo-service-details-wrap">
					<div className="aximo-service-details-thumb">
						<img src={shopifyImgBG} alt="Shopify img" />
					</div>
					<div className="row">
						<div className="col-lg-8">
							<div className="aximo-default-content">
								<h2>
									<span className="aximo-title-animation">
                                   Shopify  Ecommerse
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
                                    website Development
								</h2>
								<p>
    Shopify is a leading e-commerce platform that makes it easy to create and manage your online store, with a range of powerful tools and customization options.
</p>
<p>
    Ideal for both new business owners and experienced sellers, Shopify provides everything you need to set up a visually stunning, fully functional online store. From managing products and inventory to processing payments and integrating marketing tools, Shopify is built to support your success in e-commerce.
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
                    Shopify provides a robust framework for building online stores, from small boutiques to large-scale e-commerce businesses.
                </li>
                <li>
                    With a wide selection of themes and apps, Shopify makes it easy to customize your store’s look and functionality to match your brand’s identity.
                </li>
                <li>
                    Key customization features include theme selection, layout flexibility, and app integration for additional features.
                </li>
            </ul>
        </div>
    </div>
    <div className="col-lg-6">
        <div className="aximo-user-interface">
            <h3>Easy Store Management:</h3>
            <ul>
                <li>
                    Shopify’s intuitive platform makes managing your products, orders, and customer information simple and efficient.
                </li>
                <li>
                    Its user-friendly interface supports multimedia product displays, SEO optimization, and order tracking.
                </li>
                <li>
                    Key features include a visual editor, product organization tools, SEO support, and integrated analytics to track your store’s performance.
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

export default ShopifyEcom;
