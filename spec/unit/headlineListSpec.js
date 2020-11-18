describe('Headline List', () => {
  let headlinelist;
  let targetElement;

  beforeEach(() => {
    targetElement = jasmine.createSpyObj('target element', ['innerHTML'])
    headlinelist = new headlineList(exampleData, targetElement);
  });
  
  describe('#listHeadlines', () => {
    it('parses headlines from json into <p> tags', () => {
      expect(headlinelist.listHeadlines()).toEqual('<p>The Weeknd to headline Super Bowl 2021 half-time show</p><p>Strictly Come Dancing 2020 launch show – as it happened</p>');
    });
  });

  describe('#render', () => {
    it('sets the innerHTML of specified element with the result of #listHeadlines', () => {
      let mockContent = 'headline list'
      spyOn(headlinelist, 'listHeadlines').and.returnValue(mockContent)
      headlinelist.render()
      expect(headlinelist.listHeadlines).toHaveBeenCalled()
      expect(targetElement.innerHTML).toEqual(mockContent)
    })
  })
});
