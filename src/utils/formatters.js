export function capitalizeFirstChar(str) {
  let capitalizedStr = "";
  if (str && typeof str === "string") {
    let trimmedStr = str.trim();
    for (let i = 0; i < trimmedStr.length; i++) {
      if (i === 0) {
        capitalizedStr += trimmedStr[i].toUpperCase();
        continue;
      }
      capitalizedStr += trimmedStr[i];
    }
  }
  return capitalizedStr;
}
