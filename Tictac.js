let cells = document.querySelectorAll('.cell');
let p=document.querySelector('.para');
let p1=document.querySelector('.turn');
cells = Array.from(cells);
let current='x'
let flag=0
let wincombinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function checkwinner()
{
    wincombinations.forEach(function(combo)
    {
         let check=combo.every(index=>cells[index].innerText.trim()==current)
         if(check)
         {
            
             highlight(combo)
             if(current=='x')
             {
               p.textContent="Player 1 wins"
               p1.textContent="Game ends"
               p.classList.add("bg");
               flag=1
               return
             }
             else
             {
               p.textContent="Player 2 wins"
               p1.textContent="Game ends"
               p.classList.add("bg");
               flag=1
               return
             }
         }
    });
}
function highlight(combo)
{
    combo.forEach(function(idx)
    {
        cells[idx].classList.add("highlight")
    })
}
cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
        if(cell.innerText.trim()!="")
        return
        cell.innerText=current
        checkwinner()
        if(flag==0)
        {
        if(current=='x')
        {
            p1.textContent="Player 1 turn"
        }
        else{
            p1.textContent="Player 2 turn"
        }
    }
        current=current=="x"?"o":"x"
    });
});
function restart()
{
   window.location.reload();
}