import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Professor of Computer Science",
      content: "Vinay is an exceptional student with a rare combination of technical aptitude and creative problem-solving skills. His work on the AI Chatbot project was outstanding.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Senior Developer @ Tech Innovators",
      content: "During his internship, Vinay consistently delivered high-quality code. He is a quick learner, a great team player, and has a bright future in software development.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Hackathon Teammate",
      content: "Working with Vinay was a fantastic experience. His ability to lead the frontend development while maintaining a calm demeanor under pressure was key to our success.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Uncomment the block below to display testimonials in the new design
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-display mb-4">What People Say</h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-950/20 border border-zinc-900 p-6 sm:p-8 rounded-2xl relative group hover:border-zinc-800 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-primary/15" />
              
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-zinc-400 italic mb-6 text-xs sm:text-sm leading-relaxed text-left">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3.5 mt-auto border-t border-zinc-900 pt-4 text-left">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-brand-primary font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm font-display">{testimonial.name}</h4>
                  <p className="text-[10px] text-zinc-500 font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
};

export default Testimonials;
