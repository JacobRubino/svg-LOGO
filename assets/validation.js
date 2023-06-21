function validateTextChoice(text) {
  if (text.length > 0 && text.length < 4) {
    console.log(`Text content: ${text}`);
    return text;
  } else {
    console.log("please enter betweenm 1-3 characters only");
  }
}
module.exports = validateTextChoice;