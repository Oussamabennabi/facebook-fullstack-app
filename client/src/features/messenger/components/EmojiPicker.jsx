import React from 'react'
import Picker from "emoji-picker-react";

const EmojiPicker = ({ setEmoji }) => {
  const onEmojiClick = (event, emojiObject) => {
    setEmoji(emojiObject.emoji);
  };
  return <Picker
      
        pickerStyle={{ boxShadow: "none" }}
      disableSearchBar={ false}
        onEmojiClick={onEmojiClick} />;
};

export default EmojiPicker