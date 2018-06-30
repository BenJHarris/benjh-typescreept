import { Role } from "roles/Role";

export class Harvester extends Role {

    constructor(creep: Creep) {
        super(creep);
    }

    initialiseMemory() {

    }

    runOne(): void {
        console.log('a');
    }
}
