export type Movie = {
	poster: string
	name: string
}

export const movies = [
	{ poster: "/airplane.webp", name: "Airplane" },
	{ poster: "/family-man.webp", name: "Family Man" },
	{ poster: "/laboratory.webp", name: "Laboratory" },
	{ poster: "/napoleon.webp", name: "Napoleon" },
	{ poster: "/person-in-darkness.webp", name: "Person in Darkness" },
	{ poster: "/scary-building.webp", name: "Scary Building" },
	{ poster: "/stars.webp", name: "Stars" }
]

export const randomMoviesSet1 = movies
	.sort(() => Math.random() - 0.5)
	.concat(movies.sort(() => Math.random() - 0.5))
	.concat(movies.sort(() => Math.random() - 0.5))

export const randomMoviesSet2 = movies
	.sort(() => Math.random() - 0.5)
	.concat(movies.sort(() => Math.random() - 0.5))
	.concat(movies.sort(() => Math.random() - 0.6))
	.sort(() => Math.random() - 0.5)
