import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";
import { 
  Globe, Smartphone, ShoppingCart, RefreshCcw, Wrench, 
  CheckCircle, ArrowRight, Palette, Zap, Search, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const webServices = [
  {
    icon: Palette,
    title: "Custom Website Design",
    description: "Brand-focused, visually stunning websites designed from scratch to represent your unique identity."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Fully functional online stores with secure payment gateways, inventory management, and smooth checkout."
  },
  {
    icon: Globe,
    title: "CMS Websites",
    description: "WordPress, Webflow, and custom CMS solutions that let you easily manage your content."
  },
  {
    icon: RefreshCcw,
    title: "Website Redesign",
    description: "Modernize your existing website with improved UX, faster speeds, and contemporary design."
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing updates, security patches, backups, and technical support to keep your site running smoothly."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Development",
    description: "Responsive websites that work flawlessly across all devices, from phones to desktops."
  },
];

const whyChooseUs = [
  { icon: Palette, text: "Custom brand-focused design" },
  { icon: Smartphone, text: "Mobile responsive layouts" },
  { icon: Zap, text: "Fast loading performance" },
  { icon: Search, text: "SEO-optimized structure" },
  { icon: Lock, text: "Secure and scalable architecture" },
];

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Website Design & Development
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Website Design Services in{" "}
              <span className="text-primary">Tumkur</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              From business websites to complex e-commerce platforms, we create digital 
              experiences that convert visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="group bg-primary hover:bg-primary/90">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary/30">
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Web Services */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="mono text-primary text-sm uppercase tracking-widest mb-4 block">
              // Our Web Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What We <span className="text-primary">Offer</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="glass-card p-8 h-full hover-lift">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Websites */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our <span className="text-primary">Websites?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We build websites that not only look stunning but also perform exceptionally 
                well in terms of speed, SEO, and user experience.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold mb-6">
                Ready to Start Your <span className="text-primary">Web Project?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact us for a free consultation and quote. Let's build something amazing together.
              </p>
              <Link to="/contact">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default WebDevelopment;
