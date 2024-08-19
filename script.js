const change = () => {
    
    let color1 = document.querySelector("#color1").value;
    let color2 = document.querySelector("#color2").value;
    let angle = document.querySelector("#angleSelector").value;
    let type = document.querySelector("#typeSelector").value;
    let newGradient;

    if (type === "linear") {
        newGradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`
    }
    else {
        newGradient = `radial-gradient(circle, ${color1}, ${color2})`
    }

    const output = document.querySelector(".output");
    output.style.backgroundImage = newGradient

}

const copyCSS = () => {
    let color1 = document.querySelector("#color1").value;
    let color2 = document.querySelector("#color2").value;
    let angle = document.querySelector("#angleSelector").value;
    let type = document.querySelector("#typeSelector").value;
    let newGradient;

    if (type === "linear") {
        newGradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`
    }
    else {
        newGradient = `radial-gradient(circle, ${color1}, ${color2})`
    }
    
    writeToClipboardText(newGradient);
}

async function writeToClipboardText(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error.message);
    }
  }