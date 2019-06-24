function f1(resolve){
    setTimeout(function(){
        console.log('i am here');
        resolve();
    },1000)
    
}

function f2(resolve){
    console.log('i am there');
    resolve();
}


var Something = function(callback, finalCallback){
    
    callback(function(){
        //Ok this is done,
        finalCallback();
    });
    

}

Something(f1, function(){console.log('got it')})
Something(f2, function(){console.log('got it 2')})

