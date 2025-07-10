import { useState } from "react";
import { ProfileCard } from "./ProfileCard";
import { Button } from "@/components/ui/button";
import { RotateCcw, Settings, Filter } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import profile1 from "@/assets/profile1.jpg";
import profile2 from "@/assets/profile2.jpg";
import profile3 from "@/assets/profile3.jpg";

// Mock data for demonstration
const mockProfiles = [
  {
    id: "1",
    name: "Emma",
    age: 25,
    location: "San Francisco, CA",
    occupation: "UX Designer",
    education: "Stanford University",
    bio: "Love hiking, coffee, and good conversations. Looking for someone who shares my passion for adventure and creativity. Always up for trying new restaurants or exploring hidden gems in the city.",
    images: [profile1],
    interests: ["Hiking", "Photography", "Coffee", "Travel", "Design", "Yoga"]
  },
  {
    id: "2", 
    name: "Alex",
    age: 28,
    location: "San Francisco, CA",
    occupation: "Software Engineer",
    education: "UC Berkeley",
    bio: "Tech enthusiast by day, chef by night. I love building things and trying new recipes. Looking for someone to share adventures and maybe teach me to dance!",
    images: [profile2],
    interests: ["Coding", "Cooking", "Basketball", "Music", "Gaming", "Movies"]
  },
  {
    id: "3",
    name: "Sofia",
    age: 23,
    location: "San Francisco, CA", 
    occupation: "Marketing Manager",
    education: "UCLA",
    bio: "Marketing creative with a love for art and live music. Weekends you'll find me at galleries, concerts, or brunching with friends. Let's explore the city together!",
    images: [profile3],
    interests: ["Art", "Music", "Brunch", "Marketing", "Books", "Concerts"]
  }
];

export const MatchingSection = () => {
  const [profiles, setProfiles] = useState(mockProfiles);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const handleLike = (profileId: string) => {
    const profile = profiles.find(p => p.id === profileId);
    if (profile) {
      toast({
        title: "You liked " + profile.name + "! 💕",
        description: "We'll let you know if it's a match!",
      });
    }
    moveToNext();
  };

  const handlePass = (profileId: string) => {
    moveToNext();
  };

  const moveToNext = () => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(prev => prev + 1);
    } else {
      // Reset to beginning for demo
      setCurrentProfileIndex(0);
      toast({
        title: "That's everyone for now! 🔄",
        description: "We're looking for more profiles that match your preferences.",
      });
    }
  };

  const resetProfiles = () => {
    setCurrentProfileIndex(0);
    toast({
      title: "Profiles refreshed! ✨",
      description: "Here are some new potential matches for you.",
    });
  };

  if (profiles.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No more profiles</h2>
          <p className="text-muted-foreground mb-6">Check back later for more matches!</p>
          <Button onClick={resetProfiles}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset Profiles
          </Button>
        </div>
      </div>
    );
  }

  const currentProfile = profiles[currentProfileIndex];

  return (
    <section className="min-h-screen bg-background py-20">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Discover Your Matches
          </h2>
          <p className="text-muted-foreground">
            Swipe through profiles and find your perfect connection
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-8">
          <Button variant="ghost" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentProfileIndex + 1} of {profiles.length}
          </span>
          <Button variant="ghost" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>

        {/* Profile Card */}
        <div className="flex justify-center">
          {currentProfile && (
            <ProfileCard
              key={currentProfile.id}
              profile={currentProfile}
              onLike={handleLike}
              onPass={handlePass}
            />
          )}
        </div>

        {/* Instructions */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Tap the image to see more photos • Use ❤️ to like • Use ✕ to pass</p>
        </div>
      </div>
    </section>
  );
};