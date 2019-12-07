import { LitElement, customElement, property } from "lit-element";

import template from "./template";
import style from "./style";

@customElement("toast-component")
export class ToastComponent extends LitElement {
  public static styles = style;
  public render = template.bind(this);

  @property({ type: Boolean, reflect: true }) open: boolean = false;
  @property() timeout: number = 3000;
  @property() content: string;

  public show() {
    this.open = true;
    setTimeout(() => this.close(), this.timeout);
  }

  public close() {
    this.open = false;
  }
}
