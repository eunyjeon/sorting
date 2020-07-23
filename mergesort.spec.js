describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here
      expect(split([1,2,4,5,3,8])).toEqual([[1,2,4],[5,3,8]]);
      expect(split([1])).toEqual([[1],[]]);
      expect(split([1,2,4,5,3,8,9])).toEqual([[1,2,4],[5,3,8,9]]);
    });
  });


describe('Merge function', function(){
it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([[1,2,4],[3,5,8]])).toEqual([1,2,3,4,5,8]);
    expect(merge([[1],[]])).toEqual([1]);
    expect(merge([[1,2,4,5],[3,8,9]])).toEqual([1,2,3,4,5,8,9])
});
});

describe('MergeSort function', function(){
  it('is able to properly do merge sort', function(){
      // test the merge sort algorithm
      expect(mergeSort([1,2,4,5,3,8])).toEqual([1,2,3,4,5,8]);
      expect(mergeSort([1])).toEqual([1]);
      expect(mergeSort([1,2,4,5,3,8,9])).toEqual([1,2,3,4,5,8,9])
  });
  });


