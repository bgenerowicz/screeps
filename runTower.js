var runTower = {
	run: function() {

		//Tower
	    var tower1 = Game.getObjectById('5844315ac8a429b84d02d734');
	    var tower2 = Game.getObjectById('584434cf3496479b6d36ca85');
	    //Build walls/rampart till
	    var strength = 150000;
	    // Find repair sites 
	    var repair_sites = tower2.room.find(FIND_STRUCTURES, {filter: (structure) => { 
	                                    return (structure.structureType === STRUCTURE_ROAD && structure.hits < structure.hitsMax) 
	                                    || (structure.structureType === STRUCTURE_RAMPART && structure.hits < strength) 
	                                    || (structure.structureType === STRUCTURE_WALL && structure.hits < strength) 
	                                    || (structure.structureType === STRUCTURE_SPAWN && structure.hits < structure.hitsMax)}});
	    if(tower1) {
	        var closestHostile = tower1.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
	        if(closestHostile) {
	            tower1.attack(closestHostile);
	        }
	        else if((repair_sites.length>0) && (tower1.energy > 800)) {
	        	tower1.repair(repair_sites[0])
	        }
	    }
	    if(tower2) {
	        var closestHostile = tower2.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
	        if(closestHostile) {
	            tower2.attack(closestHostile);
	        }
	        else if((repair_sites.length>0) && (tower2.energy > 800)) {
	        	tower2.repair(repair_sites[0])
	        }
	    }

	}
}

module.exports = runTower;