let localUrl = "http://localhost:3000/";
// let realUrl = "https://restcountries.eu/rest/v2/all"
let realUrl = "https://restcountries.eu/rest/v2/name/israel"
export const apiUrl = realUrl;

export let perPage = 4;

export const doApiGet = async (_url) => {
    let resp = await fetch(_url);
    let data = await resp.json();
    //console.log("doApiGst",data);
    return data;
}

export const doApiPost = async (_url, _body) => {
    let resp = await fetch(_url, {
        method: "POST",
        body: JSON.stringify(_body),
        headers: {
            'content-type': "application/json"
        }
    })
    let data = await resp.json()
    console.log("service say:" ,data)
    return data;
}


export const doApiPostToken = async (_url, _body) => {
    let resp = await fetch(_url, {
        method: "POST",
        body: JSON.stringify(_body),
        headers: {
            'content-type': "application/json",
            'x-auth-token':localStorage["tok"]
        }
    })
    let data = await resp.json()
    console.log("service say:" ,data)
    return data;
}
