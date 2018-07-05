import { ExRoom } from './ExRoom';

export abstract class ControllerRoom extends ExRoom {

    constructor(room: Room) {
        super(room);
    }

    public get controller(): StructureController {
        return super.controller as StructureController;
    }
}
