This is a Simple Api Utility to FETCH, POST and DELETE methods

Utility is in the mjs file and can be used with ES6 code. to include the utility to the other file do the following:

    import {SimpleApiUtility} from './SimpleApiUtility.mjs';

**To FETCH data:**

    const response = await SimpleApiUtility.fetchJson(%url%);

*Arguments:*

    %url% - string

*Response:*

    PROMISE with resolve or reject

**To POST data:**

    postResponse = SimpleApiUtility.postData(%url%, %data%)
        .then(response => {
            /* handle response */
        })
        .catch(error => {
            /* handle the error */
        })

*Arguments:*

    %url% - string
    %data% - hash

*Result:*

    PROMISE with resolve or reject

**To DELETE data:**

    postResponse = SimpleApiUtility.delete(
            %url%,
            %data%
        ).then ( response => {
            /* success */
        }).catch(error => {
            /* handle the error */
        })

*Arguments:*

    %url% - string
    %data% - hash

*Result:*

    PROMISE with resolve or reject
