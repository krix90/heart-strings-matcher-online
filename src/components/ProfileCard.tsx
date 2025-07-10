import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, X, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";

interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  occupation: string;
  education: string;
  bio: string;
  images: string[];
  interests: string[];
}

interface ProfileCardProps {
  profile: Profile;
  onLike: (profileId: string) => void;
  onPass: (profileId: string) => void;
}

export const ProfileCard = ({ profile, onLike, onPass }: ProfileCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState<'like' | 'pass' | null>(null);

  const handleLike = () => {
    setIsAnimating('like');
    setTimeout(() => {
      onLike(profile.id);
    }, 600);
  };

  const handlePass = () => {
    setIsAnimating('pass');
    setTimeout(() => {
      onPass(profile.id);
    }, 600);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === profile.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className={`relative w-full max-w-sm mx-auto ${
      isAnimating === 'like' ? 'animate-swipe-out-right' : 
      isAnimating === 'pass' ? 'animate-swipe-out-left' : 
      'animate-slide-in'
    }`}>
      <Card className="overflow-hidden bg-card-gradient shadow-xl border-0 rounded-3xl">
        {/* Image Section */}
        <div className="relative h-96 cursor-pointer" onClick={nextImage}>
          <img 
            src={profile.images[currentImageIndex]} 
            alt={`${profile.name} - Photo ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Image Indicators */}
          {profile.images.length > 1 && (
            <div className="absolute top-4 left-4 right-4 flex gap-1">
              {profile.images.map((_, index) => (
                <div 
                  key={index}
                  className={`flex-1 h-1 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Basic Info Overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold">{profile.name}, {profile.age}</h3>
            <div className="flex items-center mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{profile.location}</span>
            </div>
          </div>
        </div>
        
        {/* Details Section */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <Briefcase className="h-4 w-4 mr-2" />
              <span>{profile.occupation}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <GraduationCap className="h-4 w-4 mr-2" />
              <span>{profile.education}</span>
            </div>
          </div>
          
          <p className="text-sm text-foreground leading-relaxed">{profile.bio}</p>
          
          {/* Interests */}
          <div className="flex flex-wrap gap-2">
            {profile.interests.slice(0, 4).map((interest, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs bg-primary-soft text-primary rounded-full"
              >
                {interest}
              </span>
            ))}
            {profile.interests.length > 4 && (
              <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                +{profile.interests.length - 4} more
              </span>
            )}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-center gap-4 p-6 pt-0">
          <Button
            variant="pass"
            size="icon"
            className="h-14 w-14 rounded-full shadow-lg"
            onClick={handlePass}
          >
            <X className="h-6 w-6" />
          </Button>
          <Button
            variant="like"
            size="icon"
            className="h-14 w-14 rounded-full shadow-lg"
            onClick={handleLike}
          >
            <Heart className="h-6 w-6" />
          </Button>
        </div>
      </Card>
    </div>
  );
};