var swords = [
    "images/sword1.png",
    "images/sword2.png",
    "images/sword3.png",
    "images/sword4.png", 
    "images/sword5.png"
]

var bows = [
    "images/bow1.png",
    "images/bow2.png",
    "images/bow3.png",
    "images/bow4.png", 
    "images/bow5.png"
]

var shields = [
    "images/shield1.png",
    "images/shield2.png",
    "images/shield3.png",
    "images/shield4.png", 
    "images/shield5.png"
]
var monsters = [
    "images/mons1.png",
    "images/mons2.png",
    "images/mons3.png",
    "images/mons4.png", 
    "images/mons5.png"
]

var randomCompliments = [
    'stupefacent',
    'superb',
    'marvelous',
    'OH-MY-GOD kind of',
    'fragolouse',
    'tasty',
    'random',
    'shieldy'
]



var random5 = function(){
    return Math.floor(Math.random() * 5 )
    };

var random8 = function(){
    return Math.floor(Math.random() * 8)
    };
var firstDesc = document.getElementById('firstDesc');
var firstSquare = document.getElementById('first');
var secondSquare = document.getElementById("second");
var thirdSquare = document.getElementById("third");
var fourthSquare = document.getElementById("fourth");
var fourthv2Square = document.getElementById("fourthv2")
var square4v2 = document.getElementById("square4v2")
var fifthSquare = document.getElementById("fifth");
var resetButton = document.getElementById("resetButton");
var square5 = document.getElementById('square5')
var square2 = document.getElementById('square2')
var square4 = document.getElementById('square4v1')


var firstBossBeaten = false
var monsterWipe = 0
var secondBossBeaten = 0
var finalRound = false
var level = 0

// ritorni l'url di un mostro random
var monsterRandom = function (){
    return monsters[random5()]
}

// ritorni una sword random
var swordRandom = function (){
    return swords[random5()]
}
// ritorni un shield random
var shieldRandom = function (){
    return shields[random5()]
}
// ritorni un bow random
var bowRandom = function (){
    return bows[random5()]
}

// ritorni un compliment random
var randomCompliment = function (){
    return randomCompliments[random8()]
}
// ritorni una death random
var randomDeath = function (){
    return randomDeaths[random5()]
}

var resetClasses = function (){
    firstSquare.className = ''
    secondSquare.className = 'L'
    thirdSquare.className = ''
    fourthSquare.className = 'L'
    fourthv2Square.className = 'L'
    fifthSquare.className = ''
}

var randomDeaths = [
    'At the very beginning of the first step after you pick up the weapon you fall down to the gorund. In just few seconds you realise that the choice you just made was so bad that your own body just suicided for his own will.',
    'Mara Maionchi comes behind you and stabs you with an Hip Fire card from Artifact. You die after few minutes of struggle, remembering that you should think before playing cards (and card games).',
    'Carlo, who was supposed to heal you, decides that you were out of range. Your HP reach 0 and you die.',
    `Matteo, who was supposed to protect you, claims that he had lag. And that Serral's victory at the last Blizzcon is <strong>"${randomCompliment()}"</strong>. You die disemboweled by the enemies while your tank is alt-tabbing on a SC2 match.`,
    "The game decides that you need to waste 20 more minutes of your life trying again the same level over and over, just because, so... You die."
]

    const randomizeStart = function (){
        firstSquare.src = swordRandom()
        secondSquare.src = shieldRandom()
        thirdSquare.src = bowRandom()
        fourthSquare.src = "images/random.png"
        fifthSquare.src = "images/restart.png"
        fourthv2Square.src = monsterRandom()
    }


randomizeStart()


