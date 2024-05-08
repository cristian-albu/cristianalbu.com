const tool = {
    tool_id: "tool_id",
    title: {
        label: "title",
        max: 63,
    },
    description: {
        label: "description",
        max: 255,
    },
    image: "image",
    category: {
        label: "category",
        options: ["front-end", "back-end"],
    },
} as const;

export default tool;
