var roleFarmer = require('role.farmer');
var roleWorker = require('role.worker');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');
var roleAttacker = require('role.attacker');
var roleClaimer = require('role.claimer');
var roleTransferer = require('role.transferer');
var roleFarbuilder = require('role.farbuilder');
var roleFiller = require('role.filler');
var roleHealer = require('role.healer');

var runTask = {
	run: function(creep) {
		if (creep.memory.role == 'farmer') {
			roleFarmer.run(creep);
		}
		else if (creep.memory.role == 'worker') {
			roleWorker.run(creep);
		}
		else if (creep.memory.role == 'builder') {
			roleBuilder.run(creep);
		}
		else if (creep.memory.role == 'upgrader') {
			roleUpgrader.run(creep);
		}
		else if (creep.memory.role == 'attacker') {
			roleAttacker.run(creep);
		}
		else if (creep.memory.role == 'claimer') {
			roleClaimer.run(creep);
		}
		else if (creep.memory.role == 'transferer') {
			roleTransferer.run(creep)
		}
		else if (creep.memory.role == 'farbuilder') {
			roleFarbuilder.run(creep)
		}
		else if (creep.memory.role == 'filler') {
			roleFiller.run(creep)
		}
		else if (creep.memory.role == 'healer') {
			roleHealer.run(creep)
		}


	}
}

module.exports = runTask;