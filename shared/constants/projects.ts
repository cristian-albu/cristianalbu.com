const project = {
    project_id: "project_id",
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
    category: {
        label: "category",
        options: ["personal", "freelance", "employer"],
    },
    type: {
        label: "type",
        options: [
            "front-end",
            "back-end",
            "full-stack",
            "design",
            "marketing",
            "custom",
        ],
    },
    client: "client",
} as const;

export default project;
