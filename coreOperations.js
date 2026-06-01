// ==============================
// Exercise 1: Help Alex Access Songs by Position
// ==============================
// Task: Create a function that helps Alex quickly access songs from their setlist

function getSongAtPosition(setlist, position) {
  // Return the song at the given position
  let i = position
  if (i < setlist.length) {
    return setlist[i]
  // Handle invalid positions gracefully
  // Return the string "Position out of bounds" if position is invalid
  } else {
    return "Position out of bounds"
  }
}

const alexsSetlist = ["Wonderwall", "Hotel California", "Blackbird", "Free Bird"];
console.log("Song at position 2:", getSongAtPosition(alexsSetlist, 2));
console.log("Song at position 10:", getSongAtPosition(alexsSetlist, 10));


// ==============================
// Exercise 2: Help Alex Update Their Setlist
// ==============================
// Task: Create a function that updates multiple songs based on audience feedback

function updateSetlistBasedOnFeedback(setlist, updates) {
  // updates is an object like { 0: "New Song", 2: "Another Song" }
  // Update the setlist at the specified positions
Object.keys(updates).forEach((key) => {
   let index = parseInt(key)
   setlist[index] = updates[key]
}) 
  // Hint 1: Object keys are always returned as strings 
  return setlist;
  }

let performanceSet = ["Song A", "Song B", "Song C", "Song D"];
const feedback = { 0: "Thunderstruck", 2: "Don't Stop Believin'" };
updateSetlistBasedOnFeedback(performanceSet, feedback);
console.log("Updated setlist:", performanceSet);

// ==============================
// Exercise 3: Help Alex Add Songs Strategically
// ==============================
// Task: Create a function that adds songs using the most efficient method based on position

function addSongStrategically(setlist, song, position) {
  // If position is "end", use push (O(1))
  if (position === "end") {
    setlist.push(song)
  };
  // If position is "beginning", use unshift (O(n))
   if (position === "beginning") {
    setlist.unshift(song)
  };
  // If position is a number, use splice (O(n))
   if (!isNaN(position)) {
    setlist.splice(position, 0, song)
  };
  // Return the updated setlist
  return setlist
}

let strategicSet = ["Hotel California", "Sweet Child O' Mine"];
addSongStrategically(strategicSet, "Thunderstruck", "beginning");
addSongStrategically(strategicSet, "Free Bird", "end");
addSongStrategically(strategicSet, "Wonderwall", 2);
console.log("Strategic setlist:", strategicSet);
