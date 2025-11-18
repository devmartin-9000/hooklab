import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

interface FacebookPreviewProps {
  hook: string;
  image: string | null;
}

export const FacebookPreview = ({ hook, image }: FacebookPreviewProps) => {
  return (
		<div className="bg-card">
			{/* Post Header */}
			<div className="p-4 flex items-center gap-3">
				<div className="w-10 h-10 rounded-full bg-gradient-brand" />
				<div className="flex-1">
					<div className="font-semibold text-muted-foreground text-sm">
						Your Brand
					</div>
					<div className="text-xs text-muted-foreground flex items-center gap-1">
						Sponsored · <span>🌎</span>
					</div>
				</div>
				<MoreHorizontal className="w-5 h-5 text-muted-foreground" />
			</div>

			{/* Hook Text */}
			<div className="px-4 pb-3">
				<p className="text-sm text-muted-foreground leading-relaxed">
					{hook || "Your attention-grabbing hook will appear here..."}
				</p>
			</div>

			{/* Image */}
			{image && (
				<div className="relative">
					<img
						src={image}
						alt="Ad creative"
						className="w-full object-cover max-h-[400px]"
					/>
				</div>
			)}

			{/* Engagement Bar */}
			<div className="px-4 py-3 border-t border-border">
				<div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
					<div className="flex items-center gap-1">
						<div className="w-4 h-4 rounded-full bg-[#1877F2] flex items-center justify-center">
							<ThumbsUp className="w-2.5 h-2.5 text-white fill-white" />
						</div>
						<span>245</span>
					</div>
					<div>12 comments · 8 shares</div>
				</div>
			</div>

			{/* Action Buttons */}
			<div className="px-4 pb-3 border-t border-border pt-2">
				<div className="flex items-center justify-around">
					<button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-muted/50 transition-colors">
						<ThumbsUp className="w-4 h-4 text-muted-foreground" />
						<span className="text-sm font-medium text-muted-foreground">
							Like
						</span>
					</button>
					<button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-muted/50 transition-colors">
						<MessageCircle className="w-4 h-4 text-muted-foreground" />
						<span className="text-sm font-medium text-muted-foreground">
							Comment
						</span>
					</button>
					<button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-muted/50 transition-colors">
						<Share2 className="w-4 h-4 text-muted-foreground" />
						<span className="text-sm font-medium text-muted-foreground">
							Share
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};
