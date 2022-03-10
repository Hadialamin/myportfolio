
var typed = new Typed('.animate', {
  strings:
   [
     "Web Devoloper",
     "Freelancer",
     "Web Designer",
     "Programmer",
     "Content Creator",
    ],
    loop: true,
  typeSpeed: 30,
  backSpeed: 50,
});


// Get the modal
var modal = document.getElementById('mod');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const counters = document.querySelectorAll('.counter');
const speed = 120;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});




$(document).ready(function(){
    $('.item').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.itembox').show('1000');
        }
        else {
            $('.itembox').not('.'+value).hide('1000');
            $('.itembox').filter('.'+value).show('1000');
        }
       
    }) 
    $('.item').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    })
})

