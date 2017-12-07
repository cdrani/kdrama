var url =
  'https://www.reddit.com/r/KDRAMA/5o2lld/i_created_this_website_that_streams_kdramas_in_hd/?st=jan66p4y&sh=3c953db8'

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({ currentWindow: true, active: true }, function(tab) {
    updateTab(tab)
  })
})

function updateTab(tab) {
  chrome.tab.update(tab[0].id, { url: url, active: true }, function(tab) {
    onTabUpdated(tab.id, { status: tab.status }, tab)
  })
}

function onTabUpdated(tabId, changeInfo, tab) {
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      chrome.tabs.executeScript(null, { file: 'link.js' })
    }
  })
}
