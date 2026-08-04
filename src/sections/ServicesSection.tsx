import React from 'react';
import { FadeIn } from '../components/FadeIn';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: '01',
    name: 'Custom SaaS Development',
    description:
      'Building end-to-end, scalable, and secure cloud software applications tailored to business needs and user workflows.',
  },
  {
    id: '02',
    name: 'AI Automation Solutions',
    description:
      'Designing intelligent automation workflows, LLM integrations, and AI-driven systems to streamline operations and enhance productivity.',
  },
  {
    id: '03',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="font-black uppercase leading-none tracking-tight text-[#0C0C0C] select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full border-t border-[#0C0C0C]/15">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1} y={30} className="w-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 gap-4 sm:gap-8 md:gap-12 transition-colors duration-300 hover:bg-[#0C0C0C]/[0.02] px-2 sm:px-4 rounded-xl">
                {/* Number */}
                <span
                  className="font-black text-[#0C0C0C] leading-none tracking-tighter select-none min-w-[120px] sm:min-w-[160px] md:min-w-[200px]"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.id}
                </span>

                {/* Name and Description */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
