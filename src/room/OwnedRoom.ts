import { ExRoom } from './ExRoom';

export class OwnedRoom extends ExRoom {

    constructor(room: Room) {
        super(room);
    }

    public get controller(): StructureController {
        return super.controller as StructureController;
    }
}
