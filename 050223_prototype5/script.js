    function generateParagraph() {
      // Define the grammar using Tracery syntax
      var grammar = {
        'animal': ['cat', 'dog', 'bird'],
        'color': ['red', 'blue', 'green'],
        'action': ['jumped', 'ran', 'flew'],
        'sentence': ['#animal.capitalize# is #color# and it #action#']
      };

      // Create a Tracery grammar from the defined rules
      var traceryGrammar = tracery.createGrammar(grammar);

      // Expand the 'sentence' rule to generate a paragraph
      var paragraph = traceryGrammar.flatten('#sentence# #sentence# #sentence#');

      // Get the output element
      var outputElement = document.getElementById('output');

      // Split the paragraph into sentences
      var sentences = paragraph.split('.');

      // Generate HTML select tags for each sentence
      var html = '';
      for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();

        // Generate the options for the select tag
        var options = '';
        grammar.sentence.forEach(function (option) {
          options += '<option>' + option + '</option>';
        });

        // Generate the HTML for the select tag
        var select = '<select onchange="updateSentence(this)">' +
          '<option selected disabled>Select a sentence</option>' +
          options +
          '</select>';

        // Add the select tag and sentence to the HTML output
        html += '<p>' + select + sentence + '</p>';
      }

      // Set the generated HTML as the output
      outputElement.innerHTML = html;
    }

    // Function to update the sentence when a select option is chosen
    function updateSentence(select) {
      var sentence = select.parentNode.textContent.replace('Select a sentence', '').trim();
      var newSentence = select.value + ' ' + sentence;
      select.parentNode.innerHTML = newSentence;
    }

    // Call the function to generate the paragraph
    generateParagraph();