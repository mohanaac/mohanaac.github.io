import React from "react";
import { Shield, Users, Trophy, CheckCircle } from "lucide-react";
import { Card } from "../components/ui/card";
import Logo_Alone from "../assets/Mohana_logo_alone.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -20% 0px",
  });

  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Customers",
      color: "text-blue-400",
    },
    {
      icon: CheckCircle,
      number: "5000+",
      label: "Repairs Completed",
      color: "text-green-400",
    },
    {
      icon: Trophy,
      number: "8+",
      label: "Years Experience",
      color: "text-yellow-400",
    },
    {
      icon: Shield,
      number: "100%",
      label: "Satisfaction Rate",
      color: "text-purple-400",
    },
  ];

  const features = [
    {
      title: "Expert Technicians",
      description:
        "Our skilled professionals have years of experience in appliance repair and maintenance.",
    },
    {
      title: "Genuine Parts Only",
      description:
        "We use only authentic manufacturer parts to ensure longevity and optimal performance.",
    },
    {
      title: "Warranty Coverage",
      description:
        "Warranty available on select products and services. Coverage varies.",
    },
    {
      title: "Same-Day Service",
      description:
        "Quick response time with same-day service for most appliance repair requests.",
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden costs. You get a clear quote before we start any work on your appliance.",
    },
    {
      title: "Support",
      description:
        "Emergency repair services available round the clock for urgent appliance issues.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 relative overflow-hidden min-h-screen sm:min-h-0"
      ref={ref}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            About{" "}
            <span className="text-gradient inline-flex items-center gap-2">
              <span>Mohana AC</span>
              <img
                src={Logo_Alone}
                alt="Mohana AC Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
              />
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            With over 8 years of experience in home appliance services, we've
            built our reputation on quality workmanship, genuine parts, and
            exceptional customer service. Your satisfaction is our top priority.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="glass-card text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="glass-light p-4 rounded-full w-fit mx-auto">
                    <Icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={parseInt(achievement.number)}
                          duration={2}
                          suffix={
                            achievement.number.includes("+")
                              ? "+"
                              : achievement.number.includes("%")
                              ? "%"
                              : ""
                          }
                        />
                      ) : (
                        "0"
                      )}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="glass-strong p-12 rounded-3xl glow text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-gradient mb-6">Our Mission</h3>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            To provide reliable, professional, and affordable home appliance
            services that keep your household running smoothly. We believe in
            building long-term relationships with our customers through honest
            work, fair pricing, and exceptional service quality.
          </p>
          <p className="text-xl text-muted-foreground mt-4">
            <strong>Currently serving only in Chennai.</strong> We look forward
            to expanding to more cities soon!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-lg">Reliability</h4>
              <p className="text-muted-foreground text-sm">
                Dependable service you can count on
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary-glow rounded-full flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-lg">Excellence</h4>
              <p className="text-muted-foreground text-sm">
                Highest quality workmanship guaranteed
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-glow to-primary rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-lg">Trust</h4>
              <p className="text-muted-foreground text-sm">
                Building lasting customer relationships
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
