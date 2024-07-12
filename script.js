function firstWord(str) {
  // Trim leading and trailing whitespace
  str = str.trim();
  
  // Find the index of the first space
  const spaceIndex = str.indexOf(' ');
  
  // If there's no space, return the entire string
  if (spaceIndex === -1) {
    return str;
  }
  
  // Otherwise, return the substring up to the first space
  return str.substring(0, spaceIndex);
}

// Prompt user for input and display the result
const s = prompt("Enter String:");
alert(firstWord(s));
