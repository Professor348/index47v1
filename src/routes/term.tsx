import {useParams} from "react-router";
import {terms} from "../../.velite";

export default function Term() {
    const {"*": termPath} = useParams();
    const termData = terms.find(term => term.path.slice("terms/".length) == termPath);
    return termData ? (
        <article className="prose" dangerouslySetInnerHTML={{__html: termData.content}}></article>
    ) : (
        <span>404 bum</span>
    );
}
