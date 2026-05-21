import {Search} from "lucide-react";
import {useMemo, useRef} from "react";
import {useHotkeys} from "react-hotkeys-hook";
import SearchResult from "./SearchResult";
import {terms} from "../../.velite";
import {useAtom} from "jotai";
import {searchQueryAtom} from "../lib/state";
import Fuse from "fuse.js";

export default function SearchBar() {
    const searchBar = useRef<HTMLInputElement>(null);
    useHotkeys("slash", e => {
        e.preventDefault();
        return searchBar.current?.focus();
    });

    const fuse = useMemo(
        () =>
            new Fuse(terms, {
                keys: ["title", "aliases"],
                ignoreLocation: true,
                threshold: 0.3
            }),
        []
    );

    const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);

    const searchResults = useMemo(() => fuse.search(searchQuery), [searchQuery, fuse]);

    console.log(searchResults);

    return (
        <div className="flex min-h-0 flex-1 flex-col p-4">
            <label className="floating-label">
                <span>Search</span>
                <div className="input w-full grow">
                    <Search className="opacity-50 size-5 mr-1" />
                    <input
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        ref={searchBar}
                        type="search"
                        placeholder="Search"
                    />
                    <kbd className="kbd kbd-md select-none">/</kbd>
                </div>
            </label>

            <ul className="list mt-4 min-h-0 overflow-y-auto border border-base-content/10 bg-base-300 rounded-box">
                {searchQuery
                    ? searchResults.map(term => (
                          <SearchResult
                              key={term.item.slug}
                              title={term.item.title}
                              slug={term.item.slug}
                              date={term.item.lastModified}
                          />
                      ))
                    : terms.map(term => (
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
