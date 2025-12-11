import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="privacy-policy"
      className="max-w-5xl mx-auto px-6 py-24 text-muted-foreground"
    >
      <div className="glass-card p-8 rounded-3xl shadow-xl backdrop-blur-lg border border-border animate-fade-in">
        <h1 className="text-4xl font-bold mb-10 text-gradient text-center">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              1. No Data Collection on Website
            </h2>
            <p>
              We do not collect any personal data through forms or registrations
              on our website. You can browse our website without providing any
              personal information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              2. Communication via WhatsApp or Phone
            </h2>
            <p>
              If you contact us via phone or WhatsApp, you may share your name
              and address voluntarily. This is used solely for service purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              3. Follow-Up Communication
            </h2>
            <p>
              We may follow up after service to ensure everything is working
              fine. No marketing or bulk promotional messages will be sent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              4. Appliance Photos
            </h2>
            <p>
              Photos may be taken before or after service for documentation or
              proof. Some may be shared on platforms like Google Maps without
              personal data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              5. Testimonials
            </h2>
            <p>
              Customer reviews from WhatsApp or Google Maps may be shown on our
              website. These include the customer's name, rating, and message.
              If you'd like your testimonial removed, just contact us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              6. Google Analytics (Future)
            </h2>
            <p>
              We may use Google Analytics in the future to analyze site traffic.
              No personally identifying info will be collected or stored.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              7. Internal Use Only
            </h2>
            <p>
              Any basic customer data (like name or location) collected during
              service is stored only for internal use (invoices or support).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              8. Contact Us
            </h2>
            <p>
              If you have any questions or requests related to privacy, reach us
              at{" "}
              <a
                href="mailto:manimogana05@gmail.com"
                className="text-primary underline hover:text-accent transition"
              >
                manimogana05@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
