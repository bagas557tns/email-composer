// setting up arrays for selection-based context (sentence)
const sentenceOutput = document.getElementById('sentence-output');
const sampleOutput = document.getElementById('sample-output');


const nice = ['Hi Beautiful:', 'Heyyy..', 'Hey There 👋', 'hey :), i just wanted u to kno,', 'Hiiiii', 'Good Morning!'];
const loud = ['HEY YOU', 'AYYYY', '!! HEY !!', 'Its time to get UP!', 'OMGGGG', '!!ATTENTION!!', 'DID YOU HEAR', 'LISTEN UPP'];
const random = ['Bonjour...', 'Get your money UP player,', 'You know what time it is…', 'um im like hey, what’s up, hello', 'Guess what?..', 'Welllll'];

const positiveTone = ['You’re LOVED 💓💗❣️BY SOME 🌞GOOD 🌸FOLKS. ', 'If we are together 👫💏 We gon act silly 😜😋 ', ' 🎀........Something will make u really happy today😃 ', 'U r one of my most 🙌loyal 💪👏friends 👯 ', '👀🌟 It is of utmost 🔝 importance that 👥 as 🅰️ society 🚶‍♂️🚶‍♀️we transcend 🚀 our differences 🎭 '];
const negativeTone = ['U jinxed urself yesterday without knowing it😱 ', 'PLANET 🌌🌌 EARTH 🌎 IS 🈶🅰 IN 🕕 DANGER OF 👬 BEING 😑📈 RAVAGED BY 😈🏳 GLOBAL WARMING ', 'I 👀 heard you👂👂 were talking 👄👄👄shit💩💩💩and I want you 👆👆 to know that I 👀 do not care 💁💁 '];
const generalTone = ['DON’T BREAK THE CHAIN ', 'the 🔎🔎 government 🔭📝 might lie 😶🚫 2 you 👆🏼 about ufos 👽🚀 but i 👋🏼👋🏼 would never 🙅🏼😡 lie 2⃣ you! ', 'I will 🙅🚫❌ never trick🎭 you! ', 'Time ⁉️ to GET 🉐✊ THE 🐩 DAWGS 🐶OUT ', "We 🌿 must 💪😩 look 👀👄👀 inward and ask 🙋😩 ourselves if what 😦😦😦 we 👦🌊 search 🔍 is truly ⚡ something 😅 we 🚟🚟 want. "];

const pronouns = ['its ', 'it is ', '...looks like it is ', 'ITS '];

// setting up recursive grammer for text input-based request (sample)
let rules = {
    "M":[
      ["ACT1","P", " people ", "PREP", "T", " ", "CON" ], 
      // ["ACT2", "T","ACT2", "P"," people", "CON2" ]
    ],
    "P":[],
    "ACT1":[
      ["Send this to "], 
      ["Make sure you share this with "],     
      ["Send this message to "],
      ["Share this with "],
      ["Try to send this to "],
      ["U must forward this to "],
      ["You have to send this to "],
      ["SEND THIS TO "],
      ["PLEASE share with "],
      ["Forward this message to "], 
      ["Deliver this to a total of "],
      ["Make sure to send this to "],
      ["Please pass this along to "],
      ["Now u have to send this to "],
      ["FORWARD THIS TO "]
    ],
    "PREP":[
      ["within "], 
      ["in "],
      ["under "], 
      ["in under "]
    ],
    "T":[],
    "CON":[
      ["or BIG BROTHER will get you.."], 
      ["or get all D's on your report card!!"],
      ["or be cursed with uns*xyness for 10 YEARS."],
      ["or ur crush stops texting u back."],
      ["OR YOU'RE NOT A REAL ONE."], 
      ["or get ur heart broken.."], 
      ["or have bad luck 4 life."], 
      ["or GET STOOD UP AT UR NEXT DATE."], 
      ["or else all your friends will hate u."], 
      ["or stay a loser..."], 
      ["otherwise u will fight with ur best friend.."],
      ['or else you will lose a lot of $$$!'] 
    ]
 };

    function generateSentence() {
      const selectGreeting = document.getElementById('greetingSelect');
      const selectTone = document.getElementById('toneSelect');
      const typeTime = document.getElementById('timeType');
      const selectedOption1 = selectGreeting.value
      const selectedOption2 = selectTone.value;
      let greeting;
      let tone;
      let pronoun;
      let time = typeTime.value;

      switch (selectedOption1) {
        case 'nice':
          greeting = nice[Math.floor(Math.random() * nice.length)];
          break;
        case 'loud':
          greeting = loud[Math.floor(Math.random() * loud.length)];
          break;
        case 'random':
          greeting = random[Math.floor(Math.random() * random.length)];
          break;
      }

      switch (selectedOption2) {
        case 'positive':
          tone = positiveTone[Math.floor(Math.random() * positiveTone.length)];
          break;
        case 'negative':
          tone = negativeTone[Math.floor(Math.random() * negativeTone.length)];
          break;
        case 'general':
          tone = generalTone[Math.floor(Math.random() * generalTone.length)];
          break;
      }

      pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];

      const sentenceOutput = document.getElementById('sentence-output');
      sentenceOutput.innerHTML = greeting + " " + pronoun + " " + time + "." + " " + tone;
}

