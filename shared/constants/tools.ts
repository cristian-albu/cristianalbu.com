const tool = {
    tool_id: "tool_id",
    title: {
        label: "title",
        min: 4,
        max: 63,
    },
    description: {
        label: "description",
        min: 10,
        max: 255,
    },
    image: { label: "image", type: "img" },
    category: {
        label: "category",
        options: ["front-end", "back-end"],
    },
} as const;

export default tool;
