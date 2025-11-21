import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Heart, Award, Zap, Users, TrendingUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower individuals to achieve their fitness goals through world-class facilities, expert guidance, and unwavering support. We believe everyone deserves to feel strong, confident, and healthy.'
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'To become the leading fitness destination known for transforming lives, building a community of champions, and setting the gold standard in premium gym experiences worldwide.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Excellence, Integrity, Community, and Results. We are committed to providing the highest quality service while fostering a supportive environment where everyone can thrive.'
    }
  ];

  const trainers = [
    {
      name: 'Marcus Steel',
      title: 'Head Strength Coach',
      specialty: 'Powerlifting & Strength',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&h=800&fit=crop',
      experience: '15+ Years',
      certifications: 'NSCA-CSCS, USA Powerlifting'
    },
    {
      name: 'Sarah Phoenix',
      title: 'Transformation Specialist',
      specialty: 'Body Composition & Nutrition',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=800&fit=crop',
      experience: '12+ Years',
      certifications: 'NASM-CPT, Precision Nutrition'
    },
    {
      name: 'Jake Thunder',
      title: 'CrossFit Director',
      specialty: 'Functional Fitness & HIIT',
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&h=800&fit=crop',
      experience: '10+ Years',
      certifications: 'CrossFit L3, Olympic Lifting'
    },
    {
      name: 'Nina Blade',
      title: 'Wellness Coach',
      specialty: 'Yoga & Recovery',
      image: 'https://images.unsplash.com/photo-1550259979-ed79b48d2a30?w=600&h=800&fit=crop',
      experience: '8+ Years',
      certifications: 'RYT-500, Sports Medicine'
    }
  ];

  const timeline = [
    { year: '2010', event: 'Founded Hustle For Muscle with a vision to revolutionize fitness' },
    { year: '2013', event: 'Expanded to 5,000 sq ft facility with state-of-the-art equipment' },
    { year: '2016', event: 'Introduced personalized training programs and nutrition coaching' },
    { year: '2019', event: 'Reached 3,000+ active members milestone' },
    { year: '2022', event: 'Awarded "Best Premium Gym" by Fitness Magazine' },
    { year: '2025', event: 'Celebrating 15 years of transforming lives' }
  ];

  const achievements = [
    { number: 10000, suffix: '+', label: 'Lives Transformed' },
    { number: 50, suffix: '+', label: 'Expert Trainers' },
    { number: 25, suffix: '+', label: 'Awards Won' },
    { number: 98, suffix: '%', label: 'Success Rate' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&h=1080&fit=crop)',
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
            About <span className="text-neon-green">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Building Champions, Transforming Lives Since 2010
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeRight">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1000&fit=crop"
                  alt="Gym Interior"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeLeft">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                Our <span className="text-neon-green">Story</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Hustle For Muscle was born from a simple belief: everyone deserves access to 
                premium fitness facilities and expert coaching that delivers real results. 
                What started as a small 2,000 sq ft gym has grown into a state-of-the-art 
                fitness destination.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Over the past 15 years, we've helped thousands transform their bodies and lives. 
                Our commitment to excellence, cutting-edge equipment, and personalized approach 
                has made us the premier choice for serious fitness enthusiasts.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We're not just a gym—we're a community of champions dedicated to pushing limits, 
                breaking barriers, and achieving the impossible. Join us and discover what 
                true transformation feels like.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="bg-black p-8 border border-neon-green/20 h-full"
                >
                  <value.icon className="w-16 h-16 text-neon-green mb-6" />
                  <h3 className="text-3xl font-display text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display text-white mb-4">
              Our <span className="text-neon-green">Journey</span>
            </h2>
            <p className="text-xl text-gray-400">15 years of excellence and growth</p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-neon-green/30 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-dark-secondary p-6 border border-neon-green/20 inline-block"
                    >
                      <h3 className="text-3xl font-display text-neon-green mb-2">{item.year}</h3>
                      <p className="text-gray-300 text-lg">{item.event}</p>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <div className="w-6 h-6 bg-neon-green rounded-full border-4 border-black z-10 flex-shrink-0 hidden md:block" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display text-white mb-4">
              Meet Our <span className="text-neon-green">Trainers</span>
            </h2>
            <p className="text-xl text-gray-400">Expert coaches dedicated to your success</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden bg-black border border-white/10 
                           hover:border-neon-green/50 transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-80">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-display text-white mb-1 group-hover:text-neon-green transition-colors">
                      {trainer.name}
                    </h3>
                    <p className="text-neon-green mb-2 font-semibold">{trainer.title}</p>
                    <p className="text-gray-400 mb-3">{trainer.specialty}</p>
                    <div className="space-y-1 text-sm text-gray-500">
                      <p>📅 {trainer.experience}</p>
                      <p>🏆 {trainer.certifications}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Counter */}
      <section className="section-padding bg-gradient-to-r from-neon-green/10 to-neon-red/10">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-display text-white mb-4">
              Our <span className="text-neon-green">Achievements</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center p-8 bg-black/50 border border-neon-green/20">
                  <AnimatedCounter 
                    end={achievement.number} 
                    suffix={achievement.suffix}
                  />
                  <p className="text-xl text-gray-400 mt-4 font-semibold">{achievement.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
