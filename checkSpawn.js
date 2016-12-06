var spawnCreep = require('spawnCreep');

var checkSpawn = {
    run: function(checkspawn) {
        if (checkspawn == '1') {
            var spawn = 'Staz1';
        }
        else if (checkspawn == '2') {
            var spawn = 'Staz2';
        }
        else if (checkspawn == '3') {
            var spawn = 'Staz3';
        }
        
        //Init variables
        var num_farmers = 0;
        var num_upgraders = 0;
        var num_workers = 0;
        var num_builders = 0;
        var num_extractors = 0;
        var num_attackers = 0;
        var num_transferers = 0;
        var num_claimers = 0;
        var num_farbuilders = 0;
        var num_fillers = 0;
        var num_healers = 0;

        //Wanted # of creeps?
        if (checkspawn == '1') {
            var num_farmers = 2;
            var num_workers = 2;
            var num_builders = 1;
            var num_transferers = 2;
            var num_farbuilders = 4;
            var num_attackers = 7;
            var num_healers = 2;
        }
        else if (checkspawn == '2') {
            var num_farmers = 2;
            var num_fillers = 6;
        }
        else if (checkspawn == '3') {
            var num_farmers = 2;
            var num_fillers = 6;
        }
    
    
        //Check which creeps are already present
        var creep = [];
        var screeps = _.filter(Game.creeps, (creep) => (creep.memory.cMap == checkspawn));
        var farmers = _.filter(Game.creeps, (creep) => (creep.memory.role == 'farmer') && (creep.memory.cMap == checkspawn));
        var upgraders = _.filter(Game.creeps, (creep) => (creep.memory.role == 'upgrader') && (creep.memory.cMap == checkspawn));
        var workers = _.filter(Game.creeps, (creep) => (creep.memory.role == 'worker') && (creep.memory.cMap == checkspawn));
        var builders = _.filter(Game.creeps, (creep) => (creep.memory.role == 'builder') && (creep.memory.cMap == checkspawn));
        var extractors = _.filter(Game.creeps, (creep) => (creep.memory.role == 'extractor') && (creep.memory.cMap == checkspawn));
        var attackers = _.filter(Game.creeps, (creep) => (creep.memory.role == 'attacker') && (creep.memory.cMap == checkspawn));
        var healers = _.filter(Game.creeps, (creep) => (creep.memory.role == 'healer') && (creep.memory.cMap == checkspawn));
        var transferers = _.filter(Game.creeps, (creep) => (creep.memory.role == 'transferer') && (creep.memory.cMap == checkspawn));
        var claimers = _.filter(Game.creeps, (creep) => (creep.memory.role == 'claimer') && (creep.memory.cMap == checkspawn));
        var fillers = _.filter(Game.creeps, (creep) => (creep.memory.role == 'filler') && (creep.memory.cMap == checkspawn));
        var farbuilders = _.filter(Game.creeps, (creep) => (creep.memory.role == 'farbuilder'));

        // console.log(screeps)
        // console.log(screeps[0].memory.role)
        // //////
        // var creep = [];
        // var screeps = _.filter(Game.creeps, (creep) => (creep.memory.role == 'farmer') && (creep.memory.cMap == '2'));
        // console.log(screeps[0].room.energyAvailable)
        // //////
        
        //If no creeps, make ititial one
        if (screeps.length > 0) {
            //Spawn Creeps
            if (transferers.length < num_transferers) {
                spawnCreep.run(null,'transferer',checkspawn);
            }
            else if (farmers.length < num_farmers) {
                spawnCreep.run(farmers,'farmer',checkspawn);
            }
            else if (workers.length < num_workers) {
                spawnCreep.run(workers,'worker',checkspawn);
            }
            // else if ((builders.length < num_builders) && (screeps[0].room.find(FIND_CONSTRUCTION_SITES).length > 0)) {
            else if (builders.length < num_builders) {
                spawnCreep.run(null,'builder',checkspawn);
            }
            else if (upgraders.length < num_upgraders) {
                spawnCreep.run(null,'upgrader',checkspawn);
            }
            else if (attackers.length < num_attackers) {
                spawnCreep.run(null,'attacker',checkspawn);
            }
            else if (claimers.length < num_claimers) {
                spawnCreep.run(null,'claimer',checkspawn);
            }
            else if (farbuilders.length < num_farbuilders) {
                spawnCreep.run(null,'farbuilder',checkspawn);
            }
            else if (fillers.length < num_fillers) {
                spawnCreep.run(fillers,'filler',checkspawn);
            }
            else if (healers.length < num_healers) {
                spawnCreep.run(null,'healer',checkspawn);
            }
            
        }
        else {
            Game.spawns[spawn].createCreep([WORK,MOVE], undefined, {role: 'farmer',position: '0',cost: '150',task: 'farm',cMap:checkspawn});
        }
    
        
    }
}
module.exports = checkSpawn;