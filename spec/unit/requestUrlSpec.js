describe('requestUrl', () =>{
  let requesturl;
  describe('#createGuardianRequest', () => {
    let topic;
    let testDate;

    beforeEach(() => {
      jasmine.clock().install();
      topic = 'politics';
      testDate = new Date(2020, 10, 15);
      jasmine.clock().mockDate(testDate);
      requesturl = new requestUrl();
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    })

    it("returns a Guardian API request URL for today's headlines, using provided query keywords", () => {
      expect(requesturl.createGuardianRequest(topic))
        .toEqual(`guardian?apiRequestUrl=http://content.guardianapis.com/search?q=${topic}&from-date=2020-11-15`);
    });
  });
  describe('#createAylienRequest', () => {
    let urlToSummarise;

    beforeEach(() => {
      urlToSummarise = 'http://www.example.com'
      requesturl = new requestUrl();
    });

    it("returns an Aylien API request URL for the URL specified", () => {
      expect(requesturl.createAylienRequest(urlToSummarise)).toEqual(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${urlToSummarise}&sentences_number=7`)
    })
  })
});
