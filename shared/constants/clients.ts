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
    image: { label: "image", type: "img" },
    client_link: "client_link",
    testimonial: {
        label: "testimonial",
        max: 255,
    },
    testimonial_representative: {
        label: "testimonial_representative",
        max: 63,
    },
    testimonial_representative_image: {
        label: "testimonial_representative_image",
        type: "img",
    },
} as const;

export default client;
