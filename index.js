import {SimpleApiUtility} from './SimpleApiUtility.mjs';

/* to fetch data from remote server: */
const fetchResponse = await SimpleApiUtility.fetchJson("https://github.com/maxboganets/text-matches")

/* to post data to the server: */
postResponse = SimpleApiUtility.postData("https://github.com/maxboganets/text-matches", {id: 1, name: "Max"})
    .then(response => {
        /* handle response */
    })
    .catch(error => {
        /* handle the error */
    })

/* to delete data on the server: */
postResponse = SimpleApiUtility.delete(
        "https://github.com/maxboganets/text-matches",
        {id: %someId%}
    ).then ( response => {
        /* success */
    }).catch(error => {
        /* handle the error */
    })
