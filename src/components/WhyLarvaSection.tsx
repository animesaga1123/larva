import { motion } from "framer-motion";
import { Laugh, Rocket, Globe, Users } from "lucide-react";
import larvaSpaceship from "@/assets/larva-spaceship.jpeg";

const features = [
  {
    icon: Laugh,
    title: "Meme-powered community",
    description: "Built by degens, for degens. Pure meme energy.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Rocket,
    title: "Built on Solana",
    description: "Fast, cheap, and ready to moon. No gas drama.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Globe,
    title: "Viral animation culture",
    description: "Inspired by 200M+ views of pure Larva chaos.",
    color: "text-larva-pink",
    bgColor: "bg-larva-pink/10",
  },
  {
    icon: Users,
    title: "Community-first, meme forever",
    description: "No VCs. No insiders. Just vibes and worms.",
    color: "text-larva-green",
    bgColor: "bg-larva-green/10",
  },
];

const WhyLarvaSection = () => {
  return (
    <section id="why" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background spaceship image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${larvaSpaceship})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            🚀 Why <span className="text-gradient-primary">Larva</span>?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Because the internet deserves more worms on Mars.
          </p>
        </motion.div>

        {/* Main Content - Image + Cards */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Spaceship Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={larvaSpaceship}
                alt="Larva crew on spaceship"
                className="w-full max-w-lg mx-auto rounded-3xl border-4 border-primary/30 shadow-glow"
              />
              {/* Decorative elements */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full blur-sm"
              />
              <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-larva-pink rounded-full blur-sm"
              />
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4 order-1 lg:order-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-cartoon p-6 text-center hover-bounce cursor-pointer group"
              >
                <div className={`w-14 h-14 mx-auto mb-3 rounded-2xl ${feature.bgColor} flex items-center justify-center group-hover:animate-wiggle`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLarvaSection;
