import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { 
  Zap, 
  Users, 
  Trophy, 
  Target, 
  Dumbbell, 
  Heart,
  Shield,
  Award,
  TrendingUp,
  Star
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import AnimatedSection from '../components/AnimatedSection';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    // Hero text animation
    const tl = gsap.timeline();
    tl.fromTo(
      '.hero-title',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
    )
    .fromTo(
      '.hero-subtitle',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' },
      '-=0.5'
    )
    .fromTo(
      '.hero-cta',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.4'
    );

    // Parallax effect
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    }
  }, []);

  const features = [
    {
      icon: Dumbbell,
      title: 'World-Class Equipment',
      description: 'State-of-the-art machines and free weights for every fitness level'
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Certified professionals dedicated to your transformation journey'
    },
    {
      icon: Heart,
      title: '24/7 Access',
      description: 'Train on your schedule with round-the-clock gym access'
    },
    {
      icon: Target,
      title: 'Personalized Plans',
      description: 'Custom workout and nutrition plans tailored to your goals'
    },
    {
      icon: Trophy,
      title: 'Results Guaranteed',
      description: 'Proven track record of incredible transformations'
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Clean, secure, and professional training atmosphere'
    }
  ];

  const testimonials = [
    {
      name: 'Mike Johnson',
      role: 'Body Transformation',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop',
      text: 'Lost 50 pounds in 6 months! The trainers here are phenomenal and the equipment is top-notch. Life-changing experience!',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Strength Training',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop',
      text: 'Best gym I\'ve ever been to. The community is amazing and the results speak for themselves. Highly recommend!',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Athletic Performance',
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=400&fit=crop',
      text: 'Incredible facilities and expert coaching. My performance has skyrocketed since joining Hustle For Muscle!',
      rating: 5
    },
    {
      name: 'Emma Davis',
      role: 'Weight Loss Journey',
      image: 'https://images.unsplash.com/photo-1550259979-ed79b48d2a30?w=400&h=400&fit=crop',
      text: 'The personalized approach made all the difference. Down 40 pounds and feeling stronger than ever!',
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-red/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center px-4">
          <motion.div
            className="hero-title"
            initial={{ opacity: 0 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-white mb-6 leading-none">
              HUSTLE FOR
              <span className="block text-neon-green glow-text-green">MUSCLE</span>
            </h1>
          </motion.div>

          <motion.p
            className="hero-subtitle text-xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto font-light tracking-wide"
            initial={{ opacity: 0 }}
          >
            Transform Your Body. Transform Your Life.
          </motion.p>

          <motion.div
            className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0 }}
          >
            <Link to="/contact" className="btn-primary">
              Join Now
            </Link>
            <Link to="/programs" className="btn-secondary">
              Explore Programs
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-neon-green rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Counter Section */}
      <AnimatedSection className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <AnimatedCounter end={5000} suffix="+" />
              <p className="text-xl md:text-2xl text-gray-400 mt-4 font-semibold">Active Members</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={50} suffix="+" />
              <p className="text-xl md:text-2xl text-gray-400 mt-4 font-semibold">Expert Trainers</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={15} suffix="+" />
              <p className="text-xl md:text-2xl text-gray-400 mt-4 font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display text-white mb-4">
              Why Choose <span className="text-neon-green">Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the ultimate fitness journey with premium facilities and expert guidance
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-dark-secondary p-8 border border-white/10 hover:border-neon-green/50 
                           transition-all duration-300 h-full"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-neon-green/10 flex items-center justify-center mb-6 
                             group-hover:bg-neon-green/20 transition-colors"
                  >
                    <feature.icon className="w-8 h-8 text-neon-green" />
                  </motion.div>
                  <h3 className="text-2xl font-display text-white mb-4 group-hover:text-neon-green transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Image Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-display text-white text-center glow-text-green">
              NO PAIN, NO GAIN
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display text-white mb-4">
              Success <span className="text-neon-green">Stories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real transformations from real people
            </p>
          </AnimatedSection>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-black p-8 border border-white/10 hover:border-neon-green/50 
                           transition-all duration-300 h-full"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-neon-green"
                    />
                    <div className="ml-4">
                      <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                      <p className="text-neon-green text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-neon-green fill-neon-green" />
                    ))}
                  </div>
                  <p className="text-gray-400 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-neon-green/10 to-neon-red/10 border-y border-neon-green/20">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
              Ready to <span className="text-neon-green">Transform?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join thousands of members who have already transformed their lives
            </p>
            <Link to="/contact" className="btn-primary text-xl py-5 px-12">
              Start Your Journey
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
