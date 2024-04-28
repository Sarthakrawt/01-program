
      let object = JSON.parse(localStorage.getItem('object'))
        || {win : 0,
        loss: 0,
        tie: 0}; 
       scoreupdate();
     
      function scoreupdate(){
        document.querySelector('.js-score').innerHTML =` wins :${object.win} loss : ${object.loss} tie :${object.tie}`;
      }

      function play(playermove){
          const computermove = stppss();
          let result = '';
          if(playermove === 'scissors'){
              if(computermove === 'scissors'){
                  result ='Tie.';
              }else if(computermove === 'rock'){
                  result ='You loss.';
              }else if(computermove === 'paper'){
                  result ='You win.';
              }
          }
          if(playermove === 'rock'){
              if(computermove === 'rock'){
                  result ='Tie.';
              }else if(computermove === 'paper'){
                  result ='You loss.';
              }else if(computermove === 'scissors'){
                  result ='You win.';
              }
          }
          if(playermove === 'paper'){
              if(computermove === 'paper'){
                  result ='Tie.';
              }else if(computermove === 'scissors'){
                  result ='You loss.';
              }else if(computermove === 'rock'){
                  result ='You win.';
              }
              
          } if(result === 'You win.'){
              object.win += 1;
          } else if(result === 'You loss.'){
              object.loss += 1;
          }else{
              object.tie += 1;
          }
          localStorage.setItem('object',JSON.stringify(object));
           document.querySelector('.js-result').innerHTML =result;
           document.querySelector('.js-moves').innerHTML =`you <img src ="Rockpaper-scissior/${playermove}-emoji.png" alt="playermove" class="player">  and computer <img src ="Rockpaper-scissior/${computermove}-emoji.png"class="computer">`;
          scoreupdate();
      }
     
 
      function stppss(){
          const randomNum = Math.random();
          let computermove ='';
      if(randomNum>=0 && randomNum < 1/3){
      computermove ='rock';
      return computermove;
      }
      else if(randomNum >= 1/3 && randomNum < 2/3){
      computermove ='paper';
      return computermove;
      }else if(randomNum >= 2/3 && randomNum < 1){
        computermove='scissors';
        return computermove;
      }
      }
