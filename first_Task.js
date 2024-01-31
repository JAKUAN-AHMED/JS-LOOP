/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

//first one
/*let i=1;
while(i<=200)
{
    if(i==100)
    {
        break;
    }
    console.log(i);
    i++;

}*/

//second one

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
/*
let num = 1;
let sum = 0;

while (sum + num < 100) {
   sum += num;
   num++;
   console.log('sum: ', sum);
}

console.log(sum);
*/

//third one
/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/


for (let i = 1; i <= 100; i++)
{
    // Check if the current number is a perfect square
    if (Math.sqrt(i) % 1 === 0) {
        console.log(`First square number encountered: ${i}`);
        break;
    }

    console.log(i);
}