// LEVEL 0
// SQUARE ONE - SWORD
        // LISTENER MOUSEOVER 
        firstSquare.addEventListener("mouseover", function(){
            if (level === 0) {
                firstDesc.innerText = "A sword!!"
                document.getElementById('story').innerHTML += "You looked at a sword. "
            } else if (level === 1) {
                firstDesc.textContent = "Another sword!"
                document.getElementById('story').innerHTML += "You looked at another sword. "
            } else if (level === 2){
                firstDesc.textContent = "An enemy!"
                document.getElementById('story').innerHTML += `You see an enemy! `
            } else if (level === 3){
                firstDesc.textContent = "A shield!! "
                document.getElementById('story').innerHTML += `You looked at a <strong>${randomCompliment()}</strong> shield. `
            } else if (level === 4){

            }
        })
        // LISTENER MOUSEOUT 
        firstSquare.addEventListener("mouseout", function(){
            firstDesc.textContent = ""
           })
       
        // LISTENER ON CLICK 
        firstSquare.addEventListener("click", function(){
            if (level === 0) {
                if (this.classList.contains('L')) {
                    deathReason()
                    youLost()
                    console.log('still lv0!!')
                } else {
                    
                
                firstSquare.src = swordRandom()
                this.classList.add('L')
                document.getElementById('story').innerHTML += "You picked a sword. "

                // sparisce il quarto square e viene rimpiazzato dal monster, 

                square4.style.display = "none"
                document.getElementById("square4v2").style.display = "block"



                if (this.classList.contains('L') && thirdSquare.classList.contains('L')) {
                    document.getElementById('story').innerHTML += "You move on to the next part. <br><br> "
                    // sparisce il quinto square e viene rimpiazzato dal monster, il quarto square non ha piu 'L' 
                    fifthSquare.src = monsterRandom()
                    level = 1
                }

            

                }
            } else if (level === 1) {
                if (this.classList.contains('L')) {
                    youLost()
                    document.getElementById('story').innerHTML +=  "<br><br>Your greed makes you pick up another weapon and while you're comparing it to the older one you realise that you're getting overwhelmed by enemies. You died because of your sins, praise Jesus Christ. <br><br> "

                }
                
            } else if (level === 2) {
                youLost()
                document.getElementById('story').innerHTML += "<br><br>This particular Monster decides to challange you to death in a competitive MTG game. You accept, thinking that your naya value creatures deck could win whatever pairing, but in the first two rounds the enemy calls the judge four times, three of them ending up with a warning for you. You lose the game due to rules. And you die."

            } else if (level === 3) {
                secondBossBeaten = 3
                youLost()
                finalRound = false
                document.getElementById('story').innerHTML += `<br><br>This game sometimes is all about luck, you may be super skilled but if you can't find the right weapons you just.. Die. Apparently the odds today aren't with you. Sorry mate (or materess, in case you're a lady.)`
                
            } else if (level === 4) {

            }
        })
        

    // SQUARE TWO - SHIELD
    // LISTENER MOUSEOVER AND MOUSEOUT

    secondSquare.addEventListener("mouseover", function(){
        if (level === 0) {
            secondDesc.textContent = "A shield!! "
            document.getElementById('story').innerHTML +=  `You looked at a <strong>${randomCompliment()}</strong> shield. `
        } else if (level === 1) {
            secondDesc.textContent = "Uuuuh a shield!!"
            document.getElementById('story').innerHTML += `You looked at a <strong>${randomCompliment()}</strong> shield. `
        } else if (level === 2) {
            secondDesc.textContent = "An enemy!"
            document.getElementById('story').innerHTML += `You see an enemy! `
        } else if (level === 3) {
            secondDesc.textContent = "A shield!! "
            document.getElementById('story').innerHTML += `You looked at a <strong>${randomCompliment()}</strong> shield. `
            
        } else if (level === 4) {

        }

       })
    secondSquare.addEventListener("mouseout", function(){
        secondDesc.textContent = ""
       })

       // LISTENER ON CLICK 
    secondSquare.addEventListener("click", function(){
        if (level === 0) {

            if (this.classList.contains('L')) {
                
                youLost()       
            }
            document.getElementById('story').innerHTML +=  `<br><br>You picked shitty shield. You go ahead onto the next part of the level, but ${randomDeath()} You then assume, even tho it's too late, that the shield is a really bad weapon in this game. `
        
        } else if (level === 1) {
            if (this.classList.contains('L')) {
                youLost()
            }
            document.getElementById('story').innerHTML += `<br><br>You picked shitty shield. You go ahead onto the next part of the level, but ${randomDeath()} You then assume, even tho it's too late, that the shield is a really bad weapon in this game. `

        } else if (level === 2) {
            if (monsterWipe === 1) {
                    hideAllSecondBoss()
            }
            square2.style.opacity = '0'
            this.style.height = '0px'
            monsterWipe = 1
            document.getElementById('story').innerHTML += `<br><br>Monster N°2 heard about the racist joke you made earlier and is quite disappointed. He goes away to avoid starting a conversation that would make this game a little weird. `




        } else if (level === 3) {
            secondBossBeaten = 3
            youLost()
            finalRound = false
            document.getElementById('story').innerHTML += `<br><br>This game sometimes is all about luck, you may be super skilled but if you can't find the right weapons you just.. Die. Apparently the odds today aren't with you. Sorry mate (or materess, in case you're a lady.)`

        } else if (level === 4) {

        }
        
    })

    // SQUARE THREE - BOW
    // LISTENER MOUSEOVER AND MOUSEOUT
    thirdSquare.addEventListener("mouseover", function(){
        if (level === 0) {
            thirdDesc.textContent = "A bow!!"
            document.getElementById('story').innerHTML +=  "You looked at a bow. "
        } else if (level === 1) {
            thirdDesc.textContent = "Another bow!!"
            document.getElementById('story').innerHTML += "You looked at another bow. "
        } else if (level === 2) {
            thirdDesc.textContent = "An enemy!"
            document.getElementById('story').innerHTML += `You see an enemy! `
        } else if (level === 3) {
           thirdDesc.textContent = "A shield!! "
            document.getElementById('story').innerHTML += `You looked at a <strong>${randomCompliment()}</strong> shield. `
        } else if (level === 4) {

        }
       })

       thirdSquare.addEventListener("mouseout", function(){
        thirdDesc.textContent = ""
       })
    
       // LISTENER ON CLICK 
       thirdSquare.addEventListener("click", function(){
           if (level === 0) {
            if (this.classList.contains('L')) {
                deathReason()
                youLost()       
            } else {
            thirdSquare.src = bowRandom()
            this.classList.add('L')
            document.getElementById('story').innerHTML +=  "You picked a bow. "
            // sparisce il quarto square e viene rimpiazzato dal monster, 
        
            square4.style.display = "none"
            document.getElementById("square4v2").style.display = "block"
        
            if(this.classList.contains('L') && firstSquare.classList.contains('L')){
                document.getElementById('story').innerHTML +=  "You move on to the next part. <br><br> "
                // sparisce il quinto square e viene rimpiazzato dal monster, il quarto square non ha piu 'L' 
                fifthSquare.src = monsterRandom()
                level = 1
            }
            }
           } else if (level === 1) {
               if (this.classList.contains('L')) {
                   youLost()
                   document.getElementById('story').innerHTML +=  "<br><br>Your greed makes you pick up another weapon and while you're comparing it to the older one you realise that you're getting overwhelmed by enemies. You died because of your sins, praise Jesus Christ. <br><br> "
               }
            } else if (level === 2) {
                youLost()
                document.getElementById('story').innerHTML += "<br><br>The enemy looks strong, but you do not fear him. <i>'TAKE OUT YOUR SWORD AND KILL HIMM!!' </i> you say to yourself, trying to find the courage that looks like is hiding from you. But at last, when the enemy spots you, you feel as brave as you've ever been, and start to charge at the enemy.<br>There's only one problem, that in the fifth square you see a shield, and you start to think if it would be a good choice to pick it up, since it looks like more 'Super' than ever. This distraction in your mind let the enemy strike you first, and you die. Yes, the shield killed you even when you don't pick it up.<br><br>Effing shield. " 
           } else if (level === 3) {
               secondBossBeaten = 3
               youLost()
               finalRound = false
               document.getElementById('story').innerHTML += `<br><br>This game sometimes is all about luck, you may be super skilled but if you can't find the right weapons you just.. Die. Apparently the odds today aren't with you. Sorry mate (or materess, in case you're a lady.)`

           } else if (level === 4) {

           }
    })
    // SQUARE FOUR - RANDOM
        // LISTENER MOUSEOVER AND MOUSEOUT
        fourthSquare.addEventListener("mouseover", function(){
            if (level === 0) {
                fourthDesc.textContent = "Random weapon!"
                document.getElementById('story').innerHTML +=  `Who knows what will be there! `
            } else if (level === 1) {

            } else if (level === 2) {
                fourthDesc.textContent = "An enemy!"
                document.getElementById('story').innerHTML += `You see an enemy! `
            } else if (level === 3) {
                fourthDesc.textContent = "A shield!! "
                document.getElementById('story').innerHTML += `You looked at a <strong>${randomCompliment()}</strong> shield. `
            } else if (level === 4) {

            }

           })
           fourthSquare.addEventListener("mouseout", function(){
            fourthDesc.textContent = ""
           })
       
           // LISTENER ON CLICK 
           fourthSquare.addEventListener("click", function(){
               if (level === 0) {
            if (this.classList.contains('L')) {
                deathReason()
                youLost()       
            }
            document.getElementById('story').innerHTML +=  `<br>You then assume, even tho it's too late, that picking random is a bad choice. You need strategy behind your choices. YES, I'M LOOKING AT YOU. JUST PICK ONE AND GO FOR IT. `
        
               } else if (level === 1) {

               } else if (level === 2) {
                   if (monsterWipe === 1) {
                           hideAllSecondBoss()
                           monsterWipe = 3
                   } 
                   document.getElementById('story').innerHTML += `<br>Baguettes, baguettes and croissant all over the floor. You killed the monster and the "blood" option you choose for the game makes it look like a french pastery all over the place where it should be a German butchery. `
                   square4.style.opacity = '0'
                   this.style.height = '0px'
                   monsterWipe = 1
                   
                   
               } else if (level === 3) {
                   secondBossBeaten = 3
                   finalRound = false
                   youLost()
                   document.getElementById('story').innerHTML += `<br><br>This game sometimes is all about luck, you may be super skilled but if you can't find the right weapons you just.. Die. Apparently the odds today aren't with you. Sorry mate (or materess, in case you're a lady.)`

               } else if (level === 4) {

               }
        })
    // SQUARE FOURv2 - MONSTER
        // LISTENER MOUSEOVER AND MOUSEOUT
        fourthv2Square.addEventListener("mouseover", function(){
            if (level === 0) {
                fourthv2Desc.textContent = "An enemy!"
                document.getElementById('story').innerHTML +=  `You see an enemy! `
            } else if (level === 1) {
                fourthv2Desc.textContent = "An enemy!"
                document.getElementById('story').innerHTML += `You see an enemy! `
            } else if (level === 2) {

            } else if (level === 3) {

            } else if (level === 4) {

            }
           })

           fourthv2Square.addEventListener("mouseout", function(){
            fourthv2Desc.textContent = ""
           })
       
           // LISTENER ON CLICK 
           fourthv2Square.addEventListener("click", function(){
               if (level === 0) {
                    if (this.classList.contains('L')) {
                            youLost()       
                        }
                document.getElementById('story').innerHTML +=  `<br><br>You decide to bravely fight the monster. Problem is that you don't have the right equipement to fight it yet. You die.`
                            
               } else if (level === 1) {
                if (square5.style.opacity === '0'){
                    hideAllfirstBoss()
                    console.log('first boss!!')
                } else {

                    square4v2.style.opacity = '0'
                    this.style.height = '0px'
                    document.getElementById('story').innerHTML += `<br><br>You decide to bravely fight the monster. You stab it with your bow and throw your sword at it. Nicely done, the monster has pity for you and runs away! `
 
                }
               } else if (level === 2) {
                  
               } else if (level === 3) {

               } else if (level === 4) {

               }

            
        })
    
    // SQUARE FIVE - RESET
        // LISTENER MOUSEOVER AND MOUSEOUT
        fifthSquare.addEventListener("mouseover", function(){
            if (level === 0) {
                fifthDesc.textContent = "Reset the game"
            } else if (level === 1) {
                fifthDesc.textContent = "An enemy!"
                document.getElementById('story').innerHTML += `You see an enemy! `
            } else if (level === 2) {
                fifthDesc.textContent = "WHAT-A-SHIELD!!"
                document.getElementById('story').innerHTML += `You looked at a <strong><i>SUPER </i>${randomCompliment()}</strong> shield. `
            } else if (level === 3) {
                fifthDesc.textContent = "A shield!! "
                document.getElementById('story').innerHTML += `You looked at a <strong>${randomCompliment()}</strong> shield. `
            } else if (level === 4) {

            }
           })
           fifthSquare.addEventListener("mouseout", function(){
            fifthDesc.textContent = ""
           })
       
           // LISTENER ON CLICK 
           fifthSquare.addEventListener("click", function(){
               if (level === 0) {
                   reset()      
               } else if (level === 1) {
                   if (square4v2.style.opacity === '0'){
                    console.log('first bossss!!')
                    hideAllfirstBoss()
                   } else {

                    square5.style.opacity = '0'
                    this.style.height = '0px'
                    document.getElementById('story').innerHTML += `<br><br>You decide to bravely fight the monster. You stab it with your bow and throw your sword at it. Nicely done, the monster has pity for you and runs away!`
    
                   }
               } else if (level === 2) {
                   youLost()
                   document.getElementById('story').innerHTML += "<br><br>At this point I'm not even sure if you're just doing this because you want to die, or you saw too much South Park with Kenny and you want to copycat him. DO NOT TRUST THE SHIELD, EVER!"
               } else if (level === 3) {
                   secondBossBeaten = 3
                   finalRound = false
                   youLost()
                   document.getElementById('story').innerHTML += `<br><br>This game sometimes is all about luck, you may be super skilled but if you can't find the right weapons you just.. Die. Apparently the odds today aren't with you. Sorry mate (or materess, in case you're a lady.)`

               } else if (level === 4) {

               }
                
        })


