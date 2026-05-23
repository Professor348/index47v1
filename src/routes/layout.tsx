import {Link, Outlet} from "react-router";
import {SiDiscord, SiGithub} from "@icons-pack/react-simple-icons";
import SearchBar from "../components/SearchBar";

export default function Layout() {
    return (
        <div className="flex">
            <div className="flex h-screen min-w-1/4 flex-col bg-base-200 border-r-2 border-base-content/10">
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
            <div className="grow">
                <Outlet />
            </div>
        </div>
    );
}
