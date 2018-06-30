import { Role } from "roles/Role";

export class Harvester extends Role {

    constructor(creep: Creep) {
        super(creep);
    }

    run(): void {
        this.moveTo(new RoomPosition(0, 0, this.room.name));
    }
}
