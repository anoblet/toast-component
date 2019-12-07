import { LitElement } from "lit-element";
export declare class ToastComponent extends LitElement {
    static styles: import("lit-element").CSSResult;
    render: any;
    open: boolean;
    timeout: number;
    content: string;
    show(): void;
    close(): void;
}
