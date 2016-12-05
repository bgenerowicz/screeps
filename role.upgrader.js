var roleUpgrader = {
    run: function(creep) {
        // creep.say('Upgrader')
        var target = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
        // First go to source, then find drop, return

        if (creep.carry.energy == 0) {
            creep.memory.task = 'collect';
        }
        if (creep.carry.energy == creep.carryCapacity) {
            creep.memory.task = 'upgrade';
        }

        switch (creep.memory.task) {
            case 'collect':
                if (creep.room.storage.transfer(creep, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.storage)
                }
                break;
            case 'upgrade':
                // console.log(creep.upgradeController(creep.room.controller))
                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller)
                }
                break;
        }
    }
}

module.exports = roleUpgrader