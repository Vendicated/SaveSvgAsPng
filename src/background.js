const ID = "saveAsPNG";

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId !== ID) return

    chrome.tabs.create({
        url: chrome.runtime.getURL("page.html") + "?" + new URLSearchParams({ url: info.pageUrl }),
        index: tab.index + 1
    })
})

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: "Save as PNG",
        contexts: ["page"],
        id: ID
    })
})