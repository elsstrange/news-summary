class headlineList {
  constructor(data, target) {
    this.data = data;
    this.target = target;
  }
  
  render() {
    this.resetInnerHTML()
    this.data.response.results.forEach((result) => {
      let para = this.createPara(result.webTitle)
      let link = this.createLink(result.webUrl)
      link.appendChild(this.createButton('Full Article'))
      para.appendChild(link)
      this.target.appendChild(para)
    })
  }

  resetInnerHTML() {
    this.target.innerHTML = ""
  }
  
  createButton(text) {
    let button = document.createElement('button')
    button.textContent = text
    return button
  }

  createLink(url) {
    let link = document.createElement('a')
    link.setAttribute('href', url)
    return link
  }

  createPara(text) {
    let para = document.createElement('p')
    para.textContent = text
    return para
  }
}
