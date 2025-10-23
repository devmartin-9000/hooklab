import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

interface PinterestPreviewProps {
  hook: string;
  image: string | null;
}

export const PinterestPreview = ({ hook, image }: PinterestPreviewProps) => {
  return (
		<div className="bg-card rounded-2xl overflow-hidden shadow-lg">
			{/* Image */}
			{image ? (
				<div className="relative group">
					<img
						src={image}
						alt="Ad creative"
						className="w-full object-cover max-h-[500px]"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
						<div className="absolute bottom-4 right-4 flex gap-2">
							<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
								<Heart className="w-5 h-5 text-[#E60023]" />
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="aspect-[3/4] bg-muted flex items-center justify-center">
					<span className="text-muted-foreground text-sm">
						Your Pin will appear here
					</span>
				</div>
			)}

			{/* Content */}
			<div className="p-4">
				{/* Hook Text */}
				<p className="text-primary-foreground/90 text-sm font-semibold leading-snug mb-3">
					{hook || "Your Pin description will appear here..."}
				</p>

				{/* Profile Info */}
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 rounded-full bg-gradient-brand" />
					<div>
						<div className="text-primary-foreground/90 text-xs font-semibold">
							Your Brand
						</div>
						<div className="text-xs text-muted-foreground">Promoted</div>
					</div>
				</div>

				{/* Actions */}
				<div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
					<button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
						<Heart className="w-5 h-5" />
						<span className="text-xs font-medium">Save</span>
					</button>
					<button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
						<MessageCircle className="w-5 h-5" />
						<span className="text-xs font-medium">Comment</span>
					</button>
					<button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
						<Share2 className="w-5 h-5" />
						<span className="text-xs font-medium">Share</span>
					</button>
				</div>
			</div>
		</div>
	);
};
