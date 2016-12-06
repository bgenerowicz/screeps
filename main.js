var runTask = require('runTask');
var checkSpawn = require('checkSpawn');
var runTower = require('runTower');
var checkLife = require('checkLife');
var printInfo = require('printInfo');

module.exports.loop = function () {
    //Check whether to spawn creeps
    // spawnCreep.run();
    checkSpawn.run('1');
    checkSpawn.run('2');
    checkSpawn.run('3');

    //Run towers
    runTower.run();

    //Print info
    // printInfo.run();


    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        //Check if creep should live
        checkLife.run(creep);
        
        //Run all the creeps task
        runTask.run(creep);

    }
}

