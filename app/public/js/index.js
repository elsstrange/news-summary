let requesturl = new requestUrl().createGuardianRequest('politics')
let client = new makersClient()
let targetElement = document.getElementById('headlines')

client.get(requesturl, data => new headlineList(data, targetElement).render());