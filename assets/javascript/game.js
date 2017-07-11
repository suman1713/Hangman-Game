
        var character_list=["Catelyn-Tully","Daenerys-Stormborn-Targaryen","Jon-Snow","Eddard-Stark","Tyrion-Lannister","Bran-Stark","Sansa-Stark","Arya-Stark","Cersei-Lannister","Ser-Jaime-Lannister","Petyr-Baelish","Robert-Baratheon","Ser-Jorah-Mormont","Viserys-Targaryen","Khal-Drogo","Joffrey-Baratheon","Sandor-Clegane","Robb-Stark","Theon-Greyjoy","Tywin-Lannister","Lysa-Arryn","Samwell-Tarly","Renly-Baratheon","Stannis-Baratheon","Rickon-Stark","Rhaegar-Targaryen","Jon-Arryn"];
        var sel_word = character_list[random_number()].toUpperCase();
        console.log(sel_word);
        var sel_word_length = sel_word.length;
        var blanks = "";
        var wins=0, letters_guessed="";
        var life = sel_word_length+1;
        generate_blanks();
        var blanks_array = blanks.split(" ");
        //console.log(blanks_array);



        document.onkeyup = function(event) {
            var userGuess = event.key;
            var userGuess= userGuess.toUpperCase();
            var index_ans = [];

           // console.log(userGuess);
            check_guess();
            
            

            function check_guess() {
                if (sel_word.includes(userGuess)) {
                   // console.log("yes");
                    console.log("Life:" + life);
                    wins=wins+1;
                    letters_guessed=letters_guessed+userGuess+" ";
                    console.log("Wins:"+wins);
                    console.log("Guesses: "+letters_guessed);
                    

                } else {

                   // console.log("no");
                   
                    letters_guessed=letters_guessed+userGuess+" ";
                    console.log("Life:" + life);
                    life = life - 1;
                    if (life==0) {
                      alert("YOU LOSE!!Try NEXT ONE");
                      location.reload();

                    }

                }
                document.getElementById("life").innerHTML ="Life: "+ life;
                document.getElementById("wins").innerHTML ="Wins: "+ wins;
                document.getElementById("words_guessed").innerHTML ="Guessed letters: "+letters_guessed;
                    generate_index();

            }
            ///////////////////////////////////
            function generate_index() {
                for (var i = 0; i < sel_word_length; i++) {
                    if (sel_word[i] === userGuess) index_ans.push(i);
                  
                                  }
               
                      for (var i = 0; i < index_ans.length; i++) {
                         
                          blanks_array[index_ans[i]] = userGuess;

                      }

               // console.log(blanks_array.join(" "));
                document.getElementById("random-number").innerHTML = blanks_array.join(" ");
                
                //console.log(blanks_array.length);

            }
             wordcomplete();
             console.log(blanks_array.join(" ").indexOf("_"));
            }
            ////////////////////////////////
            function wordcomplete(){

              var wordcheck=blanks_array.join(" ");
              if (wordcheck.indexOf("_") ===-1)
                        {
                          alert("YOU WIN!!!");
                                      location.reload();

                        }
                                     


              }
            




        




        ////////////////////////////FUNCTIONS

        function generate_blanks() {
            for (var i = 0; i < sel_word_length; i++) {
                blanks = blanks + "_ ";
            }
            document.getElementById("random-number").innerHTML = blanks;
        }

        function random_number(){
          var num=Math.floor((Math.random() * 27) + 1);
          return num;
        }

        

    