document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('gen');
    btn.addEventListener('click', generateSentence);
});


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
    var to_fill = ['P', 'T'];
    var c_name = 'inputs';
    var inputs = document.getElementsByClassName(c_name);
    for (var i=0; i<inputs.length; i++) {
        rules[to_fill[i]].push(inputs[i].value);
    }
    var token = 'M';
    var current_result = [];
    var result = generate(token, current_result);
    sentenceOutput.insertAdjacentHTML('beforeend', result);
}

document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('gen');
    btn.addEventListener('click', start);
});



// EMOJI SCRIPT //

const emojis = [
  '💋', '👩🏼', '💅🏼', '😍', '🔥', '💛', '💵','💰','💲', '👸','💆‍♀️', '😊','😍','🔥','💃', '🏡😲', '💸💎', '🚫🚫', '❗️❗'
]

function insertRandomEmojis() {
  const words = sentenceOutput.innerText.split(' ');
  for (var i = 1; i < words.length; i++) {
    var bin = Math.floor(Math.random() * 2);
    if (bin === 1) {
      var number = Math.floor(Math.random() * 3);
      for (var j = 0; j < number; j++) {
        var randomEmoji = Math.floor(Math.random() * emojis.length); 
        words[i] = words[i] + ' ' + emojis[randomEmoji];
      }
    }
  }
  const newParagraph = words.join(" ");
  sentenceOutput.innerText = newParagraph;
}

function increaseEmojis() {
  emojis.push('👇', '😱', '🤩', '🎁', '📝', '🤑💰',  '💸💎', '🚫🚫', '❗️❗', '🔟🔟🔟', '💥💥💥💥', '👽🛸', '👉🤷‍♀️👈 ', '🥴🥴🥴', '✋✋', '🔛 🔛🔛', '🙈🙆‍♂️', '💲💹💹🏧', '🚨🚨🚨', '👄', '⏩💕');
  insertRandomEmojis();
}


  let text = sentenceOutput;
  const copyOutput = async() => {
    try {
      await 
  navigator.clipboard.writeText(text.value);
    } catch (err) {
      console.error('Failed to copy');
    }
  }


// Reset and log generated output
function resetParagraph() {

const node = document.getElementById('sentence-output');
const clone = node.cloneNode(true);
document.getElementById('text-output2').appendChild(clone);

  sentenceOutput.innerText = " ";
  var newGreeting = document.getElementById('greetingSelect')
  var newPerson = document.getElementById('person');
  var newDeadline = document.getElementById('deadline');
  var newOccasion = document.getElementById('timeType');
  var newTone = document.getElementById('toneSelect');
  newPerson.value = "";
  newDeadline.value = "";
  newOccasion.value = "";
  newGreeting.value = 'open';
  newTone.value = 'open';

}

document.addEventListener('DOMContentLoaded', function(){
    var resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', resetParagraph);
});




// function addBlock() {
// const source = document.getElementById('text-output');
// const innerTextOutput = document.getElementById('text-output2');
// innerTextOutput.value = source.innerText;
// }


  // $(function () {
 //        $(".controls").draggable({            
 //            stack: ".controls"
 //        });
 //    });

 // $(function () {
 //        $("#text-output").draggable({            
 //            stack: "#text-output"
 //        });
 //    });

  $(function () {
        $(".container").draggable({            
            stack: ".container"
        });
    });

// function addBlock() {
// const node = document.getElementById('text-output');
// const clone = node.cloneNode(true);
// const newBlock = document.createElement('div');
// newBlock.setAttribute('id', 'newBlock');
// newBlock.appendChild(clone);
// }

  // const words2 = sampleOutput.innerText.split(' ');
  // for (var k = 1; k < words2.length; k++) {
  //   var bin2 = Math.floor(Math.random() * 2);
  //   if (bin2 === 1) {
  //     var number2 = Math.floor(Math.random() * 3);
  //     for (var l = 0; l < number2; l++) {
  //       var randomEmoji2 = Math.floor(Math.random() * emojis.length); 
  //       words2[k] = words2[k] + ' ' + emojis[randomEmoji2];
  //     }
  //   }
  // }
  // const newParagraph2 = words2.join(" ");
  // sampleOutput.innerText = newParagraph2;


// document.addEventListener('DOMContentLoaded', function(){
//     var copyBtn = document.getElementById('copy');
//     copyBtn.addEventListener('click', copyOutput);
// });

// function myFunction() {
//   var copyText = sentenceOutput;

//   copyText.select();
//   copyText.setSelectionRange(0, 99999); // For mobile devices

//   navigator.clipboard.writeText(copyText.value);
  
// }




