const input=document.getElementById("input")
const save =document.getElementById("save")
const clear = document.getElementById("clear")
const diplay=document.getElementById("display")

const error=document.getElementById("error")
let storege=JSON.parse(localStorage.getItem("users")) || []
save.addEventListener('click',function(){

    


        let name=input.value.trim()
    
        if(name===""){
            error.textContent="pleas enter user name"
            return
        }
        storege.push(name)
        localStorage.setItem("users",JSON.stringify(storege))
    
        diplay.textContent=storege
        handleMessage()
        input.value=""
    
})


function handleMessage(){
    diplay.textContent=""
    if(storege.length ===0)return

    storege.forEach(function(data,index){
        let p=document.createElement('p')
        let button=document.createElement('button')

        p.textContent=data
        button.textContent="delete"
        button.style.color="white"
        button.style.background="orangered"
        p.style.color="lightblue"
        button.addEventListener('click',function(){
        storege.splice(index,1)
        
            localStorage.setItem(
                "users",
                JSON.stringify(storege)
            );
        
        handleMessage()
    })


        diplay.appendChild(button)
        diplay.appendChild(p)
        
    })

    

}

handleMessage()