import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { ServiceDetailModal } from "./ServiceDetailModal";
import { servicesData } from "@/data/servicesData";

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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

          {/* Navigation buttons */}
          <div className="flex justify-end gap-2 mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full border-border hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full border-border hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Services horizontal scroll */}
          <div
            ref={scrollRef}
            className="flex gap-0 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex-shrink-0 w-[280px] md:w-[300px] h-[450px] cursor-pointer group"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => handleServiceClick(service)}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                </div>

                {/* Content - always visible at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm">{service.subtitle}</p>
                </div>

                {/* Hover card */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 pointer-events-none"
                  style={{ pointerEvents: activeIndex === index ? "auto" : "none" }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">{service.subtitle}</p>
                  <div className="w-12 h-0.5 bg-primary mb-4" />
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    <span className="font-semibold">Key Features:</span> {service.features.slice(0, 3).join(", ")}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-medium group/btn">
                    <span>Get Quote</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
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
