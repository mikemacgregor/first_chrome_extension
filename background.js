let espn_s2 = 'one string';
let SWID = 'another string';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ espn_s2 });
  chrome.storage.sync.set({ SWID });
  console.log('espn_s2 set to %s', `${espn_s2}`);
  console.log('SWID set to %s', `${SWID}`);
  
});