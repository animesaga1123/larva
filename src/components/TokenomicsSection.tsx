import { motion } from "framer-motion";
import { Coins, Zap, Gift, Shield } from "lucide-react";
import spaceBackground from "@/assets/space-background.jpeg";

const tokenInfo = [
  { icon: Coins, label: "Chain", value: "Solana", color: "text-primary" },
  { icon: Zap, label: "Supply", value: "Fixed", color: "text-accent" },
  { icon: Gift, label: "Taxes", value: "0%", color: "text-larva-green" },
  { icon: Shield, label: "Utility", value: "Memes & Vibes", color: "text-larva-pink" },
];

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="relative py-20 md:py-32 overflow-hidden">
      {/* Space Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${spaceBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      
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
            🧬 Tokenomics
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            (Keep It Simple, Stupid)
          </p>
        </motion.div>

        {/* Token Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {tokenInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
              className="card-cartoon p-6 text-center group"
            >
              <item.icon className={`w-10 h-10 mx-auto mb-3 ${item.color} group-hover:animate-bounce`} />
              <p className="font-body text-sm text-muted-foreground mb-1">
                {item.label}
              </p>
              <p className={`font-display text-2xl ${item.color}`}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block bg-muted/50 border border-border rounded-full px-6 py-3">
            <p className="font-body text-sm text-muted-foreground">
              ⚠️ This is a meme coin. Not financial advice. Just fun. DYOR! 🐛
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
