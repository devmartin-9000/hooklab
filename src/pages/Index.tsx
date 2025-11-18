import { useState } from "react";
import { Helmet } from "react-helmet";
import { PlatformSelector } from "@/components/PlatformSelector";
import { DeviceSelector } from "@/components/DeviceSelector";
import { HookGenerator } from "@/components/HookGenerator";
import { CreativeUpload } from "@/components/CreativeUpload";
import { PreviewArea } from "@/components/PreviewArea";
import { Sparkles } from "lucide-react";

export type Platform = "facebook" | "instagram" | "linkedin" | "x" | "pinterest" | "reddit" | "email";
export type Device = "mobile" | "tablet" | "desktop";

const Index = () => {
  const [platform, setPlatform] = useState<Platform>("facebook");
  const [device, setDevice] = useState<Device>("mobile");
  const [hook, setHook] = useState("");
  const [toneSettings, setToneSettings] = useState({
    bold: 50,
    curious: 50,
    empathetic: 50,
    controversial: 50,
  });
  const [image, setImage] = useState<string | null>(null);

  return (
		<>
			<Helmet>
				<title>Hook Lab - See your ad before the world does</title>
				<meta
					name="description"
					content="Preview your ad hooks and creatives across multiple platforms and devices before spending a dollar. The ultimate tool for media buyers."
				/>
			</Helmet>

			<div className="min-h-screen bg-background dark">
				{/* Header */}
				<header className="border-b border-border bg-card/50 backdrop-blur-lg sticky top-0 z-50">
					<div className="container mx-auto px-6 py-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center shadow-glow">
									<Sparkles className="w-5 h-5 text-primary-foreground" />
								</div>
								<div>
									<h1 className="text-xl font-bold bg-gradient-brand bg-clip-text text-transparent">
										Hook Lab
									</h1>
									<p className="text-xs text-muted-foreground">
										See your ad before the world does
									</p>
								</div>
							</div>
						</div>
					</div>
				</header>

				{/* Main Content */}
				<main className="container mx-auto px-6 py-8">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
						{/* Left Sidebar - Controls */}
						<div className="lg:col-span-4 space-y-6">
							<div className="bg-card border border-border rounded-xl p-6 shadow-md animate-fade-in">
								<h2 className="text-lg text-muted-foreground font-semibold mb-4 flex items-center gap-2">
									<span className="w-2 h-2 rounded-full bg-gradient-brand"></span>
									Platform & Device
								</h2>
								<div className="space-y-4">
									<PlatformSelector value={platform} onChange={setPlatform} />
									<DeviceSelector value={device} onChange={setDevice} />
								</div>
							</div>

							<div
								className="bg-card border border-border rounded-xl p-6 shadow-md animate-fade-in"
								style={{ animationDelay: "0.1s" }}
							>
								<HookGenerator
									hook={hook}
									onHookChange={setHook}
									toneSettings={toneSettings}
									onToneChange={setToneSettings}
								/>
							</div>

							<div
								className="bg-card border border-border rounded-xl p-6 shadow-md animate-fade-in"
								style={{ animationDelay: "0.2s" }}
							>
								<CreativeUpload image={image} onImageChange={setImage} />
							</div>
						</div>

						{/* Right Area - Preview */}
						<div className="lg:col-span-8">
							<div className="sticky top-24">
								<PreviewArea
									platform={platform}
									device={device}
									hook={hook}
									image={image}
								/>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default Index;
