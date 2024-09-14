import ConfirmLink from "./confirm-link.js";
import SpoilerParagraph from "./spoiler-p.js";

customElements.define('confirm-link', ConfirmLink, { extends: 'a' });
customElements.define('spoiler-p', SpoilerParagraph, { extends: 'p'});