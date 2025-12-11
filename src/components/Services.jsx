import {
  ArrowRight,
  Wrench,
  Zap,
  Droplets,
  Thermometer,
  Wind,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { FaSnowflake, FaFire } from "react-icons/fa";
import { TbFridge } from "react-icons/tb";
import { GiWashingMachine } from "react-icons/gi";
import { IoWater } from "react-icons/io5";

const Services = () => {
  const services = [
    {
      id: "ac",
      icon: FaSnowflake,
      title: "AC Services",
      description:
        "Complete air conditioning solutions for all domestic AC types",
      features: [
        "Repair & Installation",
        "Gas Filling",
        "Regular Maintenance",
        "Second-hand Buy/Sell",
      ],
      color: "from-blue-500 to-cyan-500",
      bgIcon: Wind,
    },
    {
      id: "refrigerator",
      icon: TbFridge,
      title: "Refrigerator Services",
      description: "Expert refrigerator repair and maintenance services",
      features: [
        "Cooling Issues",
        "Compressor Repair",
        "Temperature Control",
        "Ice Maker Repair",
      ],
      color: "from-green-500 to-emerald-500",
      bgIcon: Thermometer,
    },
    {
      id: "washing-machine",
      icon: GiWashingMachine,
      title: "Washing Machine Services",
      description: "Comprehensive washing machine repair and maintenance",
      features: [
        "Drum Repair",
        "Motor Issues",
        "Water Leakage",
        "Spin Problems",
      ],
      color: "from-purple-500 to-pink-500",
      bgIcon: Wrench,
    },
    {
      id: "water-purifier",
      icon: IoWater,
      title: "Water Purifier Services",
      description: "Water purifier installation, repair and filter replacement",
      features: [
        "Filter Replacement",
        "Installation",
        "Water Quality Testing",
        "Maintenance",
      ],
      color: "from-cyan-500 to-blue-500",
      bgIcon: Droplets,
    },
    {
      id: "water-heater",
      icon: FaFire,
      title: "Water Heater Services",
      description: "Complete water heater solutions and maintenance",
      features: [
        "Element Replacement",
        "Thermostat Repair",
        "Tank Cleaning",
        "Installation",
      ],
      color: "from-orange-500 to-red-500",
      bgIcon: Zap,
    },
  ];

  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Expert Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive home appliance services with expert
            technicians, genuine parts, and guaranteed satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group glass-card hover:scale-105 hover:glow-accent transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4 opacity-10">
                <service.bgIcon size={80} className="text-primary" />
              </div>
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden glass-light p-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <service.icon
                    size={48}
                    className="text-primary group-hover:text-accent transition-colors duration-300"
                  />
                </div>
                <div
                  className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${service.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`}
                ></div>
              </div>

              <div className="space-y-4 relative z-10">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full btn-glass group-hover:btn-primary transition-all duration-300 group"
                  onClick={() => {
                    const phone = "+917338965589";
                    const message = `Hi, I need ${service.title.toLowerCase()}. Can you help me?`;
                    window.open(
                      `https://wa.me/${phone}?text=${encodeURIComponent(
                        message
                      )}`,
                      "_blank"
                    );
                  }}
                >
                  Get Service
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={16}
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="glass-strong p-8 rounded-3xl glow max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-gradient">
              Need Professional Service?
            </h3>
            <p className="text-muted-foreground mb-6">
              Professional appliance repair services Mon - Sun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                <a href="tel:+917338965589" className="flex items-center">
                  Call Now: +91 73389 65589
                </a>
              </Button>
              <Button
                variant="outline"
                className="btn-glass"
                onClick={() => {
                  const phone = "+917338965589";
                  const message =
                    "Hi, I need appliance repair service. Please help!";
                  window.open(
                    `https://wa.me/${phone}?text=${encodeURIComponent(
                      message
                    )}`,
                    "_blank"
                  );
                }}
              >
                WhatsApp Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
