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
    }

    if(temp[0].trim() === 'SWID') {
        console.log(temp[0].trim());
        console.log(temp[1].trim());

        let SWID = temp[1].trim();

        chrome.storage.sync.set({ SWID });
    }

}

// console.log(document.cookie);

