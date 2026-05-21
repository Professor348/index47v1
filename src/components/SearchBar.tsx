import {Search} from "lucide-react";
import {useRef} from "react";
import {useHotkeys} from "react-hotkeys-hook";
import SearchResult from "./SearchResult";
import {terms} from "../../.velite";

export default function SearchBar() {
    const searchBar = useRef<HTMLInputElement>(null);
    useHotkeys("slash", e => {
        e.preventDefault();
        return searchBar.current?.focus();
    });

    return (
        <div className="flex min-h-0 flex-1 flex-col p-4">
            <label className="floating-label">
                <span>Search</span>
                <div className="input w-full grow">
                    <Search className="opacity-50 size-5 mr-1" />
                    <input ref={searchBar} type="search" placeholder="Search" />
                    <kbd className="kbd kbd-md select-none">/</kbd>
                </div>
            </label>

            <ul className="list mt-4 min-h-0 overflow-y-auto border border-base-content/10 bg-base-300">
                {terms.map(term => (
                    <SearchResult
                        key={term.slug}
                        title={term.title}
                        slug={term.slug}
                        date={term.lastModified}
                    />
                ))}
            </ul>
        </div>
    );
}
