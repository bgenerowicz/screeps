var runTower = {
	run: function() {
	    //Filter all towers
	    var towers = _.filter(Game.structures, function(structure){return structure.structureType === STRUCTURE_TOWER});
	    //Build walls/rampart till
	    var strength = 50000;

        
        //Go through all towers
        for(i=0;i<towers.length;i++) {
            //find repair sites
            var repair_sites = towers[i].room.find(FIND_STRUCTURES, {filter: function(structure) { return (structure.structureType === STRUCTURE_ROAD && structure.hits < structure.hitsMax) 
	                                    || (structure.structureType === STRUCTURE_RAMPART && structure.hits < strength) 
	                                    || (structure.structureType === STRUCTURE_WALL && structure.hits < strength) 
	                                    || (structure.structureType === STRUCTURE_SPAWN && structure.hits < structure.hitsMax)}});
	        //find hostiles 
            var closestHostile = towers[i].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            
            
	        if(closestHostile) {
	            towers[i].attack(closestHostile);
	        }
	        else if((repair_sites.length>0) && (towers[i].energy > 800)) {
	        	towers[i].repair(repair_sites[0])
	        }
	        
	        //Print information
	        console.log('Tower ID:',towers[i].id,'Repair Sites:',repair_sites.length);
        }
	}
}

module.exports = runTower;