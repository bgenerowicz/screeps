var roleWorker = {
    run: function(creep) {

        // Find closest dropped energy
        var target = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);

        // // Find farmers so you know which to go to
        if (creep.memory.cMap == '1') {
            if (creep.memory.position == '1') {
                var x = 8;
                var y = 13;
            }
            else {
                var x = 18;
                var y = 10;
            }
        }
        else if (creep.memory.cMap == '2') {
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