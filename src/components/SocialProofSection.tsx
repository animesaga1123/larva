import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Video, Youtube, Instagram } from "lucide-react";
import larvaFriends from "@/assets/larva-friends.jpeg";

const stats = [
  {
    icon: Video,
    value: 200,
    suffix: "M+",
    label: "Video Views",
    color: "text-primary",
  },
  {
    icon: Youtube,
    value: 10,
    suffix: "M+",
    label: "YouTube Subscribers",
    color: "text-larva-red",
  },
  {
    icon: Instagram,
    value: 1.8,
    suffix: "M+",
    label: "Instagram Followers",
    color: "text-larva-pink",
  },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const duration = 2000;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (value - startValue) * easeOutQuart;
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span>
      {value >= 1 ? count.toFixed(value % 1 !== 0 ? 1 : 0) : count.toFixed(1)}
      {suffix}
    </span>
  );
};

const SocialProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${larvaFriends})` }}
      />
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
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
            🌍 Loved by <span className="text-gradient-secondary">Millions</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            The Larva characters have already conquered the internet.
          </p>
        </motion.div>

        {/* Stats */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="card-cartoon p-8 hover:shadow-glow transition-all duration-300">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className={`font-display text-5xl md:text-6xl ${stat.color} mb-2`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                </div>
                <p className="font-body text-lg text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating emojis */}
        <div className="absolute top-20 left-10 text-4xl animate-float">🎬</div>
        <div className="absolute top-40 right-20 text-3xl animate-float-delayed">📱</div>
        <div className="absolute bottom-20 left-1/4 text-4xl animate-float-slow">🎉</div>
        <div className="absolute bottom-40 right-1/4 text-3xl animate-float">🐛</div>
      </div>
    </section>
  );
};

export default SocialProofSection;
