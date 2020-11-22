describe('articleSummary', () => {
  let expectedHTML
  let mockTargetElement
  let mockTitle
  let summary

  describe('#render', () => {
    beforeEach(() => {
      mockTargetElement = document.createElement('div')
      mockTitle = "Title"
      summary = new articleSummary(exampleAylienData, mockTitle, mockTargetElement)
      expectedHTML = [
        `<h2>${mockTitle}</h2>`,
        '<p>Sentence 1</p>',
        '<p>Sentence 2</p>',
        '<p>Sentence 3</p>',
        '<p>Sentence 4</p>',
        '<p>Sentence 5</p>',
        '<p>Sentence 6</p>',
        '<p>Sentence 7</p>',
        '<a href="#"><button>Back to Headlines</button></a>'
      ].join("")
    })

    it('sets the innerHTML of the specified element to the summary content', () => {
      summary.render()
      expect(mockTargetElement.innerHTML).toEqual(expectedHTML)
    });

    it('resets the innerHTML of the specified element before appending the summary content', () => {
      summary.render()
      summary.render()
      expect(mockTargetElement.innerHTML).toEqual(expectedHTML)
    })
  });
});