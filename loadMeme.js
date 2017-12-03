var memes = [
  'https://media.giphy.com/media/YGIpIZjgxL68w/giphy.gif',
  'https://m.popkey.co/e2b833/6Mwlk.gif',
  'https://nebula.wsimg.com/537bcacec13b73f57ae32eafd14965c2?AccessKeyId=A1742028DF8685636E85&disposition=0&alloworigin=1',
  'https://i.imgflip.com/1dg8xb.jpg',
];

// var meme = document.getElementById("meme");
// meme.style.backgroundImage = "url('" + random_meme() + "')";
function random_meme() {
  var randomMeme = Math.round(Math.random() * memes.length);
  return memes[randomMeme];
}

window.open(random_meme());

// "content_scripts": [
//   {
//     "matches": ["<all_urls>"],
//     "js": ["initMeme.js"],
//     "css" : ["memeStyle.css"]
//   }
// ],
