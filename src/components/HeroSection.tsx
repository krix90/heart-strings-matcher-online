import { Button } from "@/components/ui/button";
import { Heart, Users, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="animate-float">
          <Heart className="mx-auto mb-6 h-16 w-16 text-white animate-pulse-glow" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Find Your 
          <span className="bg-gradient-to-r from-white to-primary-soft bg-clip-text text-transparent">
            {" "}Perfect Match
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Connect with amazing people who share your interests and values. 
          Start your journey to find meaningful relationships today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="hero" 
            size="lg" 
            className="px-8 py-4 text-lg rounded-full"
          >
            Start Matching
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 text-lg rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            Learn More
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-6 w-6 mr-2" />
              <span className="text-2xl font-bold">2M+</span>
            </div>
            <p className="text-white/80">Active Users</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Heart className="h-6 w-6 mr-2" />
              <span className="text-2xl font-bold">500K+</span>
            </div>
            <p className="text-white/80">Successful Matches</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <MessageCircle className="h-6 w-6 mr-2" />
              <span className="text-2xl font-bold">50K+</span>
            </div>
            <p className="text-white/80">Happy Couples</p>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '1s' }}>
        <Heart className="h-8 w-8 text-white/30" />
      </div>
      <div className="absolute top-40 right-16 animate-float" style={{ animationDelay: '2s' }}>
        <Heart className="h-6 w-6 text-white/20" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '0.5s' }}>
        <Heart className="h-10 w-10 text-white/25" />
      </div>
    </section>
  );
};