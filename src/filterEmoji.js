import emojiList from "./emojiList.json";

export default function filterEmoji(searchText, maxResults) {
  return emojiList
    .filter(emoji => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
     
      return false;
    })
    .slice(0, maxResults);
}
