let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };
let a=""
for(key in book){
  a+=key+": "+book[key]+" "
}
console.log(a)
