import Container from "../Container"
import FadeIn from "../FadeIn"

export default function Usps() {
	return (
		<div>
			<Container className="space-y-12 text-3xl md:text-4xl font-bold text-white max-w-[692px] py-36">
				<FadeIn>
					<p>New Apple Originals every month - always ad-free</p>
				</FadeIn>

				<FadeIn>
					<p>
						Stream on the Apple TV app on App devices, smart TVs,
						consoles, or sticks.
					</p>
				</FadeIn>

				<FadeIn>
					<p>Watch in 4K HDR video with immersive Spatial Audio.</p>
				</FadeIn>

				<FadeIn>
					<p>Share a single subscription with up to five people.</p>
				</FadeIn>
			</Container>
		</div>
	)
}
