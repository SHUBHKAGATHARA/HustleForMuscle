import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X, Zap, Crown, Rocket } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 1,
      name: 'Basic Plan',
      icon: Zap,
      description: 'Perfect for getting started',
      monthlyPrice: 999,
      yearlyPrice: 9990,
      color: 'white',
      features: [
        { text: 'Access to gym facilities', included: true },
        { text: 'Standard equipment usage', included: true },
        { text: 'Locker room access', included: true },
        { text: 'Mobile app access', included: true },
        { text: 'Group classes (2 per week)', included: true },
        { text: 'Personal training sessions', included: false },
        { text: 'Nutrition consultation', included: false },
        { text: 'Priority booking', included: false },
        { text: 'Guest passes', included: false }
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Pro Training',
      icon: Crown,
      description: 'Most popular choice',
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      color: 'neon-green',
      features: [
        { text: 'All Basic Plan features', included: true },
        { text: 'Unlimited group classes', included: true },
        { text: 'Personal training (4 sessions/month)', included: true },
        { text: 'Nutrition consultation', included: true },
        { text: 'Body composition analysis', included: true },
        { text: 'Priority booking', included: true },
        { text: 'Guest passes (2 per month)', included: true },
        { text: 'Sauna & steam room access', included: true },
        { text: 'Free gym merchandise', included: false }
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Elite Transformation',
      icon: Rocket,
      description: 'Ultimate fitness experience',
      monthlyPrice: 3999,
      yearlyPrice: 39990,
      color: 'neon-red',
      features: [
        { text: 'All Pro Training features', included: true },
        { text: 'Unlimited personal training', included: true },
        { text: 'Custom meal planning', included: true },
        { text: 'Weekly progress reviews', included: true },
        { text: 'Advanced body analytics', included: true },
        { text: 'Supplement consultation', included: true },
        { text: 'Unlimited guest passes', included: true },
        { text: 'Free gym merchandise', included: true },
        { text: 'VIP member events', included: true }
      ],
      popular: false
    }
  ];

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    return monthlyCost - yearlyCost;
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container-custom text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-display text-white mb-6"
          >
            Membership <span className="text-neon-green">Plans</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Invest in Yourself. Choose Your Plan.
          </motion.p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center bg-dark-secondary p-2 rounded-full border border-white/10">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-neon-green text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 relative ${
                  billingCycle === 'yearly'
                    ? 'bg-neon-green text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-neon-red text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </AnimatedSection>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <AnimatedSection key={plan.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -15, scale: 1.02 }}
                  className={`relative bg-dark-secondary border-2 h-full flex flex-col
                           ${plan.popular 
                             ? 'border-neon-green shadow-glow-green' 
                             : 'border-white/10 hover:border-neon-green/30'
                           } transition-all duration-500`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-neon-green text-black px-6 py-2 font-bold uppercase text-sm tracking-wider">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="p-8 flex flex-col flex-grow">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 mx-auto mb-6 bg-${plan.color}/10 border-2 border-${plan.color} 
                               flex items-center justify-center`}
                    >
                      <plan.icon className={`w-10 h-10 text-${plan.color}`} />
                    </motion.div>

                    {/* Plan Name */}
                    <h3 className={`text-3xl font-display text-center mb-2 text-${plan.color}`}>
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-center mb-6">{plan.description}</p>

                    {/* Price */}
                    <div className="text-center mb-8">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-display text-white">₹{getPrice(plan)}</span>
                        <span className="text-gray-400 ml-2">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <p className="text-neon-green text-sm mt-2">
                          Save ₹{getSavings(plan)} per year
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          {feature.included ? (
                            <Check className="w-5 h-5 text-neon-green mr-3 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                            {feature.text}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      to="/contact"
                      className={`block text-center py-4 font-bold uppercase tracking-wider 
                               transition-all duration-300 transform hover:scale-105
                               ${plan.popular
                                 ? 'bg-neon-green text-black hover:bg-white hover:shadow-neon-green'
                                 : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black'
                               }`}
                    >
                      Join This Plan
                    </Link>
                  </div>

                  {/* Glow Effect */}
                  {plan.popular && (
                    <motion.div
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-transparent pointer-events-none"
                    />
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
              All Plans Include
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'No Commitment', description: 'Cancel anytime, no long-term contracts' },
              { title: 'Clean Facilities', description: 'Maintained to the highest standards' },
              { title: 'Free WiFi', description: 'High-speed internet throughout' },
              { title: 'Parking', description: 'Complimentary secure parking' },
            ].map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center p-6 bg-black/50 border border-neon-green/20">
                  <h3 className="text-xl font-display text-neon-green mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-black">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
              Frequently Asked <span className="text-neon-green">Questions</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: 'Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle.'
              },
              {
                q: 'Is there a joining fee?',
                a: 'No joining fees! Just pay your first month and start your transformation journey immediately.'
              },
              {
                q: 'Do you offer student or corporate discounts?',
                a: 'Yes! We offer special rates for students and corporate groups. Contact us for details.'
              },
              {
                q: 'What if I need to freeze my membership?',
                a: 'You can freeze your membership for up to 3 months per year for a small administrative fee.'
              }
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="bg-dark-secondary p-6 border-l-4 border-neon-green"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-neon-green/10 to-neon-red/10 border-y border-neon-green/20">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
              Start Your Transformation <span className="text-neon-green">Today</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join now and get your first week free!
            </p>
            <Link to="/contact" className="btn-primary text-xl py-5 px-12">
              Claim Your Free Week
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
