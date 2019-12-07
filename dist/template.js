import { html } from "lit-element";
export default function () {
    return html `
    <slot>${this.content}</slot>
  `;
}
