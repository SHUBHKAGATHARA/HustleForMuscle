import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - Replace with your actual credentials
      const serviceID = 'YOUR_SERVICE_ID';
      const templateID = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message,
        to_name: 'Hustle For Muscle'
      };

      // Uncomment when EmailJS is configured
      // await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      // Simulated success for demo
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Dhrol, Dist. Jamnagar,', 'Gujarat, India']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 8799380134', 'Mon-Sun: 6 AM - 10 PM']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['kagatharashubham9@gmail.com', 'Response within 24 hours']
    }
  ];

  const gymHours = [
    { day: 'Monday - Friday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '7:00 AM - 9:00 PM' },
    { day: 'Sunday', hours: '7:00 AM - 9:00 PM' },
    { day: 'Holidays', hours: '8:00 AM - 6:00 PM' }
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
            Contact <span className="text-neon-green">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Let's Start Your Fitness Journey Together
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="bg-dark-secondary p-8 border border-white/10 hover:border-neon-green/50 
                           transition-all duration-300 text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-neon-green/10 mx-auto mb-6 flex items-center justify-center"
                  >
                    <info.icon className="w-8 h-8 text-neon-green" />
                  </motion.div>
                  <h3 className="text-2xl font-display text-white mb-4">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400 text-lg">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-dark-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="fadeRight">
              <div className="bg-black p-8 md:p-12 border border-neon-green/20">
                <h2 className="text-4xl font-display text-white mb-2">
                  Send Us a <span className="text-neon-green">Message</span>
                </h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      className="w-full px-4 py-3 bg-dark-secondary border border-white/10 
                               text-white focus:border-neon-green focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-neon-red text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 bg-dark-secondary border border-white/10 
                               text-white focus:border-neon-green focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-neon-red text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { 
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9+\-\s()]+$/,
                          message: 'Invalid phone number'
                        }
                      })}
                      className="w-full px-4 py-3 bg-dark-secondary border border-white/10 
                               text-white focus:border-neon-green focus:outline-none transition-colors"
                      placeholder="+1 (234) 567-890"
                    />
                    {errors.phone && (
                      <p className="text-neon-red text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { 
                        required: 'Message is required',
                        minLength: { value: 10, message: 'Message must be at least 10 characters' }
                      })}
                      rows="5"
                      className="w-full px-4 py-3 bg-dark-secondary border border-white/10 
                               text-white focus:border-neon-green focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your fitness goals..."
                    />
                    {errors.message && (
                      <p className="text-neon-red text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center disabled:opacity-50 
                             disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-neon-green/10 border border-neon-green p-4 flex items-center"
                    >
                      <CheckCircle className="w-6 h-6 text-neon-green mr-3" />
                      <p className="text-neon-green font-semibold">
                        Message sent successfully! We'll contact you soon.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-neon-red/10 border border-neon-red p-4 flex items-center"
                    >
                      <AlertCircle className="w-6 h-6 text-neon-red mr-3" />
                      <p className="text-neon-red font-semibold">
                        Failed to send message. Please try again or contact us directly.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </AnimatedSection>

            {/* Map & Hours */}
            <AnimatedSection animation="fadeLeft">
              <div className="space-y-8">
                {/* Map */}
                <div className="bg-black p-4 border border-neon-green/20 h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gym Location"
                  />
                </div>

                {/* Gym Hours */}
                <div className="bg-black p-8 border border-neon-green/20">
                  <div className="flex items-center mb-6">
                    <Clock className="w-8 h-8 text-neon-green mr-4" />
                    <h3 className="text-3xl font-display text-white">Gym Hours</h3>
                  </div>
                  <div className="space-y-4">
                    {gymHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center pb-4 border-b border-white/10 last:border-0"
                      >
                        <span className="text-gray-400 font-semibold">{schedule.day}</span>
                        <span className="text-neon-green font-bold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.a
                    href="https://wa.me/918799380134"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#25D366] text-white p-6 flex flex-col items-center justify-center 
                             hover:bg-[#20BA5A] transition-colors"
                  >
                    <MessageSquare className="w-8 h-8 mb-2" />
                    <span className="font-bold">WhatsApp</span>
                  </motion.a>

                  <motion.a
                    href="tel:+918799380134"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-neon-green text-black p-6 flex flex-col items-center justify-center 
                             hover:bg-white transition-colors"
                  >
                    <Phone className="w-8 h-8 mb-2" />
                    <span className="font-bold">Call Now</span>
                  </motion.a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-neon-green/10 to-neon-red/10 border-y border-neon-green/20">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
              Visit Our <span className="text-neon-green">Gym</span> Today
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Experience our world-class facilities with a free trial session
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-xl py-5 px-12 inline-block"
            >
              Book Free Trial
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
