import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEOHead = ({
    title = "Shivam Rana - MERN Stack Developer Portfolio",
    description = "Portfolio of Shivam Rana, a MERN Stack Developer with 2+ years of experience in MongoDB, Express, React, and Node.js",
    keywords = "MERN Stack, React, Node.js, MongoDB, Express, Full Stack Developer, Web Developer, JavaScript, TypeScript",
    image = "/favicon.svg",
    url = "https://shivam-rana-portfolio.vercel.app"
}: SEOHeadProps) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Shivam Rana" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Shivam Rana Portfolio" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Additional SEO */}
            <meta name="theme-color" content="#00D4FF" />
            <meta name="msapplication-TileColor" content="#00D4FF" />
            <link rel="canonical" href={url} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Shivam Rana",
                    "jobTitle": "MERN Stack Developer",
                    "description": description,
                    "url": url,
                    "sameAs": [
                        "https://github.com/itzRana13",
                        "https://linkedin.com/in/shivam-rana-itzrana13"
                    ],
                    "email": "shivamrana342@gmail.com",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Dehradun",
                        "addressCountry": "India"
                    },
                    "knowsAbout": [
                        "React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "TypeScript"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEOHead;
