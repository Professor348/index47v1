import {useParams} from "react-router";
import {terms} from "../../.velite";

export default function Term() {
    const {slug} = useParams();
    const term = terms.find(term => term.slug == slug);
    return term ? (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8">{term.title}</h1>
            <article className="prose" dangerouslySetInnerHTML={{__html: term.content}}></article>
        </div>
    ) : (
        <span>404 bum</span>
    );
}
