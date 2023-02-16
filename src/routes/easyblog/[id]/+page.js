/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    const temp = await import("./" + params.id + ".md")

    

    return {
        markdown: temp.default
    }

}