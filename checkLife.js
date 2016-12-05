var checkLife = {
	run: function(creep) {
		//Check to see if creeps should live
        if ((creep.ticksToLive < 50) && (creep.carry.energy == 0)) {
            creep.suicide();
        }

	}
}

module.exports = checkLife;