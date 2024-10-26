import { createBrowserRouter } from "react-router-dom";
import LayoutEight from "../components/layout/LayoutEight.jsx";

import LayoutOne from "../components/layout/LayoutOne.jsx";

import Layout from "../components/layout/index.jsx";
import ErrorPage from "../error-page";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";
import Pricing from "../page/Pricing";
import BlogGridPage from "../page/blog/BlogGridPage.jsx";
import BlogPage from "../page/blog/BlogPage.jsx";
import SingleBlogPage from "../page/blog/SingleBlog.jsx";
import HomeOne from "../page/home/HomeOne.jsx";
import PortfolioOneColumn from "../page/portfolio/PortfolioOneColoum";
import PortfolioTwoColumn from "../page/portfolio/PortfolioTwoColumn";
import SinglePortfolio from "../page/portfolio/SinglePortfolio";
import Service from "../page/service";
import SingleService from "../page/service/SingleService.jsx";
import Team from "../page/team";
import SingleTeam from "../page/team/SingleTeam.jsx";
import CommingSoon from "../page/utility/CommingSoon.jsx";
import Faq from "../page/utility/Faq.jsx";
import TestimonialPage from "../page/utility/Testimonial.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <LayoutOne />,
				children: [
					{
						path: "/",
						element: <HomeOne />,
					},
					{
						path: "/about-us",
						element: <AboutUs />,
					},
					{
						path: "/contact-us",
						element: <ContactUs />,
					},
					{
						path: "/faq",
						element: <Faq />,
					},

					{
						path: "/testimonial",
						element: <TestimonialPage />,
					},

					{
						path: "/pricing",
						element: <Pricing />,
					},
					{
						path: "/blog",
						element: <BlogPage />,
					},
					{
						path: "/single-blog",
						element: <SingleBlogPage />,
					},
					{
						path: "/blog-grid",
						element: <BlogGridPage />,
					},
					{
						path: "/service",
						element: <Service />,
					},
					{
						path: "/single-service",
						element: <SingleService />,
					},
					{
						path: "/team",
						element: <Team />,
					},
					{
						path: "/single-team",
						element: <SingleTeam />,
					},
					{
						path: "/portfolio-one",
						element: <PortfolioOneColumn />,
					},
					{
						path: "/portfolio-two",
						element: <PortfolioTwoColumn />,
					},
					{
						path: "/single-portfolio",
						element: <SinglePortfolio />,
					},
					{
						path: "*",
						element: <ErrorPage />,
					},
				],
			},
			
			{
				path: "/",
				element: <LayoutEight />,
				children: [
					{
						path: "/coming-soon",
						element: <CommingSoon />,
					},
					
				],
			},
		],
	},
]);
