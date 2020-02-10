import React from "react"
import fancyParagraphyStyles from "./fancy-paragraph.module.css"

const FancyParagraph = (props) => <p className={fancyParagraphyStyles.fancy}>{props.paragraphText}</p>

export default FancyParagraph
