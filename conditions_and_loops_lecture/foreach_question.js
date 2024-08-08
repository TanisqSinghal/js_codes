function customforeach(arr,cb){
    for(let i = 1;i < arr.length ; i++ ){
        console.log("Element at",i, "is", arr[i]);
    }
}
customforeach([1,2,3,4,5],() => {});