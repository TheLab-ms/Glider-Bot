function formatCommandString(string) {
  return string
    .replaceAll("-", " ")
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
}

module.exports = { formatCommandString };
