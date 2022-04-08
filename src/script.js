    //Helper function for any random values required
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    // Establishing starting conditions
    const chambers = ["empty","empty","empty","empty","empty","empty"];
    let chamberNum = 0;
    let chambersFull = 0;

    //Reset function empties the chambers
    function reset(){
        document.getElementById('text').innerHTML="You've emptied all bullets";
        const chambers = ["empty","empty","empty","empty","empty","empty"];
        chambersFull = 0;
        return chambers;
    }
    //Load function loads a single bullet into an empty chamber
    function load(){
        if (chambersFull===6){
            document.getElementById('text').innerHTML="You've filled every chamber. Ya got a deathwish?";
            return}
        document.getElementById('text').innerHTML="You've loaded a bullet";
        let randomChamber = getRandomInt(6);
        if (chambers[randomChamber]==="empty"){
            chambers[randomChamber]="loaded";
            chambersFull++;}
        else {while (chambers[randomChamber]!=="empty"){
            randomChamber=randomChamber%6+1;
        } chambers[randomChamber]="loaded";
        chambersFull++;
    }
    }
    //Spin function spins the cylinder, moving the bullet(s)
    function spin(number){
        /* if called without an argument, "spins" a random number of times,
        otherwise spins x amount of times, where x = argument */
        if (!number){
            document.getElementById('text').innerHTML="'Round and 'round she goes...";
            for (let i=0; i<getRandomInt(13); i++){
                chambers.push(chambers.shift())
            }
        } else {
            for (let i=0; i<number; i++){
                chambers.push(chambers.shift())
        }}
        
    }
    //Pull function pulls the trigger, resulting in a click or a death
    function pullTrigger(){
        /* "pulling the trigger" message necessary on text-based applications, replace with sound or animation for this
        console.log("Pulling the trigger...");
        */
        if (chambers[0] === "empty"){
            document.getElementById('text').innerHTML="click.";
            spin(1);
        } else {document.getElementById('text').innerHTML="You are dead 💀";
            window.alert("BANG!");
            chambers[0] = "empty";
            chambersFull--;
            spin(1);
            }
    }