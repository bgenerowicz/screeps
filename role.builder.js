var roleBuilder = {

    run: function(creep) {        
        // Construction sites
        var con_sites = creep.room.find(FIND_CONSTRUCTION_SITES);
        // console.log('Construction Sites:',con_sites.length);


        //Give appropriate task
        if (creep.carry.energy == 0) {
            creep.memory.task = 'collect';
        }
        if (creep.carry.energy == creep.carryCapacity) {
            creep.memory.task = 'build';
        }

        //Preform said task
        switch (creep.memory.task) {
            case 'collect':
                if (creep.room.storage.transfer(creep, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.storage)
                }
                break;
            case 'build':
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
                break;
        }
        
        
    }   
};


module.exports = roleBuilder;