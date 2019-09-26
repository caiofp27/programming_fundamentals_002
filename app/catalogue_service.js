// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger (10)",
  "Dracula by Bram Stoker (0)",
  "Between the Assassinations by Aravind Adiga (9)",
  "Wolf Hall by Hilary Mantel (33)",
  "Bring Up The Bodies by Hilary Mantel (31)",
  "A Place of Greater Safety by Hilary Mantel (11)",
  "Giving Up the Ghost by Hilary Mantel (8)",
  "The Assassination of Margaret Thatcher by Hilary Mantel (43)",
  "The Yellow Wallpaper by Charlotte Perkins Gilman (12)",
  "Conversations With Friends by Sally Rooney (1)",
  "Normal People by Sally Rooney (2)",
  "Everything I Never Told You by Celeste Ng (6)",
  "2666 by Robert Bolaño (17)",
  "By Night In Chile by Robert Bolaño (8)",
  "A Tale of Two Cities by Charles Dickens (3)",
  "Oliver Twist by Charles Dickens (7)",
  "Great Expectations by Charles Dickens (1)",
  "The Blind Assassin by Margaret Atwood (8)",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson (19)",
  "The Origin of Species by Charles Darwin (50)"
];

function checkBook(title) {
  if (!title) throw new Error("Please provide a title");
  let result = false;
  //let i=0;
  // while(i < catalogue.length){
  //   const book = title.toLowerCase();
  //   const cat = catalogue[i].toLowerCase()
  //   if (cat.includes(book)) {
  //     result = true;
  //   }
  //   i++;
  // }
  for (let i = 0; i < catalogue.length; i++) {
    const book = title.toLowerCase();
    const cat = catalogue[i].toLowerCase();
    if (cat.includes(book)) {
      result = true;
    }
  }
  return result;
}

function countBooksByKeyword(keyword) {
  if (!keyword) throw new Error("Please provide a keyword");
  let cont = 0;
  for (let i = 0; i < catalogue.length; i++) {
    const book = keyword.toLowerCase();
    const cat = catalogue[i].toLowerCase();
    if (cat.includes(book)) {
      cont++;
    }
  }
  return cont;
}

function getBooksByAuthor(author) {
  if (!author) throw new Error("Please provide an author");
  let count = [];
  for (let i = 0; i < catalogue.length; i++){
    if (catalogue[i].includes(author)){
      let cut = catalogue[i].indexOf(" by")
      count.push(catalogue[i].slice(0,cut));
    }
  }
  return count;
 }

function getStockCount(title) {
  if (!title) throw new Error("Please provide a title");
  let regExp = /\(([^)]+)\)/;
  let num;
  for (let i = 0; i < catalogue.length; i++) {
    const book = title.toLowerCase();
    const cat = catalogue[i].toLowerCase();
    if (cat.includes(book)) {
      num = regExp.exec(cat);
      let quantity = parseInt(num[1]);
      return quantity;
    }
  }
  return 0;
}

function stockReview(title) {
  if (!title) throw new Error("Please provide a title");
  let regExp = /\(([^)]+)\)/;
  let num;
  for (let i = 0; i < catalogue.length; i++) {
    const book = title.toLowerCase();
    const cat = catalogue[i].toLowerCase();
    if (cat.includes(book)) {
      num = regExp.exec(cat);
      let quantity = parseInt(num[1]);
      if(quantity > 10){
        return "High Stock";
      } else if (quantity <= 10 && quantity > 5){
        return "Medium Stock";
      } else if (quantity <= 5 && quantity > 0){
        return "Low Stock";
      } else {
        return "Not in Stock";
      }
      // switch(quantity){
      //   case (quantity > 10):
      //     return "High Strock";
      //   case quantity <= 10 && quantity > 5:
      //     return "Medium Stock";
      //   case quantity <= 5 && quantity > 0:
      //     return "Low Stock";
      //   default: 
      //     return "Not in Stock";
      // }
    }
  }
}

module.exports = {
  checkBook,
  countBooksByKeyword,
  getBooksByAuthor,
  getStockCount,
  stockReview
};
