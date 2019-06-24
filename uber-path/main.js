console.clear();

function Node(val){
    this.val = val;
    this.childs = [];
}
Node.prototype.add = function(N){
    this.childs.push(N);
}
function generateGraph() {
    var N = [];
    for(var i=1; i<=16 ; i++){
        N[i] = new Node(i);
    }
    
    N[1].add(N[2]);
    N[1].add(N[5]);
    
    N[2].add(N[1]);
    N[2].add(N[3]);
    N[2].add(N[5]);
    N[2].add(N[7]);
    
    N[3].add(N[2]);
    N[3].add(N[4]);
    N[3].add(N[8]);
    
    N[4].add(N[3]);
    N[4].add(N[8]);

    N[5].add(N[1]);
    N[5].add(N[2]);
    N[5].add(N[9]);
    N[5].add(N[10]);

    N[7].add(N[2]);
    N[7].add(N[10]);

    N[8].add(N[4]);
    N[8].add(N[12]);

    N[9].add(N[5]);
    N[9].add(N[14]);
    N[9].add(N[13]);

    N[10].add(N[5]);
    N[10].add(N[7]);
    N[10].add(N[15]);

    N[12].add(N[8]);
    N[12].add(N[15]);
    N[12].add(N[16]);

    N[13].add(N[9]);
    N[13].add(N[14]);


    N[14].add(N[13]);
    N[14].add(N[9]);
    N[14].add(N[15]);

    N[15].add(N[10]);
    N[15].add(N[12]);
    N[15].add(N[14]);
    N[15].add(N[16]);

    N[16].add(N[12]);
    N[16].add(N[15]);
    
    return N;
        
}

var N = generateGraph();
var RootNode = N[1];

function clone(A) {
    return JSON.parse(JSON.stringify(A));
}
var validPaths = [];
function traverse(node, path) {
    if(node === undefined){
        node = RootNode;
    }
    if(path === undefined){
        path = [];
    }
    path.push(node.val);
    console.log("Current Path", path);
    if(node.val === 16){
        console.log("Found Valid", path);
        validPaths.push(clone(path));
        return ;
    }
    node.childs.forEach(x => {
        if(path.indexOf(x.val) === -1){
            var newPath = clone(path);
            traverse(x, newPath);
        }
    });
}
var pp = traverse();
console.log("validPaths");
console.log(validPaths);