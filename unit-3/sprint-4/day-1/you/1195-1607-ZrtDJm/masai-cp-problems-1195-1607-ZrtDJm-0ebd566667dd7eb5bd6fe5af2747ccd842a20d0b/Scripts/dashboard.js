sprint1=document.getElementById("sprint-1")
sprint2=document.getElementById("sprint-2")
sprint3=document.getElementById("sprint-3")
sprint4=document.getElementById("sprint-4")
// mainsection=document.getElementById("assignments")
corr=document.getElementById("course")
let gata=JSON.parse(localStorage.getItem("assignments"))||[]

window.addEventListener("load",function(){
    var lr=gata.filter((ele)=>{
        if(ele.course=="JS101"){
            return ele
        }
        else{
            return false
        }
    })
    display(lr)
})
  corr.addEventListener("change",function(){
    if(corr.value=="JS101"){
        var lr=gata.filter((ele)=>{
            if(ele.course=="JS101"){
                return ele
            }
            else{
                return false
            }
        })
        display(lr)
    }
    else if(corr.value=="WEB101"){
        var lr=gata.filter((ele)=>{
            if(ele.course=="WEB101"){
                return ele
            }
            else{
                return false
            }
        })
        display(lr)
    }
    else if(corr.value=="JS201"){
        var lr=gata.filter((ele)=>{
            if(ele.course=="JS201"){
                return ele
            }
            else{
                return false
            }
        })
        display(lr)
    }
    else if(corr.value=="RCT101"){
        var lr=gata.filter((ele)=>{
            if(ele.course=="RCT101"){
                return ele
            }
            else{
                return false
            }
        })
        display(lr)
    }
    else if(corr.value=="NxM101"){
        var lr=gata.filter((ele)=>{
            if(ele.course=="NxM101"){
                return ele
            }
            else{
                return false
            }
        })
        display(lr)
    }
    else if(corr.value=="DSA101"){
        var lr=gata.filter((ele)=>{
            if(ele.course=="DSA101"){
                return ele
            }
            else{
                return false
            }
        })
        display(lr)
    }
    else if(corr.value=="DSA201"){
        var lr=gata.filter((ele)=>{
            if(ele.course=="DSA201"){
                return ele
            }
            else{
                return false
            }
        })
        display(lr)
    }
    else if(corr.value=="DSA211"){
        var lr=gata.filter((ele)=>{
            if(ele.course=="DSA211"){
                return ele
            }
            else{
                return false
            }
        })
        display(lr)
    }
    else if(corr.value=="DSA301"){
        var lr=gata.filter((ele)=>{
            if(ele.course=="DSA301"){
                return ele
            }
            else{
                return false
            }
        })
        display(lr)
    }
    else if(corr.value=="DSA311"){
        var lr=gata.filter((ele)=>{
            if(ele.course=="DSA311"){
                return ele
            }
            else{
                return false
            }
        })
        display(lr)
    }

  })
      
   
   function display(data){
      sprint1.innerHTML=""
      sprint2.innerHTML=""
      sprint3.innerHTML=""
      sprint4.innerHTML=""
   
      
      for(let i=0;i<data.length;i++){
       if(data[i].course=="JS101"){
        if(data[i].sprint=="sprint-1" ) {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
             
             n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint ){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
            main.append(n,des,type,course,schd,sprint,btn)
            sprint1.append(main)
          } 
          else if(data[i].sprint=="sprint-2") {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
    
            n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
    
            main.append(n,des,type,course,schd,sprint,btn)
            sprint2.append(main)
          } 
         else if(data[i].sprint=="sprint-3") {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
          
            n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
    
            main.append(n,des,type,course,schd,sprint,btn)
            sprint3.append(main)
          } 
          else if(data[i].sprint=="sprint-4") {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
    
            n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
    
            main.append(n,des,type,course,schd,sprint,btn)
            sprint4.append(main)
          } 
       }
       else if(data[i].course=="WEB101"){
        if(data[i].sprint=="sprint-1" ) {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
             
             n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint ){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
            main.append(n,des,type,course,schd,sprint,btn)
            sprint1.append(main)
          } 
          else if(data[i].sprint=="sprint-2") {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
    
            n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
    
            main.append(n,des,type,course,schd,sprint,btn)
            sprint2.append(main)
          } 
         else if(data[i].sprint=="sprint-3") {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
          
            n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
    
            main.append(n,des,type,course,schd,sprint,btn)
            sprint3.append(main)
          } 
          else if(data[i].sprint=="sprint-4") {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
    
            n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
    
            main.append(n,des,type,course,schd,sprint,btn)
            sprint4.append(main)
          } 
       }
      else if(data[i].course=="JS201"){
        if(data[i].sprint=="sprint-1" ) {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
             
             n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint ){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
            main.append(n,des,type,course,schd,sprint,btn)
            sprint1.append(main)
          } 
          else if(data[i].sprint=="sprint-2") {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
    
            n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
    
            main.append(n,des,type,course,schd,sprint,btn)
            sprint2.append(main)
          } 
         else if(data[i].sprint=="sprint-3") {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
          
            n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
    
            main.append(n,des,type,course,schd,sprint,btn)
            sprint3.append(main)
          } 
          else if(data[i].sprint=="sprint-4") {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
    
            n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
    
            main.append(n,des,type,course,schd,sprint,btn)
            sprint4.append(main)
          } 
       }
       else if(data[i].course=="RCT101"){
        if(data[i].sprint=="sprint-1" ) {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
             
             n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint ){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
            main.append(n,des,type,course,schd,sprint,btn)
            sprint1.append(main)
          } 
          else if(data[i].sprint=="sprint-2") {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
    
            n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
    
            main.append(n,des,type,course,schd,sprint,btn)
            sprint2.append(main)
          } 
         else if(data[i].sprint=="sprint-3") {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
          
            n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
    
            main.append(n,des,type,course,schd,sprint,btn)
            sprint3.append(main)
          } 
          else if(data[i].sprint=="sprint-4") {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
    
            n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
    
            main.append(n,des,type,course,schd,sprint,btn)
            sprint4.append(main)
          } 
       }
      else if(data[i].course=="NxM101"){
        if(data[i].sprint=="sprint-1" ) {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
             
             n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint ){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
            main.append(n,des,type,course,schd,sprint,btn)
            sprint1.append(main)
          } 
          else if(data[i].sprint=="sprint-2") {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
    
            n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
    
            main.append(n,des,type,course,schd,sprint,btn)
            sprint2.append(main)
          } 
         else if(data[i].sprint=="sprint-3") {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
          
            n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
    
            main.append(n,des,type,course,schd,sprint,btn)
            sprint3.append(main)
          } 
          else if(data[i].sprint=="sprint-4") {
            main=document.createElement("div")
            n=document.createElement("h2")
            des=document.createElement("p")
            type=document.createElement("p")
            course=document.createElement("p")
            schd=document.createElement("p")
            sprint=document.createElement("p")
            btn=document.createElement("button")
    
            n.innerHTML=data[i].name
             des.innerHTML=data[i].desc
             type.innerHTML=data[i].type
             course.innerHTML=data[i].course
             schd.innerHTML=data[i].sechd
             sprint.innerHTML=data[i].sprint
             btn.innerHTML="Delete"
             
             btn.addEventListener("click",function(){
               let qr=gata.filter((ele)=>{
                 if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                    return false
                 }
                 else{
                    return true
                 }
               })
               localStorage.setItem("assignments",JSON.stringify(qr))
               gata=JSON.parse(localStorage.getItem("assignments"))||[]
               display(qr)
             })
    
            main.append(n,des,type,course,schd,sprint,btn)
            sprint4.append(main)
          } 
       }
        else if(data[i].course=="DSA101"){
            if(data[i].sprint=="sprint-1" ) {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
                 
                 n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint ){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
                main.append(n,des,type,course,schd,sprint,btn)
                sprint1.append(main)
              } 
              else if(data[i].sprint=="sprint-2") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
        
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint2.append(main)
              } 
             else if(data[i].sprint=="sprint-3") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
              
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint3.append(main)
              } 
              else if(data[i].sprint=="sprint-4") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
        
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint4.append(main)
              } 
           }
           else if(data[i].course=="DSA201"){
            if(data[i].sprint=="sprint-1" ) {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
                 
                 n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint ){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
                main.append(n,des,type,course,schd,sprint,btn)
                sprint1.append(main)
              } 
              else if(data[i].sprint=="sprint-2") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
        
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint2.append(main)
              } 
             else if(data[i].sprint=="sprint-3") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
              
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint3.append(main)
              } 
              else if(data[i].sprint=="sprint-4") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
        
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint4.append(main)
              } 
           }
          else if(data[i].course=="DSA301"){
            if(data[i].sprint=="sprint-1" ) {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
                 
                 n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint ){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
                main.append(n,des,type,course,schd,sprint,btn)
                sprint1.append(main)
              } 
              else if(data[i].sprint=="sprint-2") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
        
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint2.append(main)
              } 
             else if(data[i].sprint=="sprint-3") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
              
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint3.append(main)
              } 
              else if(data[i].sprint=="sprint-4") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
        
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint4.append(main)
              } 
           }
          else if(data[i].course=="DSA211"){
            if(data[i].sprint=="sprint-1" ) {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
                 
                 n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint ){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
                main.append(n,des,type,course,schd,sprint,btn)
                sprint1.append(main)
              } 
              else if(data[i].sprint=="sprint-2") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
        
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint2.append(main)
              } 
             else if(data[i].sprint=="sprint-3") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
              
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint3.append(main)
              } 
              else if(data[i].sprint=="sprint-4") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
        
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint4.append(main)
              } 
           }
          else if(data[i].course=="DSA301"){
            if(data[i].sprint=="sprint-1" ) {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
                 
                 n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint ){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
                main.append(n,des,type,course,schd,sprint,btn)
                sprint1.append(main)
              } 
              else if(data[i].sprint=="sprint-2") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
        
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint2.append(main)
              } 
             else if(data[i].sprint=="sprint-3") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
              
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint3.append(main)
              } 
              else if(data[i].sprint=="sprint-4") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
        
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint4.append(main)
              } 
           }
          else if(data[i].course=="DSA311"){
            if(data[i].sprint=="sprint-1" ) {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
                 
                 n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint ){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
                main.append(n,des,type,course,schd,sprint,btn)
                sprint1.append(main)
              } 
              else if(data[i].sprint=="sprint-2") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
        
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint2.append(main)
              } 
             else if(data[i].sprint=="sprint-3") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
              
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint3.append(main)
              } 
              else if(data[i].sprint=="sprint-4") {
                main=document.createElement("div")
                n=document.createElement("h2")
                des=document.createElement("p")
                type=document.createElement("p")
                course=document.createElement("p")
                schd=document.createElement("p")
                sprint=document.createElement("p")
                btn=document.createElement("button")
        
                n.innerHTML=data[i].name
                 des.innerHTML=data[i].desc
                 type.innerHTML=data[i].type
                 course.innerHTML=data[i].course
                 schd.innerHTML=data[i].sechd
                 sprint.innerHTML=data[i].sprint
                 btn.innerHTML="Delete"
                 
                 btn.addEventListener("click",function(){
                   let qr=gata.filter((ele)=>{
                     if(ele.name==data[i].name && ele.sprint==data[i].sprint){
                        return false
                     }
                     else{
                        return true
                     }
                   })
                   localStorage.setItem("assignments",JSON.stringify(qr))
                   gata=JSON.parse(localStorage.getItem("assignments"))||[]
                   display(qr)
                 })
        
                main.append(n,des,type,course,schd,sprint,btn)
                sprint4.append(main)
              } 
           }

      }
   }
