var selectElement = document.getElementById("story-select");

var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");
 function loadStory() {
      var selectedValue = selectElement.value;
      console.log("loadStory ran");
      console.log(selectedValue)
      result2.innerHTML = "";

      if (selectedValue === "1") {
        // storyContent.innerHTML = "<p>This is the content of Story 1.</p>";
        var choiceElement = document.createElement("select");
        choiceElement.setAttribute ('id','result2-select');
        choiceElement.innerHTML = "<option value=''>Select a choice</option><option value='3'>Positive</option><option value='4'>Negative</option>";
        choiceElement.onchange = handleChoice;
        result2.appendChild(choiceElement);

      } else if (selectedValue === "2") {
        // storyContent.innerHTML = "<p>This is the content of Story 2.</p>";
        var choiceElement = document.createElement("select");
        choiceElement.setAttribute ('id','result2-select')
        choiceElement.innerHTML = "<option value=''>Select a choice</option><option value='5'>Positive</option><option value='6'>Negative</option>";
        choiceElement.onchange = handleChoice;
        result2.appendChild(choiceElement);
      }
    }

    function handleChoice() {
  var selection = document.getElementById("result2-select");
  var selectedValue = selection.value;
      if (selectedValue === "3") {
        // Handle choice 1
        result3.innerHTML += "<p>You selected positive!</p>";
      } else if (selectedValue === "4") {
        // Handle choice 2
        result3.innerHTML += "<p>You selected negative!</p>";
      }
      else if (selectedValue === "5") {
        // Handle choice 2
        result3.innerHTML += "<p>You selected up!</p>";
      }
      else if (selectedValue === "6") {
        // Handle choice 2
        result3.innerHTML += "<p>You selected down!</p>";
      }
    }


selectElement.addEventListener('click', loadStory());




const positiveAdjectives = ['awesome', 'amazing', 'fantastic', 'excellent'];
    const negativeAdjectives = ['terrible', 'awful', 'horrible', 'disappointing'];
    const neutralAdjectives = ['average', 'ordinary', 'typical', 'common'];

    function generateSentence() {
      const selectElement = document.getElementById('adjectiveSelect');
      const selectedOption = selectElement.value;
      let adjective;

      switch (selectedOption) {
        case 'positive':
          adjective = positiveAdjectives[Math.floor(Math.random() * positiveAdjectives.length)];
          break;
        case 'negative':
          adjective = negativeAdjectives[Math.floor(Math.random() * negativeAdjectives.length)];
          break;
        case 'neutral':
          adjective = neutralAdjectives[Math.floor(Math.random() * neutralAdjectives.length)];
          break;
      }

      const sentenceOutput = document.getElementById('sentenceOutput');
      // sentenceOutput.textContent = `The weather today is ${adjective}.`;
      sentenceOutput.textContent = "The weather today is " + adjective + ".";

    }




const emojis = ["😀", "😃", "😄", "😁", "😆", "😊", "😍", "🤩", "😎", "🥳", "🤗", "😜", "😉"];

// Function to insert random emojis between words
function insertRandomEmojis() {
  const words = result3.innerText.split(" ");
  const newParagraph = words.map(word => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const emoji = emojis[randomIndex];
    return word + " " + emoji;
  }).join(" ");
  result3.innerText = newParagraph;
}

// Function to increase the number of emojis
function increaseEmojis() {
  emojis.push("🤪", "🥰", "😘", "😇", "😂", "🤣");
  insertRandomEmojis();
}

// Function to reset the paragraph
function reset(){
    window.location.reload();
}


