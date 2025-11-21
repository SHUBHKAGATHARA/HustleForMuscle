import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Zap, 
  Activity, 
  Heart, 
  Users, 
  Target,
  Flame,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'Weight Training',
      description: 'Build muscle mass and strength with our comprehensive weight training program. Perfect for beginners and advanced lifters.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
      icon: Dumbbell,
      features: [
        'Progressive overload training',
        'Hypertrophy-focused routines',
        'Form correction & technique',
        'Personalized weight progression'
      ],
      color: 'neon-green'
    },
    {
      id: 2,
      title: 'Strength Conditioning',
      description: 'Maximize your power and athletic performance through specialized strength and conditioning protocols.',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop',
      icon: Zap,
      features: [
        'Olympic lifting techniques',
        'Explosive power training',
        'Speed & agility drills',
        'Competition preparation'
      ],
      color: 'neon-red'
    },
    {
      id: 3,
      title: 'CrossFit',
      description: 'High-intensity functional fitness combining cardio, weightlifting, and gymnastics for total body transformation.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&h=600&fit=crop',
      icon: Flame,
      features: [
        'WOD (Workout of the Day)',
        'Functional movement patterns',
        'Community-driven training',
        'Scalable for all levels'
      ],
      color: 'neon-green'
    },
    {
      id: 4,
      title: 'Cardio',
      description: 'Improve cardiovascular health, endurance, and burn fat with diverse cardio training methods.',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=600&fit=crop',
      icon: Activity,
      features: [
        'HIIT training sessions',
        'Endurance building',
        'Fat burning programs',
        'Heart rate zone training'
      ],
      color: 'neon-red'
    },
    {
      id: 5,
      title: 'Body Transformation',
      description: 'Complete lifestyle change program combining training, nutrition, and coaching for dramatic results.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
      icon: TrendingUp,
      features: [
        'Customized meal plans',
        'Weekly progress tracking',
        'Body composition analysis',
        '90-day transformation challenge'
      ],
      color: 'neon-green'
    },
    {
      id: 6,
      title: 'Personal Training',
      description: 'One-on-one coaching with certified trainers tailored specifically to your goals and fitness level.',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
      icon: Users,
      features: [
        'Dedicated personal coach',
        'Customized workout plans',
        'Nutrition guidance',
        'Accountability & support'
      ],
      color: 'neon-red'
    },
    {
      id: 7,
      title: 'Flexibility & Yoga',
      description: 'Enhance mobility, reduce stress, and improve recovery with guided yoga and stretching sessions.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      icon: Heart,
      features: [
        'Various yoga styles',
        'Mobility & flexibility work',
        'Stress relief & mindfulness',
        'Injury prevention & recovery'
      ],
      color: 'neon-green'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop)',
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
            Our <span className="text-neon-green">Programs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Choose Your Path to Greatness
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
              Discover the Perfect <span className="text-neon-green">Program</span> for You
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Every program is designed by experts and proven to deliver results
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <AnimatedSection key={program.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative bg-dark-secondary border border-white/10 
                           hover:border-neon-green/50 overflow-hidden transition-all duration-500 h-full"
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-black/50 to-transparent" />
                    
                    {/* Icon Badge */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`absolute top-6 right-6 w-16 h-16 bg-${program.color}/20 
                                 backdrop-blur-sm border-2 border-${program.color} flex items-center justify-center`}
                    >
                      <program.icon className={`w-8 h-8 text-${program.color}`} />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-3xl font-display text-white mb-4 group-hover:text-neon-green transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {program.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-gray-300"
                        >
                          <ArrowRight className="w-5 h-5 text-neon-green mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-neon-green 
                               text-neon-green font-bold uppercase tracking-wider hover:bg-neon-green 
                               hover:text-black transition-all duration-300 group/btn"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 
                                  pointer-events-none bg-gradient-to-br from-${program.color} to-transparent`} />
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
            <Target className="w-16 h-16 text-neon-green mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
              Not Sure Where to <span className="text-neon-green">Start?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Book a free consultation with our expert trainers to find the perfect program for your goals
            </p>
            <Link to="/contact" className="btn-primary text-xl py-5 px-12">
              Book Free Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Programs;
