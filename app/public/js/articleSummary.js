class articleSummary {
  constructor(data, targetElement) {
    this.data = data;
    this.targetElement = targetElement;
  }

  render() {
    this.data.sentences.forEach(sentence => { this.targetElement.innerHTML += `<p>${sentence}</p>` });
  }
}