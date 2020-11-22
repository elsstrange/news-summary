class requestUrl {
  createGuardianRequest(topic) {
    return `guardian?apiRequestUrl=http://content.guardianapis.com/search?q=${topic}&from-date=${this.formatToday()}`
  }

  createAylienRequest(article) {
    return `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${article}&sentences_number=7`
  }

  formatToday() {
    let date = new Date();
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return `${year}-${month}-${day}`;
  }
}
