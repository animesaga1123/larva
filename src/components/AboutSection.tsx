import { motion } from "framer-motion";
import larvaOnMars from "@/assets/larva-on-mars.jpeg";
import larvaVideo from "@/assets/larva-video.mp4";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative animate-float">
              <img
                src={larvaOnMars}
                alt="Larva on Mars"
                className="w-full max-w-md mx-auto rounded-3xl border-4 border-primary/30 shadow-card"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-larva-pink rounded-full animate-float-delayed" />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              🐛 What is <span className="text-gradient-primary">Larva in Mars</span>?
            </h2>
            
            <div className="space-y-4 font-body text-lg text-foreground/80">
              <p>
                <strong className="text-accent">Larva in Mars</strong> is a meme coin built on Solana — created for laughs, vibes, and a strong meme community.
              </p>
              <p>
                No complex roadmap. No fake utility.<br />
                <span className="text-larva-pink font-semibold">Just memes, community, and pure absurd fun.</span>
              </p>
              <p className="text-xl pt-4 font-semibold text-foreground">
                If you love memes and Solana,<br />
                <span className="text-primary">you're already one of us. 🪐</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="font-display text-2xl md:text-3xl text-center text-foreground mb-8">
            🎬 Watch the <span className="text-primary">Larva</span> in action!
          </h3>
          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden border-4 border-primary/30 shadow-glow">
            <video
              src={larvaVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
