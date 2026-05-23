import {Link, Outlet} from "react-router";
import {SiDiscord, SiGithub} from "@icons-pack/react-simple-icons";
import SearchBar from "../components/SearchBar";
import {useEffect} from "react";

export default function Layout() {
    useEffect(() => {
        document.querySelectorAll("article a").forEach(link => {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        });
    });
    return (
        <div className="flex">
            <div className="flex h-screen min-w-7/24 flex-col bg-base-200 border-r-2 border-base-content/10">
                <div className="p-4 border-b-2 border-base-content/10 text-center">
                    <Link to="/" className="btn btn-ghost p-8 uppercase font-mono">
                   <img src="/index47.svg" alt="Index 47 Logo" className="h-40 w-auto" />
                    </Link>
                </div>
                <div className="flex justify-center gap-2 items-center p-3 border-b-2 border-base-content/10">
                    <a
                        href="https://github.com"
                        className="btn btn-outline btn-neutral shadow-none btn-square">
                        <SiGithub className="size-6" />
                    </a>
                    <a
                        href="https://discord.com"
                        className="btn btn-outline btn-neutral shadow-none btn-square">
                        <SiDiscord className="size-6" />
                    </a>
                </div>

                <SearchBar />
            </div>
            <div className="grow flex flex-col">
                <Outlet />
                <footer className="p-4 border-t-2 border-base-content/10 text-center text-sm font-mono opacity-50">
                    © 2026 Index47. All rights reserved.
                </footer>
            </div>
        </div>
    );
}
