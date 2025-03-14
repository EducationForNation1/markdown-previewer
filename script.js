document.getElementById("markdown-input").addEventListener("input", function () {
    let markdownText = this.value;
    document.getElementById("preview-output").innerHTML = marked.parse(markdownText);
});

// Default text to show markdown preview
document.getElementById("markdown-input").value = "# Welcome to Markdown Previewer\n\n**Bold Text**\n\n*Italic Text*\n\n- List Item 1\n- List Item 2\n\n```js\nconsole.log('Hello, Markdown!');\n```";
document.getElementById("preview-output").innerHTML = marked.parse(document.getElementById("markdown-input").value);
