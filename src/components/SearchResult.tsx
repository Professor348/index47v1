import {ArrowRight} from "lucide-react";
import {useMemo} from "react";
import {Link} from "react-router";

export default function SearchResult({
    title,
    date,
    slug
}: {
    title: string;
    date: Date;
    slug: string;
}) {
    const formattedDate = useMemo(
        () =>
            date.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric"
            }),
        [date]
    );

    return (
        <li className="list-row">
            <div className="list-col-grow">
                <div>{title}</div>
                <div className="text-xs uppercase font-semibold opacity-60">{formattedDate}</div>
            </div>
            <Link to={`/${slug}`} className="btn btn-square btn-ghost">
                <ArrowRight className="size-6" />
            </Link>
        </li>
    );
}
