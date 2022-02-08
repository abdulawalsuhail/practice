function makeRed(){
    document.body.style.backgroundColor='red';
}

// handle blue button click by setting function name
const blueButton = document.getElementById('blue-button');
        // just set the name of the function
        blueButton.onclick=makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor='blue'
        }

        // handle event using anonymous function

const greenButton = document.getElementById('green-button');

        //   anonymous function
          greenButton.onclick = function(){
            document.body.style.backgroundColor = 'green'
          }        

        //handle by using add eventlisenter
const goldenrodButton = document.getElementById('goldenrod-button');
        goldenrodButton.addEventListener('click', makeGoldenRod);
  
        function makeGoldenRod(){
            document.body.style.backgroundColor = 'goldenrod'
        }        

        // addEvenlistener
const hotpinkButton = document.getElementById('hotpink-button');
        hotpinkButton.addEventListener('click', function(){
            document.body.style.backgroundColor = 'hotpink'
        })

        // direct shortcurt 
document.getElementById('light-blue').addEventListener('click', function(){
            document.body.style.backgroundColor = 'lightblue'
        })        