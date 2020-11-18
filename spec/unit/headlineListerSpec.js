describe('Headline Lister', () => {
  let headlinelister;
  let targetElement;

  beforeEach(() => {
    targetElement = jasmine.createSpyObj('target element', ['innerHTML'])
    headlinelister = new headlineLister(exampleData, targetElement);
  });
  
  describe('#listHeadlines', () => {
    it('parses headlines from json into <p> tags', () => {
      expect(headlinelister.listHeadlines()).toEqual('<p>The Weeknd to headline Super Bowl 2021 half-time show</p><p>Strictly Come Dancing 2020 launch show – as it happened</p>');
    });
  });

  describe('#render', () => {
    it('sets the innerHTML of specified element with the result of #listHeadlines', () => {
      let mockContent = 'headline list'
      spyOn(headlinelister, 'listHeadlines').and.returnValue(mockContent)
      headlinelister.render()
      expect(headlinelister.listHeadlines).toHaveBeenCalled()
      expect(targetElement.innerHTML).toEqual(mockContent)
    })
  })
});