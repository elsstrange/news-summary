class makersClient {
  constructor() {
    this.rootUrl = 'http://news-summary-api.herokuapp.com/'
  }

  get(requestUrl, callback) {
    debugger;
    return fetch(this.rootUrl + requestUrl)
      .then(response => response.json())
      .then(data => callback(data));
  }
}
