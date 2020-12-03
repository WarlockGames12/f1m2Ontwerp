    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }

    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let woord1 = onderwerp[index];
		let index2 = randomizer(arrayLength);
        let woord2 = werkwoord[index2];
		let index3 = randomizer(arrayLength);
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["she", "Ed", "Rosmerta"];
    const werkwoord = ["walks", "learns", "drinks"];
    const restwoord = ["hard", "at school", "coffee"];
        
    let plaatjes = ["https://observer.com/wp-content/uploads/sites/2/2020/05/yoda-art-observer.jpg?", "https://media.makeameme.org/created/french-monke.jpg", "https://i.ytimg.com/vi/FvW045YyFFw/maxresdefault.jpg", "https://pm1.narvii.com/7254/2ddab02cf508edc0d8a3d487c8b9ccff00a6753er1-855-488v2_uhq.jpg", "quality=80" ]
    let arrayLength = onderwerp.length;
