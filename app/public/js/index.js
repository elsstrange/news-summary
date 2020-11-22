let guardianRequestUrl
let aylienRequestUrl
let client
let targetElement

new Promise((resolve) => {
  window.addEventListener('load', () => { 
    setUpPage();
    resolve();
  })
}).then(() => setUpListener())


setUpPage = (event) => {
  guardianRequestUrl = new requestUrl().createGuardianRequest('politics')
  client = new makersClient()
  targetElement = document.getElementById('headlines')

  client.get(guardianRequestUrl, data => new headlineList(data, targetElement).render());
}

setUpListener = () => {
  window.addEventListener('hashchange', (event) => {
    articleUrl = `https://www.theguardian.com/${window.location.hash.slice(1)}`
    aylienRequestUrl = new requestUrl().createAylienRequest(articleUrl)
    client.get(aylienRequestUrl, data => new articleSummary(data, targetElement).render())
  })
}