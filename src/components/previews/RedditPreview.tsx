import { ArrowUp, ArrowDown, MessageCircle, Share2, Award, MoreHorizontal } from "lucide-react";

interface RedditPreviewProps {
  hook: string;
  image: string | null;
}

export const RedditPreview = ({ hook, image }: RedditPreviewProps) => {
  return (
		<div className="bg-card border border-border">
			<div className="flex">
				{/* Vote Sidebar */}
				<div className="bg-muted/50 flex flex-col items-center gap-2 p-2 w-12">
					<button className="text-muted-foreground hover:text-[#FF4500] transition-colors">
						<ArrowUp className="w-6 h-6" />
					</button>
					<span className="text-primary-foreground/90 text-xs font-bold">
						2.4k
					</span>
					<button className="text-muted-foreground hover:text-[#7193FF] transition-colors">
						<ArrowDown className="w-6 h-6" />
					</button>
				</div>

				{/* Main Content */}
				<div className="flex-1">
					{/* Post Header */}
					<div className="p-3 flex items-center gap-2">
						<div className="w-6 h-6 rounded-full bg-gradient-brand" />
						<div className="flex items-center gap-2 text-xs">
							<span className="text-muted-foreground font-bold">
								r/YourSubreddit
							</span>
							<span className="text-muted-foreground">
								· Posted by u/yourbrand
							</span>
							<span className="text-muted-foreground">· 2h ago</span>
							<span className="px-2 py-0.5 bg-[#FF4500]/10 text-[#FF4500] rounded text-xs font-medium">
								Promoted
							</span>
						</div>
						<div className="ml-auto">
							<MoreHorizontal className="w-5 h-5 text-muted-foreground" />
						</div>
					</div>

					{/* Hook Text */}
					<div className="px-3 pb-2">
						<h3 className="text-muted-foreground text-sm font-semibold mb-2">
							{hook || "Your Reddit post title will appear here..."}
						</h3>
					</div>

					{/* Image */}
					{image && (
						<div className="px-3 pb-3">
							<img
								src={image}
								alt="Ad creative"
								className="w-full object-cover max-h-[400px] rounded"
							/>
						</div>
					)}

					{/* Action Buttons */}
					<div className="px-3 pb-3 flex items-center gap-4">
						<button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
							<MessageCircle className="w-5 h-5" />
							<span className="text-xs font-medium">42 Comments</span>
						</button>
						<button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
							<Share2 className="w-5 h-5" />
							<span className="text-xs font-medium">Share</span>
						</button>
						<button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
							<Award className="w-5 h-5" />
							<span className="text-xs font-medium">Award</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
