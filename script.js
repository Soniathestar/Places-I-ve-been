function Place(location, timeOfYear, landmarks, notes){
  this.location = location;
  this.timeOfYear = timeOfYear;
  this.landmarks = landmarks;
  this.notes = notes;
}

let places = []

function renderEmptyState(){
  return`
  <div class="emptystate">
  <h2> Glimpse of memories</h2>
  <p> Add a new location to get started </p>
  </div>`;
}

function renderPlacesList(){
  const output = document.getElementById("placedisplay");
  output.innerHTML = "";

  if(places.length === 0){
    output.innerHTML = renderEmptyState();
    return;
  }

  
}


