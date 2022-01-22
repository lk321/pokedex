const fetcher = (url) => fetch(url).then((response) => response.json()).then((r) => r.results);

export default fetcher;
