export function createuser(user) {
    return new Promise((resolve, reject) => {
        fetch('https://ancestrydb-2e5b.restdb.io/rest/user', {
            body: JSON.stringify(user),
            headers: { 'x-apikey': '5aba263cf0a7555103cea80f', 'content-type': 'application/json' },
            method: 'POST'
        }).then((response) => {
            response.text().then((userData) => resolve({ userData: JSON.parse(userData) }));
        });
    });
};

export function getuser(user) { 
    return new Promise((resolve, reject) => {
        fetch('https://ancestrydb-2e5b.restdb.io/rest/user?q=' + JSON.stringify(user), {
            headers: { 'x-apikey': '5aba263cf0a7555103cea80f', 'content-type': 'application/json' },
            method: 'GET'
        }).then((response) => {
            response.text().then((userData) => resolve({ userData: JSON.parse(userData)[0] }));
        });
    });
};