resetButton.addEventListener("click", function(){
    reset()       
})

const deathReason = function(){
    document.getElementById('story').innerHTML += `<br><br>${randomDeath()}`
}

const youLost = function(){
    console.log("you lost!")
    level = 'L'
    document.getElementById('backgroundwhite').style.background = 'rgb(255, 51, 0, .4)'
    document.getElementById('resetButton').className = 'btn btn-danger'
}

const reset = function(){
    console.log('you just reset the game')
    randomizeStart()
    level = 0
    resetClasses()
    square2.style.opacity = '100'
    secondSquare.style.height = '75px'
    square4.style.display = "block"
    square4.style.opacity= '100'
    fourthSquare.style.height = '75px'
    document.getElementById("square4v2").style.display = "none"
    square4v2.style.opacity = '100'
    fourthv2Square.style.height = '75px'
    square5.style.opacity = '100'
    fifthSquare.style.height = '75px'
    fifthSquare.src = "images/restart.png"
    document.getElementById('story').innerHTML = `This is your story. You turn on your Playstation 4 and select Dead Cells, hit start and... let's begin!<br><br>`
    document.getElementById('backgroundwhite').style.background = 'rgb(228, 228, 228, .7)'
    document.getElementById('resetButton').className = 'btn btn-dark'
    document.getElementById('boss1Img').src = 'images/boss1.png'
    monsterWipe = 0
}





