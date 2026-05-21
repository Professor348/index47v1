import {Info, X} from "lucide-react";
import {useRef} from "react";

export default function Information() {
    const modal = useRef<HTMLDialogElement>(null);

    return (
        <>
            <button
                className="btn btn-neutral btn-square"
                onClick={() => modal.current?.showModal()}>
                <Info className="size-6" />
            </button>
            <dialog ref={modal} className="modal">
                <div className="modal-box bg-base-200">
                    <form method="dialog">
                        <button className="btn btn-sm btn-square btn-ghost absolute right-2 top-2">
                            <X className="size-6" />
                        </button>
                    </form>
                    <h3 className="text-lg font-bold">About</h3>
                    <p className="pt-4">
                        Index47 was founded in May of 2026, by programmers on 13100, but now many
                        more contribute. It was made through observations that the FTC community
                        does not know all niche references.
                    </p>
                </div>
            </dialog>
        </>
    );
}
