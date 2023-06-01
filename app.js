//generate dynamic Html pages 
const div2 = document.createElement("div");
const grids = div2.setAttribute("class", "grid");
document.body.appendChild(div2);

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
        div3.addEventListener('click', function(){onClick(div3)});
    }
}

function onClick(elm)
{
    if(elm.className === 'square mole')
    {
        elm.removeAttribute("class");
        elm.setAttribute("class", "square");
        mole();
    }
    else
    {
        //todo :
    }
}

function mole()
{
    let random = Math.floor(Math.random() * 9);
    const elem = document.getElementById(random);
    elem.setAttribute("class","square mole");
}


