import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFile } from 'fs/promises';

const hostname = 'https://indiantechsolutions.com';
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/faq', changefreq: 'monthly', priority: 0.7 },
  { url: '/testimonial', changefreq: 'monthly', priority: 0.7 },
  { url: '/pricing', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog', changefreq: 'weekly', priority: 0.6 },
  { url: '/single-blog', changefreq: 'weekly', priority: 0.6 },
  { url: '/blog-grid', changefreq: 'weekly', priority: 0.6 },
  { url: '/service', changefreq: 'monthly', priority: 0.8 },
  { url: '/ui-ux', changefreq: 'monthly', priority: 0.8 },
  { url: '/team', changefreq: 'monthly', priority: 0.7 },
  { url: '/single-team', changefreq: 'monthly', priority: 0.7 },
  { url: '/portfolio-one', changefreq: 'monthly', priority: 0.8 },
  { url: '/portfolio-two', changefreq: 'monthly', priority: 0.8 },
  { url: '/single-portfolio', changefreq: 'monthly', priority: 0.8 },
  { url: '/Wordpress-Site', changefreq: 'monthly', priority: 0.7 },
  { url: '/Shopify-Ecommerce', changefreq: 'monthly', priority: 0.7 },
  { url: '/react-website', changefreq: 'monthly', priority: 0.7 },
  { url: '/Wordpress-Portfolio', changefreq: 'monthly', priority: 0.7 },
  { url: '/ui-ux-design', changefreq: 'monthly', priority: 0.7 },
  { url: '/wix-web', changefreq: 'monthly', priority: 0.7 },
  { url: '/mobile-app-development', changefreq: 'monthly', priority: 0.7 },
  { url: '/CustomWebsite', changefreq: 'monthly', priority: 0.7 },
  { url: '/coming-soon', changefreq: 'yearly', priority: 0.5 },
];

async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({ hostname });
    
    routes.forEach(route => sitemap.write(route));
    sitemap.end();

    const data = await streamToPromise(sitemap);
    await writeFile('./public/sitemap.xml', data);
    console.log('Sitemap generated successfully');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
