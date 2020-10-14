const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    return this.journeys.map((journey) => {
      return journey.startLocation
    });
};

Traveller.prototype.getJourneyEndLocations = function () {
    return this.journeys.map((journey) => {
        return journey.endLocation
    });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
    return this.journeys.filter((journey) => {
        return journey.transport === transport;
    });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
    return this.journeys.filter((journey) => {
        return journey.distance > minDistance;
    });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
    return this.journeys.reduce((runningTotal, journey) =>{
        return runningTotal + journey.distance
    }, 0);

};

Traveller.prototype.getUniqueModesOfTransport = function () {
        return this.journeys.map((journey) => { 
            return journey.transport;
       }); //make this a variable so that it can be used again. Can i do this???

       // filter out names that match each other
       // return new array with names
};


module.exports = Traveller;
