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

function pickFromArray(arr) {
  arr[1]
}

const emojis = ["😀", "😃", "😄", "😁", "😆", "😊", "😍", "🤩", "😎", "🥳", "🤗", "😜", "😉"];

// Function to insert random emojis between words
function insertRandomEmojis() {
  const words = sentenceOutput.innerText.split(" ");
  const newParagraph = words.map(word => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const emoji = emojis[randomIndex];
    return word + " " + emoji;
  }).join(" ");
  sentenceOutput.innerText = newParagraph;
}

// Function to increase the number of emojis
function increaseEmojis() {
  emojis.push("🤪", "🥰", "😘", "😇", "😂", "🤣");
  insertRandomEmojis();
}

// Function to reset the paragraph
function resetParagraph() {
  sentenceOutput.innerText = " "
}