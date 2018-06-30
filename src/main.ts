import { ErrorMapper } from "utils/ErrorMapper";
import { Empire } from 'empire/Empire';

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code



export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);

  for (let spawnName in Game.spawns) {
    let spawn = Game.spawns[spawnName];
    spawn.spawnCreep([MOVE, WORK, CARRY], 'a', {memory: {
      role: {
        roleName: 'harvester'
      },
      home: spawn.room.name
    }});
  }
  new Empire(Game.rooms, Game.creeps);
});
