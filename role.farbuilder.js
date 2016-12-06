var roleFarbuilder = {
    run: function(creep) {
        // var far_room = 'E47S77';
        // var flag = Game.flags.Flag3;
        // var source = 1;
        
        // potential 3rd room
        var far_room = 'E48S77'; 
        var flag = Game.flags.Flag2;
        var source = 0;
        
        var home_room = 'E47S78';
        
        
        var con_sites = creep.room.find(FIND_CONSTRUCTION_SITES);
        // var con_sites = 0;
            
        if (creep.room.name == far_room) {
            if (creep.carry.energy == creep.carryCapacity) {
                creep.memory.task = 'return';
            }
            else if (creep.carry.energy == 0 ) {
                creep.memory.task = 'harvest';
            }
            
        }
        else {
            creep.memory.task = 'search';
        }
        
        switch (creep.memory.task) {
            case 'harvest':
                var sources = creep.room.find(FIND_SOURCES);
                if (creep.harvest(sources[source]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[source]);
                }
                break;
            case 'search':
                creep.moveTo(flag);
				break;
			case 'return':
			    if (con_sites.length > 0) {
	                if(creep.build(con_sites[0]) == ERR_NOT_IN_RANGE) {
	                    creep.moveTo(con_sites[0]);
	                }
	            }
	            else {
	                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    	creep.moveTo(creep.room.controller)
                	}
	            }
        }
        
    }
}

module.exports = roleFarbuilder