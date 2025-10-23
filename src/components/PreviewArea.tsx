import { Platform, Device } from "@/pages/Index";
import { FacebookPreview } from "./previews/FacebookPreview";
import { InstagramPreview } from "./previews/InstagramPreview";
import { LinkedInPreview } from "./previews/LinkedInPreview";
import { XPreview } from "./previews/XPreview";
import { PinterestPreview } from "./previews/PinterestPreview";
import { RedditPreview } from "./previews/RedditPreview";

interface PreviewAreaProps {
  platform: Platform;
  device: Device;
  hook: string;
  image: string | null;
}

export const PreviewArea = ({ platform, device, hook, image }: PreviewAreaProps) => {
  const getDeviceClass = () => {
    switch (device) {
      case "mobile":
        return "max-w-[375px] mx-auto";
      case "tablet":
        return "max-w-[768px] mx-auto";
      case "desktop":
        return "max-w-[1200px] mx-auto";
    }
  };

  const renderPreview = () => {
    const previewProps = { hook, image };
    
    switch (platform) {
      case "facebook":
        return <FacebookPreview {...previewProps} />;
      case "instagram":
        return <InstagramPreview {...previewProps} />;
      case "linkedin":
        return <LinkedInPreview {...previewProps} />;
      case "x":
        return <XPreview {...previewProps} />;
      case "pinterest":
        return <PinterestPreview {...previewProps} />;
      case "reddit":
        return <RedditPreview {...previewProps} />;
      default:
        return <FacebookPreview {...previewProps} />;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-lg animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-primary-foreground/90 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gradient-brand"></span>
          Live Preview
        </h2>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-1 bg-gradient-brand-subtle rounded-md border border-primary/20 capitalize">
            {platform}
          </span>
          <span className="px-2 py-1 bg-muted rounded-md capitalize">
            {device}
          </span>
        </div>
      </div>

      <div className={`${getDeviceClass()} transition-all duration-300`}>
        <div className="bg-background rounded-lg border border-border shadow-xl overflow-hidden">
          {renderPreview()}
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-brand-subtle rounded-lg border border-primary/20">
        <p className="text-xs text-muted-foreground text-center">
          💡 <span className="font-medium">Pro Tip:</span> This is how your ad will appear to real users in their {platform} feed
        </p>
      </div>
    </div>
  );
};
