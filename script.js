    //Helper function for any random values required
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    //Sound variables
    const clickSound = new Audio("click.mp3");
    const loadSound = new Audio("loading.mp3");
    const emptySound = new Audio("unload.mp3");
    const spinSound = new Audio("revolver-spin.mp3");
    const shotSound = new Audio("gunshot.mp3");
    // Establishing starting conditions
    const chambers = ["empty","empty","empty","empty","empty","empty"];
    let chamberNum = 0;
    let chambersFull = 0;

    //Reset function empties the chambers
    function reset(){
        emptySound.play();
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
            loadSound.play();
            chambersFull++;}
        else {while (chambers[randomChamber]!=="empty"){
            randomChamber=randomChamber%6+1;
        } chambers[randomChamber]="loaded";
        loadSound.play();
        chambersFull++;
    }
    }
    //Spin function spins the cylinder, moving the bullet(s)
    function spin(number){
        /* if called without an argument, "spins" a random number of times,
        otherwise spins x amount of times, where x = argument */
        if (!number){
            spinSound.play();
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
            clickSound.play();
            document.getElementById('text').innerHTML="click.";
            spin(1);
        } else {
            shotSound.play();
            window.alert("BANG! 💥🤯");
            document.getElementById('text').innerHTML="You are dead 💀";
            chambers[0] = "empty";
            chambersFull--;
            spin(1);
            }
    }