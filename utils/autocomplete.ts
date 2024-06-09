const keywords = ["const", "continue", "class", "catch", "case", "constructor"];
// const autocompleteRegex = /(co(nst|ntinue|nstructor)?|cl(ass)?|ca(tch|se)?)/g;
const autocompleteRegex = /c(o|a|l)/g;

const stringIsMatch = (string: string, index: number) => {
  return autocompleteRegex.test(string.substring(index - 2, index));
};

export const autocomplete = ({
  userValue,
  indexCursor,
  onClickUserValue,
  onClickSelectedValue,
}: {
  userValue?: string;
  indexCursor?: number;
  onClickUserValue?: string;
  onClickSelectedValue?: string;
}) => {
  if (userValue && indexCursor) {
    const isMatch = stringIsMatch(userValue, indexCursor);
    console.log("ds le premier if", isMatch);

    const sugestions =
      isMatch &&
      keywords.filter((keyword) =>
        keyword.startsWith(userValue.substring(indexCursor - 2, indexCursor))
      );

    return sugestions;
  }

  if (onClickSelectedValue && onClickUserValue && indexCursor) {
    // console.log("indexCursor =>", indexCursor);
    // console.log("onClickSelected =>", onClickSelectedValue);
    console.log("onClickValue =>", onClickUserValue);

    let oldValue = "";
    let newValue = "";

    oldValue = onClickUserValue.substring(indexCursor - 2, indexCursor);
    console.log(oldValue);

    const isMatch = stringIsMatch(onClickUserValue, indexCursor);
    console.log(isMatch);
  }
};
