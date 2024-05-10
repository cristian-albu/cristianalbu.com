const experience = {
    experience_id: "experience_id",
    title: {
        label: "job_title",
        max: 63,
    },
    description: {
        label: "description",
        max: 255,
    },
    start_date: "start_date",
    end_date: "end_date",
    still_active: "still_active",
    company: "company",
    company_link: "company_link",
    company_logo: { label: "company_logo", type: "img" },
    technologies: "technologies",
} as const;

export default experience;
