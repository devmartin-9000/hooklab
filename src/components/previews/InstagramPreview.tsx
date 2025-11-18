import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";

interface InstagramPreviewProps {
  hook: string;
  image: string | null;
}

export const InstagramPreview = ({ hook, image }: InstagramPreviewProps) => {
  return (
		<div className="bg-card">
			{/* Post Header */}
			<div className="p-3 flex items-center gap-3">
				<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]" />
				<div className="flex-1">
					<div className="font-semibold text-muted-foreground text-sm">
						yourbrand
					</div>
					<div className="text-xs text-muted-foreground">Sponsored</div>
				</div>
				<MoreHorizontal className="w-5 h-5 text-muted-foreground" />
			</div>

			{/* Image */}
			{image ? (
				<div className="relative">
					<img
						src={image}
						alt="Ad creative"
						className="w-full object-cover aspect-square"
					/>
				</div>
			) : (
				<div className="aspect-square bg-muted flex items-center justify-center">
					<span className="text-muted-foreground text-sm">
						Your creative will appear here
					</span>
				</div>
			)}

			{/* Action Buttons */}
			<div className="p-3 space-y-2">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<Heart className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
						<MessageCircle className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
						<Send className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
					</div>
					<Bookmark className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
				</div>

				{/* Likes */}
				<div className="text-muted-foreground text-sm font-semibold">
					1,234 likes
				</div>

				{/* Caption */}
				<div className="text-sm">
					<span className="text-card-foreground font-bold leading-relaxed">
						yourbrand:
					</span>{" "}
					<span className="text-muted-foreground">
						{hook || "Your attention-grabbing hook will appear here..."}
					</span>
				</div>

				{/* View Comments */}
				<div className="text-sm text-muted-foreground">
					View all 45 comments
				</div>

				{/* Timestamp */}
				<div className="text-xs text-muted-foreground uppercase">
					2 hours ago
				</div>
			</div>
		</div>
	);
};
