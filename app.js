const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
};

// Home State
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML =
   `
  <section id="showcase">
    
    <div class="showcaseDiv">
     
      <h1 class="showcaseH1">Help Us Find Our Homie</h1>

      <p class="showcaseParagraph">
        This fool is missing and we need your help to find him.
      </p>
      
    </div>

    <div class="showcaseDiv2">

      <div class="imgDiv">
        <img src="img/fintech.jpg" class="fintechImg">
      </div>

    </div>
    
</section>

  `;
};

// About State
const aboutState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML =
   `
    
    <div class="aboutDiv">
    <h2>About</h2>
    <p>This dude is has been missing since march 11, 2019. He could be lost in the Canadian wilderness, tied up in some dudes bed, trapped in a VR game, or coding naked in his mom's basement. Someone out there knows something, and we need your help.
    </div>
    <div class="aboutContainer2">
    <div class="aboutDiv2">
      <h3>You could see this fool doing one of these activites</h3>
      <div class="activities"><img src="img/hockey.gif"><h4>Hockey</h4></div>
      <div class="activities"><img src="https://media.giphy.com/media/S1mahwABoPUAw/giphy.gif"><h4>Lifting</h4></div>
      <div class="activities"><img src="img/coding.gif"><h4>Coding</h4></div>
      <div class="activities"><iframe width="100%" src="https://www.youtube.com/embed/5LlQNty_C8s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h4>Deez nutz. Got'em! Haha!!</h4></div>
    </div>
    </div>
`;
};

// Contact State
const contactState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = 
  `
  <div class="contactContainer" id="contact">

    <h2 class="contactH2">Contact Us</h2>

    <div class="contactFormDiv">
    
              
        <form method="post" action="parser.php">
            <input type="text" name="name" placeholder="Enter your name" id="name">
            <input type="email" name="email" placeholder="Enter your email" id="email">
            <textarea type="text" name="message" placeholder="Enter your message" id="message"></textarea>

            <input type="submit" name="submit" value="Submit" id="submit">
        </form>
    </div> <!--contactForm-->

                 
</div><!--contactContainer-->
`;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
  page.change(new contactState);

  e.preventDefault();
});