import { ThumbsUp, MessageCircle, Repeat2, Send, MoreHorizontal } from "lucide-react";

interface LinkedInPreviewProps {
  hook: string;
  image: string | null;
}

export const LinkedInPreview = ({ hook, image }: LinkedInPreviewProps) => {
  return (
		<div className="bg-card">
			{/* Post Header */}
			<div className="p-4 flex items-start gap-3">
				<div className="w-12 h-12 rounded-full bg-gradient-brand flex-shrink-0" />
				<div className="flex-1 min-w-0">
					<div className="text-primary-foreground/90 font-semibold text-sm">
						Your Company
					</div>
					<div className="text-xs text-muted-foreground">1M followers</div>
					<div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
						2h · Promoted · <span>🌐</span>
					</div>
				</div>
				<MoreHorizontal className="w-5 h-5 text-muted-foreground flex-shrink-0" />
			</div>

			{/* Hook Text */}
			<div className="px-4 pb-3">
				<p className="text-primary-foreground/90 text-sm leading-relaxed whitespace-pre-wrap">
					{hook || "Your professional hook will appear here..."}
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
			<div className="px-4 py-2 border-t border-border">
				<div className="flex items-center gap-2 text-xs text-muted-foreground">
					<div className="flex items-center">
						<div className="w-4 h-4 rounded-full bg-[#0A66C2] flex items-center justify-center">
							<ThumbsUp className="w-2.5 h-2.5 text-white fill-white" />
						</div>
					</div>
					<span>324 reactions</span>
					<span>·</span>
					<span>42 comments</span>
				</div>
			</div>

			{/* Action Buttons */}
			<div className="px-4 py-2 border-t border-border">
				<div className="flex items-center justify-around">
					<button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors flex-1 justify-center">
						<ThumbsUp className="w-5 h-5 text-muted-foreground" />
						<span className="text-sm font-medium text-muted-foreground">
							Like
						</span>
					</button>
					<button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors flex-1 justify-center">
						<MessageCircle className="w-5 h-5 text-muted-foreground" />
						<span className="text-sm font-medium text-muted-foreground">
							Comment
						</span>
					</button>
					<button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors flex-1 justify-center">
						<Repeat2 className="w-5 h-5 text-muted-foreground" />
						<span className="text-sm font-medium text-muted-foreground">
							Repost
						</span>
					</button>
					<button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors flex-1 justify-center">
						<Send className="w-5 h-5 text-muted-foreground" />
						<span className="text-sm font-medium text-muted-foreground">
							Send
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};
