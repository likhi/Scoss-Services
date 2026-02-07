import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Import service images
import webDevImg from "@/assets/services/web-dev.jpg";
import digitalMarketingImg from "@/assets/services/digital-marketing.jpg";
import softwareDevImg from "@/assets/services/software-dev.jpg";
import cloudImg from "@/assets/services/cloud.jpg";
import cybersecurityImg from "@/assets/services/cybersecurity.jpg";
import itConsultingImg from "@/assets/services/it-consulting.jpg";
import networkImg from "@/assets/services/network.jpg";
import supportImg from "@/assets/services/support.jpg";

const services = [
  {
    title: "Website Design and Development",
    description: "Modern, responsive websites crafted to elevate your digital presence and drive business growth.",
    category: "Web Solutions",
    features: ["Custom design", "Mobile optimization", "SEO-friendly development", "E-commerce solutions", "CMS integration"],
    image: webDevImg,
  },
  {
    title: "Digital Marketing Services",
    description: "Results-driven digital marketing strategies to boost your online presence and growth.",
    category: "Marketing",
    features: ["SEO optimization", "Social media marketing", "PPC campaigns", "Content marketing", "Email marketing"],
    image: digitalMarketingImg,
  },
  {
    title: "Custom Software Development",
    description: "Custom software solutions tailored to your specific business needs and workflows.",
    category: "Software",
    features: ["Web applications", "Mobile apps", "Desktop software", "API development", "System integration"],
    image: softwareDevImg,
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure services for modern businesses.",
    category: "Cloud",
    features: ["Cloud migration", "Infrastructure optimization", "Managed services", "Backup solutions", "Cost optimization"],
    image: cloudImg,
  },
  {
    title: "Cybersecurity Services",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    category: "Security",
    features: ["Security assessment", "Threat detection", "Incident response", "Compliance", "Security training"],
    image: cybersecurityImg,
  },
  {
    title: "IT Consulting",
    description: "Strategic technology consulting to drive digital transformation and business growth.",
    category: "Consulting",
    features: ["IT strategy", "Digital transformation", "Technology roadmap", "Process optimization", "Vendor management"],
    image: itConsultingImg,
  },
  {
    title: "Network Solutions",
    description: "Reliable network infrastructure design, implementation, and management.",
    category: "Infrastructure",
    features: ["Network design", "Implementation", "Monitoring", "Troubleshooting", "Performance optimization"],
    image: networkImg,
  },
  {
    title: "Technical Support",
    description: "24/7 technical support and maintenance services to keep your systems running smoothly.",
    category: "Support",
    features: ["Help desk", "Remote support", "On-site support", "System maintenance", "Hardware support"],
    image: supportImg,
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (title: string) => {
    // Navigate to service detail page if needed
    const serviceRoute = title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
    navigate(`/services/${serviceRoute}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-br from-background via-background to-muted/50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-primary text-sm uppercase tracking-widest mb-4 block font-semibold">
                EXPLORE OUR EXPERTISE
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Comprehensive <span className="gradient-text">Solutions</span> for Your Business
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We specialize in building and maintaining robust IT infrastructure, applications, and business solutions. Our team is dedicated to understanding your unique needs, allowing us to identify, integrate, and support high-quality, cost-optimized solutions tailored for your business.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Our Solutions Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                From web development to cybersecurity, we've got you covered with innovative and reliable services.
              </p>
            </motion.div>

            {/* Services Grid - 4 columns x 2 rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  onClick={() => handleServiceClick(service.title)}
                  className="group cursor-pointer"
                >
                  <div className="relative h-96 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Background Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                        {service.category}
                      </span>
                    </div>

                    {/* Content - Always visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-sm mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Choose Our Services?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
                    <p className="text-muted-foreground">
                      We understand your unique business needs and create solutions specifically designed for your goals.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Our experienced professionals bring decades of combined expertise to every project.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                    <p className="text-muted-foreground">
                      We've successfully delivered hundreds of projects across diverse industries.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">
                      Our dedicated support team is always available to help you succeed.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Empower Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our tailored solutions can drive your success and accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
