import {defineConfig, defineSchema, s} from "velite";
import paths from "path";
import simpleGit from "simple-git";

const git = simpleGit();

const lastModified = defineSchema(() =>
    s
        .custom<string | undefined>(i => i == undefined || typeof i === "string")
        .transform<string>(async (_, {meta}) => {
            const log = await git.log({file: meta.path, maxCount: 1});
            return new Date(log.latest?.date || Date.now()).toISOString();
        })
);

export default defineConfig({
    collections: {
        terms: {
            name: "Term",
            pattern: "terms/*.md",
            schema: s.object({
                title: s.string(),
                aliases: s.string().array().default([]),
                content: s.markdown(),
                slug: s.path().transform<string>(path => paths.basename(path)),
                lastModified: lastModified()
            })
        }
    }
});
