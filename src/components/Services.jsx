import React from 'react';
import { motion } from 'framer-motion';
import {
  CalendarCheck,
  ShieldCheck,
  ChartBar,
  Palette,
  Storefront,
  Buildings,
  CreditCard,
  DeviceMobile,
  ImageSquare,
  ClockCountdown,
  UsersThree,
  BellRinging,
  FirstAidKit
} from '@phosphor-icons/react';
import { services } from '../data/company';

const iconMap = {
  calendar: CalendarCheck,
  shield: ShieldCheck,
  barChart: ChartBar,
  palette: Palette,
  search: Storefront,
  building: Buildings,
  creditCard: CreditCard,
  smartphone: DeviceMobile,
  image: ImageSquare,
  clock: ClockCountdown,
  users: UsersThree,
  bell: BellRinging,
  fileText: FirstAidKit
};

function Services() {
  return (
    <section className="section section--soft" id="servicios">
      <div className="container">
        <motion.div
          className="section__header section__header--center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section__eyebrow">Lo que ofrecemos</p>
          <h2 className="section__title">Servicios pensados para que tu negocio luzca mejor</h2>
          <p className="section__text">
            Muestra con claridad lo que ofreces para que tus visitantes entiendan el valor de tu empresa.
          </p>
        </motion.div>

        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.article
                className="service-card"
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -8 }}
              >
                <div className="service-card__head">
                  <div className="service-card__heading">
                    <motion.div
                      className="service-card__icon"
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                    >
                      {Icon && <Icon size={26} weight="duotone" />}
                    </motion.div>

                    <h3>{service.title}</h3>
                  </div>

                  <span className="service-card__number">
                    
                  </span>
                </div>

                <p>{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;