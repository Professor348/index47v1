import ReactMarkdown from "react-markdown";

const content = `
## About

**Index47** was founded in May 2026 by programmers from **FTC Team 13100**, known as the 47 Beavers, hence the name "Index47" was derived. Since then, many contributors outside the team have regularly helped **expand** the project. It was created after observing that much of the FTC community lacks a **centralized** resource for references, acronyms, and commonly used libraries.
## User Guide

To **use** Index47, **type** in a search or acronym in the search bar to show the desired content
that will include a whole page on the topic on the right hand side, you can then **re-search**
on the left search bar. To return to this page, simply **click** the Index47 logo. To begin **contributing** review the **README.md** of the  [**repository**](https://github.com/index47ftc/index47v1) for step by step instructions
## Developers

  [**Sid Shah**](https://github.com/siddharth-shah121) Lead Developer\\
  [**Davis Luxenberg**](https://github.com/BeepBot99) Beta Testing Lead\\
  [**Ishika Saini**](https://github.com/ish-that-a-wish) UI/Design Lead\\
  [**Mohit Patil**](https://github.com/MomohitPatil) Collaboration Lead


`;

export default function Index() {
    return (
        <div className="p-8 max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
                <img src="/i47.svg" alt="Index47" className="h-24 w-auto" />
            </div>
            <article className="prose index-page">
                <ReactMarkdown
                    components={{
                        a: ({href, children}) => (
                            <a href={href} target="_blank" rel="noopener noreferrer">
                                {children}
                            </a>
                        )
                    }}>
                    {content}
                </ReactMarkdown>
            </article>
        </div>
    );
}