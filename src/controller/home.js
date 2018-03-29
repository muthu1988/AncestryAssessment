export function getallusers(user) { 
    return new Promise((resolve, reject) => {
        fetch('https://ancestrydb-2e5b.restdb.io/rest/user', {
            headers: { 'x-apikey': '5aba263cf0a7555103cea80f', 'content-type': 'application/json' },
            method: 'GET'
        }).then((response) => {
            response.text().then((userData) => resolve({ users: JSON.parse(userData) }));
        });
    });
};