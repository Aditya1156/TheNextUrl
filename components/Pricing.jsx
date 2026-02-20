"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FadeUp } from "@/components/AnimateOnScroll";
import NumberFlow from "@number-flow/react";
import { Globe, Database, Server, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and institutions that need a professional online presence",
    price: 14999,
    yearlyPrice: 149999,
    features: [
      { text: "5-page responsive website", icon: <Globe size={18} /> },
      { text: "Basic SEO setup", icon: <Database size={18} /> },
      { text: "Contact form integration", icon: <Server size={18} /> },
    ],
    includes: [
      "Free includes:",
      "Free SSL certificate",
      "1 revision round",
      "30-day post-launch support",
    ],
  },
  {
    name: "Business",
    description: "Best value for growing institutions that need a dashboard and managed hosting",
    price: 29999,
    yearlyPrice: 299999,
    popular: true,
    features: [
      { text: "Unlimited pages", icon: <Globe size={18} /> },
      { text: "Custom admin dashboard", icon: <Database size={18} /> },
      { text: "Managed cloud hosting", icon: <Server size={18} /> },
    ],
    includes: [
      "Everything in Starter, plus:",
      "Custom domain setup",
      "Analytics & reporting",
      "Monthly maintenance",
    ],
  },
  {
    name: "Enterprise",
    description: "Full-scale ERP system with custom portals and priority support for large institutions",
    price: 59999,
    yearlyPrice: 599999,
    features: [
      { text: "Full ERP system", icon: <Globe size={18} /> },
      { text: "Student & staff portals", icon: <Database size={18} /> },
      { text: "Custom integrations", icon: <Server size={18} /> },
    ],
    includes: [
      "Everything in Business, plus:",
      "Priority 24/7 support",
      "Dedicated project manager",
      "SLA guarantee",
    ],
  },
];

function PricingSwitch({ onSwitch }) {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-bg-secondary border border-gray-200 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={`relative z-10 w-fit h-10 sm:h-12 rounded-full px-4 sm:px-6 py-1 sm:py-2 font-medium transition-colors text-sm sm:text-base ${
            selected === "0" ? "text-white" : "text-text-muted hover:text-text"
          }`}
        >
          {selected === "0" && (
            <motion.span
              layoutId="pricing-switch"
              className="absolute top-0 left-0 h-10 sm:h-12 w-full rounded-full border-2 border-accent-blue bg-accent-blue shadow-lg shadow-accent-blue/25"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={`relative z-10 w-fit h-10 sm:h-12 flex-shrink-0 rounded-full px-4 sm:px-6 py-1 sm:py-2 font-medium transition-colors text-sm sm:text-base ${
            selected === "1" ? "text-white" : "text-text-muted hover:text-text"
          }`}
        >
          {selected === "1" && (
            <motion.span
              layoutId="pricing-switch"
              className="absolute top-0 left-0 h-10 sm:h-12 w-full rounded-full border-2 border-accent-blue bg-accent-blue shadow-lg shadow-accent-blue/25"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-accent-blue">
              Save 20%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricingPeriod = (value) => setIsYearly(parseInt(value) === 1);

  return (
    <section id="pricing" className="section-container bg-bg-secondary">
      <FadeUp>
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <h2 className="section-heading mb-4">
            Plans That Work Best for Your{" "}
            <span className="inline-block border border-dashed border-accent-blue px-3 py-1 rounded-xl bg-blue-50 text-accent-blue">
              Institution
            </span>
          </h2>
          <p className="section-subheading mx-auto">
            Trusted by schools, colleges, and businesses across India. Explore which option fits your needs.
          </p>
        </div>
      </FadeUp>

      <FadeUp>
        <PricingSwitch onSwitch={togglePricingPeriod} />
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl gap-5 py-8 mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card
              className={`h-full ${
                plan.popular
                  ? "ring-2 ring-accent-blue bg-blue-50/50"
                  : "bg-white"
              }`}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text mb-2">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="bg-accent-blue text-white px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-muted mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-heading font-bold text-text">
                    ₹
                    <NumberFlow
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-3xl sm:text-4xl font-heading font-bold"
                    />
                  </span>
                  <span className="text-text-muted ml-1 text-sm">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <Link
                  href="/contact"
                  className={`w-full mb-6 p-3.5 text-base font-medium rounded-xl block text-center transition-all duration-300 ${
                    plan.popular
                      ? "bg-accent-blue text-white shadow-lg shadow-accent-blue/25 hover:shadow-xl hover:-translate-y-0.5"
                      : "bg-text text-white hover:shadow-lg hover:-translate-y-0.5"
                  }`}
                >
                  Get Started
                </Link>

                <ul className="space-y-3 py-5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-text-muted mr-3 shrink-0">{feature.icon}</span>
                      <span className="text-sm text-text-muted">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-sm text-text mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2.5">
                    {plan.includes.slice(1).map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="h-5 w-5 bg-blue-50 border border-accent-blue rounded-full grid place-content-center mr-3 shrink-0">
                          <CheckCircle2 className="h-3 w-3 text-accent-blue" />
                        </span>
                        <span className="text-sm text-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
