import React, { useEffect, useState } from "react";
const InputTag = () => {
    // Using the State hook to declare our tags variable and setTags to update the variable.
    const [tags, setTags] = React.useState([
       
    ]);

    const removeTag = (i) => {
        const newTags = [...tags];
        newTags.splice(i, 1);

        // Call the defined function setTags which will replace tags with the new value.
        setTags(newTags);
    };
    var tagInput=null;
    const inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
            if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
            setTags([...tags, val]);
            tagInput.value = null;
        } else if (e.key === 'Backspace' && !val) {
            removeTag(tags.length - 1);
        }
    };


    return (
        <div className="input-tag">
            <ul className="input-tag__tags">
                {tags.map((tag, i) => (
                    <li key={tag}>
                        {tag}
                        <button type="button" onClick={() => { removeTag(i); }}>+</button>
                    </li>
                ))}
                <li className="input-tag__tags__input"><input type="text" onKeyDown={inputKeyDown} ref={c => { tagInput = c; }} /></li>
            </ul>
        </div>
    );
}

export default InputTag;
