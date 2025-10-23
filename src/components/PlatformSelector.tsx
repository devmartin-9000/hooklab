import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, MessageSquare, Mail } from "lucide-react";
import { Platform } from "@/pages/Index";

interface PlatformSelectorProps {
  value: Platform;
  onChange: (platform: Platform) => void;
}

const platforms = [
  { id: "facebook" as Platform, icon: Facebook, label: "Facebook", color: "text-[#1877F2]" },
  { id: "instagram" as Platform, icon: Instagram, label: "Instagram", color: "text-[#E4405F]" },
  { id: "linkedin" as Platform, icon: Linkedin, label: "LinkedIn", color: "text-[#0A66C2]" },
  { id: "x" as Platform, icon: Twitter, label: "X", color: "text-foreground" },
  { id: "pinterest" as Platform, icon: MessageSquare, label: "Pinterest", color: "text-[#E60023]" },
  { id: "reddit" as Platform, icon: MessageSquare, label: "Reddit", color: "text-[#FF4500]" },
];

export const PlatformSelector = ({ value, onChange }: PlatformSelectorProps) => {
  return (
    <div>
      <label className="text-sm font-medium text-muted-foreground mb-3 block">
        Select Platform
      </label>
      <div className="grid grid-cols-3 gap-2">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          const isActive = value === platform.id;
          
          return (
            <Button
              key={platform.id}
              variant={isActive ? "default" : "outline"}
              className={`flex flex-col items-center gap-2 h-auto py-4 transition-all ${
                isActive 
                  ? "bg-gradient-brand border-primary shadow-glow" 
                  : "hover:border-primary/50 hover:bg-gradient-brand-subtle"
              }`}
              onClick={() => onChange(platform.id)}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-primary-foreground" : platform.color}`} />
              <span className={`text-xs ${isActive ? "text-primary-foreground font-medium" : "text-muted-foreground"}`}>
                {platform.label}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
