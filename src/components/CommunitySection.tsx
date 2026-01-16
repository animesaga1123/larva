import { motion } from "framer-motion";
import { Send, Instagram, Youtube } from "lucide-react";
import larvaLogo from "@/assets/larva-logo.jpeg";
import larvaAstronauts from "@/assets/larva-astronauts.jpeg";

const socials = [
  {
    name: "Telegram",
    icon: Send,
    href: "https://t.me/Larvasol",
    color: "bg-[#0088cc]",
    hoverColor: "hover:bg-[#006fa0]",
  },
  {
    name: "X (Twitter)",
    icon: () => (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "https://x.com/LarvainMars",
    color: "bg-foreground",
    hoverColor: "hover:bg-foreground/80",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/larvainmars.official/",
    color: "bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]",
    hoverColor: "hover:opacity-90",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@Larvatuba",
    color: "bg-[#FF0000]",
    hoverColor: "hover:bg-[#cc0000]",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${larvaAstronauts})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            🪐 Join the <span className="text-gradient-secondary">Larva Crew</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Meme together. Moon together. 🚀
          </p>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <motion.img
            src={larvaLogo}
            alt="Larva in Mars Logo"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-primary shadow-glow"
          />
        </motion.div>

        {/* Social Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className={`flex items-center gap-3 ${social.color} ${social.hoverColor} text-primary-foreground font-bold text-lg px-8 py-4 rounded-full shadow-card transition-all duration-300`}
            >
              <social.icon className="w-6 h-6" />
              {social.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Floating confetti/party elements */}
        <div className="absolute top-10 left-10 text-3xl animate-float">🎉</div>
        <div className="absolute top-20 right-20 text-4xl animate-float-delayed">🪐</div>
        <div className="absolute bottom-32 left-1/4 text-3xl animate-float-slow">🚀</div>
        <div className="absolute bottom-20 right-1/4 text-4xl animate-float">🐛</div>
        <div className="absolute top-1/2 left-5 text-2xl animate-wiggle">⭐</div>
        <div className="absolute top-1/3 right-10 text-2xl animate-wiggle" style={{ animationDelay: '0.5s' }}>✨</div>
      </div>
    </section>
  );
};

export default CommunitySection;
