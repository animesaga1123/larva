import { motion } from "framer-motion";
import { Laugh, Rocket, Globe, Users } from "lucide-react";

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
    <section id="why" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
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

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${feature.bgColor} flex items-center justify-center group-hover:animate-wiggle`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLarvaSection;
