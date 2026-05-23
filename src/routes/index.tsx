import ReactMarkdown from "react-markdown";

const content = `
## About

**Index47** was founded in May 2026 by programmers from **FTC Team 13100**, known as the 47 Beavers, hence the name "Index47" was derived. Since then, many contributors outside the team have regularly helped **expand** the project. It was created after observing that much of the FTC community lacks a **centralized** resource for references, acronyms, and commonly used libraries.

## Usage

To use **Index47**, **type** in a search or acronym in the search bar to show the desired content
that will include a whole page on the topic on the right hand side, you can then **re-search**
on the left search bar. To return to this page, simply **click** the Index47 logo

## Developers

  [**Sid Shah**](https://github.com/siddharth-shah121) Lead Developer\\
  [**Davis Luxenberg**](https://github.com/BeepBot99) Beta Testing Lead\\
  [**Ishika Saini**](https://github.com/ish-that-a-wish) UI/Design Lead\\
  [**Mohit Patil**](https://github.com/MomohitPatil) Collaboration Lead

## How to contribute
1. Join the [**discord**](https://discord.gg/dAJUWgdun2) to communicate your thoughts
2. Fork the [**repository**](https://github.com/index47ftc/index47v1)
3. Copy the content in \`[abbreviation].md\` file from the template folder
3. Paste it into a new file in **content/terms** named \`[abbreviation].md\` where an acronym is favored if there is one.
4. Write out your content and replace all []s with the appropriate content of your search
5. If your search doesn't have acronyms, put in a simplified version of the word as an aliase (e.g. **Next** for **NextFTC**)
6. Searches are required to have at least 1 image, scale the image using \`width\` to adjust sizing
7. Add your name to the **Other Contributors** section of \`README.md\` as shown with your github details
8. Submit a pull request to [**repository**](https://github.com/index47ftc/index47v1)
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