// creare la funzione youLost(), dove si cambia lo sfondo e si da interesse alla storia. 
    //I pulsanti spariscono o magari rimane solo uno e non possono avere funzionalita' se non quella di reset

    // CREA UN VAR DI LOSS CHE QUANDO FINISCI IL GIOCO TI DICE QUANTE VOLTE SEI MORTO, E UN VAR CHE CHECKA SE HA MAI PRESO LO SHIELD, NEL CASO NON LO ABBIA FATTO CONSIGLIAGLI DI PROVARLO

// lv2 boss, loses, quando tornerai al boss questi ti fara' vincere.
//lv3 sq1L(mon) sq2W(mon) sq3L(mon) sq4W(mon) sq5L(shield)
//lv4 boss finale, loses, quando tornerai al boss questi ti battera' di nuovo e poi una terza volta ti fara' vincere .

var hideAllfirstBoss = function(){
    // firstSquare.style.display = 'none'
    // secondSquare.style.display = 'none'
    // thirdSquare.style.display = 'none'
    // fourthSquare.style.display = 'none'
    // fourthv2Square.style.display = 'none'
    // fifthSquare.style.display = 'none'
    // document.getElementById('buttonContainer').style.display = 'none'
    // document.getElementById('storyContainer').style.display = 'none'
    document.getElementById('backgroundwhite').style.display = 'none'
    document.getElementById('backgroundBoss').style.display = 'block'
    
}

