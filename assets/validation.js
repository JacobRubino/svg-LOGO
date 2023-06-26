function validateTextChoice(text) {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (text.length > 0 && text.length < 4) {
    if (!specialChars.test(text)) {
          console.log("The text should not contain special characters");
        } else {
          console.log("Text content is validated");
        } 
    console.log(`Text content: ${text}`);
    return text;
  } else {
    console.log("please enter betweenm 1-3 characters only");
  }
}
module.exports = validateTextChoice;