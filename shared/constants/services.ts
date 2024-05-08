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
    image: "image",
    content: {
        label: "content",
        max: 16383,
    },
    starting_price: "starting_price",
} as const;

export default service;
