//generate dynamic Html pages 


// const body1 = document.getElementsByTagName("body");
const div2 = document.createElement("div");
const grids = div2.setAttribute("class", "grid");
// div2.appendChild(grids);
document.body.appendChild(div2);
// const div1 = document.createElement("p");
// div1.innerHTML = "Hello world ";
// div1.addEventListener("click",  function(){
//     if(this.innerHTML === "Hello Hello")
//         this.innerHTML= "Hello World";
//     else
//         this.innerHTML= "Hello Hello";
//     alert('Hello');


// }, true);

// document.body.appendChild(div1);
// console.log("123");
// const number = 9;
createBoard(9)  //used to create board 
const Allsquare = document.querySelectorAll('.square');
mole();


function createBoard(number)
{
    for(i = 0 ;i< number; i++)
    {
        const div3 = document.createElement("div")
        div3.setAttribute("class", "square");
        div3.setAttribute("id", i);
        document.querySelector('.grid').appendChild(div3);
    }
}
function onClickMole(id)
{
    console.log(id)

    id.removeAttribute("class");
    id.setAttribute("class", "square");
    id.removeEventListener("click", function(){})
    mole();
    // clear();

}
// function clear(){
//     const a = document.querySelectorAll('.square mole')
//     // alert(a.length)
//     for(b = 0 ;b<a.length-1; b++)
//     {
//         a[b].removeAttribute("class")
//         a[b].removeEventListener("click",function(){})
//     }
// }
function mole()
{
    let random = Math.floor(Math.random() * Allsquare.length);
    console.log(random);
    const elem = document.getElementById(random);
    elem.setAttribute("class","square mole");
    elem.addEventListener('click', function(){onClickMole(elem)});
}


