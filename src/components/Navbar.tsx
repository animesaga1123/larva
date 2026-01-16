import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import larvaLogo from "@/assets/larva-logo.jpeg";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Why Larva", href: "#why" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "Community", href: "#community" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <img
              src={larvaLogo}
              alt="Larva in Mars"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary"
            />
            <span className="font-display text-xl md:text-2xl text-foreground hidden sm:block">
              LARVA
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="font-body font-semibold text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-cta text-primary-foreground font-bold px-5 py-2.5 rounded-full shadow-button"
            >
              <Rocket className="w-4 h-4" />
              Buy Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="font-body font-semibold text-lg text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-2 bg-gradient-cta text-primary-foreground font-bold px-5 py-3 rounded-full shadow-button mt-2"
              >
                <Rocket className="w-4 h-4" />
                Buy Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
