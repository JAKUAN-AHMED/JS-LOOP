/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

/*for(let num=1;num<=40;num++)
{
    if(num%2!=0)
    {
        continue;
    }
    else{
        console.log("even: ",num);
    }
}
*/

/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
for(let i=55;i<=85;i++)
{
    if(i%2!=0 && i%5!=0)
    {
        console.log(i);
    }
    else
    {
        continue;
    }
}