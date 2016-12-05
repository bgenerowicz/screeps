var roleAttacker = {
	run: function(creep) {
// 		var hostiles = creep.room.find(FIND_HOSTILE_CREEPS);
		var hostiles = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
		var hostile_spawn = creep.room.find(FIND_HOSTILE_SPAWNS);
        var attack_room = 'E68S8';

        // var attack_room = 'E67S7';

		if (creep.room.name == attack_room) {
		    if (hostiles) {
		      //  creep.memory.task = 'a_spawn';
		        creep.memory.task = 'attack';
		    }
		    else {
		        creep.memory.task = 'a_spawn';
		    }
		}
		else {
			creep.memory.task = 'search';
		}


		switch (creep.memory.task) {
			case 'attack':
				if (creep.attack(hostiles) == ERR_NOT_IN_RANGE) {
					creep.moveTo(hostiles);
				}
				break;
			case 'search':
				creep.moveTo(Game.flags.Flag1);
				break;
            case 'a_spawn':
                if (creep.attack(hostile_spawn[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(hostile_spawn[0]);
				}
				break;
				
		}
		
	}

}

module.exports = roleAttacker;