let boxes=document.querySelectorAll("#box")
let reset=document.querySelector("#resbtn")
let win=document.getElementById("win")
let winmsg=document.getElementById("msg")
let newbtn=document.getElementById("newgame")

let turn = true

let winpattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

reset.addEventListener("click",()=>{
    boxes.forEach((box) => {
        box.innerText=""
    });
})

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn){
            box.innerText="X"
            turn=false
        }else{
            box.innerText="O"
            turn=true
        }
        box.disabled=true

        checkwinner()
    })
})

let winner=""
let checkwinner = () => {
    for(let pattern of winpattern){
        console.log(pattern[0],pattern[1],pattern[2])
            
        let pos1value = boxes[pattern[0]].innerText
        let pos2value = boxes[pattern[1]].innerText
        let pos3value = boxes[pattern[2]].innerText

        if(pos1value!="" && pos2value!="" && pos3value!=""){
            if(pos1value==pos2value && pos2value==pos3value){
                winner=pos1value
                showwinner()
            }
        }
    }
}
let showwinner = () => {
    
    win.style.display="block"
    winmsg.innerText=`Congratulations 🥳 Winner is ${winner}`
}

newbtn.addEventListener("click",()=>{
    boxes.forEach((box) => {
        box.innerText=""
    });
    win.style.display="none"
})