let container = document.querySelector(".container");
let btn = document.querySelector("button");
let num = 0

function getRandomColor(){
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}



function sketch(){
    
    
    if(num !== 0){
        location.reload()
    }
    else{
        num = prompt("Enter grid number")
        for(i=0; i<num; i++){
            if(num >99){
                alert("Grid number too high")
                break;
            }
            const con = document.createElement("div")
            con.classList.add("con");
    
            container.appendChild(con);
    
            for(let i=0;i<num;i++){
                const div = document.createElement("div");
                div.addEventListener("mouseover",()=>{
                    div.style.backgroundColor = getRandomColor();
                })
                div.addEventListener("mouseleave",()=>{
                    div.style.backgroundColor = "white"
                })
                div.classList.add("grid");
                con.appendChild(div);
                
            }
            
        }
    }
    
}

btn.addEventListener("click",sketch)
