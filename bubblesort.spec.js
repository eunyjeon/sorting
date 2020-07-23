describe("Bubble Sort", function(){
  xit("handles an empty array", function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  xit("handles single item", function(){
      expect( bubbleSort([2])).toEqual([2])
  })
  xit("handles multiple items", function(){
      expect( bubbleSort([8,3,4,2])).toEqual([2,3,4,8]);
      expect( bubbleSort([1,2,4,9,3])).toEqual([1,2,3,4,9]);
      expect( bubbleSort([8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8])
  })
  // beforeAll(function () {
  //   spyOn(bubbleSort,'determineSwap').and.callThrough();
  // })
  // it("cont determineSwap", function () {
  //   bubbleSort([8,3,4,2]);
  //   expect(budeterminSwap.calls.count()).toEqual(6)
  // })
});


