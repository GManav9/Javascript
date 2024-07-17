let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  let data = arr.map((element,index)=>{
 
        if(primecheck(element)==true)
            {
                console.log(element);
            }  

  })
 

   function primecheck(number){
           let count = 0;

           for(let x=0;x<=number;x++)
           {
            if(number%x==0)
            {
                count ++;
            }
           }

        
         if(count==2)
           {
            return true;
           }

           else{
            return false;
           }
   }