var roleHealer = {
	run: function(creep) {
// 		var hostiles = creep.room.find(FIND_HOSTILE_CREEPS);
		var target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {filter: function(object) {return object.hits < object.hitsMax;}})
		var hostile_spawn = creep.room.find(FIND_HOSTILE_SPAWNS);
        // var attack_room = 'E47S77'; //My second room

        var attack_room = 'E48S77'; //The 3rd room i want
        var flag = Game.flags.Flag2;

		if (creep.room.name == attack_room) {
		    if (target) {
		        creep.memory.task = 'heal';
		    }
		    else {
		      creep.moveTo(flag)
		    }
		}
		else {
			creep.memory.task = 'search';
		}


		switch (creep.memory.task) {
			case 'heal':
				if(creep.heal(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
				break;
			case 'search':
				creep.moveTo(flag);
				break;
		}
		
	}

}

module.exports = roleHealer;