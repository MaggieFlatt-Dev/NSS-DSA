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


// ==============================
// Exercise 4: Help Alex Remove Songs Strategically
// ==============================
// Task: Create a function that removes songs using the most efficient method

function removeSongStrategically(setlist, position) {
    let removedSong;
  // If position is "end", use pop (O(1))
  if (position === "end") {
    removedSong = setlist.pop()
  }
  // If position is "beginning", use shift (O(n))
 if (position === "beginning") {
    removedSong = setlist.shift()
 }
  // If position is a number, use splice (O(n))
  if (!isNaN(position)) {
    removedSong = setlist.splice(position, 1) [0]
  }
  
  // Return the removed song
  return removedSong
}

let removalSet = ["Thunderstruck", "Hotel California", "Wonderwall", "Free Bird"];
console.log("Removed from end:", removeSongStrategically(removalSet, "end"));
console.log("Removed from beginning:", removeSongStrategically(removalSet, "beginning"));
console.log("Removed from position 1:", removeSongStrategically(removalSet, 1));
console.log("Final setlist:", removalSet);

// ==============================
// Exercise 5: Help Alex Find Songs for Requests
// ==============================
// Task: Create a function that finds songs matching specific criteria

function findSongsForRequest(repertoire, criteria) {
  // repertoire is an array of song objects with properties like title, genre, mood
  // criteria is an object like { genre: "rock", mood: "energetic" }
  // Return all songs that match ALL the criteria
  return repertoire.filter(song => {
    return Object.keys(criteria).every(key =>
    song[key] && song[key].toLowerCase() === criteria[key].toLowerCase()
  )
  })
}

const alexsRepertoire = [
  { title: "Thunderstruck", genre: "rock", mood: "energetic" },
  { title: "Hotel California", genre: "rock", mood: "mysterious" },
  { title: "Wonderwall", genre: "alternative", mood: "nostalgic" },
  { title: "Tears in Heaven", genre: "ballad", mood: "emotional" }
];

console.log("Rock songs:", findSongsForRequest(alexsRepertoire, { genre: "rock" }));
console.log("Energetic rock:", findSongsForRequest(alexsRepertoire, { genre: "rock", mood: "energetic" }));