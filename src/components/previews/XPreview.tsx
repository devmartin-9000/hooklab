import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from "lucide-react";

interface XPreviewProps {
  hook: string;
  image: string | null;
}

export const XPreview = ({ hook, image }: XPreviewProps) => {
  return (
		<div className="bg-card">
			<div className="p-4">
				{/* Post Header */}
				<div className="flex items-start gap-3">
					<div className="w-10 h-10 rounded-full bg-gradient-brand flex-shrink-0" />
					<div className="flex-1 min-w-0">
						<div className="flex items-center gap-2">
							<span className="text-muted-foreground font-bold text-sm">
								Your Brand
							</span>
							<span className="text-muted-foreground text-sm">@yourbrand</span>
							<span className="text-muted-foreground text-sm">· 2h</span>
							<div className="ml-auto">
								<MoreHorizontal className="w-5 h-5 text-muted-foreground" />
							</div>
						</div>

						{/* Promoted Label */}
						<div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
							<span>Promoted</span>
						</div>

						{/* Hook Text */}
						<div className="mt-3">
							<p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">
								{hook || "Your hook will appear here..."}
							</p>
						</div>

						{/* Image */}
						{image && (
							<div className="mt-3 rounded-2xl overflow-hidden border border-border">
								<img
									src={image}
									alt="Ad creative"
									className="w-full object-cover max-h-[400px]"
								/>
							</div>
						)}

						{/* Action Buttons */}
						<div className="flex items-center justify-between mt-3 max-w-md">
							<button className="flex items-center gap-2 text-muted-foreground hover:text-[#1D9BF0] transition-colors group">
								<MessageCircle className="w-5 h-5 group-hover:bg-[#1D9BF0]/10 rounded-full p-0.5 transition-colors" />
								<span className="text-xs">24</span>
							</button>
							<button className="flex items-center gap-2 text-muted-foreground hover:text-[#00BA7C] transition-colors group">
								<Repeat2 className="w-5 h-5 group-hover:bg-[#00BA7C]/10 rounded-full p-0.5 transition-colors" />
								<span className="text-xs">12</span>
							</button>
							<button className="flex items-center gap-2 text-muted-foreground hover:text-[#F91880] transition-colors group">
								<Heart className="w-5 h-5 group-hover:bg-[#F91880]/10 rounded-full p-0.5 transition-colors" />
								<span className="text-xs">156</span>
							</button>
							<button className="text-muted-foreground hover:text-[#1D9BF0] transition-colors group">
								<Share className="w-5 h-5 group-hover:bg-[#1D9BF0]/10 rounded-full p-0.5 transition-colors" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
