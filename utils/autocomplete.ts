const keywords = ["const", "continue", "class", "catch", "case", "constructor"];
// const autocompleteRegex = /(co(nst|ntinue|nstructor)?|cl(ass)?|ca(tch|se)?)/g;
const autocompleteRegex = /c(o|a|l)/g;

const stringIsMatch = (string: string, index: number) => {
  return autocompleteRegex.test(string.substring(index - 2, index));
};

export const showSugestions = (userValue: string, indexCursor: number) => {
  const isMatch = stringIsMatch(userValue, indexCursor);
  console.log("ds le premier if", isMatch);

  const sugestions =
    isMatch &&
    keywords.filter((keyword) =>
      keyword.startsWith(userValue.substring(indexCursor - 2, indexCursor))
    );

  return sugestions;
};

export const changeMatchValue = (
  selectedValue: string,
  userVlaue: string,
  indexCursor: number
) => {
  // console.log("indexCursor =>", indexCursor);
  // console.log("onClickSelected =>", selectedValue);
  console.log("onClickValue =>", userVlaue);

  let oldValue = "";
  let newValue = "";

  // oldValue = userVlaue.substring(indexCursor - 2, indexCursor);
  // console.log(oldValue);

  const isMatch = stringIsMatch(userVlaue, indexCursor);

  console.log(isMatch);
};
