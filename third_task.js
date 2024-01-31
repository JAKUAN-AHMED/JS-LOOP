/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/

let i=1;
while(i<=60)
{
    //console.log("I will invest at least 6 hrs every single day for next 60 days!");
    i++;
}

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
//first sub-task
for(let i=61;i<=100;i++)
{
    if(i%2!=0)
    {
        // console.log(i);
    }
}

//second-sub-task

for(let i=78;i<=98;i++)
{
    if(i%2==0)
    {
        //console.log(i);
    }
}




/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
let sum=0;
for(let i=91;i<=129;i++)
{
    if(i%2!=0)
    {
        sum+=i;
    }
}
//console.log(sum);

let result=0;
for(let i=51;i<=85;i++)
{
    if(i%2==0)
    {
        result+=i;
    }
}
//console.log(result);

/***

Generate a multiplication table for number 9

 */
for(let i=1;i<=10;i++)
{
    // console.log("9 X",i,'=',9*i);
}


function Timer()
{
    let count=100;
    const Interval=setInterval(function()
    {
        console.log(count);
        if(count==1)
        {
            clearInterval(Interval);
            console.log("Countdown completed");
        }
        count--;
    },100)

}


//start countDown
Timer();