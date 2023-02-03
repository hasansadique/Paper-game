let selectButtons = document.querySelectorAll("[data-selection]")
const finalColumn = document.querySelector(["data-final-column"])
const computerScoreSpan = document.querySelector(["data-computer-score"])
const yourScoreSpan = document.querySelector(["data-your-score"])
const Selections = [
    {
        name: "rock",
        img: "rock.jpg",
        beats: "scissor"
    },
    {
        name: "paper",
        img: "paper.jpg",
        beats: "rock"
    },
    {
        name: "scissor",
        img: "scissor.jpg",
        beats: "paper"
    },
]
selectButtons.forEach((selectButton) => {
    selectButton.addEventListener("click", (e) => {
        const selectName = selectButton.dataset.selection;
        const selection = Selections.find(select => select.name === selectName)
        makeSelect(selection)
    })
})
const makeSelect = (select) => {
    const compSelection = randomNum()
    const youWinner = checkWin(select, compSelection)
    const compWinner = checkWin(compSelection, select)
    addSelectResult(compSelection, compWinner)
    addSelectResult(select, youWinner)
    if (youWinner) incrementScore(yourScoreSpan)
    if (compWinner) incrementScore(computerScoreSpan)
}
function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

const addSelectResult = (select, winner) => {
    const div = document.createElement("div")
    div.style.backgroundImage = select.img
    div.classList.add("chance")
    if (winner) div.classList.add("winner")
    finalColumn.after(div)
}

const checkWin = (select, compSelect) => {
    return select.beats === compSelect.name
}
const randomNum = () => {
    const randomInd = Math.floor(Math.random() * Selections.length)
    return Selections[randomInd]
}


