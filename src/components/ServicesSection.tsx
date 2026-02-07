import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { ServiceDetailModal } from "./ServiceDetailModal";
import { servicesData } from "@/data/servicesData";

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: typeof servicesData[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="services" className="relative py-24 overflow-hidden bg-background">
        <div className="container px-4 md:px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="text-primary text-sm uppercase tracking-widest mb-4 block font-semibold">
              EXPLORE OUR EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Services Designed for Your Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We offer reliable solutions to support your business growth and development
            </p>
          </motion.div>

          {/* Services Grid - 4 columns x 2 rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => handleServiceClick(service)}
                className="glass-card overflow-hidden group h-full flex flex-col cursor-pointer hover:shadow-lg transition-all"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-1 line-clamp-2">{service.title}</h3>
                  <p className="text-primary text-xs font-semibold mb-2">{service.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">{service.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-1.5 mb-4">
                    {service.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-xs">
                        <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs">
                    Get Quote
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Services Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </>
  );
};
