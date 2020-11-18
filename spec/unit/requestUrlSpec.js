describe('requestUrl', () =>{
  describe('#createGuardianRequest', () => {
    let topic;
    let testDate;
    let requesturl;

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
});
