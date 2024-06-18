let first=0;
let second=1;
let next;

 console.log(first);
 console.log(second);

 for(i=1;i<=8;i++)
    {
        next=first+second;
          first=second;
          second=next;

          console.log(next);
    }