var hideAllSecondBoss = function(){
    // firstSquare.style.display = 'none'
    // secondSquare.style.display = 'none'
    // thirdSquare.style.display = 'none'
    // fourthSquare.style.display = 'none'
    // fourthv2Square.style.display = 'none'
    // fifthSquare.style.display = 'none'
    // document.getElementById('buttonContainer').style.display = 'none'
    // document.getElementById('storyContainer').style.display = 'none'
    document.getElementById('backgroundwhite').style.display = 'none'
    document.getElementById('backgroundBoss').style.display = 'block'
    document.getElementById('fightButton2').style.display = 'block'
    document.getElementById('fightButton').style.display = 'none'
    document.getElementById('boss1Img').src = 'images/boss2.png'
    document.getElementById('textStory2').innerHTML = "Hey! It has been a joke to come here, right? Cmon, the last boss is waiting for you. <br><br><strong>Gotta Catch 'em All!</strong>"


    
}

document.getElementById('fightButton').addEventListener('click', function(){
    console.log('outside the final round if statement')
    if (finalRound === true) {
        console.log('inside the final round if statement')
        backTotheStart()
        reset()
        level = 3
        firstSquare.src = shieldRandom()
        secondSquare.src = shieldRandom()
        thirdSquare.src = shieldRandom()
        fourthSquare.src = shieldRandom()
        fifthSquare.src = shieldRandom()
        monsterWipe = 0
        return
    }
    document.getElementById('story2').style.width = "100%"
    document.getElementById('boss1Img').style.display = "none"
    document.getElementById('textStory2').innerHTML = "<i>Even more, I had never meant to love him. One thing I truly knew - knew it in the pit of my stomach, in the center of my bones, knew it from the crown of my head to the soles of my feet, knew it deep in my empty chest - was how love gave someone the power to break you.</i> <br><br> Yes, it's a Stephenie Meyer's quote from Twilight. Yes, it means that you're in hell, and to get there you must be dead so... Good luck for the next time man! (or gurl, we ain't assumin' your gender here at Lillacorp©!!)"
    document.getElementById('fightButton').style.display = "none"
    document.getElementById('tryAgainButton').style.display = "block"
  if (firstBossBeaten) {
        backTotheStart()
        reset()
        level = 2
        firstSquare.src = monsterRandom()
        secondSquare.src = monsterRandom()
        thirdSquare.src = monsterRandom()
        fourthSquare.src = monsterRandom()
        fifthSquare.src = shieldRandom()
        document.getElementById('story').innerHTML = "You beat the first boss! You're almost there to the end of the game, go for it!!<br><br>"
    } 
})


