// function download() {
//   var url = window.location.href;
//   window.open("https://convert2mp3s.com/api/single/mp3?url=" + url);
// }

// document.getElementById("btn").addEventListener("click", download);

chrome.action.onClicked.addListener(function(tab) { alert('icon clicked' + tab.id); });
