import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { EnergyMeter } from "./EnergyMeter";
import { useState } from "react";
import { toast } from "sonner";

interface HookGeneratorProps {
	hook: string;
	onHookChange: (hook: string) => void;
	toneSettings: {
		bold: number;
		curious: number;
		empathetic: number;
		controversial: number;
	};
	onToneChange: (settings: any) => void;
}

// 50 prewritten hooks to simulate AI suggestions
const HOOK_LIBRARY = [
	"What if success was just one decision away?",
	"Stop scrolling — this might just change your life.",
	"They said it couldn’t be done… until it was.",
	"Here’s a secret most people never talk about.",
	"You’re wasting your time doing it this way.",
	"This tiny tweak made all the difference.",
	"Everyone’s talking about this — and for good reason.",
	"Don’t make this mistake — I learned it the hard way.",
	"What happens next will surprise you.",
	"If you think this doesn’t work, you’re not alone.",
	"Here’s how I went from zero to results in 30 days.",
	"No one told me this before I started.",
	"The trick I wish I knew sooner.",
	"This mindset shift changes everything.",
	"It’s not luck. It’s strategy.",
	"You’ve been doing this wrong your whole life.",
	"Imagine if this was your reality.",
	"This one thing separates the pros from the beginners.",
	"I tried it so you don’t have to.",
	"The internet doesn’t want you to know this.",
	"It started as an experiment — now it’s a habit.",
	"I bet you’ve never thought about it this way.",
	"Everyone needs to hear this once in their life.",
	"This is how real progress looks.",
	"If you can relate to this, keep watching.",
	"They laughed at first, but then they saw the results.",
	"I didn’t believe it either — until I tried.",
	"Most people won’t understand this, and that’s okay.",
	"Here’s what nobody’s saying out loud.",
	"You’re going to want to save this one.",
	"This idea keeps me up at night.",
	"This might sound crazy, but it works.",
	"You’re not lazy — you’re just missing this key piece.",
	"Think you’ve seen it all? Think again.",
	"This mistake could cost you more than you think.",
	"Here’s why your hard work isn’t paying off yet.",
	"A year from now, you’ll thank yourself for starting today.",
	"This changed how I see everything.",
	"Here’s what 99% of people miss.",
	"Most people won’t take this seriously — will you?",
	"This story deserves more attention.",
	"If you only learn one thing today, let it be this.",
	"What if you stopped overthinking and just tried?",
	"Here’s a hard truth nobody wants to admit.",
	"You’ll never look at this the same way again.",
	"Sometimes, all it takes is a small shift.",
	"If I could start over, I’d begin here.",
	"This isn’t advice — it’s a wake-up call.",
	"Once you see it, you can’t unsee it.",
	"Ready to level up? Start here.",
];

export const HookGenerator = ({
	hook,
	onHookChange,
	toneSettings,
	onToneChange,
}: HookGeneratorProps) => {
	const [isGenerating, setIsGenerating] = useState(false);

	const handleToneChange = (tone: string, value: number[]) => {
		onToneChange({ ...toneSettings, [tone]: value[0] });
	};

	const handleAISpark = async () => {
		setIsGenerating(true);
		try {
			// Simulate AI delay
			await new Promise((resolve) => setTimeout(resolve, 1200));

			// Generate a pseudo-random index based on tone settings
			const toneSum =
				toneSettings.bold +
				toneSettings.curious +
				toneSettings.empathetic +
				toneSettings.controversial;

			const index =
				Math.floor(toneSum + Math.random() * 50) % HOOK_LIBRARY.length;
			const fakeHook = HOOK_LIBRARY[index];

			onHookChange(fakeHook);
			toast.success("AI Spark generated a hook!", {
				description: "Want another? Click AI Spark again!",
			});
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong", {
				description: "Try again in a moment.",
			});
		} finally {
			setIsGenerating(false);
		}
	};

	const calculateEnergy = () => {
		const avg =
			(toneSettings.bold +
				toneSettings.curious +
				toneSettings.empathetic +
				toneSettings.controversial) /
			4;
		const hookLength = hook.length;
		const hookBonus =
			hookLength > 20 ? Math.min((hookLength / 100) * 20, 20) : 0;
		return Math.min(Math.round(avg + hookBonus), 100);
	};

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h2 className="text-lg font-semibold text-primary-foreground/90 flex items-center gap-2">
					<span className="w-2 h-2 rounded-full bg-gradient-brand"></span>
					Hook Generator
				</h2>
				<Button
					size="sm"
					variant="outline"
					onClick={handleAISpark}
					disabled={isGenerating}
					className="bg-gradient-brand-subtle border-primary/30 hover:bg-gradient-brand text-primary-foreground transition-all disabled:opacity-50"
				>
					<Sparkles className="w-3 h-3 mr-1" />
					{isGenerating ? "Generating..." : "AI Spark"}
				</Button>
			</div>

			<div>
				<label className="text-sm font-medium text-muted-foreground mb-2 block">
					Your Hook
				</label>
				<Textarea
					value={hook}
					onChange={(e) => onHookChange(e.target.value)}
					placeholder="Enter your attention-grabbing hook here..."
					className="min-h-[100px] resize-none bg-background/50 border-border text-primary-foreground/90 focus:border-primary transition-colors"
				/>
			</div>

			<div>
				<label className="text-sm font-medium text-muted-foreground mb-3 block">
					Tone Sliders
				</label>
				<div className="space-y-4">
					{Object.entries(toneSettings).map(([tone, value]) => (
						<div key={tone} className="space-y-2">
							<div className="flex justify-between items-center">
								<span className="text-xs font-medium capitalize text-foreground">
									{tone}
								</span>
								<span className="text-xs text-muted-foreground">{value}%</span>
							</div>
							<Slider
								value={[value]}
								onValueChange={(val) => handleToneChange(tone, val)}
								max={100}
								step={1}
								className="cursor-pointer"
							/>
						</div>
					))}
				</div>
			</div>

			<EnergyMeter energy={calculateEnergy()} />
		</div>
	);
};
