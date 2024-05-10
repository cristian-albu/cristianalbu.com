const service = {
    service_id: "service_id",
    title: {
        label: "title",
        max: 63,
    },
    description: {
        label: "description",
        max: 255,
    },
    image: { label: "image", type: "img" },
    content: {
        label: "content",
        max: 16383,
        type: "richText",
    },
    starting_price: { label: "starting_price", type: "number" },
} as const;

export default service;
