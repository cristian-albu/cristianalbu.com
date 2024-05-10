const article = {
    article_id: "article_id",
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
        options: ["tech", "personal", "update"],
    },
} as const;

export default article;
