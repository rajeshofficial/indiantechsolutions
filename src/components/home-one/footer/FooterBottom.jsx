import { Link } from 'react-router-dom'; // Make sure to import Link
import LogoWhiteImg from "../../../assets/images/logo/logo-white.svg";

function FooterBottom() {
	return (
		<div className="flex flex-col items-center justify-center  bg-gray-800 text-white">
			<div className="aximo-footer-logo footeriim ">
				<Link to="/">
					<img src={LogoWhiteImg} alt="Logo" />
				</Link>
			</div>
			<div className="flex flex-col items-center text-center">
    <Link to="/blog-grid" className="font-semibold text-white mb-4 hover:text-gray-500" style={{ marginRight: '20px', marginTop : '0'}}>
        Blogs
    </Link>
    <Link to="/team" className="font-semibold text-white mb-4 hover:text-gray-500" style={{ marginRight: '20px' }}>
        Team
    </Link>
    <Link to="/faq" className="font-semibold text-white mb-4 hover:text-gray-500" style={{ marginRight: '20px' }}>
        FAQs
    </Link>
    <Link to="/portfolio-two" className="font-semibold text-white mb-4 hover:text-gray-500" style={{ marginRight: '20px' }}>
        Portfolio
    </Link>
</div>

			<div className="aximo-copywright mt-4 text-center">
				<p> &copy; Copyright 2024, All Rights Reserved by Indian Tech Solutions </p>
			</div>
		</div>
	);
}

export default FooterBottom;
