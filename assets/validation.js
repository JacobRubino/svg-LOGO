function validateTextChoice(text) {
  if (text.length > 0 && text.length < 4) {
    console.log(`Text content: ${text}`);
    return true;
  } else {
    console.log("Please enter between 1-3 characters only.");
    return false;
  }
}

module.exports = validateTextChoice;