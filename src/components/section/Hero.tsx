import { useRef } from "react"
import Button from "../Button"
import Container from "../Container"

import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
	const videoContainerRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: videoContainerRef,
		offset: ["start start", "end end"]
	})
	const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

	return (
		<div className="relative bg-background text-white">
			<motion.div
				style={{ opacity }}
				ref={videoContainerRef}
				className="absolute -top-[--header-height] left-0 w-full h-[200vh]"
			>
				<img
					src="/napoleon.webp"
					className="sticky top-0 h-screen w-full object-cover"
				/>
			</motion.div>
			<Container className="relative z-10 h-[--hero-height] pb-7">
				<motion.div
					className="flex h-full flex-col justify-end items-start"
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1 }
					}}
					whileInView="visible"
					exit="hidden"
					animate="hidden"
					viewport={{ amount: 0.98 }}
				>
					<h1 className="mb-10 text-4xl md:text-5xl font-bold">
						All Apple Originals.
						<br /> Only on Apple TV+.
					</h1>
					<Button size="large" className="mb-16">
						Stream now
					</Button>
					<p className="font-semibold">Watch on 📺 app</p>
				</motion.div>
			</Container>
		</div>
	)
}
