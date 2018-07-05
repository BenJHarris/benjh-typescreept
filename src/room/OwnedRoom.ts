import { ControllerRoom } from './ControllerRoom';

export abstract class OwnedRoom extends ControllerRoom {

    public spawns: StructureSpawn[];

    constructor(room: Room) {
        super(room);

        this.spawns = this.findSpawns();
    }

    public findSpawns(): StructureSpawn[] {
        return this.find(FIND_STRUCTURES, {
            filter: s => s.structureType === STRUCTURE_SPAWN
        }) as StructureSpawn[];
    }
}
