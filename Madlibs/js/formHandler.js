function write() {
  console.log("Write function is working");3

  //Get all input element values
  var emotion = document.getElementById("emotion").value;
  var activity = document.getElementById("activity").value;
  var name = document.getElementById("name").value;
  var decoration = document.getElementById("decoration").value;
  var adjective = document.getElementById("adjective").value;
  var adjectivee = document.getElementById("adjectivee").value;
  var bigwhat = document.getElementById("bigwhat").value;
  var namee = document.getElementById("namee").value;
  var adjectiveee = document.getElementById("adjectiveee").value;
  var adjectiveeee = document.getElementById("adjectiveeee").value;

  var selectedImage = document.querySelector('input[name="happykid"]:checked');
  var imagePath;
  
  if(selectedImage === "kid"){
    imagePath = "./images/happykid.jpg"; //set mo dito path
  }else{
    imagePath = "./images/sadkid.jpg"; //dito ren
  }

  //Story Part//
  var madLibStory = `<div class="panel light-bg h-100"><h2>Your Story!</h2>
        <img class='m-auto d-block' src=${imagePath}>
        In the heart of Lethbridge, on a bright day, there's a place that always makes people
        ${emotion}. Lethbridge is known for its fun activities like
        ${activity}. It is the spot to visit and enjoy the lovely atmosphere.

        One day,
        ${name} decided to host a Christmas event. They decorated
        ${decoration}
        with garlands and lights, cooked ginger beef plus poutine, and played dodge ball with snow.

        The event was so alive filled with treats and
        ${adjective} games. 

        As the day went on, the Christmas event became even more exciting. The crowd dressed up in funny costumes, and the music played happy tunes. The whole town is filled with 
        ${adjectivee} vibes.
        
        While the people are happy and 
        jouyous, something unexpected happened. A big 
        ${bigwhat}
        appeared!

        All the people were shocked. Everyone ran and searched for a place to hide. ${namee} chose to hide in the bathroom. He/She was so scared! But because he/she is a strong person, he/she was able to overcome it and survived the day.

        It was an adventurous day for everyone. Even though it is somehow scary, the people enjoyed the day a lot because of the experience. Truly one of a kind.

        Lethbridge is really a 
        ${adjectiveee} place, filled with fun, happiness, and ${adjectiveeee}
        If you ever visit, make sure to explore the area and experience the lovely atmosphere. It's a city you'll always remember!</div>`;

        // Display the mad lib story
        document.getElementById("output").innerHTML = madLibStory;
      }
      
      document.getElementById("madLibsForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the default form submission behavior
        write(); // Call your function here (assuming write() is defined in formHandler.js)
      });