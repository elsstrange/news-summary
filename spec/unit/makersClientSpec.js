describe('Makers Client', () => {
  let client;
  let requestUrl;
  let callback;
  let makersApiUrl;
  let mockResponse;
  let mockJsonPromise;
  let mockFetchPromise;

  describe('get', () => {
    beforeEach(() => {
      client = new makersClient();
      requestUrl = 'guardian=a_guardian_api_request';
      makersApiUrl = 'http://news-summary-api.herokuapp.com/';
      callback = jasmine.createSpy('callback');
      mockResponse = {};
      mockJsonPromise = Promise.resolve(mockResponse);
      mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise
      });

      spyOn(window, 'fetch')
        .and
        .callFake(() => mockFetchPromise);
    });

    it('makes a get request to the Makers API with the provided params', () => {
      client.get(requestUrl, callback);
      expect(fetch).toHaveBeenCalledWith(makersApiUrl + requestUrl);
    });

    it('executes the callback passing the response data', async () => {
      await client.get(requestUrl, callback)
      expect(callback).toHaveBeenCalledWith(mockResponse)
    })
  });
});
