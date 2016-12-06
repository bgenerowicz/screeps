var roleWorker = {
    run: function(creep) {
        // var storage = creep.room.find(FIND_STRUCTURES, {
        //             filter: (structure) => {
        //                 return ((structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN
        //                 || structure.structureType == STRUCTURE_TOWER) && structure.energy < 0.9*structure.energyCapacity)}});

        // Find closest dropped energy
        var target = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);

        // // Find farmers so you know which to go to
        if (creep.memory.position == '1') {
            var x = 8;
            var y = 13;
        }
        else {
            var x = 18;
            var y = 10;
        }
        
        //Store dropped energy for print
        var dropped_energy = creep.room.find(FIND_DROPPED_ENERGY);
        var drop = [];
        for (i=0; i< dropped_energy.length; i++) {
            drop[i] = dropped_energy[i]['energy'];
        }
        
        // console.log('Dropped Energy:', drop)
        
        
        //Give appropriate task
        if (creep.carry.energy == 0) {
            creep.memory.task = 'pickup';
        }
        else if (creep.carry.energy == creep.carryCapacity) {
            creep.memory.task = 'return';
        }
        
        //Preform said task
        switch (creep.memory.task) {
            case 'pickup':
                if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(x,y)
                }
                break;
            case 'return':
                if(creep.transfer(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.storage)
                }
                break;
        }

    }
}

module.exports = roleWorker