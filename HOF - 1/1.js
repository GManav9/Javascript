let arr=[1,2,3,4,5];

 let data = arr.map((element,index)=>
{
    if(element%2==0)
    {
        return element;
    }
    else{
        return false;
    }
})

console.log(data);