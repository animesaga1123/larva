import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Rocket, MessageCircle } from "lucide-react";
import larvaVideo from "@/assets/larva-video.mp4";

const taglines = [
  "No utility. No promises. Just Larva on Mars.",
  "Laugh first. Meme forever.",
  "Absurd memes. Serious vibes.",
  "From Earth to Mars, one meme at a time.",
  "The worm has landed. 🐛🚀",
];

const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          src={larvaVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground mb-4 drop-shadow-2xl">
            <span className="text-gradient-primary">LARVA</span>
            <span className="block md:inline"> IN </span>
            <span className="text-mars-orange">MARS</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-body text-xl md:text-2xl text-foreground/90 mb-6 font-semibold"
          >
            From viral laughs to interplanetary memes. 🪐
          </motion.p>

          {/* Rotating Tagline */}
          <motion.div
            key={currentTagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="h-12 flex items-center justify-center mb-10"
          >
            <p className="font-body text-lg md:text-xl text-accent italic">
              "{taglines[currentTagline]}"
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-gradient-cta text-primary-foreground font-bold text-lg px-8 py-4 rounded-full shadow-button hover:shadow-glow transition-all duration-300"
            >
              <Rocket className="w-5 h-5 group-hover:animate-bounce" />
              Buy on Solana
            </motion.a>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-gradient-secondary text-secondary-foreground font-bold text-lg px-8 py-4 rounded-full shadow-card hover:shadow-glow transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-wiggle" />
              Join Telegram
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
