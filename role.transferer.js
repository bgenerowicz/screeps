var roleTransferer = {
	run: function(creep) {
// 		var storage = creep.room.find(FIND_STRUCTURES,{filter: function(structure){return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN
//                         || structure.structureType == STRUCTURE_TOWER) && structure.energy < 0.9*structure.energyCapacity}});

        var storage = creep.pos.findClosestByRange(FIND_STRUCTURES,{filter: function(structure){return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN
                        || structure.structureType == STRUCTURE_TOWER) && structure.energy < 0.9*structure.energyCapacity}});
        // console.log(storaget)
        // if (storaget) {
        //     console.log('tet')
        // }
        // console.log('-')
        
        // console.log(storagetest)

		//Give appropriate task
        if (creep.carry.energy == 0) {
            creep.memory.task = 'collect';
        }
        else if (creep.carry.energy == creep.carryCapacity) {
            creep.memory.task = 'return';
        }

		switch (creep.memory.task) {
            case 'collect':
                if (creep.room.storage.transfer(creep, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.storage)
                }
                break;
            case 'return':
                if (storage) {
                    if(creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(storage);
                    }
                }
                else {
                    creep.moveTo(creep.room.storage)
                }
                break;
        }
	}

}

module.exports = roleTransferer;