import Header from "./components/Header"
import Hero from "./components/section/Hero"
import Usps from "./components/section/Usps"
import VideoCarousel from "./components/section/VideoCarousel"

export default function App() {
	return (
		<>
			<Header />
			<main>
				<div className="bg-background relative z-10">
					<Hero />
					<Usps />
				</div>
				<VideoCarousel />
				<div className="h-[300dvh]" />
			</main>
		</>
	)
}
