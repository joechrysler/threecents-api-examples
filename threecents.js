(function() {
  var tc = document.getElementById('threecents');
  var node = document.createElement('div');
  node.innerHTML = '<form><textarea id=tcText></textarea><button id=tcButton>Submit</button></form>';
  tc.parentNode.insertBefore(node, tc.nextSibling);

  document.getElementById('tcButton').onclick = function(event) {
    event.preventDefault();
    var client = new XMLHttpRequest();
    client.open("POST", "http://threecents.elevenbasetwo.com/api/feedback/" + tc.getAttribute("data-key"), false);
    client.send(JSON.stringify({feedback: document.getElementById('tcText').value}));
    document.getElementById('tcText').value = "";
  }
})();
