import { OwnedRoom } from './OwnedRoom';

export class MyRoom extends OwnedRoom {

    constructor(room: Room) {
        super(room);
    }

    public findSpawns(): StructureSpawn[] {
        return this.find(FIND_MY_STRUCTURES, {
            filter: s => s.structureType === STRUCTURE_SPAWN
        }) as StructureSpawn[];
    }
}
