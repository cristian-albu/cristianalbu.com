const certification = {
    certification_id: "certification_id",
    title: {
        label: "title",
        max: 63,
    },
    issuer: {
        label: "issuer",
        max: 63,
    },
    description: {
        label: "description",
        max: 255,
    },
    image: { label: "image", type: "img" },
    link: "link",
} as const;

export default certification;
