
function XYZ(callack){
    this.allCallback = [];
    var self = this;
    this.state = "PENDING";
    callack(function(data){
        self.state = "RESOLVED";
        console.log("execting resolve");
        //When resolve comes, execute all Callbacks.
        self.allCallback.forEach(f => {
            f(data);
        });
    }, function (params) {
        //this is reject callback;
        self.state = "RESOLVED";
    })
}
XYZ.prototype.then = function(f){

    this.allCallback.push(f);
};

//////
var p1 = new XYZ(function(resolve, reject){
    setTimeout(function(){
        resolve("working")
    }, 3000);
});
console.log("aaa");
p1.then(function(data){
    console.log("this is ", data);
})
p1.then(function(data){
    console.log("this should also be ", data);
});
//p1.resolve("super-working");
setTimeout(function(){
    p1.then(function(data){
        console.log("I am a latecomer ", data);
    })
}, 5000);