let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=NOT%20sport&from-date=2020-11-15&order-by=newest"
let client = new Client()
let targetElement = document.getElementById('headlines')

client.get(url, data => new headlineLister(data, targetElement).render());