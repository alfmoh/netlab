import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "input"
})
export class InputDirective {
  @Input() public value: any;
  inputElement: any;
  toggler = true;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("keyup", ["$event"])
  onkeyup() {
    if (this.el.nativeElement.value !== "" && this.toggler === true) {
      this.el.nativeElement.classList.remove("form-control");
      this.el.nativeElement.classList.add("input--border");

      const placeholder = this.renderer.createElement("div");
      const placeholderText = this.renderer.createText(
        this.el.nativeElement.getAttribute("placeholder")
      );
      this.renderer.appendChild(placeholder, placeholderText);
      const parent = this.el.nativeElement.parentElement;
      this.renderer.insertBefore(parent, placeholder, this.el.nativeElement);
      this.renderer.addClass(placeholder, "placeholder--top");
      this.el.nativeElement.style.color = "#000";
      this.toggler = false;
    }
    if (this.el.nativeElement.value === "" && this.toggler === false) {
      this.el.nativeElement.classList.add("form-control");
      this.el.nativeElement.classList.remove("input--border");
      const parent = this.el.nativeElement.parentElement;
      const child = this.el.nativeElement.previousSibling;
      this.renderer.removeChild(parent, child);
      this.toggler = true;
    }
  }
}
