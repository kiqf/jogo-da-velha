// Horizontal
if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;
  }
  if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
    console.log("x venceu");
  } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
    console.log("o venceu");
  }

  // Horizontal
  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
  }
  if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
    console.log("x venceu");
  } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
    console.log("o venceu");
  }

  // Horizontal
  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;
  }
  if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
    console.log('x venceu');
  } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
    console.log('o venceu');
  }