// identify items on popup
let getValuesButton = document.getElementById("getValues");
let setValuesButton = document.getElementById("setValues");
let changeEspn_s2 = document.getElementById("espn_s2");
let changeSWID = document.getElementById("SWID");

chrome.storage.sync.get("espn_s2", ({ espn_s2 }) => {
  changeEspn_s2.value = espn_s2;
});

chrome.storage.sync.get("SWID", ({ SWID }) => {
  changeSWID.value = SWID;
});

// getValues button is clicked, pull cookie values to storage and our input text boxes
getValuesButton.addEventListener("click", async () => {
  
  // are we on espn?
  
  chrome.scripting.executeScript({
    function: getCookieValues,
  });
});

// setValues button is clicked, push cookie values from storage to myDLF
setValuesButton.addEventListener("click", async () => {
  
  // are we on myDLF?
  
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setCookieValues,
  });
});

function getCookieValues() {
  let cookies = [];
  let temp = [];

  // split cookie string into array
  cookies = document.cookie.split(';');

  // split cookies array into equal size names and values arrays
  for(let x = 0; x < cookies.length; x++) {
      // console.log(cookies[x]);
      temp = cookies[x].split('=');
      
      if(temp[0].trim() === 'espn_s2') {
          console.log(temp[0].trim());
          console.log(temp[1].trim());

          let espn_s2 = temp[1].trim();

          chrome.storage.sync.set({ espn_s2 });
          changeEspn_s2.value = espn_s2;
      }

      if(temp[0].trim() === 'SWID') {
          console.log(temp[0].trim());
          console.log(temp[1].trim());

          let SWID = temp[1].trim();

          chrome.storage.sync.set({ SWID });
          changeEspn_s2.value = SWID;
      }

  }
}

function setCookieValues() {
  chrome.storage.sync.get("espn_s2", ({ espn_s2 }) => {
    document.getElementById("espn_s2").value = espn_s2;
  });

  chrome.storage.sync.get("SWID", ({ SWID }) => {
    document.getElementById("SWID").value = SWID;
  });
}