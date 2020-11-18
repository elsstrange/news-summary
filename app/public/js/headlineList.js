class headlineList {
  constructor(data, target) {
    this.data = data;
    this.target = target;
  }

  listHeadlines() {
    let headlineHTML = "";
    this.data.response.results.forEach(result => headlineHTML += `<p>${result.webTitle}</p>`);
    return headlineHTML;
  }
  
  render() {
    this.target.innerHTML = this.listHeadlines();
  }
}
