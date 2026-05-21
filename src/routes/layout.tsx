import {Outlet} from "react-router";
import {SiDiscord, SiGithub} from "@icons-pack/react-simple-icons";
import Information from "../components/Information";
import SearchBar from "../components/SearchBar";

export default function Layout() {
    return (
        <div className="flex">
            <div className="flex h-screen min-w-1/4 flex-col bg-base-200 border-r-2 border-base-content/10">
                <h1 className="p-4 border-b-2 border-base-content/10 uppercase font-mono text-center">
                    <span className="text-4xl">Index&nbsp;</span>
                    <span className="text-5xl">47</span>
                </h1>
                <div className="flex justify-center gap-2 items-center p-3 border-b-2 border-base-content/10">
                    <Information />
                    <a href="https://github.com" className="btn btn-neutral btn-square">
                        <SiGithub className="size-6" />
                    </a>
                    <a href="https://discord.com" className="btn btn-neutral btn-square">
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
