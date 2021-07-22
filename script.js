$(document).ready(function(){
  
  var theDino = {};

  theDino.listofanswers = [
    ["How do you invite a dinosaur to a cafe?","Tea, Rex?"],
    ["What do you call a dinosaur wearing a cowboy hat and boots?", "Tyrannosaurus Tex!"],
    ["Why did the Archaeopteryx catch the worm?", "Because it was an early bird!"],
    ["Where do dinosaurs go shopping?", "The dino-store!"],
    ["What type of tool does a prehistoric reptile carpenter use?", "A dino-saw !"],
    ["What do you call a T.Rex who hates losing?", "A saur loser."],
    ["What do you get if you cross a dinosaur with a pig?", "Jurassic Pork!"],
    ["What do you call twin dinosaurs?", "Pair-odactyls!"],
    ["What do you call a dinosaur who has left its armor out in the rain?", "A Stegosau-rust."],
    ["What do you call a dinosaur with one eye?", "Eye-saur!"],
    ["Why can't you hear a Pterodactyl when it goes to the toilet?", "Because the pee is silent!"],
    ["Do you think anything could tricera-top these dinosaur puns?", "I dino what to tell you, but probably not."],
    ["What do you call a dinosaur car accident?", "A tyrannosaurus wreck!"],
    ["What's a dinosaur's favorite drink?", "Rex on the beach!"],
    ["What do you call a group of dinosaurs who sing?", "A tyranno-chorus."],
    ["What do you call a baby dinosaur?", "A Wee-Rex!"],
    ["What do you call a dinosaur after they break-up with their girlfriend?", "Tyrannosaurus ex."],
    ["What do you call a smelly dinosaur fart?", "An exstinktion!"],
    ["What do you get if you cross a T- rex with explosives?", "Dino-mite."],
    ["What do you call a dinosaur ghost?", "A scaredactyl."],
    ["What do you call a short spiky dinosaur that's fallen down the stairs?", "Ankle-is-sore-us."],
    ["What did the dinosaur say to the cashier at the till?", "Keep the climate change."],
    ["What's a child's favorite dinosaur?", "A Toys-‘R-Us."],
    ["What do you call a dinosaur after a breakup?", "Tyrannosaurus ex!"],
    ["What's a dinosaur's favorite quote?", "“Jurassic times call for Jurassic measures!”"],
    ["Why do museums exhibit old dinosaur bones?", "Because they can't afford new ones!"],
    ["What do you call a dinosaur that never gives up?", "Try-try-try-ceratops!"],
    ["What do you call a dog that belongs to a dinosaur with one eye?", "A Do-you-think-he-saurus rex."],
    ["Which is the scariest dinosaur?", "A Terror-dactyl."],
    ["Why did the Tyrannosaurus Rex cross the road?", "Because the chickens hadn't evolved yet."],
    ["What do you call a dinosaur that knows a lot of words?", "A thesaurus!"],
    ["How do you know that a seismosaurus is under your bed?", "Because your nose is only two inches from the ceiling!"],
    ["What do you call an anxious dino?", "A nervous Rex."],
    ["What do you call a dinosaur who is a noisy sleeper?", "A Tyranno-snorus!"],
    ["What is the best way to talk to a velociraptor?", "Long-distance!"],
    ["How can you tell if there's an allosaurus lying in your bed?", "You'll see the bright red “A” on its pajamas."],
    ["What do you call a dinosaur that won't stop talking?", "A dino-bore!"],
    ["What did the dinosaur call her blouse business?", "Try Sara's Tops!"],
    ["What did dinosaurs use to drive their cars?", "Fossil fuels."],
    ["Can a crappy dinosaur joke get a laugh?", "You bet Jurassican."],
    ["How do you know if there is a dinosaur in your fridge?", "The door won't shut!"],
    ["What dinosaur would Harry Potter be?", "The dinosorcerer."],
    ["What's the best way to raise a baby dinosaur?", "With a crane."],
    ["Why was the stegosaurus such a good volleyball player?", "He could really spike the ball!"],
    ["What does a triceratops sit on?", "Its tricera-bottom."],
    ["What's the best thing to do if you see a tyrannosaurus rex?", "Pray that it doesn't see you."],
    ["What do you call a paleontologist who sleeps all the time?", "Lazy bones!"],
    ["What's the nickname for someone who put their right hand in the mouth of a T-Rex?", "Lefty"],
    ["What kind of materials do dinosaurs use for the floor of their homes?", "Rep Tiles"],
    ["What is a dinosaurs least favorite reindeer?", "Comet!"],
    ["Why did the Apatosaurus devour the factory?", "Because she was a plant-eater"],
    ["Why did T-Rex's girlfriend break up with him?", "Because he said he only loved her “this much” (with his tiny arms spread wide)."],
    ["What kind of dinosaur can you ride in a rodeo?", "A Bronco-saurus!"],
    ["What do you get when you cross a dinosaur with fireworks?", "DINOMITE!"],
    ["What do you call a polite Dinosaur?", "A Pleaseyosaur"],
    ["What was T. rex's favorite number?", "Eight! (ate)"],
    ["Receptionist: Doctor, there's an invisible dinosaur in the waiting room.","Doctor: Tell her I can't see her!"],
    ["What dinosaur can't you hear go to the bathroom?", "All of them, they're all dead."],
    ["How did the cavemen survive the asteroid that killed all the dinosaurs?", "Social distancing, they stayed 56 million years apart."],
    ["What do you call a dinosaur that asks a lot of deep questions?", "A philosiraptor."],
    ["What would happen if a 100-ton Brachiosaurus stepped on you?", "You'd be deeply impressed."],
    ["How do you know if there's a stegosaurus in your refrigerator?", "The door won't close."],
    ["Which dinosaur had to wear glasses?", "Tyrannosaurus Specs!"],
    ["Who does a dinosaur call when he's being robbed?", "The tricera-cops."]
    ];
 
    theDino.getAnswer = function()
  {
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
    var joke = this.listofanswers[randomAnswer];
    
    $("#the_dino").effect( "shake" );
    $("#question").text( joke[0] );
    $("#answer").text( joke[1]);
    $("#refreshButton").text('ANOTHER ONE?');
    $("#question").fadeIn(500, function(){
      $("#answer").fadeIn(500, function(){
        $("#refreshButton").fadeIn(300);
      });
    });
    $("#the_dino").attr("src", "trex.png");

    //console.log(answer);
  };
  
  $("#answer").hide();
  $("#question").hide();

  var onClick = function()
  {
    $("#question").hide();
    $("#answer").hide();
    $("#refreshButton").hide();
    theDino.getAnswer();
  };
  
  $("#refreshButton").click( onClick );
});
