var runTower = {
	run: function() {

		//Tower
	    var tower1 = Game.getObjectById('584528ee97dc557e5015c428');
	   var tower2 = Game.getObjectById('5846801ec9f1d51357e30162');
	    //Build walls/rampart till
	    var strength = 10000;
	    // Find repair sites 
	    var repair_sites1 = tower1.room.find(FIND_STRUCTURES, {filter: (structure) => { 
	                                    return (structure.structureType === STRUCTURE_ROAD && structure.hits < structure.hitsMax) 
	                                    || (structure.structureType === STRUCTURE_RAMPART && structure.hits < strength) 
	                                    || (structure.structureType === STRUCTURE_WALL && structure.hits < strength) 
	                                    || (structure.structureType === STRUCTURE_SPAWN && structure.hits < structure.hitsMax)}});
	    var repair_sites2 = tower2.room.find(FIND_STRUCTURES, {filter: (structure) => { 
	                                    return (structure.structureType === STRUCTURE_ROAD && structure.hits < structure.hitsMax) 
	                                    || (structure.structureType === STRUCTURE_RAMPART && structure.hits < strength) 
	                                    || (structure.structureType === STRUCTURE_WALL && structure.hits < strength) 
	                                    || (structure.structureType === STRUCTURE_SPAWN && structure.hits < structure.hitsMax)}});
	    if(tower1) {
	        var closestHostile = tower1.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
	        if(closestHostile) {
	            tower1.attack(closestHostile);
	        }
	        else if((repair_sites1.length>0) && (tower1.energy > 800)) {
	        	tower1.repair(repair_sites1[0])
	        }
	    }
	   if(tower2) {
	       var closestHostile = tower2.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
	       if(closestHostile) {
	           tower2.attack(closestHostile);
	       }
	       else if((repair_sites2.length>0) && (tower2.energy > 800)) {
	       	tower2.repair(repair_sites2[0])
	       }
	   }

	}
}

module.exports = runTower;