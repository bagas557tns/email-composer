console.log('hi');

var rules = {
    'S': [
        ['Yesterday, while',' was browsing Sololearn and ', 'V1', ', ', 'MC', ' noticed that ', 'RV', ' posted a new ',  'N1', ' about ', 'N2', '. He ', 'V2', ' it and challenged him to a ', 'N3', ' battle. Then he posted his own ', 'ADJ', ' ', 'N1', ', but ', 'RV', ' retaliated with his ', 'ADJ2', ' ', 'N1', ' about ', 'N2', '.'],
        ['Today, while browsing Sololearn and ', 'V1', ', ', 'MC', ' noticed that ', 'RV', ' posted a new ',  'N1', ' about ', 'N2', '. He ', 'V2', ' it and challenged him to a ', 'N3', ' battle. Then he posted his own ', 'ADJ', ' ', 'N1', ', but ', 'RV', ' retaliated with his ', 'ADJ2', ' ', 'N1', ' about ', 'N2', '.']

    ],
    'N1': [
        ['question'],
        ['code'],
        ['comment']
    ],
    'N2': [
        ['penguins'],
        ['programmer jokes'],
        ['text generation'],
        ['another amazing fireworks'],
        ['maze generation'],
        ['finding your partner'],
        ['rating your waifu']
    ],
    'N3': [
        ['C#'],
        ['C++'],
        ['Python'],
        ['Javascript'],
        ['Java'],
        ['sword'],
        ['magic'],
        ['pillow'],
        ['code']
    ],
    'V1': [
        
    ],
    'V2': [
        ['liked'],
        ['disliked'],
        ['reported'],
        ['deleted']
    ],
    'ADJ': [
        
    ],
    'ADJ2': [
        
    ],
    'MC': [
        
    ],
    'RV': [
        
    ]
};

function generate(token, current_result) {
    if (rules[token]) {
        var index = Math.floor(Math.random() * rules[token].length);
        var chosen = rules[token][index];
        for (var i=0; i<chosen.length; i++) {
            generate(chosen[i], current_result);
        }
    } else {
        current_result.push(token);
    }
    return current_result.join("");
}

function start() {
    var check = document.getElementById('check');
    var to_fill = ['MC', 'RV', 'V1', 'ADJ', 'ADJ2'];
    var c_name = 'inputs';
    if (check.checked) {
        to_fill = ['V1', 'ADJ', 'ADJ2'];
        var sl_users = ['Nikolay Nachev', 'luka', 'ValentinHacker', 'Hatsy Rei', 'Ace', 'Agus Mei', 'washika'];
        rules['MC'] = rules['MC'].concat(sl_users);
        rules['RV'] = rules['RV'].concat(sl_users);
        c_name = 'inputs2';
    } else {
        to_fill = ['V1', 'ADJ', 'ADJ2'];
        rules['MC'] = [];
        rules['RV'] = [];
    }
    var inputs = document.getElementsByClassName(c_name);
    for (var i=0; i<inputs.length; i++) {
        rules[to_fill[i]].push(inputs[i].value);
    }

    var token = 'S';
    var current_result = [];
    var result = generate(token, current_result);
    var p = document.getElementById('res');
    p.innerHTML = result;
}

function check_handler() {
    var mc = document.getElementsByClassName('mc')[0];
    var rv = document.getElementsByClassName('rv')[0];
    if (this.checked) {
        mc.disabled = true;
        rv.disabled = true;
    } else {
        mc.disabled = false;
        rv.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('gen');
    btn.addEventListener('click', start);
    var check = document.getElementById('check');
    check.addEventListener('change', check_handler);
});



const emojis = ["😀", "😃", "😄", "😁", "😆", "😊", "😍", "🤩", "😎", "🥳", "🤗", "😜", "😉"];

// Function to insert random emojis between words
function insertRandomEmojis() {
  const paragraph = document.getElementById("res");
  const words = paragraph.innerText.split(" ");
  const newParagraph = words.map(word => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const emoji = emojis[randomIndex];
    return word + " " + emoji;
  }).join(" ");
  paragraph.innerText = newParagraph;
}

// Function to increase the number of emojis
function increaseEmojis() {
  emojis.push("🤪", "🥰", "😘", "😇", "😂", "🤣");
  insertRandomEmojis();
}

// Function to reset the paragraph
function resetParagraph() {
  const paragraph = document.getElementById("res");
  paragraph.innerText = " ";
  var input1 = document.getElementById('v1');
  var input2 = document.getElementById('adj');
  var input3 = document.getElementById('adj2');
  var input4 = document.getElementById('check');
  input1.value = '';
  input2.value = '';
  input3.value = '';
  input4.checked = false;
}



$(document).ready(function(){
    var count = 0 ;
    $(".emoji-btn").click(function(){
        count+=1;
        if (count==5)        
             alert("Site will crash if you keep clicking. Stop!!");
    });
});


    // function generateStory() {
    //   var character = document.getElementById("character").value;
    //   var setting = document.getElementById("setting").value;
    //   var action = document.getElementById("action").value;

    //   var story = "Once upon a time, there was a " + character + " who lived in " + setting + ". One day, they decided to " + action + ". The end.";

    //   document.getElementById("storyResult").textContent = story;
    // }


// //using randomly generated strings and concatenating 

// let array = ["Hey", "there", "how", "are", "you"];
// let sentence = ["What do you mean", "Who is that"]
// let random1 = array[Math.floor(Math.random() * array.length)];
// let random2 = array[Math.floor(Math.random() * array.length)];
// let random3 = sentence[Math.floor(Math.random() * sentence.length)];
// console.log(`${random3}, ${random1}!`);

// window.onload = () =>{
// var concTest = document.getElementById("conc-test");
// concTest.textContent = `${random3}, ${random1}!`;
// }