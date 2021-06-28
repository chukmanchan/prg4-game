export class Ninja{
    // Fields
    private x : number = 0
    private y : number = 0
    private div: HTMLElement
    
    public lives: number = 3
    public money: number = 0

    private verticalSpeed : number = 0

    public getBoundingRect() : DOMRect {
        return this.div.getBoundingClientRect()
    }

    constructor(tagName: string) {
        console.log("Ninja was created!")

        // Add the event listeners to the window for the keyboard events
        window.addEventListener("keydown",  (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup",    (e: KeyboardEvent) => this.onKeyUp(e))

        this.create()
        
        this.x = 100
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
    }

    private create() : void {
        this.div = document.createElement("ninja")
        document.body.appendChild(this.div)   
    }

    public update() : void {
        // Add the vertical speed to the y-value
        this.y += this.verticalSpeed

        // Draw the ninja on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    private onKeyDown(e: KeyboardEvent): void {
        // Check if the key in the event (e.key) matches the desired input
        switch (e.key) {
            // When the "ArrowUp" key is pressed
            case "ArrowUp":
                // Give the vertical speed a negative value
                this.verticalSpeed = -5
                break
            // When the "ArrowDown" key is pressed
            case "ArrowDown":
                // Give the vertical speed a positive value
                this.verticalSpeed = 5
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        // Check if ArrowUp or ArrowDown key has been released
        if(e.key == "ArrowUp" || e.key == "ArrowDown") {
            // Make the vertical speed 0
            this.verticalSpeed = 0
        }
    }

    public gainCash() : void {
        // Give 1 currency to the player
        this.money++;
        //console.log(this.money)

        // Update the money amount in the div
        let moneyAmount:HTMLElement = document.getElementById("money") as HTMLElement;
        moneyAmount.innerText = this.money.toString() + ' $';
    }

    public loseLife() : void {
        // Player loses 1 life
        this.lives--;
        //console.log(this.lives)

        // Update amount of lives in the div
        let livesAmount:HTMLElement = document.getElementById("lives") as HTMLElement;
        livesAmount.innerText = 'Lives: ' + this.lives.toString();
    }
}