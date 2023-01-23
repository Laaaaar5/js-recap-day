function zipStrings(strOne, strTwo) {
  let length = Math.max(strOne.length, strTwo.length); // nimmt Länge des größeren String
  let result = "";

  strOne = strOne.split("");
  strTwo = strTwo.split("");

  for (let i = 0; i < length; i++) {
    if (!strOne[i]) {
      // prüft ob String leer ist
      result += strTwo[i];
    } else if (!strTwo[i]) {
      // prüft ob String leer ist
      result += strOne[i];
    } else {
      // Strings zusammenfügen
      result += strOne[i] + strTwo[i];
    }
  }
  return result;
}
