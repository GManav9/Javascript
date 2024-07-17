let arr=["a","b","c","d","e"];

 let data = arr.map((element,index)=>
{
      if(element=="b")
      {
       return "z";
      }
      else{
        return element;
      }
   
})

console.log(data);