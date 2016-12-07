var runTower = {
	run: function() {

	    //Tower
	    var tower1 = Game.getObjectById('584528ee97dc557e5015c428');
	    var tower2 = Game.getObjectById('5846801ec9f1d51357e30162');
	    var tower3 = Game.getObjectById('584732e5a029aa09288b9b55');
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
	   var repair_sites3 = tower3.room.find(FIND_STRUCTURES, {filter: (structure) => { 
	                                    return (structure.structureType === STRUCTURE_ROAD && structure.hits < structure.hitsMax) 
	                                    || (structure.structureType === STRUCTURE_RAMPART && structure.hits < strength) 
	                                    || (structure.structureType === STRUCTURE_WALL && structure.hits < strength) 
	                                    || (structure.structureType === STRUCTURE_SPAWN && structure.hits < structure.hitsMax)}});
	                                    
	                                    
	   //console.log('Repair Sites:',repair_sites1.length,repair_sites2.length,repair_sites3.length);
	   
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
	   if(tower3) {
	       var closestHostile = tower3.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
	       if(closestHostile) {
	           tower3.attack(closestHostile);
	       }
	       else if((repair_sites3.length>0) && (tower3.energy > 800)) {
	       	tower3.repair(repair_sites3[0])
	       }
	   }

	}
}

module.exports = runTower;