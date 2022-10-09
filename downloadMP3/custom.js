
chrome.action.onClicked.addListener(function (tab) {
  let url = "https://convert2mp3s.com/api/widget?url=" + tab.url;
  chrome.tabs.create({
    url: "https://convert2mp3s.com/api/widget?url=" + tab.url
  })  
});
