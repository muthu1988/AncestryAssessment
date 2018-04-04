export function createuser(user) {
    return new Promise((resolve, reject) => {
        fetch(process.env.REACT_APP_DBURI, {
            body: JSON.stringify(user),
            headers: { 'x-apikey': process.env.REACT_APP_APIKEY, 'content-type': 'application/json' },
            method: 'POST'
        }).then((response) => {
            response.text().then((userData) => resolve({ userData: JSON.parse(userData) }));
        });
    });
};

export function getuser(user) { 
    return new Promise((resolve, reject) => {
        fetch(process.env.REACT_APP_DBURI+'?q=' + JSON.stringify(user), {
            headers: { 'x-apikey': process.env.REACT_APP_APIKEY, 'content-type': 'application/json' },
            method: 'GET'
        }).then((response) => {
            response.text().then((userData) => resolve({ userData: JSON.parse(userData)[0] }));
        });
    });
};
