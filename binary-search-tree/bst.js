function Node(key, data) {
    this.key = key;
    this.value =  data;

    //please don't rename left, right, key, value and root properties
    this._left = null;
    this._right = null;
    this._parent = null;
}

function insert(current, key, value) {
    if (current === null) return new Node(key, value);
    if (key > current.key) {
        current._right = insert(current._right, key, value);
    } else if (key < current.key) {
        current._left = insert(current._left, key, value);
    } else {
        current.value = value;
    }
    return current;
}

function BinarySearchTree() {
    this._root = null;
    this.size =0;

    this.root = function(){
        return this._root.value;
    };
    this.insert = function(key, value){
        if (key == null || value == null) {
            throw new Error("argument is error");
        }
        this._root = insert(this._root, key, value);
        this.size++;
        return this;
    };

    this.search = function(key){
        var x = this._root;

        while(x != null){
            if(x.key == key){
                return x.value;
            }
            if(key < x.key){
                x = x._left;
            }
            else{
                x = x._right;
            }
        }
    };
    this.find = function(key){
        var x = this._root;

        while(x != null){
            if(x.key == key){
                return x;
            }
            if(key < x.key){
                x = x._left;
            }
            else{
                x = x._right;
            }
        }
    };
    
   this.delete = function (key) {
       
   };
    this.contains= function(value){

    };
    this.traverse= function(order){

    };
    this.verify = function () {
        return true;
    };
}

// You can comment this block for testing in the browser but final solution MUST contains this module.exports code
module.exports = {
    BinarySearchTree,
    student: 'Noblesse4Razor'
};