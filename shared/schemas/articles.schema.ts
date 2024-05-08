import z from "zod";
import { article } from "../constants";

export const ArticleContents_Schema = z.object({
    [article.title.label]: z.string().max(article.title.max),
    [article.description.label]: z.string().max(article.description.max),
    [article.image]: z.string().url(),
    [article.content.label]: z.string().max(article.content.max),
    [article.category.label]: z.enum(article.category.options),
});

export const Article_Schema = ArticleContents_Schema.and(
    z.object({
        [article.article_id]: z.number().positive(),
    })
);
