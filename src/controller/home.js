export function getallusers(user) {
    return new Promise((resolve, reject) => {
        fetch(process.env.REACT_APP_DBURI, {
            headers: { 'x-apikey': process.env.REACT_APP_APIKEY, 'content-type': 'application/json' },
            method: 'GET'
        }).then((response) => {
            response.text().then((userData) => resolve({ users: JSON.parse(userData) }));
        });
    });
};