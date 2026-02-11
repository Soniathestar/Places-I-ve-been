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

  places.forEach(place, index) =>{
    const card = document.createElement("div");
    card.className = "place-card";
    card.textContent = place.location;

    card.addEventListener("click",()=>showPlaceDetails(index));
    output.appendChild(card);
  }
}

function showPlaceDetails(index){
  const place = places[index];
  const output = document.getElementById("placedisplay")
}

output.innerHTML = `
<div class="place-details">
<h2> ${place.location}</h2>
<p>Time of year </p>
${place.timeOfYear}
<p>Landmarks</p>
${place.landmarks}
<p>Notes</p>
${place.notes}
|| "None"
<div>
<button> id=("backBtn")
Back</button>
</div>`;

document.getElementById("backBtn")
.addEventListener("submit"),function(event){
  event.preventDefault();
}

