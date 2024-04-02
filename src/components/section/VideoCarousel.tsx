import {
	motion,
	useScroll,
	useTransform,
	useMotionValueEvent
} from "framer-motion"
import { useMemo, useRef, useState } from "react"
import { useWindowSize } from "react-use"

import { movies, randomMoviesSet1, randomMoviesSet2 } from "../../movies"
import SmallVideoCarousel from "../SmallVideoCarousel"
import Button from "../Button"

export default function VideoCarousel() {
	const { width, height } = useWindowSize()
	const carouselWrapperRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: carouselWrapperRef,
		offset: ["start start", "end start"]
	})
	const maximumScale = useMemo(() => {
		const windowYRatio = height / width
		const xScale = 1.66667
		const yScale = xScale * (16 / 9) * windowYRatio

		return Math.max(xScale, yScale)
	}, [width, height])

	const scale = useTransform(
		scrollYProgress,
		[0.3, 0.5, 0.66],
		[maximumScale * 1.1, maximumScale, 1]
	)

	const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1])
	const posterTranslateXLeft = useTransform(
		scrollYProgress,
		[0.64, 0.66],
		[-30, 0]
	)
	const posterTranslateXRight = useTransform(
		scrollYProgress,
		[0.64, 0.66],
		[30, 0]
	)

	const [carouselVariant, setCarouselVariant] = useState<
		"inactive" | "active"
	>("inactive")

	useMotionValueEvent(scrollYProgress, "change", (progress: any) => {
		progress > 0.67
			? setCarouselVariant("active")
			: setCarouselVariant("inactive")
	})

	return (
		<motion.div animate={carouselVariant} className="bg-background pb-8">
			<div
				ref={carouselWrapperRef}
				className="overflow-clip h-[300dvh] mt-[-100dvh]"
			>
				<div className="h-screen sticky top-0 flex items-center">
					<div className="relative flex gap-5 mb-5 left-1/2 -translate-x-1/2">
						<motion.div
							style={{
								opacity: postersOpacity,
								x: posterTranslateXLeft
							}}
							className="shrink-0 w-[300px] md:w-[60dvw] rounded-2xl overflow-clip aspect-[9/16] md:aspect-video"
						>
							<img
								className="w-full h-full object-cover"
								src={movies[0].poster}
								alt={movies[0].name}
							/>
						</motion.div>
						<motion.div
							style={{ scale }}
							className="relative shrink-0 w-[300px] md:w-[60dvw] rounded-2xl overflow-clip aspect-[9/16] md:aspect-video"
						>
							<img
								className="w-full h-full object-cover"
								src={movies[1].poster}
								alt={movies[1].name}
							/>
							<motion.div
								variants={{
									active: { opacity: 1 },
									inactive: { opacity: 0 }
								}}
								className="absolute left-0 bottom-0 w-full text-white text-lg flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-center p-5"
							>
								<p>Best video title ever</p>
								<Button>Watch now</Button>
							</motion.div>
						</motion.div>
						<motion.div
							style={{
								opacity: postersOpacity,
								x: posterTranslateXRight
							}}
							className="shrink-0 w-[300px] md:w-[60dvw] rounded-2xl overflow-clip aspect-[9/16] md:aspect-video"
						>
							<img
								className="w-full h-full object-cover"
								src={movies[2].poster}
								alt={movies[2].name}
							/>
						</motion.div>
					</div>
				</div>
			</div>

			<motion.div
				variants={{
					active: {
						opacity: 1,
						y: 0
					},
					inactive: {
						opacity: 0,
						y: 20
					}
				}}
				transition={{ duration: 0.4 }}
				className="space-y-3 -mt-[calc((100vh-(300px*(16/9)))/2)] md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
			>
				<SmallVideoCarousel movies={randomMoviesSet1} />
				<div className="[--duration:68s] [--carousel-offset:-32px]">
					<SmallVideoCarousel movies={randomMoviesSet2} />
				</div>
			</motion.div>
		</motion.div>
	)
}
