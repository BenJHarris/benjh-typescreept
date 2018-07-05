import { Role } from "roles/Role";

export class Harvester extends Role {

    public static body = [WORK, MOVE, CARRY];

    constructor(creep: Creep) {
        super(creep);
    }

    initialiseMemory() {

    }

    runOne(): void {
        console.log('a');
    }
}
