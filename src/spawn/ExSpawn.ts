export abstract class ExSpawn {

    private spawn: StructureSpawn;

    constructor(spawn: StructureSpawn) {
        this.spawn = spawn;
    }

    public get energy(): number {
        return this.spawn.energy;
    }

    public get energyCapacity(): number {
        return this.spawn.energyCapacity
    }

    public get memory(): SpawnMemory {
        return this.spawn.memory;
    }

    public get name(): string {
        return this.spawn.name;
    }

    public get spawning(): Spawning | null {
        return this.spawn.spawning;
    }

    public spawnCreep(body: BodyPartConstant[], name: string, opts?: SpawnOptions): ScreepsReturnCode {
        return this.spawn.spawnCreep(body, name, opts);
    }

    public destroy(): ScreepsReturnCode {
        return this.spawn.destroy();
    }

    public  isActive(): boolean {
        return this.spawn.isActive();
    }

    public renewCreep(target: Creep): ScreepsReturnCode {
        return this.spawn.renewCreep(target);
    }

    public recycleCreep(target: Creep): ScreepsReturnCode {
        return this.spawn.recycleCreep(target);
    }
}
