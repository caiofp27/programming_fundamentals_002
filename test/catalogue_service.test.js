const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.checkBook", () => {
    test("returns true when a book is found by title", () => {
      expect(catalogueService.checkBook("Great Expectations")).toBe(true);
    });

    test("returns true when a book is found by title in lower case", () => {
      expect(catalogueService.checkBook("the origin of species")).toBe(true);
    });

    test("returns false when a book cannot be found by title", () => {
      expect(catalogueService.checkBook("Gone With The Wind")).toBe(false);
    });

    test("returns true when a partial match is found", () => {
      expect(catalogueService.checkBook("Expectations")).toBe(true);
    });

    test("returns false when not even a partial match is found", () => {
      expect(catalogueService.checkBook("The Wind")).toBe(false);
    });
  });
  describe("catalogueService.countBooksByKeyword", () => {
    test("returns assassin when passed 3", () => {
      expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
    });
    test("returns normal when passed 2", () => {
      expect(catalogueService.countBooksByKeyword("normal")).toBe(2);
    });
    test("returns pineapple when passed 0", () => {
      expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
    });
  });
  describe("catalogueService.getBooksByAuthor", () => {
    test("returns A Tale of Two Cities, Oliver Twist, Great Expectations", () => {
      expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
        "A Tale of Two Cities",
        "Oliver Twist",
        "Great Expectations"
      ]);
    });
    test("returns an empty Array", () => {
      expect(catalogueService.getBooksByAuthor("J.R.R. Tokien")).toEqual([]);
    });
    test("returns A Tale of Two Cities, Oliver Twist, Great Expectations, The Origin of Species", () => {
      expect(catalogueService.getBooksByAuthor("Charles")).toEqual([
        "A Tale of Two Cities",
        "Oliver Twist",
        "Great Expectations",
        "The Origin of Species"
      ]);
    });
  });
  describe("catalogueService.getStockCount", () => {
    test("returns Between the Assassinations when passed 9", () => {
      expect(catalogueService.getStockCount("Between the Assassinations")).toBe(9);
    });
    test("returns A Tale of Two Cities when passed 3", () => {
      expect(catalogueService.getStockCount("A Tale of Two Cities")).toBe(3);
    });
    test("returns The Great Gatsbys when passed 0", () => {
      expect(catalogueService.getStockCount("The Great Gatsby")).toBe(0);
    });
    test("returns Dracula when passed 0", () => {
      expect(catalogueService.getStockCount("Dracula")).toBe(0);
    });
  });
  describe("catalogueService.stockReview", () => {
    test("Dracula = Not in Stock", () => {
      expect(catalogueService.stockReview("Dracula")).toBe("Not in Stock");
    });
    test("Great Expectations = Low Stock", () => {
      expect(catalogueService.stockReview("Great Expectations")).toBe("Low Stock");
    });
    test("The Blind Assassin = Medium Stock", () => {
      expect(catalogueService.stockReview("The Blind Assassin")).toBe("Medium Stock");
    });
    test("The Yellow Wallpaper = High Stock", () => {
      expect(catalogueService.stockReview("The Yellow Wallpaper")).toBe("High Stock");
    });
  });
});
