class Form{
    constructor() {

        this.input = createInput('Name');
        this.button = createButton('Play');
        this.greeting = createElement('h2');

    }
    hide() {
        
        this.input.hide();
        this.button.hide();
        this.greeting.hide();

    }

    display() {
    var title = createElement("h2");
    title.html("Multiplayer Game");
    title.position(250,50);

    
    this.input.position(250,250);

    
    this.button.position(280,280);

   
    
    button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

         player.name = this.input.value();

        playerCount +=1;
        player.index = playerCount ;
        player.update();
        player.updateCount(playerCount);

        this.greeting.html("Hello " + player.name);
        this.greeting.position(100,50);
        


    })

    }

}