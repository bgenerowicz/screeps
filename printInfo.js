var printInfo = {
	run: function() {
    	//whitespace
    	console.log()

		
		//Check which creeps are already present
        var creep = [];
        var screeps = _.filter(Game.creeps, (creep));
        var farmers = _.filter(Game.creeps, (creep) => creep.memory.role == 'farmer');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var workers = _.filter(Game.creeps, (creep) => creep.memory.role == 'worker');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var extractors = _.filter(Game.creeps, (creep) => creep.memory.role == 'extractor');
        var attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');
        var transferers = _.filter(Game.creeps, (creep) => creep.memory.role == 'transferer');
        var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');

        //Print # of each creep
        // console.log('Farmers:',farmers.length,'Workers:', workers.length, 'Upgraders:',upgraders.length,'Builders:',builders.length,'Attackers:',attackers.length);

        //Print Available energy & Stored energy & Dropped energy
        var energyAvail = farmers[0].room.energyAvailable;
        var storage_energy = farmers[0].room.storage.store[RESOURCE_ENERGY];
        //Store dropped energy for print
        var dropped_energy = farmers[0].room.find(FIND_DROPPED_ENERGY);
        var drop = [];
        for (i=0; i< dropped_energy.length; i++) {
            drop[i] = dropped_energy[i]['energy'];
        }
		console.log('Energy Available', energyAvail,'Energy Storage',storage_energy,'Dropped Energy:',drop);

		//Print repair/construction sites
        var con_sites = farmers[0].room.find(FIND_CONSTRUCTION_SITES);
		var strength = 100000;
		var repair_sites = farmers[0].room.find(FIND_STRUCTURES, {filter: (structure) => { 
	                                    return (structure.structureType === STRUCTURE_ROAD && structure.hits < structure.hitsMax) 
	                                    || (structure.structureType === STRUCTURE_RAMPART && structure.hits < strength) 
	                                    || (structure.structureType === STRUCTURE_WALL && structure.hits < strength) 
	                                    || (structure.structureType === STRUCTURE_SPAWN && structure.hits < structure.hitsMax)}});
		console.log('Repair Sites:',repair_sites.length,'Construction Sites:',con_sites.length);

        // var testt = [];
        // for (var name in Game.creeps) {
        //     creep = Game.creeps[name];
        //     // if (creep.memory.role == '')
        //     console.log(creep.memory.role, '|| Position: ',creep.memory.position,'|| Costs: ',creep.memory.cost,'|| TTL: ',creep.ticksToLive)
        // }
        // console.log(Game.creeps.memory.role)
        
		//Print creep role/type/timetolive
		for (i=0;i<farmers.length;i++) {
			console.log('Role:',farmers[i].memory.role,'     Loc:',farmers[i].memory.position, '  Cost:',farmers[i].memory.cost,'  TTL:',farmers[i].ticksToLive, '  Map:',farmers[i].memory.cMap);
		}
		for (i=0;i<workers.length;i++) {
			console.log('Role:',workers[i].memory.role,'     Loc:',workers[i].memory.position,'  Cost:',workers[i].memory.cost,'  TTL:',workers[i].ticksToLive, '  Map:',workers[i].memory.cMap);
		}
		for (i=0;i<upgraders.length;i++) {
			console.log('Role:',upgraders[i].memory.role,'   Loc: N','  Cost:',upgraders[i].memory.cost,'  TTL:',upgraders[i].ticksToLive, '  Map:',upgraders[i].memory.cMap);
		}
		for (i=0;i<builders.length;i++) {
			console.log('Role:',builders[i].memory.role,'    Loc: N','  Cost:',builders[i].memory.cost,'  TTL:',builders[i].ticksToLive, '  Map:',builders[i].memory.cMap);
		}
        for (i=0;i<attackers.length;i++) {
            console.log('Role:',attackers[i].memory.role,'   Loc: N','  Cost:',attackers[i].memory.cost,'  TTL:',attackers[i].ticksToLive, '  Map:',attackers[i].memory.cMap);
        }
        for (i=0;i<transferers.length;i++) {
            console.log('Role:',transferers[i].memory.role,' Loc: N','  Cost:',transferers[i].memory.cost,'  TTL:',transferers[i].ticksToLive, '  Map:',transferers[i].memory.cMap);
        }
        for (i=0;i<claimers.length;i++) {
            console.log('Role:',claimers[i].memory.role,'    Loc: N','  Cost:',claimers[i].memory.cost,'  TTL:',claimers[i].ticksToLive, '  Map:',claimers[i].memory.cMap);
        }

	}
}
module.exports = printInfo;