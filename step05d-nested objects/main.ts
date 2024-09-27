type Author ={
    firstName:string,
    secondName:string,
};

type book = {
    Author: Author,
    name:string,
    noOfPages:number,
};

let myBook: book = {
    Author:{
        firstName:"William",
        secondName:"Shakespear",
    },
    name:"Romeo and Juliet",
    noOfPages:435,
}
console.log(myBook.Author.firstName);
console.log(myBook.Author["secondName"]);
console.log(myBook.name);
console.log(myBook["noOfPages"]);
