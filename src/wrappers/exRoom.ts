export abstract class exRoom {

    private room: Room;

    constructor (room: Room) {
        this.room = room;
    }

    public get controller(): StructureController | undefined {
        return this.room.controller;
    }

    public get energyAvailable(): number {
        return this.room.energyAvailable;
    }

    public get energyCapacityAvailable(): number {
        return this.room.energyCapacityAvailable;
    }

    public get memory(): RoomMemory {
        return this.room.memory;
    }

    public get mode(): string {
        return this.room.mode;
    }

    public get name(): string {
        return this.room.name;
    }

    public get storage(): StructureStorage | undefined {
        return this.room.storage;
    }

    public get terminal(): StructureTerminal | undefined {
        return this.room.terminal;
    }

    public get visual(): RoomVisual {
        return this.room.visual;
    }

    public createConstructionSite(pos: RoomPosition, structureType: StructureConstant) {
        return this.room.createConstructionSite(pos, structureType);
    }

    public createFlag(pos: RoomPosition, name?: string,  color?: ColorConstant, secondaryColor?: ColorConstant): ERR_NAME_EXISTS | ERR_INVALID_ARGS | string {
        return this.room.createFlag(pos, name, color, secondaryColor)
    }

    public find<K extends FindConstant>(type: K, opts?: FilterOptions<K>): FindTypes[K][] {
        return this.room.find(type, opts);
    }

    public findExitTo(room: string | Room): ExitConstant | ERR_NO_PATH | ERR_INVALID_ARGS {
        return this.room.findExitTo(room);
    }

    public findPath(fromPos: RoomPosition, toPos: RoomPosition, opts?: FindPathOpts): PathStep[] {
        return this.room.findPath(fromPos, toPos, opts);
    }

    public getPositionAt(x: number, y: number): RoomPosition | null {
        return this.room.getPositionAt(x, y);
    }

    public lookAt(x: number, y: number): LookAtResult[] {
        return this.room.lookAt(x, y);
    }

    public lookAtArea(top: number, left: number, bottom: number, right: number, asArray: true) : LookAtResultWithPos[] {
        return this.room.lookAtArea(top, left, bottom, right, asArray);
    }

    public lookForAt<T extends keyof AllLookAtTypes>(type: T, target: RoomPosition | _HasRoomPosition): AllLookAtTypes[T][] {
        return this.lookForAt(type, target);
    }

}
