function popup() {
    let main = document.querySelector("#main-container");
    let pop = document.querySelector(".popup-card");
    main.classList.toggle("active");
    pop.classList.toggle("active");
}

let flag;
function popup2(val2) {
    console.log(val2);
    if(val2!==false){
        flag=val2.parentNode.id;
    let main = document.querySelector("#main-container");
    let pop2 = document.querySelector(".popup-card2");
    main.classList.toggle("active");
    pop2.classList.toggle("active");
    }
    else{
    let main = document.querySelector("#main-container");
    let pop2 = document.querySelector(".popup-card2");
    main.classList.toggle("active");
    pop2.classList.toggle("active");
    }
}

let user = [];


function invalue() {
    let text = document.querySelector(".input").value;
    if(text !=="")
    {
        let r2= document.querySelector(".r2");
        let obj = {
            id: Date.now(),
            text: text
        }
        user.push(obj);
        r2.style.display="none";
        createCard();
    }
    else
    {
        // window.alert("Please Enter a valid input....");
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please Enter valid card name!',
          })
    }
    popup();
}


function createCard() {
    //  console.log(user);
    let box = document.querySelector("#dynamic-box");
    let card = document.createElement('div');
    card.setAttribute('class', 'dynamic-cards');
    for (let i = 0; i < user.length; i++) {
        card.setAttribute('id', user[i].id);
        card.innerHTML = `<p class="dt-1">${user[i].text}</p><hr>
                      <div class="tasks"></div><button onclick="Delete(this)" class="del-btn1"><i class="fas fa-trash-alt"></i></button><button onclick="popup2(this)" class="add-btn1"><i class="fas fa-plus-circle"></i></button>`;
        box.appendChild(card);
       
    }
    
}

function Delete(val){
       let rem= val.parentNode;
       const value = val.parentNode.id;
      for(let i=0; i<user.length;i++)
      {
          if(user[i].id===Number(value)){
              user.splice(i,1);
              break;
          }
      }
    rem.remove();
      if(user.length==0){
          let r2=document.querySelector(".r2");
          r2.style.display="block";
        }
        
}



function subtask(){
     let intext = document.querySelector(".input2").value;
     if(intext !== "")
     {
        let subtasks= document.querySelector("#dynamic-box").children;
        let innerdiv= document.createElement('div');
        innerdiv.setAttribute('class','innerdiv');
        for(let i=0;i<user.length;i++){
            let abc=subtasks[i];
            let bcd=abc.children[2];
            if(user[i].id===Number(flag)){
                innerdiv.innerHTML=`<span class="intext">${intext}</span><button onclick="markDone(this)" class="mark">Mark Done</button>`;
                bcd.appendChild(innerdiv);
            }
        }
     }
     else
     {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please Enter valid item name!',
          })
     }
   popup2(false);
}


function markDone(params) {
    let val = params.parentNode.children;
    let text = val[0];
    let butt = val[1];
    let id = params.parentNode.parentNode.parentNode.id;
    for(let i=0; i<user.length;i++)
    {
        if(user[i].id === Number(id))
        {
            butt.style.display="none";
            text.style.color = "orangered";
            text.style.textDecoration = "line-through";
            text.style.textDecorationColor="orangered";
            break;
        }
    }
}