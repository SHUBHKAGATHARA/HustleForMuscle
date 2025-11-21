import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      category: 'gym',
      title: 'Modern Gym Interior'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
      category: 'workout',
      title: 'Strength Training'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
      category: 'people',
      title: 'Personal Training Session'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop',
      category: 'equipment',
      title: 'Free Weights Area'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&h=600&fit=crop',
      category: 'workout',
      title: 'CrossFit Training'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop',
      category: 'people',
      title: 'Member Success Story'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop',
      category: 'gym',
      title: 'Cardio Zone'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
      category: 'people',
      title: 'Transformation Results'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&h=600&fit=crop',
      category: 'equipment',
      title: 'Dumbbells & Kettlebells'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=600&fit=crop',
      category: 'workout',
      title: 'Cardio Training'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&h=600&fit=crop',
      category: 'people',
      title: 'Group Training Class'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&h=600&fit=crop',
      category: 'people',
      title: 'Female Athlete'
    },
    {
      id: 13,
      url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=1000&fit=crop',
      category: 'gym',
      title: 'Training Floor'
    },
    {
      id: 14,
      url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      category: 'workout',
      title: 'Group Fitness Class'
    },
    {
      id: 15,
      url: 'https://images.unsplash.com/photo-1550259979-ed79b48d2a30?w=800&h=600&fit=crop',
      category: 'people',
      title: 'Yoga & Flexibility'
    },
    {
      id: 16,
      url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1000&fit=crop',
      category: 'workout',
      title: 'Yoga Practice'
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'gym', label: 'Gym Facilities' },
    { id: 'workout', label: 'Workouts' },
    { id: 'people', label: 'Members' },
    { id: 'equipment', label: 'Equipment' }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

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
            Our <span className="text-neon-green">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Witness the Transformations and Facilities
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <AnimatedSection className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 font-bold uppercase tracking-wider transition-all duration-300 
                         ${filter === category.id
                           ? 'bg-neon-green text-black shadow-neon-green'
                           : 'bg-dark-secondary text-gray-400 border border-white/10 hover:border-neon-green/50'
                         }`}
              >
                {category.label}
              </motion.button>
            ))}
          </AnimatedSection>

          {/* Masonry Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className={`relative group cursor-pointer overflow-hidden
                           ${index % 7 === 0 || index % 7 === 3 ? 'row-span-2' : 'row-span-1'}`}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative h-full min-h-[250px]">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                        <div className="flex items-center text-neon-green">
                          <ZoomIn className="w-5 h-5 mr-2" />
                          <span className="uppercase text-sm tracking-wider">View Full</span>
                        </div>
                      </div>
                    </div>

                    {/* Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-green 
                                  transition-all duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 w-12 h-12 bg-neon-green text-black 
                       hover:bg-white transition-colors flex items-center justify-center z-10"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <h2 className="text-3xl font-display text-white mb-2">{selectedImage.title}</h2>
                <p className="text-neon-green uppercase text-sm tracking-wider">
                  {categories.find(cat => cat.id === selectedImage.category)?.label}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-neon-green/10 to-neon-red/10 border-y border-neon-green/20">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
              Ready to Be Our Next <span className="text-neon-green">Success Story?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join us today and start your transformation journey
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-xl py-5 px-12 inline-block"
            >
              Join Now
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
