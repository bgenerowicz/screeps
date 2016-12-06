var roleClaimer = {
	run: function(creep) {
		var claim_room = 'E48S77';
		var flag = Game.flags.Flag2;

		if (creep.room.name == claim_room) {
			creep.memory.task = 'claim';
		}
		else {
			creep.memory.task = 'search';
		}

		switch (creep.memory.task) {
			case 'claim':
				if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
					creep.moveTo(creep.room.controller);
				}
				break;
			case 'search':
				creep.moveTo(flag);
				break;
		}
	}

}

module.exports = roleClaimer;