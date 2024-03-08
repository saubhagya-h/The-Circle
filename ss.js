function copyCode() {
    // Get the code element
    var codeElement = document.getElementById("code");

    // Create a range and select the text
    var range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges(); // Clear previous selections
    window.getSelection().addRange(range);

    // Execute the copy command
    document.execCommand("copy");

    // Deselect the text
    window.getSelection().removeAllRanges();

    // Inform the user that the code has been copied
    alert("Code copied to clipboard!");
  }