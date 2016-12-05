var detLocation = {
	run: function(creeps) {
		//Init number of workers at source
		var nS0 = 0;
		var nS1 = 0;
		var location = 0;

		//Count how many at source 1-2
		for (i=0;i<creeps.length;i++) {
			if (creeps[i].memory.position == '0') {
				nS0 += 1;
			}
			else {
				nS1 += 1;
			}
		}

		// Determine where it will farm
		if (nS0 > nS1) {
			return '1';
		}
		else {
			return '0';
		}

	}
}

module.exports = detLocation;