import z from "zod";
import { article, tables } from "../constants";

/**
 * Schema used for the creation of new services. No ID needed and the client is just a reference
 */
export const ArticleContents_Schema = z.object({
    [article.title.label]: z.string().max(article.title.max),
    [article.description.label]: z.string().max(article.description.max),
    [article.image.label]: z.string().url(),
    [article.content.label]: z.string().max(article.content.max),
    [article.category.label]: z.enum(article.category.options),
});

export const Article_Schema = ArticleContents_Schema.and(
    z.object({
        [article.article_id]: z.number().positive().int(),
    })
);

export const Articles = `--sql
CREATE TABLE ${tables.article}(
        ${article.article_id} SERIAL PRIMARY KEY,
        ${article.title.label} VARCHAR(${article.title.max}) NOT NULL,
        ${article.description.label} VARCHAR(${article.description.max}) NOT NULL,
        ${article.image.label} VARCHAR(255) NOT NULL,
        ${article.content.label} JSON NOT NULL,
        ${article.category.label} VARCHAR(63) NOT NULL
);`;
