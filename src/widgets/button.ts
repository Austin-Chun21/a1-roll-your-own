// importing local code, code we have written
import {IdleUpWidgetState, PressedWidgetState } from "../core/ui";
import {Window, Widget, RoleType, EventArgs} from "../core/ui";
// importing code from SVG.js library
import {Rect, Text, Box} from "../core/ui";

class Button extends Widget{
    private _rect: Rect;
    private _text: Text;
    private _input: string;
    private _fontSize: number;
    private _text_y: number;
    private _text_x: number;
    private defaultText: string= "Custom Text";
    private defaultFontSize: number = 28;
    private defaultWidth: number = 220;
    private defaultHeight: number = 30;
    private _clickHandler?: () => void;
    private isClicked: boolean = false;


    constructor(parent:Window){
        super(parent);
        // set defaults
        this.height = this.defaultHeight;
        this.width = this.defaultWidth;
        this._input = this.defaultText;
        this._fontSize = this.defaultFontSize;
        // set Aria role
        this.role = RoleType.button;
        // render widget
        this.render();
        // set default or starting state
        this.setState(new IdleUpWidgetState());
        // prevent text selection
        this.selectable = false;
        this.backcolor = "white";
        
    }

    set fontSize(size:number){
        this._fontSize= size;
        this.update();
    }

    set btnLabel(value:string){
        this._input = value;
        this.update();
    }

    get btnLabel():string{
        return this._input;
    }

    set btnWidth(width:number){
        this.width=width;
        this.update();
    }
    get btnWidth(){
        return this.width;
    }

    set btnHeight(height:number){
        this.height = height;
        this.update();
    }

    private positionText(){
        let box:Box = this._text.bbox();
        // in TS, the prepending with + performs a type conversion from string to number
        this._text_y = (+this._rect.y() + ((+this._rect.height()/2)) - (box.height/2));
        this._text.x(+this._rect.x() + 4);
        if (this._text_y > 0){
            this._text.y(this._text_y);
        }
    }
    
    render(): void {
        this._group = (this.parent as Window).window.group();
        this._rect = this._group.rect(this.width, this.height);
        this._rect.stroke("black");
        this._rect.fill("white");
        this._text = this._group.text(this._input);
        // Set the outer svg element 
        this.outerSvg = this._group;
        // Add a transparent rect on top of text to 
        // prevent selection cursor and to handle mouse events
        let eventrect = this._group.rect(this.width, this.height).opacity(0).attr('id', 0);

        // register objects that should receive event notifications.
        // for this widget, we want to know when the group or rect objects
        // receive events
        this.registerEvent(eventrect);
    }

    override update(): void {
        if(this._text != null)
            this._text.font('size', this._fontSize);
            this._text.text(this._input);
            this.positionText();
            this._rect.width(this.width).height(this.height);

        if(this._rect != null)
           this._rect.fill(this.backcolor);
        
        super.update();
    }
    
    pressReleaseState(): void{

        if (this.previousState instanceof PressedWidgetState) {
            this.raise(new EventArgs(this));
            this.isClicked = true;
            //Update backcolor to lightblue 
            this.backcolor = "lightblue";
            //Re-render 
            this.update();
            //Execute callback if it was registered
            if(this._clickHandler){
                this._clickHandler();
            }
        }
    }

    //TODO: implement the onClick event using a callback passed as a parameter
    onClick(callback: () => void):void{
        //Store callback function 
        this._clickHandler = callback;
      
    }

    
    //TODO: give the states something to do! Use these methods to control the visual appearance of your
    //widget
    idleupState(): void {
      
       
    }
    //Make white if btn is idle 
    idledownState(): void {
        this._rect.fill("#ffffff");
    }
    pressedState(): void {
        this._rect.fill("light blue");
    }
    hoverState(): void {
       //Turn yellow on btn hover 
        this._rect.fill("yellow");
       
        
    }
    hoverPressedState(): void {
        //Turn btn orange if hoverpressed 
        if (this._rect) {
            this._rect.fill("orange");
            this._rect.animate(200);
        }
    }
    pressedoutState(): void {
        this._rect.fill("purple");
    }
    moveState(): void {
        throw new Error("Method not implemented.");
    }
    keyupState(keyEvent?: KeyboardEvent): void {
        //Fill the btn with pink if a key is pressed
        this._rect.fill("pink");
    }
}

export {Button}