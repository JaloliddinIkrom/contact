   
//    const prtop = prompt("ixtiyoriy matin kirting");  

//    let elFun = function(item){ 

//     let str = ""; 

//     for (let i = item.length -1; i >= 0; i--) {
        
//         str += item[i];
//     };
//         return str;
//    } 

//    console.log(elFun(prtop)); 


// =========================================contact===================================

let elForm = document.querySelector(".js-form"); 
let elInp1 = document.querySelector(".js-input1"); 
let elInp2 = document.querySelector(".js-input2"); 
let elInp3 = document.querySelector(".js-input3"); 
let elList = document.querySelector(".form-List");


let newArry = []; 
let arry = [];


const contact = (newitem, news) =>{

   news.innerHTML = "";
    
   newitem.forEach((item) =>{ 
     

     let newItem = document.createElement("li");
     let newTitle = document.createElement("h3");
     let newFamly = document.createElement("h3");
     let newTel = document.createElement("a");
     let newBtn = document.createElement("button");
    
    
      
     newItem.classList.add("newItem")
     newTitle.classList.add("newTitle");
     newFamly.classList.add("newFamliy");
     newTel.classList.add("newTel"); 
     newBtn.classList.add("newBtn");
     
     newTel.href = `tel: ${item.userPhone}`;


     newTitle.textContent = item.name;
     newFamly.textContent = item.userName;
     newTel.textContent = item.userPhone; 
     newBtn.textContent = "DALETE";
     newBtn.dataset.daletId = item.id;
     newBtn.type = 'submit'; 


     newItem.append(newTitle, newFamly, newTel, newBtn);
     elList.appendChild(newItem);

   });
}


elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
  
    let elInp1Val = elInp1.value.trim(); 
    let elInp2Val = elInp2.value.trim();  
    let elInp3Val = elInp3.value.trim();
      
    let newIndex = arry.findIndex((item) => item.userPhone == elInp3Val);
     
    if(newIndex >= 0){ 

        alert("Bu raqam oldin ham kiritgansiz boshqa raqam kiriting..");
    }else{ 
        
    
        elInp1.value = "";
        elInp2.value = "";
        elInp3.value = "";
        arry.push({

              id: arry.length +1,
              name: elInp1Val, 
              userName: elInp2Val,
              userPhone: elInp3Val,
            });
    }
       
    contact(arry, elList);
    newArry.push(elInp3Val);
});

// ===================================================================================
elList.addEventListener('click', function(evt){ 

    if(evt.target.matches('.newBtn')){ 
     
        let userT = evt.target.dataset.daleteId;
        let dataUsers = arry.findIndex((num) => num.id == userT);
         
        arry.splice(dataUsers, 1);
        contact(arry, elList); 

    };
}); 

 

