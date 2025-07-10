import { Button } from "@/components/ui/button";
import { Heart, User, MessageCircle, Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-warm-gradient rounded-full">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">LoveConnect</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#discover" className="text-foreground hover:text-primary transition-colors">
              Discover
            </a>
            <a href="#matches" className="text-foreground hover:text-primary transition-colors">
              Matches
            </a>
            <a href="#messages" className="text-foreground hover:text-primary transition-colors">
              Messages
            </a>
            <a href="#profile" className="text-foreground hover:text-primary transition-colors">
              Profile
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm" className="rounded-full">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#discover" className="text-foreground hover:text-primary transition-colors">
                Discover
              </a>
              <a href="#matches" className="text-foreground hover:text-primary transition-colors">
                Matches  
              </a>
              <a href="#messages" className="text-foreground hover:text-primary transition-colors">
                Messages
              </a>
              <a href="#profile" className="text-foreground hover:text-primary transition-colors">
                Profile
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button variant="hero" size="sm" className="rounded-full">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};