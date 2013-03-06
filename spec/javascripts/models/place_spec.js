describe("TripList.Models.Places", function() {
  it("should know if it is marked as incomplete", function() {
    var incompleteItem = new TripList.Models.Place({ isComplete: false });
    expect(incompleteItem.get('isComplete')).toBe(false);
  });
  it("should know if it is marked as complete", function() {
    var completedItem = new TripList.Models.Place({ isComplete: true });
    expect(completedItem.get('isComplete')).toBe(true);
  });
});
