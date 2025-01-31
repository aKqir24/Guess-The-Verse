const play_button = document.getElementById("play_button")

play_button.onclick = function getRandomVerse(){
    let verse_index = ["1Ch", "2Ch", "Matt", "Luke", "Mark", "Gen", "Deu", "Exo", "Lev", "Rev"];
    let choose_random_verse = verse_index[Math.floor(Math.random() * verse_index.length)];
    let index_number = Number(verse_index.indexOf(`${choose_random_verse}`));
    WriteMainVerse()
    /*
    ? So If an index reaches to the end of the list then it resets to the first,
    ? however, if it does not reach then it continues.
    */

    // Previous Verse
    function WritePreviousVerse() {

    }

    // Main Verse
    function WriteMainVerse(){

        VerseWriteLoop(index_number)


    }


    // Next Verse
    function WriteNextVerse() {

    }

    function MaintainVerseLoop(i) {
        if (i == verse_index.length+1){
            console.log(`Previous Index must be 1`);
            return 1
        } else if (i > verse_index.length){
            console.log(`Previous Index must continue after the start of the list`)
            return i-verse_index.length
        } else if (i == verse_index.length){
            console.log(`Previous Index must continue after the exceeding list`)
            return 0
        } else {
            console.log(`Previous Index must continue`);
            return i;
        }
    }

    function VerseWriteLoop(choice_index){
        for(let i=choice_index; i<=verse_index.length+choice_index-1; i++){
            let maintain_index = MaintainVerseLoop(i);
            console.log(`Verse Index: ${maintain_index} ${verse_index[maintain_index]}`);
            document.getElementById("chosen_verse_text").textContent = `${verse_index[maintain_index]}`;
        }
    }
}
