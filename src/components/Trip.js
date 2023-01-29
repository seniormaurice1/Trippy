import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/8.jpg";

function Trip(){
    return(
      <div className="trip">
          <h1>Recent Trips</h1>
          <p>You an discover unique destinations using Google Maps.</p>
          <div className="tripcard">
            <TripData
            image={Trip1}
            heading="Trip In Indonasia"
            text="One of my most ionic views in Luzan, Mt. Taal boasts assets
            a volcano inside a lake inside an island. If you fancy a closer
            look, the hike up to the crator is a mere 45 minutes, and is
                   easy enough for beginers. Guides will assist you most of
                   the way; and you'll see the peuliar environment found On
                   an active volcano, including volcanic rocks and steam
                   vents. The hike can be dusty and hot, so plan for an early
                   morning trip, and then unwind with some bulalo before
                   heading back home!"
            />

<TripData
            image={Trip2}
            heading="Trip In Malaysia"
            text="One of my most ionic views in Luzan, Mt. Taal boasts assets
            a volcano inside a lake inside an island. If you fancy a closer
            look, the hike up to the crator is a mere 45 minutes, and is
                   easy enough for beginers. Guides will assist you most of
                   the way; and you'll see the peuliar environment found On
                   an active volcano, including volcanic rocks and steam
                   vents. The hike can be dusty and hot, so plan for an early
                   morning trip, and then unwind with some bulalo before
                   heading back home!"
            />

<TripData
            image={Trip3}
            heading="Trip In France"
            text="One of my most ionic views in Luzan, Mt. Taal boasts assets
            a volcano inside a lake inside an island. If you fancy a closer
            look, the hike up to the crator is a mere 45 minutes, and is
                   easy enough for beginers. Guides will assist you most of
                   the way; and you'll see the peuliar environment found On
                   an active volcano, including volcanic rocks and steam
                   vents. The hike can be dusty and hot, so plan for an early
                   morning trip, and then unwind with some bulalo before
                   heading back home!"
            />
          </div>
      </div>
    );
}

export default Trip;