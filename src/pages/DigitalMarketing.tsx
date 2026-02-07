import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";
import { 
  Search, Target, Share2, FileText, ShoppingBag, Mail, 
  BarChart3, ArrowRight, TrendingUp, Users, DollarSign, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const marketingServices = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Rank higher on Google and drive organic traffic with our proven SEO strategies."
  },
  {
    icon: Target,
    title: "Pay-Per-Click (PPC) Advertising",
    description: "Targeted ad campaigns on Google, Facebook, and Instagram for immediate results."
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build your brand presence across all major social platforms with engaging content."
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Compelling blogs, articles, and content that establishes you as an industry leader."
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Marketing",
    description: "Specialized strategies for online stores to boost sales and customer loyalty."
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated email campaigns that nurture leads and drive conversions."
  },
  {
    icon: BarChart3,
    title: "Web Analytics & Reporting",
    description: "Data-driven insights and monthly reports to track your marketing ROI."
  },
];

const benefits = [
  { icon: TrendingUp, title: "Increase Visibility", description: "Get found by customers searching for your services" },
  { icon: Users, title: "Attract Leads", description: "Generate quality leads that convert into sales" },
  { icon: DollarSign, title: "Boost Revenue", description: "Maximize ROI with targeted marketing campaigns" },
  { icon: Award, title: "Build Authority", description: "Establish your brand as an industry leader" },
];

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-secondary/5 to-background">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6">
              Digital Marketing Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Digital Marketing Services in{" "}
              <span className="text-primary">Tumkur</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Drive growth, increase revenue, and dominate your market with data-driven 
              digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="group bg-primary hover:bg-primary/90">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary/30">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Marketing Services */}
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
              // Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Digital Marketing <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing services to grow your online presence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
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

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted Digital Marketing Agency in{" "}
              <span className="text-primary">Tumkur</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Partner with SCOSS Services for result-driven digital marketing strategies. 
              We help local businesses compete globally with affordable, effective marketing solutions.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your Digital Marketing Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