document.getElementById('fightButton2').addEventListener('click', function(){
    if (secondBossBeaten === 0){
        document.getElementById('story2').style.width = "100%"
        document.getElementById('boss1Img').style.display = "none"
        document.getElementById('textStory2').innerHTML = "It's the big final battle. Carlo's healing you, Matteo is pushing the lanes with the lost vikings, Miso is assassinating every enemy treath, Visinoskij is providing utility to everyone and you're the best DPS ever. <br> <br>Then you open your eyes and see the truth: Carlo <strong>should</strong> be healing, Matteo is waiting minute <strong>10</strong> to start being helpful, Miso is <strong>reconnecting</strong>, Visinoskij is stealing the MVP while being on <strong>Whatsapp</strong> and you're the only one caring about the game, trying to <strong>carry those noobs</strong>. Too bad it didn't work. Demoted to <strong>Bronze V</strong>."
        document.getElementById('fightButton2').style.display = "none"
        document.getElementById('tryAgainButton').style.display = "block"
        secondBossBeaten = 1
    } 
    else if (secondBossBeaten === 1){
        document.getElementById('fightButton2').style.display = "none"
        document.getElementById('tryAgainButton').style.display = "block"
        document.getElementById('story2').style.width = "100%"
        document.getElementById('boss1Img').style.display = "none"
        document.getElementById('textStory2').innerHTML = "Here we are again, this time you're prepared. No cats to interrupt you, no phonecalls to be expected. You go ahead to start the fight, and you ALMOST reach the end of the boss, but man it is way too hard. I'm sure next time you'll make it! <br> <br> TLDR: You die because I want you to."
        secondBossBeaten = 2
    } else if (secondBossBeaten === 3) {
        document.getElementById('fightButton2').style.display = "none"
        document.getElementById('verdictButton').style.display = "block"
        document.getElementById('story2').style.width = "100%"
        document.getElementById('boss1Img').style.display = "none"
        document.getElementById('backgroundBoss').style.background = '#00cc00'
        document.getElementById('textStory2').innerHTML = "<i>Dam dam dadaammmm!</i> You made it! You killed the final boss! You decide to throw on the ground the auto-attacking ranged weapons, then you decide to jump around and wait for them to make the job while you drink your potions whenever needed and protect yourself with a shield.<br> <br><strong>A shield.</strong><br><br> Yes, I'll admit it. I finished the game with a shield. Fact is that it helps to absorb some damage while the auto-weapons do the job. It was all a big Lie. No-cake-included. <br><br>Actually I should have put more bosses and more random deaths, but I'm good and I'll let you finish it here. <br>If you want to die more just play the actual game!"

    }

})


