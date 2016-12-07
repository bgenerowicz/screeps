var roleFiller = {
    run: function(creep) {
        //repair sites set to 0, towers should do it all
        
        //Check to see if creeps should live
        if ((creep.ticksToLive < 50) && (creep.carry.energy == 0)) {
            creep.suicide();
        }
        
        //Look for sources in its room
        var sources = creep.room.find(FIND_SOURCES);
        //Check which position it is assigned to
        var source = creep.memory.position;
        // Find closest dropped energy
        var target = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
        // Construction sites
        var con_sites = creep.room.find(FIND_CONSTRUCTION_SITES);
        // var repair_sites = creep.room.find(FIND_STRUCTURES, {filter: (structure) => { return (structure.structureType === STRUCTURE_ROAD && structure.hits < structure.hitsMax) || (structure.structureType === STRUCTURE_RAMPART && structure.hits < 1000) || (structure.structureType === STRUCTURE_WALL && structure.hits < 1000) || (structure.structureType === STRUCTURE_SPAWN && structure.hits < structure.hitsMax)}});
        var repair_sites = 0;
        //storages in room
                        
        
        var storage = creep.room.find(FIND_STRUCTURES,{filter: function(structure){return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN
                        || structure.structureType == STRUCTURE_TOWER) && structure.energy < 0.9*structure.energyCapacity}});
        


        //Give coords of pickup
        if (creep.memory.cMap == '2') {
            if (creep.memory.position == '1') {
                x = 17;
                y = 43;
            }
            else {
                x = 9;
                y = 37;
            }
        }
        else if (creep.memory.cMap == '3') {
            if (creep.memory.position == '1') {
                x = 13;
                y = 41;
            }
            else {
                x = 11;
                y = 16;
            }
        }


        //Give appropriate task
        if (creep.carry.energy == 0) {
            creep.memory.task = 'pickup';
        }
        if (creep.carry.energy == creep.carryCapacity) {
            creep.memory.task = 'build';
        }

        //Preform said task
        switch (creep.memory.task) {
            case 'pickup':
                if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(x,y);
                }
                break;
            case 'build':
                if (storage.length >0) {
                    if(creep.transfer(storage[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(storage[0]);
                    }
                }
                else if (repair_sites.length > 0) {
                    if(creep.repair(repair_sites[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(repair_sites[0]);
                    }
                }
            	else if (con_sites.length > 0) {
	                if(creep.build(con_sites[0]) == ERR_NOT_IN_RANGE) {
	                    creep.moveTo(con_sites[0]);
	                }
	            }
	            else {
	            	if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    	creep.moveTo(creep.room.controller)
                	}
	            }
                break;
        }
    }
}

module.exports = roleFiller