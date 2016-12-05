var spawnCreep = require('spawnCreep');

var checkSpawn = {
    run: function() {
        //Wanted # of creeps?
        var num_farmers = 2;
        var num_upgraders = 0;
        var num_workers = 4;
        var num_builders = 2;
        var num_extractors = 0;
        var num_attackers = 0;
        var num_transferers = 1;
    
    
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
        
        //If no creeps, make ititial one
        if (screeps.length > 0) {
            //Spawn Creeps
            if (farmers.length < num_farmers) {
                spawnCreep.run(farmers,'farmer');
            }
            else if (workers.length < num_workers) {
                spawnCreep.run(workers,'worker');
            }
            // else if ((builders.length < num_builders) && (screeps[0].room.find(FIND_CONSTRUCTION_SITES).length > 0)) {
            else if (builders.length < num_builders) {
                spawnCreep.run(null,'builder');
            }
            else if (upgraders.length < num_upgraders) {
                spawnCreep.run(null,'upgrader');
            }
            else if (attackers.length < num_attackers) {
                spawnCreep.run(null,'attacker');
            }
            else if (transferers.length < num_transferers) {
                spawnCreep.run(null,'transferer');
            }
        }
        else {
            Game.spawns['Staz1'].createCreep([WORK,MOVE], undefined, {role: 'farmer',position: '1',task: 'farm'});
        }
    
        
    }
}
module.exports = checkSpawn;