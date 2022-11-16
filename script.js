

let pendown=false;

function vert() {
    let div = document.createElement("div");
    div.setAttribute('class','main');
    for(let j=0;j<64;j++){
        let div1 = document.createElement("div");
        div1.setAttribute('class','Item');
        div1.addEventListener('mouseover',function (e) {
            if(pendown){
                e.target.style.backgroundColor="black";
            }
        }
    )
        
        div.appendChild(div1);
        div.addEventListener('mousedown',()=>{
            pendown=true;
        })
        div.addEventListener('mouseup',()=>{
            pendown=false;
        })
    }
    document.getElementById("Grid").appendChild(div);
}

for(let i=0;i<64;i++){
    vert();
}

