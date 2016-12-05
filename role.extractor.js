var roleExtractor = {

	run: function(creep) {
		//Check to see if creeps should live
        if ((creep.ticksToLive < 400) && (_.sum(creep.carry) == 0)) {
            creep.suicide();
        }
  		// console.log(_.sum(creep.carry))


		minerals = creep.room.find(FIND_MINERALS);
		if(_.sum(creep.carry) == 0) {
			creep.memory.task = 'extract';
		}
		// if (_.sum(creep.carry) == creep.carryCapacity) {
		if (_.sum(creep.carry) == creep.carryCapacity) {
			creep.memory.task = 'store';
		}

		switch(creep.memory.task) {
			case 'extract':
				if (creep.harvest(minerals[0]) == ERR_NOT_IN_RANGE) {
            		creep.moveTo(minerals[0]);
        		}
    			break;
    		case 'store':
                if(creep.transfer(creep.room.storage, RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.storage)
                }
                break;
		}

	}

}

module.exports = roleExtractor;