export const ApiUtility = {
/*
 * fetchJson ARGS:
 * url - string
 * function RETURNS:
 * PROMISE with either json response from the server or error
 */
    fetchJson: async function (url = "") {
        return new Promise( (resolve, reject) => {
            fetch(url, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            }).then(response => {
                return response.json();
            }).then(json => {
                resolve(json);
            }).catch(err => {
                reject(err);
            });
        });
    },

/*
 * postData ARGS:
 * url - string
 * data - hash
 * function RETURNS:
 * PROMISE with either json response from the server or error
 */
    postData: async function (url = "", data = {}) {
        return new Promise( (resolve, reject) => {
            fetch(url, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }).then(response => {
                return response.json();
            }).then(json => {
                resolve(json);
            }).catch(err => {
                reject(err);
            });
        });
    },

/*
 * delete ARGS:
 * url - string
 * data - hash
 * function RETURNS:
 * PROMISE with either json response from the server or error
 */
    delete: async function (url = "", data = {}) {
        return new Promise( (resolve, reject) => {
            fetch(url, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }).then(response => {
                return response.json();
            }).then(json => {
                resolve(json);
            }).catch(err => {
                reject(err);
            });
        });
    }
}
