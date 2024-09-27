var myBook = {
    Author: {
        firstName: "William",
        secondName: "Shakespear",
    },
    name: "Romeo and Juliet",
    noOfPages: 435,
};
console.log(myBook.Author.firstName);
console.log(myBook.Author["secondName"]);
console.log(myBook.name);
console.log(myBook["noOfPages"]);
