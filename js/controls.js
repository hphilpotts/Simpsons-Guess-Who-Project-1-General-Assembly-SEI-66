//Reset all! Runs when 'New Game' button is clicked.
$('#new-game').click(function(){
    location.reload();
})

// Show/hide dropdown menus to keep interface less cluttered
function showLeftMenu(){
    const menu = $('#dropdown-left');
    menu.slideToggle();
}
function showRightMenu(){
    const menu = $('#dropdown-right');
    menu.slideToggle();
}

// Hide character images to simulate flipping down eliminated characters:
$('.box img').click(function(){
    $(this).fadeToggle('fast', 'linear'); // No show, just hide...?
    document.getElementById('fold').play(); // Snappy sound effect 
    }
);

// Show/hide character cards to allow player to answer:
$('.card').click(function(){
    document.getElementById('flip').play(); // Reveals/hides mystery card
    $(this).children('img').toggleClass('hidden'); // SFX
    }
);

// Show/hide rules box when 'Rules' button is clicked.
document.getElementById('rules').addEventListener('click', function(){
    let hideThis = document.getElementById('ruleBox');
    hideThis.classList.toggle('hidden');
});