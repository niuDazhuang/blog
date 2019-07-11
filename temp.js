var book = {
  title: "High Performance JavaScript",
  publisher: "Yahoo! Press"
};
alert(book.hasOwnProperty("title")); //true
alert(book.hasOwnProperty("toString")); //false
alert("title" in book); //true
alert("toString" in book); //true
