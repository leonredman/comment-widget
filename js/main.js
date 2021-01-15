
const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
// const inpValue = document.getElementById("bodyText");
const  lsOutput = document.getElementById("lsOutput");
const btnInsert = document.getElementById("btnInsert");
//const image = "<img src="images/avatar-placeholder.png">"

//on submit add comments to screen
btnInsert.onclick = function () {

    const key = inpKey.value;
    const value = inpValue.value;
    console.log(key);
    console.log(value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }

};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    //lsOutput.innerHTML += "<div class='leftPanelImg'><img src=\"images/avatar-placeholder.png\"></div><div class='rightPanelText' id='lsOutput'><i class='fa fa-heart-o like'></i><i class='fa fa-trash delete'></i>"+ key + "  " + " " +value+"</div>";
    lsOutput.innerHTML += `<div class='leftPanelImg'><img src=\"images/avatar-placeholder.png\"></div><div class='rightPanelText' id='lsOutput'><i class='fa fa-heart-o like'></i><i class='fa fa-trash delete'></i>" ${key}: ${value} "</div>"`;
    
    //lsOutput.innerHTML += "<div class='leftPanelImg'><img src=\"images/avatar-placeholder.png\"></div>' `${key}: ${value}<br />`;
  
  
    //lsOutput.innerHTML ="<div class='leftPanelImg'><img src='images/avatar-placeholder.png'></div><div class='rightPanelText'><span>" `${key}: ${value}<br />`;
    // lsOutput.innerHTML +='<img src="images/avatar-placeholder.png">' `${key}: ${value}<br />`;
    // lsOutput.innerHTML += `${image} ${key}: ${value}<br />`;

}
//comment widget challenge in ES6
//check if browser supports local storage
// if (window.localstorage) {
//inputs stored as variables
    // var comment = document.getElementById('input1');
//check if storage object has a value
    // comment.value = localStorage.getItem('input1');
//each input event fire will save data to local storage
//     comment.addEventListener('input', function(){
//         localStorage.setItem(comment.value)
//     })
// }


//build widget that uses local Storage

//user can type in comments and post them to the screen and local Storage so data persists

//on submit of  input.val  save text to local storage


//users can click "like icon"  of dislike icon for each comment and see total likes and dislikes
// user can reply to  comments
//user can also reply to a reply of a comment and system will nest comments















// let comment = [
//     {
//         "name": "Kanye West",
//         "date": "10 Nov, 2020",
//         "body": "This is comment 1"
//     },
//     {
//         "name": "Mike Jones ",
//         "date": "1 Nov, 2020",
//         "body": "This is comment 2"
//     },
//     {
//         "name": "Dame Dash",
//         "date": "9 Nov, 2020",
//         "body": "This is comment 3"
//     },
//     {
//         "name": "Memphis Bleek",
//         "date": "8 Nov, 2020",
//         "body": "This is comment 3"
//     },
// ];

// for (let i=0; i<comment.length; i++) {
//     let html ="<div class='container'><div class='single-comment'><div class='comment-box'><div class='leftPanelImg'><img src='images/avatar-placeholder.png'></div><div class='rightPanelText'><span>"+ comment[i].name +"</span><div class='date'>"+ comment[i].date +"</div><p>"+ comment[i].body +"</p></div></div></div></div>";

// need to update html dynamically with javascript can use jquery as the following 
//$('#container').append(html);
//but we want to us vanilla javascript
// function comment () {
//     getElementById('container').innerHTML = html;

// };
// comment()

// };