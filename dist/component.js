var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, property } from "lit-element";
import template from "./template";
import style from "./style";
let ToastComponent = class ToastComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.render = template.bind(this);
        this.open = false;
        this.timeout = 3000;
    }
    show() {
        this.open = true;
        setTimeout(() => this.close(), this.timeout);
    }
    close() {
        this.open = false;
    }
};
ToastComponent.styles = style;
__decorate([
    property({ type: Boolean, reflect: true })
], ToastComponent.prototype, "open", void 0);
__decorate([
    property()
], ToastComponent.prototype, "timeout", void 0);
__decorate([
    property()
], ToastComponent.prototype, "content", void 0);
ToastComponent = __decorate([
    customElement("toast-component")
], ToastComponent);
export { ToastComponent };
