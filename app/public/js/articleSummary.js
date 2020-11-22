class articleSummary {
  constructor(data, title, targetElement) {
    this.data = data;
    this.title = title;
    this.targetElement = targetElement;
  }

  render() {
    this.resetInnerHTML()
    this.targetElement.innerHTML = `<h2>${this.title}</h2>`;
    this.data.sentences.forEach(sentence => { this.targetElement.innerHTML += `<p>${sentence}</p>` });
    this.targetElement.innerHTML += '<a href="#"><button>Back to Headlines</button></a>'
  }

  resetInnerHTML() {
    this.targetElement.innerHTML = ""
  }
}