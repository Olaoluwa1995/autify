import AvatarImage from "../../assets/test/avatar.png";

type SlidesProps = {
	key: number;
	src: string;
	name: string;
	title: string;
	description: string;
};

export const slides: SlidesProps[] = [
	{
		key: 1,
		name: "Timmy Brain",
		src: AvatarImage,
		title: "fxnigeria.com",
		description:
			"Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
	},
	{
		key: 2,
		name: "Larry Brain",
		src: AvatarImage,
		title: "futurex.com",
		description:
			"Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
	},
	{
		key: 3,
		name: "Tim kross",
		src: AvatarImage,
		title: "digital.com",
		description:
			"Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
	},
	{
		key: 4,
		name: "Timmy Brain",
		src: AvatarImage,
		title: "fxnigeria.com",
		description:
			"Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
	},
	{
		key: 5,
		name: "Elon Jobs",
		src: AvatarImage,
		title: "fxnigeria.com",
		description:
			"Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
	},
];
