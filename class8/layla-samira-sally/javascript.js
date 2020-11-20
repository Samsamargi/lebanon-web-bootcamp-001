/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
let p1 = document.querySelector("p");
p1.innerHTML = p1.innerText
  .split(' ')
  .map(word => word.length > 8 ? `<span style=" background-color: yellow;">${word}</span>` : word)
  .join(' ')
  .split('. ')
  .join('.<p></p>')
  .split('?')
  .join('🤔')
  .split('!')
  .join('😲'); 



/*
  Exercise 02
  -----------
  Add a link back to the source of the text (Source: https://forcemipsum.com/) after the paragraph tag.
*/
 

let foot=document.createElement("footer")
let body1=document.querySelector("body")
body1.appendChild(foot)
foot.innerHTML = '<a href="https://forcemipsum.com/">https://forcemipsum.com/</a>';
  
/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

 /*
  Exercise 04
 xt -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/


let nmb =p1.innerText.split(' ').length
let count=document.createElement("div")

count.innerText=`${nmb} words`;

document.body.insertBefore(count,p1)

 
 
 
 
 /*
 
 
 
 
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/