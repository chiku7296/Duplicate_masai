function getData(data) {
    new Promise(function(reslove,reject){
        if(data%2==0){
         setTimeout(function(){
        
                reslove("even")
            
         },4000)
        }
        else if (data%2!==0){
            setTimeout(function(){
        
                reslove("odd")
            
         },2000)
        }
        else if(data!==Number){
            reject(error)
        }
    })
}

export default getData
