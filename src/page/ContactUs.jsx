import BreadCrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import GoogleMap from "../components/contact/GoogleMap";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";
import { Helmet } from 'react-helmet-async'
function ContactUs() {
	const location = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	};
	return (
		<>
		 <Helmet>
                <title>Contact Us | Indian Tech Solutions</title>
                <meta name="description" content="Contact Us - indian tech solutions " />
                <meta name="keywords" content="Indian Tech Solutions, contact, web development, web design, business inquiries, support" />
            </Helmet>
			<BreadCrumb title="Contact Us" />
			<ContactForm />
			<ContactInfo />
			<GoogleMap location={location} />
			<TwoColumnFaq />
		</>
	);
}

export default ContactUs;
