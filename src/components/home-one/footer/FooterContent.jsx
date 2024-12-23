import Shape1Img from "../../../assets/images/v1/shape1.png";
import Star2Img from "../../../assets/images/v1/star2.png";
function FooterContent() {
	return (
		<div className="aximo-default-content light position-relative">
			<h2>
				<span className="aximo-title-animation">
					Lets start a
					<span className="aximo-title-icon">
						<img src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				<br />
				project together
			</h2>
			<p>
				We work closely with our clients to understand their objectives, target audience, and unique needs. We
				use our creative skills to translate these requirements and practical design solutions.
			</p>
			<div className="aximo-info-wrap">
    <div className="aximo-info">
        <ul>
            <li>Give us a call (Whatsapp):</li>
            <li>
                <a href="tel:+919999211391">+91 9999211391 (India)</a>
            </li>
            <li>
                <a href="tel:+447500132151">+44 7500132151 (UK)</a>
            </li>
        </ul>
    </div>
    <div className="aximo-info">
        <ul>
            <li>Send us an email:</li>
            <li>
                <a href="mailto:info@indiantechsolutions.com">info@indiantechsolutions.com</a>
            </li>
        </ul>
    </div>
</div>

			<div className="aximo-social-icon social-large">
				<ul>
					{/* <li>
						<a href="https://twitter.com/" target="_blank">
							<i className="icon-twitter"></i>
						</a>
					</li> */}
					{/* <li>
						<a href="https://facebook.com/" target="_blank">
							<i className="icon-facebook"></i>
						</a>
					</li> */}
					<li>
						<a href="https://www.instagram.com/indiantechsolutions?igsh=MWFjM2htdXZwcXYxbQ==" target="_blank">
							<i className="icon-instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/company/indian-tech-solutions" target="_blank">
							<i className="icon-linkedin"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="aximo-hero-shape aximo-footer-shape">
				<img src={Shape1Img} alt="Shape1Img" />
			</div>
		
		</div>
		
	);
}

export default FooterContent;
