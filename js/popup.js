document.addEventListener("DOMContentLoaded", function() {
	let element = document.getElementById("email");
	let popup = document.getElementById("popup");
	element.addEventListener('click', function(){
		let success = copyTextToClipboard("s1panda@ucsd.edu");
		if (success) {
			popup.className = "fade";
			setTimeout(function() {
				popup.className = "fadeout";
			}, 3000);
		}
		else {
			popup.innerHTML = "Copy to clipboard is not supported by your browser, email me at s1panda@ucsd.edu"
		}
	}, false);
});

function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.style.opacity = 0;


  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
    return true;
  } catch (err) {
    console.log('Oops, unable to copy');
    return false;
  }

  document.body.removeChild(textArea);
}
