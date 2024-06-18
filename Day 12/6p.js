for(let row=1;row<=5;row++)
    {
        let a=""
        for(let col=1;col<=5;col++)
            {
                if(row==1 || col==5 || row==5 || col==1 || row==col || row+col==5+1)
                    {
                        a+="*"
                    }
                    else{
                        a+=" "
                    }
            }
            console.log(a);
    }