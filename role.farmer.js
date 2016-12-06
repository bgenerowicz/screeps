var roleFarmer = {
    run: function(creep) {
        //Check to see if creeps should live
        if ((creep.ticksToLive < 5) && (creep.carry.energy == 0)) {
            creep.suicide();
        }

        //Look for sources in its room
        var sources = creep.room.find(FIND_SOURCES);
        //Check which position it is assigned to
        var source = creep.memory.position;

        //Harvest/MoveTo that source
        if (creep.harvest(sources[source]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[source]);
        }
    }
}


module.exports = roleFarmer;