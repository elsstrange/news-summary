describe('Headline List', () => {
  let headlinelist;
  let mockTargetElement;

  beforeEach(() => {
    mockTargetElement = document.createElement('div')
    headlinelist = new headlineList(exampleData, mockTargetElement);
  });
  
  describe('#render', () => {
    it('sets the innerHTML of specified element with list of headlines and full article links', () => {
      expectedHTML = [
        '<p>',
        'The Weeknd to headline Super Bowl 2021 half-time show',
        '<a href="https://www.theguardian.com/music/2020/nov/12/the-weeknd-super-bowl-2021-half-time-show"><button>Full Article</button></a>',
        '</p>',
        '<p>',
        'Strictly Come Dancing 2020 launch show – as it happened',
        '<a href="https://www.theguardian.com/tv-and-radio/live/2020/oct/17/strictly-come-dancing-2020-week-one-live"><button>Full Article</button></a>',
        '</p>'
      ].join("")
      
      headlinelist.render()
      expect(mockTargetElement.innerHTML).toEqual(expectedHTML)
    })
  })
});
