import { Movie } from "../movies"

type Props = {
	movies: Movie[]
}

export default function SmallVideoCarousel({ movies }: Props) {
	return (
		<div className="overflow-clip ">
			<div className="relative flex gap-3 animate-carousel-move left-[var(--carousel-offset,0px)]">
				{movies.map(({ name, poster }, i) => (
					<div
						className="w-[40dvw] md:w-[23dvw] shrink-0 aspect-video"
						key={`${i} - ${name}`}
					>
						<img
							src={poster}
							alt={name}
							className="w-full h-full object-cover rounded-xl"
						/>
					</div>
				))}
			</div>
		</div>
	)
}
