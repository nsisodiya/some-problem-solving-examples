console.log('a');
function BNSearch(arr, val, start, end) {
    if(start === undefined){
        start = 0;
        end = arr.length - 1; 
    }
    console.log("Start-End", start, "-", end);
    var diff = end - start;
    console.log("Sub Array Length", diff + 1);
    if(diff <= 1 ){
        console.log("arr[start]", arr[start]);
        if(arr[start] === val){
            return start;
        }else{
            if(arr[end] === val){
                return end;
            }else{
                return -1;
            }
        }
    }else{
        var mid = Math.floor((start + end)/2);
        console.log("l", mid, arr[mid]);
        var found;
        if(val < arr[mid]){
            console.log('fisrt part');
            found = BNSearch(arr, val, start, mid);
        } else {
            console.log('going secound');
            found = BNSearch(arr, val, mid, end);
        }
        return found;
    }
};
module.exports = BNSearch;