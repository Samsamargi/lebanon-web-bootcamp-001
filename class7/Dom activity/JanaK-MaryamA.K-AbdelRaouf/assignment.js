// step 1: change the text inside h1 into "Hello there!"
document.querySelector("h1").innerText = "Hello there!";

// step 2: add the class "small-txt" to all h2 elements
document.querySelector('h2').className = "small-txt";

// step 3: grab the container div and append a form with 1 text input and 1 submit input to it using innerHTML
document.querySelector("div").innerHTML = ' <form><input type="text" placeholder="Name"><input type="button" value="add" onclick="addMembers()"></form>';
// step 4: change the style of the added text input to have 100% width;
document.querySelector("input").style.width = "100%";

// step 5: create an array with the team members names in it
let team = ["JanaK", "Maryam", "Raouf"]

// step 6: append a footer element to the body with a signature that says "Implement with love by: " and put each item in the array in here separated by a comma
let element = document.createElement("footer");
element.innerHTML = `Implement with love by: ${team.join(', ')} `
document.querySelector("body").appendChild(element);

function addMembers() 
{
  if (document.querySelector("input").value != '') 
  {
    team.push(document.querySelector("input").value);
    document.querySelector("footer").innerHTML += `, ${document.querySelector("input").value} `;
    document.querySelector("input").value='';
  }
  else { alert("input member name"); }
}
