// To use threecents.js, insert the following into your page:
//
//    <script id=threecents src=http://cdn.elevenbasetwo.com/threecents.js data-key=208eb5ed1aed5f8111d023bf718ba3ff></script>
//
// making sure to replace the `data-key` value with your actual Threecents key.

(function() {
  var tc = document.getElementById('threecents');
  var node = document.createElement('div');
  node.innerHTML = '<form id=threecent-form><textarea></textarea><button id=threecents-button>Submit</button></form>';
  tc.parentNode.insertBefore(node, tc.nextSibling);

  var button = document.getElementById('threecents-button');
  button.onclick = function() {
    var client = new XMLHttpRequest();
    var key = "";
    client.open("POST", "http://threecents.elevenbasetwo.com/api/feedback/" + key, false);
    client.send(JSON.stringify({feedback: "It's the best thing ever!"}));
  }
})();
