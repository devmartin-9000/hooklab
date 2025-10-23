import { useCallback } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface CreativeUploadProps {
  image: string | null;
  onImageChange: (image: string | null) => void;
}

export const CreativeUpload = ({ image, onImageChange }: CreativeUploadProps) => {
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        toast.error("Please upload an image file");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        onImageChange(event.target?.result as string);
        toast.success("Image uploaded successfully!");
      };
      reader.readAsDataURL(file);
    },
    [onImageChange]
  );

  const handleRemove = () => {
    onImageChange(null);
    toast.success("Image removed");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-primary-foreground/90 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gradient-brand"></span>
          Creative Upload
        </h2>
      </div>

      {!image ? (
        <label className="block">
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer transition-all hover:border-primary hover:bg-gradient-brand-subtle group">
            <Upload className="w-10 h-10 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
            <p className="text-sm text-muted-foreground mb-1 group-hover:text-foreground transition-colors">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
          </div>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
      ) : (
        <div className="relative rounded-lg overflow-hidden group">
          <img
            src={image}
            alt="Uploaded creative"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button
              size="sm"
              variant="destructive"
              onClick={handleRemove}
              className="gap-2"
            >
              <X className="w-4 h-4" />
              Remove
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
