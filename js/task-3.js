function getElementWidth(content, padding, border) {
    let contentNum = parseFloat(content);
    let paddingNum = parseFloat(padding);
    let borderNum = parseFloat(border);

    let totalWidth = contentNum + 2 * paddingNum + 2 * borderNum;
    return totalWidth;
  }
  console.log(getElementWidth("50px", "8px", "4px"));    // 74
  console.log(getElementWidth("60px", "12px", "8.5px")); // 101
  console.log(getElementWidth("200px", "0px", "0px"));   // 200