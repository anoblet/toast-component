import { css } from "lit-element";
export default css `
  :host {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: max-content;
    margin: 0 auto;
  }

  :host(:not([open])) {
    display: none;
  }
`;
