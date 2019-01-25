{

    console.log("*");
    console.log("**");
    console.log("***");
    console.log("****");
    console.log("*__");


}

console.log("_____________");

{
    let h = 10;
    let spaces = " ";
    let str = "";
    let star = "*";
    for(let i = 0; i < h; i++){
        str += star;
        console.log(str);
    }
    console.log("|____");

}

console.log("_____________");

{

    let lines = 4;
    let star, space;
    let stars, spaces;
    for (let j =1; j <= lines; j ++) {
        space = lines - j;
        spaces = '';
        for(let i=0; i < space; i++)
        {
            spaces += " ";
        }
        star = j * 2 -1;
        stars = '' ;
        for(let i=0; i < star; i++)
        {
            stars += "*";
        }
        console.log(spaces + stars);

    }
    console.log("___|___")

}