import {Search, X} from "lucide-react";
import {useMemo, useRef} from "react";
import {useHotkeys} from "react-hotkeys-hook";
import SearchResult from "./SearchResult";
import {terms} from "../../.velite";
import {useAtom} from "jotai";
import {searchQueryAtom} from "../lib/state";
import Fuse from "fuse.js";
import clsx from "clsx";

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

    tsx
        return (
            <div className="flex min-h-0 flex-1 flex-col p-4">
                {/* Improved Search Input Container */}
                <div className="relative flex w-full">
                    <label className="floating-label grow">
                        <span>Search</span>
                        <div className="input w-full pr-12"> {/* Added pr-12 to make room for X */}
                            <Search className="opacity-50 size-5 mr-1" />
                            <input
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                ref={searchBar}
                                type="text"
                                placeholder="Search"
                                className="grow"
                            />
                            {/* Only show / when not typing to save space */}
                            {searchQuery === "" && <kbd className="kbd kbd-md select-none">/</kbd>}
                        </div>
                    </label>

                    {/* X Button is now absolute so it doesn't shrink the bar */}
                    {searchQuery !== "" && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="btn btn-ghost btn-sm btn-square absolute right-2 top-1/2 -translate-y-1/2"
                        >
                            <X className="size-5" />
                        </button>
                    )}
                </div>

                {/* Results Section */}
                {searchResults.length === 0 && searchQuery !== "" ? (
                    /* Matches the UI of the results list */
                    <div className="mt-4 p-8 border border-base-content/10 bg-base-300 rounded-box text-center">
                        <p className="opacity-50 italic">Nothing Found</p>
                    </div>
                ) : (
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
                )}
            </div>
        );
    }