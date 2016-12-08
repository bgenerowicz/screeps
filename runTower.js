var runTower = {
	run: function(n_t) {

	    //Tower
	    if (n_t == '1') {
	        var tower = Game.getObjectById('584528ee97dc557e5015c428');
	    }
	    else if (n_t == '2') {
	        var tower = Game.getObjectById('5846801ec9f1d51357e30162');
	    }
	    else if (n_t == '3') {
	        var tower = Game.getObjectById('584732e5a029aa09288b9b55');
	    }
	    
	    //Build walls/rampart till
	    var strength = 10000;
	    // Find repair sites
	                                    
	    var repair_sites = tower.room.find(FIND_STRUCTURES, {filter: function(structure) { return (structure.structureType === STRUCTURE_ROAD && structure.hits < structure.hitsMax) 
	                                    || (structure.structureType === STRUCTURE_RAMPART && structure.hits < strength) 
	                                    || (structure.structureType === STRUCTURE_WALL && structure.hits < strength) 
	                                    || (structure.structureType === STRUCTURE_SPAWN && structure.hits < structure.hitsMax)}});

	                                    
	   // console.log('Map:',n_t,'Repair Sites:',repair_sites.length);
	   
	    if(tower) {
	        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
	        if(closestHostile) {
	            tower.attack(closestHostile);
	        }
	        else if((repair_sites.length>0) && (tower.energy > 800)) {
	        	tower.repair(repair_sites[0])
	        }
	    }

	}
}

module.exports = runTower;