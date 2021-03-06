var detLocation = require('detLocation');

var spawnCreep = {
    run: function(creeps,role) {
        //Max cost of each creep
        var mFarmer = 750;
        var mWorker = 600;
        var mAttacker = 1700;
        var mUpgrader = 1200;
        var mTransferer = 800;
        
        //Check energy available to spawn
        var creep = [];
        var screeps = _.filter(Game.creeps, (creep));
        var energyAvail = screeps[0].room.energyAvailable;
        
        // Determine location at which creep should work
        // Dont make more than max threshdold
        if (role == 'farmer') {
		    var location = detLocation.run(creeps);
		    //Dont make more than max threshdold
		    var spendable = Math.min(energyAvail,mFarmer);
        }
        else if (role == 'worker') {
		    var location = detLocation.run(creeps);
		    //Since location 0 is further, make a better one
		    if (location == '0') {
		        mWorker += 300;
		        var spendable = Math.min(energyAvail,mWorker);
		    }
		    else {
		        var spendable = Math.min(energyAvail,mWorker);
		    }
        }
        else if (role == 'upgrader' || role == 'builder') {
		    var location = 'n';
		    //Dont make more than max threshdold
		    var spendable = Math.min(energyAvail,mUpgrader);
        }
        else if (role == 'attacker') {
		    //Dont make more than max threshdold
		    var spendable = Math.min(energyAvail,mAttacker);
        }
        else if (role == 'transferer') {
		    //Dont make more than max threshdold
		    var spendable = Math.min(energyAvail,mTransferer);
        }
  
        
        //Property cost
        var cWork = 100;
        var cMove = 50;
        var cCarry = 50;
        var cAttack = 150;
        var cClaim = 600;
        var cTough = 10;
        
        //Give Ratio
        if (role == 'farmer') {
            var rWork = 2;
            var rMove = 1;
            var rCarry = 0;
            var rAttack = 0;
            var rClaim = 0;
            var rTough = 0;
        }
        else if (role == 'worker') {
            var rWork = 0;
            var rMove = 1;
            var rCarry = 2;
            var rAttack = 0;
            var rClaim = 0;
            var rTough = 0;
        }
        else if (role == 'upgrader' || role == 'builder') {
            var rWork = 1;
            var rMove = 1;
            var rCarry = 1;
            var rAttack = 0;
            var rClaim = 0;
            var rTough = 0;
        }
        else if (role == 'attacker') {
            var rWork = 0;
            var rMove = 3;
            var rCarry = 0;
            var rAttack = 1;
            var rClaim = 0;
            var rTough = 5;
        }
        else if (role == 'transferer') {
            var rWork = 0;
            var rMove = 1;
            var rCarry = 2;
            var rAttack = 0;
            var rClaim = 0;
            var rTough = 0;
        }
        
        //Properties stored in array
        var pWork = [];
        var pMove = [];
        var pCarry = [];
        var pAttack = [];
        var pClaim = [];
        var pTough = [];
        
        //Cost of one section
        var cSection = cWork*rWork+cMove*rMove+cCarry*rCarry+cAttack*rAttack+cClaim*rClaim+cTough*rTough;
        
        //# of Sections that will be made
        var nSections = Math.floor(spendable/cSection);
        
        //Total cost of creep
        var tCost = cSection*nSections;
        
        
        //Create arrays of properties
        for (i=0;i<nSections;i++) {
            for (var j=0;j<rWork;j++) {
                pWork.push('work');
            }
            for (var j=0;j<rMove;j++) {
                pMove.push('move');
            }
            for (var j=0;j<rCarry;j++) {
                pCarry.push('carry');
            }
            for (var j=0;j<rAttack;j++) {
                pAttack.push('attack');
            }
            for (var j=0;j<rClaim;j++) {
                pClaim.push('claim');
            }
            for (var j=0;j<rTough;j++) {
                pTough.push('tough');
            }
        }
        
        //Combine all arrays in order [TOUGH,MOVE,WORK,CARRY,ATTACK,CLAIM]
        var props = pTough.concat(pMove,pWork,pCarry,pAttack,pClaim);
        
        // console.log(cSection)
        console.log()
        console.log()
        console.log('Creating:',role);
        console.log('At Location:',location);
        console.log('Cost:',tCost);
        Game.spawns['Staz1'].createCreep(props, undefined, {role: role,position: location,cost:tCost})
        console.log()
        console.log()

    }
}

module.exports = spawnCreep;