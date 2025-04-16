import {Window} from "./core/ui"
import {Button} from "./widgets/button"
import {Heading} from "./widgets/heading"


let w = new Window(window.innerHeight-10,'100%');

let lbl1= new Heading(w);
lbl1.text = "My NEW Button Demo";
lbl1.tabindex = 1;
lbl1.fontSize = 26;
lbl1.move(10,20);

let btn = new Button(w);
btn.tabindex = 2;
btn.fontSize = 14
btn.move(122, 50)

btn.onClick(() => {
    //Log in console if the button is clicked
    console.log("Button clicked!");
    //Change the heading text to show it's been clicked
    lbl1.text = "Button clicked from UI!";
    btn.backcolor = "lightblue"; 
});