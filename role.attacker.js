var roleAttacker = {
	run: function(creep) {
		var hostiles = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
		var hostile_spawn = creep.room.find(FIND_HOSTILE_SPAWNS);
		var hostile_tower = creep.room.find(FIND_STRUCTURES, {filter: function(structure) { return (structure.structureType === STRUCTURE_TOWER)}});
        var hostile_stru = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: function(structure) { return (structure.structureType === STRUCTURE_STORAGE) || (structure.structureType === STRUCTURE_EXTENSION) || (structure.structureType === STRUCTURE_CONTAINER)}});
        

        // var attack_room = 'E47S77'; //My second room

        // var attack_room = 'E48S77'; //The 3rd room i want
        // var flag = Game.flags.Flag2;
        
        var attack_room = 'E48S78'; //Enemy Main
        var flag = Game.flags.Flag4;

		if (creep.room.name == attack_room) {
		    if (hostiles) {
		      //  creep.memory.task = 'a_spawn';
		      //  creep.memory.task = 'a_tower';
		        creep.memory.task = 'attack';
		      //  creep.memory.task = 'a_stru';
		      //  creep.moveTo(flag)
		    }
		    else {
		      //  creep.memory.task = 'a_spawn';
		        creep.memory.task = 'a_stru';
		      //creep.moveTo(flag)
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
				creep.moveTo(flag);
				break;
            case 'a_spawn':
                if (creep.attack(hostile_spawn[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(hostile_spawn[0]);
				}
				break;
			case 'a_tower':
			    if (creep.attack(hostile_tower[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(hostile_tower[0]);
				}
				break;
			case 'a_stru':
			    if (creep.attack(hostile_stru) == ERR_NOT_IN_RANGE) {
					creep.moveTo(hostile_stru);
				}
				break;
				
		}
		
	}

}

module.exports = roleAttacker;