document.getElementById('verdictButton').addEventListener('click', function () {
    document.getElementById('ending').style.visibility = 'visible'
})

document.getElementById('tryAgainButton').addEventListener('click', function(){
    if (secondBossBeaten === 2){
        backTotheStart()
        firstBossBeaten = true
        reset() 
        console.log(level)
        finalRound = true
    } else {
        backTotheStart()
        firstBossBeaten = true
        reset()
    }
})


var backTotheStart = function (){
    document.getElementById('story2').style.width = "400px"
    document.getElementById('boss1Img').style.display = "block"
    document.getElementById('textStory2').innerHTML = "Bodonni bodonni, after all your efforts you reach another site, where a tremendous enemy awaits you!<br><br> Are you ready to <strong>d-d-duel??</strong><br><br>"
    document.getElementById('tryAgainButton').style.display = "none"
    document.getElementById('fightButton').style.display = "block"
    document.getElementById('backgroundwhite').style.display = 'block'
    document.getElementById('backgroundBoss').style.display = 'none'
}


document.getElementById('lilaClick').addEventListener("mouseover", function () {
    document.getElementById('whiteRow').style.height = '220px'
    document.getElementById('lilacDesc').style.opacity = 1
})

document.getElementById('lilaClick').addEventListener("mouseout", function () {
    document.getElementById('whiteRow').style.height = '170px'
    document.getElementById('lilacDesc').style.opacity = 0
    
})


if (level === 0) {

} else if (level === 1) {

} else if (level === 2) {

} else if (level === 3) {

} else if (level === 4) {

}