let client
let targetElement

window.addEventListener('load', () => { 
  getHeadlinesData()
    .then((headlinesData) => renderHeadlines(headlinesData))
    .then((headlinesData) => addHashChangeListener(headlinesData));
});

function getHeadlinesData() {
  return new Promise((resolve) => {
    let guardianRequestUrl = new requestUrl().createGuardianRequest('politics');
    client = new makersClient();
    headlinesData = client.get(guardianRequestUrl, (data) => { return data });
    resolve(headlinesData);
  });
}

function renderHeadlines(data) {
  return new Promise((resolve) => {
    targetElement = document.getElementById('headlines');
    new headlineList(data, targetElement).render();
    resolve(data);
  });
}

function addHashChangeListener(headlinesData) {
  window.addEventListener('hashchange', (event) => {
    event.preventDefault();
    if (window.location.hash === "") {
      getHeadlinesData()
        .then((newHeadlinesData) => renderHeadlines(newHeadlinesData));
    } else {
      article = headlinesData.response.results.filter(result => result.id === window.location.hash.slice(1))[0];
      let aylienRequestUrl = new requestUrl().createAylienRequest(article.webUrl);
      client.get(aylienRequestUrl, summaryData => new articleSummary(summaryData, article.webTitle, targetElement).render());
    }
  });
}
