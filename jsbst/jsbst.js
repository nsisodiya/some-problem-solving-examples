//JavaScript Binary Search Tree


function BSTNode(key){
this._left = null;
this._right = null;
this._key = key;
}

BSTNode.prototype.isLeafNode = function () {
return this._left === null && this._right=== null;
};

BSTNode.prototype.smallerThen = function (node) {
return this.key() < node.key();
}

BSTNode.prototype.isEqual = function (node) {
return this.key() === node.key();
}

BSTNode.prototype.setLeft = function (node) {
this._left = node;
};
BSTNode.prototype.setRight = function (node) {
this._right = node;
};
BSTNode.prototype.left = function () {
return this._left;
};
BSTNode.prototype.right = function () {
return this._right;
};
BSTNode.prototype.key = function () {
return this._key;
};
BSTNode.prototype.hasLeft = function () {
return this._left !== null;
};
BSTNode.prototype.hasRight = function () {
return this._right !== null;
};

function BSTTree(){
this.head = null;
}
BSTTree.prototype.isTreeEmpty = function () {
return this.head === null
}

BSTTree.prototype.traverseFromNode = function (node, visit) {
//traverseFromNode
    if(node.hasLeft()){
        this.traverseFromNode(node.left(), visit);
    }
    visit(node);
    if(node.hasRight()){
        this.traverseFromNode(node.right(), visit);
    }
}
BSTTree.prototype.print = function () {
this.traverseFromNode(this.head, function (node) {
    console.log("Node - " + node.key());
});
};
BSTTree.prototype.print1 = function () {
console.log(JSON.stringify(this.head, null, 2));
};


BSTTree.prototype.insert = function (key) {
var X = new BSTNode(key);

if(this.isTreeEmpty()){
    this.head = X;
    return ;
}
var tmp = this.head;
var exitloop = false;

while(!exitloop){
    if(X.smallerThen(tmp)){
    if(tmp.hasLeft()){
        tmp = tmp.left();
    }else{
        tmp.setLeft(X);
        exitloop = true;
    }
    }else{
    if(tmp.hasRight()){
        tmp = tmp.right();
    }else{
        tmp.setRight(X);
        exitloop = true;
    }
    }
}
}

BSTTree.prototype.getHeight = function (node, height) {
    if(this.isTreeEmpty()){
        return 0;
    }
    if(node === undefined){
        node = this.head;
    }
    if(height === undefined){
        height = 0;
    }
    
    console.log("node ", node.key(),"height at this level is", height);
    height = height + 1;
    if(node.hasLeft()){
        var h1 = this.getHeight(node.left(), height);
    } else{
        var h1 = height;
    }
    if(node.hasRight()){
        var h2 = this.getHeight(node.right(), height);
    } else{
        var h2 = height;
    }
    console.log("h1, h2", h1, h2);
    if(h1>h2){
        return h1;
    }else{
        return h2;
    }    
}
BSTTree.prototype.find = function (key) {

var X = new BSTNode(key);

if(this.isTreeEmpty()){
    return ;
}

var tmp = this.head;
var exitloop = false;

while(!exitloop){
    if(tmp.isEqual(X)){
    return tmp;
    }
    if(X.smallerThen(tmp)){
    if(tmp.hasLeft()){
        tmp = tmp.left();
    }else{
        exitloop = true;
    }
    }else{
    if(tmp.hasRight()){
        tmp = tmp.right();
    }else{
        exitloop = true;
    }
    }
}
return null;

}
var BST = new BSTTree();

var a = [10, 15, 12, 11, 13];

a.map(function (v) {
BST.insert(v);
});

console.log("height ->",  BST.getHeight());
