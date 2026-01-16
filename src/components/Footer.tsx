import { motion } from "framer-motion";
import { MessageCircle, Globe } from "lucide-react";
import larvaLogo from "@/assets/larva-logo.jpeg";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.img
            src={larvaLogo}
            alt="Larva in Mars"
            whileHover={{ rotate: 10 }}
            className="w-16 h-16 rounded-full border-2 border-primary mb-4"
          />
          
          {/* Brand */}
          <h3 className="font-display text-2xl text-foreground mb-2">
            Larva in Mars
          </h3>
          
          <p className="font-body text-muted-foreground mb-6">
            Made for memes. Powered by Solana. 🚀
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Globe className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Disclaimer */}
          <p className="font-body text-xs text-muted-foreground/60 max-w-lg">
            Disclaimer: $LARVA is a meme coin with no intrinsic value or financial return expectation. 
            This is not investment advice. Always DYOR. For entertainment purposes only.
          </p>

          {/* Copyright */}
          <p className="font-body text-xs text-muted-foreground/40 mt-4">
            © 2026 Larva in Mars. All rights reserved. 🐛
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
