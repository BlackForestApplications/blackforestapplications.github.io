// credit: https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9

var itemClassName = "service-item";
var itemTextClassName = "service-text";
items = document.getElementsByClassName(itemClassName),
totalItems = items.length,
itemTexts = document.getElementsByClassName(itemTextClassName),
slide = 0,
moving = true;

// Set classes
function setInitialClasses() {
    // Targets the previous, current, and next items
    // This assumes there are at least three items.  items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
    highlightText();
}

// Set event listeners
function setEventListeners() {
    var next = document.getElementsByClassName('services-slider-next')[0],
        prev = document.getElementsByClassName('services-slider-prev')[0];
    
    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);

}

// Next navigation handler
function moveNext() {
    // Check if moving
    if (!moving) {
        
        // If it's the last slide, reset to 0, else +1
        if (slide === (totalItems - 1)) {
            slide = 0;
        } else {
            slide++;
        }
        
        // Move carousel to updated slide
        moveCarouselTo(slide);
    }
}

// Previous navigation handler
function movePrev() {
    // Check if moving
    if (!moving) {
        
        // If it's the first slide, set as the last slide, else -1
        if (slide === 0) {
            slide = (totalItems - 1);
        } else {
            slide--;
        }

        // Move carousel to updated slide
        moveCarouselTo(slide);
    }
}

// move to specified index position
function moveToIndex(index) {
    // Check if moving
    if (!moving) {
        
        if(index >= totalItems) {
            index = totalItems - 1;
        }
        if(index < 0) {
            index = 0;
        }
        slide = index;

        // Move carousel to updated slide
        moveCarouselTo(slide);
    }
}

function disableInteraction() {
    
    // Set 'moving' to true for the same duration as our transition.
    // (0.5s = 500ms)
    moving = true;
    
    // setTimeout runs its function once after the given time
    setTimeout(function () {
        moving = false
    }, 500);
}

function moveCarouselTo(slide) {
    // Check if carousel is moving, if not, allow interaction
    if (!moving) {
        
        // temporarily disable interactivity
        disableInteraction();
        
        // Update the "old" adjacent slides with "new" ones
        var newPrevious = slide - 1,
            newNext = slide + 1,
            oldPrevious = slide - 2,
            oldNext = slide + 2;
            
        // Test if carousel has more than three items
        if (totalItems > 3) {
            
            // Checks and updates if the new slides are out of bounds
            if (newPrevious <= 0) {
                oldPrevious = (totalItems - 1);
            } else if (newNext >= (totalItems - 1)) {
                oldNext = 0;
            }
            
            // Checks and updates if slide is at the beginning/end
            if (slide === 0) {
                newPrevious = (totalItems - 1);
                oldPrevious = (totalItems - 2);
                oldNext = (slide + 1);
            } else if (slide === (totalItems - 1)) {
                newPrevious = (slide - 1);
                newNext = 0;
                oldNext = 1;
            }
            
            // Now we've worked out where we are and where we're going, 
            // by adding/removing classes we'll trigger the transitions.
            
            // Reset old next/prev elements to default classes
            items[oldPrevious].className = itemClassName;
            items[oldNext].className = itemClassName;

            // Add new classes
            items[newPrevious].className = itemClassName + " prev";
            items[slide].className = itemClassName + " active";
            items[newNext].className = itemClassName + " next";

            //highlight text of visible item
            highlightText();
        }
    }
}

function initCarousel() {
    setInitialClasses();
    setEventListeners();

    // Set moving to false so that the carousel becomes interactive
    moving = false;
}

function highlightText() {
    for(i = 0; i < itemTexts.length; ++i) {
        itemTexts[i].style.fontWeight = "normal";
    }
    itemTexts[slide].style.fontWeight = "bold";
}

initCarousel();

