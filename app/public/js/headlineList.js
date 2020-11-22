class headlineList {
  constructor(data, target) {
    this.data = data;
    this.target = target;
  }
  
  render() {
    this.resetInnerHTML()
    this.data.response.results.forEach((result) => {
      let para = this.createPara(result.webTitle);
      let fullArticleLink = this.createLink(result.webUrl);
      fullArticleLink.appendChild(this.createButton('Full Article'));
      let summaryLink = this.createLink(`#${result.id}`);
      summaryLink.appendChild(this.createButton('Seven Sentence Summary'));
      para.appendChild(summaryLink);
      para.appendChild(fullArticleLink);
      this.target.appendChild(para);
    })
  }

  resetInnerHTML() {
    this.target.innerHTML = "";
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
