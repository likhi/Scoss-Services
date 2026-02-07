import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";
import { 
  Server, Cloud, Shield, Database, Headphones, Cpu, 
  Wifi, ArrowRight, CheckCircle, Clock, TrendingUp, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const infraServices = [
  {
    icon: Headphones,
    title: "Managed IT Services",
    description: "Complete IT management so you can focus on your core business operations."
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "AWS, Azure, and Google Cloud solutions for scalable infrastructure."
  },
  {
    icon: Shield,
    title: "Network & Security",
    description: "Robust network architecture with enterprise-grade security measures."
  },
  {
    icon: Database,
    title: "Server & Storage Management",
    description: "Reliable server solutions and data storage with automated backups."
  },
  {
    icon: Server,
    title: "Enterprise IT Support",
    description: "24/7 technical support for your entire IT infrastructure."
  },
  {
    icon: Cpu,
    title: "Hardware & Software Procurement",
    description: "Source the best hardware and software at competitive prices."
  },
  {
    icon: Wifi,
    title: "IoT & Smart Infrastructure",
    description: "Connect and automate your business with IoT solutions."
  },
];

const benefits = [
  { icon: TrendingUp, text: "Improves operational efficiency" },
  { icon: Clock, text: "Reduces system downtime" },
  { icon: Lock, text: "Enhances security posture" },
  { icon: CheckCircle, text: "Scales with your growth" },
];

const ITInfrastructure = () => {
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
              IT Infrastructure Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Robust IT Infrastructure Services in{" "}
              <span className="text-primary">Tumkur</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Scalable, secure, and efficient IT solutions to power your business 
              growth and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="group bg-primary hover:bg-primary/90">
                  Get a Free IT Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary/30">
                Download IT Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
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
              // Core Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              IT Infrastructure <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end IT infrastructure services to build, manage, and optimize your technology stack.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infraServices.map((service, index) => (
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

      {/* Why IT Infrastructure Matters */}
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
                Why IT Infrastructure <span className="text-primary">Matters</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                A robust IT infrastructure is the backbone of modern business success. 
                It ensures your operations run smoothly, securely, and efficiently.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{benefit.text}</span>
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
              <h3 className="text-2xl font-bold mb-4">
                Need IT Infrastructure <span className="text-primary">Assessment?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Our experts will analyze your current setup and recommend improvements 
                to enhance performance, security, and cost-efficiency.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Free infrastructure audit</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Detailed assessment report</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Custom improvement roadmap</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Request Free Assessment
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

export default ITInfrastructure;
