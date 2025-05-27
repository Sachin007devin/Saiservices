const guideBtn = document.getElementById("guide-btn");
const guideDiv = document.getElementById("guide-div");
const optionValuetext = document.getElementById("option-value-text");
const dropdown = document.getElementById("drop-down");
const quotetext = document.getElementById("quote-text")
const quotes = [
    "Your comfort is our priority!",
    "Reliable service, every time.",
    "We repair, you relax!",
    "Professional care for your AC.",
    "Cool comfort, hot deals!",
    "Fast. Affordable. Trusted.",
    "Your satisfaction is our success.",
    "Book now, chill later!",
    	"Fixing ACs, building trust.",
        	"Smart solutions for cool living."
];

const handleGuide = () => {
    if (guideBtn.innerText === "Guide") {
        guideDiv.style.display = "block";
        guideBtn.innerText = "Close";
    } else {
        guideDiv.style.display = "none";
        guideBtn.innerText = "Guide";
    }
};

let quoteIndex=0

const rotateQuotes=()=>{
quotetext.innerText=quotes[quoteIndex]
quoteIndex = (quoteIndex+1) % quotes.length
}

guideBtn.addEventListener('click', handleGuide);

dropdown.addEventListener('change', () => {
    let dropdownValue = dropdown.value;
    optionValuetext.innerText = `You chose ${dropdownValue} AC request. Choose an option below to book.`;
});

rotateQuotes()
setInterval(rotateQuotes,4000)


