class Client {
  get(url, callback) {
    return fetch(url)
      .then(response => response.json())
      .then(data => callback(data));
  }
}
