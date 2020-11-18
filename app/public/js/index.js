let requestUrl = "guardian?apiRequestUrl=http://content.guardianapis.com/search?q=NOT%20sport&from-date=2020-11-15&order-by=newest"
let client = new makersClient()
let targetElement = document.getElementById('headlines')

client.get(requestUrl, data => new headlineList(data, targetElement).render());