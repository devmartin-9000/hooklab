import { Button } from "@/components/ui/button";
import { Smartphone, Tablet, Monitor } from "lucide-react";
import { Device } from "@/pages/Index";

interface DeviceSelectorProps {
  value: Device;
  onChange: (device: Device) => void;
}

const devices = [
  { id: "mobile" as Device, icon: Smartphone, label: "Mobile" },
  { id: "tablet" as Device, icon: Tablet, label: "Tablet" },
  { id: "desktop" as Device, icon: Monitor, label: "Desktop" },
];

export const DeviceSelector = ({ value, onChange }: DeviceSelectorProps) => {
  return (
    <div>
      <label className="text-sm font-medium text-muted-foreground mb-3 block">
        Device Frame
      </label>
      <div className="grid grid-cols-3 gap-2">
        {devices.map((device) => {
          const Icon = device.icon;
          const isActive = value === device.id;
          
          return (
            <Button
              key={device.id}
              variant={isActive ? "default" : "outline"}
              className={`flex flex-col items-center gap-2 h-auto py-4 transition-all ${
                isActive 
                  ? "bg-gradient-brand border-primary shadow-glow" 
                  : "hover:border-primary/50 hover:bg-gradient-brand-subtle"
              }`}
              onClick={() => onChange(device.id)}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
              <span className={`text-xs ${isActive ? "text-primary-foreground font-medium" : "text-muted-foreground"}`}>
                {device.label}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
