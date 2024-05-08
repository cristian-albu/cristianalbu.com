const client = {
    client_id: "article_id",
    name: {
        label: "name",
        max: 63,
    },
    description: {
        label: "description",
        max: 255,
    },
    image: "image",
    client_link: "client_link",
    testimonial: {
        label: "testimonial",
        max: 255,
    },
    testimonial_representative: {
        label: "testimonial_representative",
        max: 63,
    },
    testimonial_representative_image: "testimonial_representative_image",
} as const;

export default client;
