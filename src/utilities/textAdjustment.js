/**
 * scientificNameFormat: chosen words in italics. only 1 allowed in 1 paragraph
 * @param {string} textContent 
 * @returns {string} adjustedTextContent
 */
export const scientificNameFormat = (textContent) => {
  console.log(textContent);


  const splitStrings = textContent.split("*"); // an array with three elements, the second one is the scientific name

  const adjustedTextContent = (
    <>
      {splitStrings[0]}
      <span>
        <i>{splitStrings[1]}</i>
      </span>
      {splitStrings[2]}
    </>
  )

  return adjustedTextContent;
}