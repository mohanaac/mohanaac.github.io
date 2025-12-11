import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 73389 65589',
      action: 'tel:+917338965589',
      color: 'text-green-400',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: 'Chat with us instantly',
      action: 'https://wa.me/917338965589',
      color: 'text-green-500',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'manimogana05@gmail.com',
      action: 'mailto:manimogana05@gmail.com',
      color: 'text-blue-400',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Monday to Sunday',
      color: 'text-yellow-400',
    },
  ];

  const serviceAreas = [
    { name: 'Hyderabad', lat: 17.3850, lng: 78.4867 },
    { name: 'Secunderabad', lat: 17.4399, lng: 78.4983 },
    { name: 'Cyberabad', lat: 17.4435, lng: 78.3772 },
    { name: 'Gachibowli', lat: 17.4403, lng: 78.3489 },
    { name: 'Hitech City', lat: 17.4478, lng: 78.3773 },
    { name: 'Madhapur', lat: 17.4485, lng: 78.3908 },
    { name: 'Kondapur', lat: 17.4617, lng: 78.3618 },
    { name: 'Kukatpally', lat: 17.4944, lng: 78.4071 },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to fix your appliances? Contact us now for quick, reliable service. We're
            available for emergency repairs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="glass-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="glass-light p-3 rounded-full">
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{info.details}</p>
                    {info.action && (
                      <Button
                        className="w-full btn-glass"
                        onClick={() => {
                          if (info.action.startsWith('http')) {
                            window.open(info.action, '_blank');
                          } else {
                            window.location.href = info.action;
                          }
                        }}
                      >
                        {info.title === 'WhatsApp'
                          ? 'Chat Now'
                          : info.title === 'Call Us'
                          ? 'Call Now'
                          : 'Send Email'}
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* Service Areas Map */}
            <div className="glass-card animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="glass-light p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="font-semibold text-lg">Our Location</h3>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.497565376046!2d80.20305499999999!3d13.130984299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265efbbd71591%3A0x5cb60644ed912ceb!2sMohana%20air%20conditioners!5e0!3m2!1sen!2sin!4v1758306550285!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Service Request */}
          <div className="glass-strong p-8 rounded-3xl glow-accent animate-slide-in">
            <h3 className="text-2xl font-bold text-gradient mb-6">
              Quick Service Request
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "AC Repair",
                    message: "Hi, I need AC repair service. Please help!",
                  },
                  {
                    label: "Fridge Repair",
                    message: "Hi, I need refrigerator repair service. Please help!",
                  },
                  {
                    label: "Washing Machine",
                    message: "Hi, I need washing machine repair service. Please help!",
                  },
                  {
                    label: "Water Purifier",
                    message: "Hi, I need water purifier service. Please help!",
                  },
                ].map(({ label, message }, idx) => (
                  <Button
                    key={idx}
                    className="btn-primary"
                    onClick={() => {
                      const phone = "+917338965589";
                      window.open(
                        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
                        "_blank"
                      );
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </div>

              <div className="border-t border-glass-border pt-6">
                <h4 className="font-semibold mb-4">Why Choose Mohana AC?</h4>
                <div className="space-y-3">
                  {[
                    "Expert technicians with 8+ years experience",
                    "Genuine parts and warranty",
                    "Same-day service and transparent pricing",
                    "Reliable service Mon - Sun",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          idx % 2 === 0
                            ? "bg-primary"
                            : idx === 3
                            ? "bg-accent-soft"
                            : "bg-accent"
                        }`}
                      ></div>
                      <span className="text-sm text-muted-foreground">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-6">
                <Button
                  className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
                  onClick={() => (window.location.href = "tel:+917338965589")}
                >
                  <Phone size={20} />
                  Call Now: +91 73389 65589
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Monday to Sunday
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
