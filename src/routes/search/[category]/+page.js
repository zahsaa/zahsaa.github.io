import { error, fail, invalid } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {


    /* params.category matches to the [category] in the filesystem */
    /* for example navigating to /search/foobar in this example will put foobar in params.category */

    console.log(params.category)

    /* TODO: Fix the "bug" in the following GET request */

    /* Perform a networked HTTP GET request to an external API  */
    /* Documentation: https://random-data-api.com/documentation */
    const response = await fetch('https://random-data-api.com/api/v2/' + "OOGABOOGA" + '?size=100&response_type=json', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    });


    if (response.status != 200) {
        throw error(response.status, { message: response.statusText })
    }
    return { params, response: response.json() }; // parses JSON response into native JavaScript objects

}

