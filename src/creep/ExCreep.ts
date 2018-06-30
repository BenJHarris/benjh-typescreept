import { Traveler } from 'traveler/Traveler'

export abstract class ExCreep {

    private creep: Creep;

    constructor(creep: Creep) {
        this.creep = creep;
    }

     // wrappers for creep - note: replaced moveTo with Traveler
     public get body(): BodyPartDefinition[] {
        return this.creep.body;
    }

    public get carry(): StoreDefinition {
        return this.creep.carry;
    }

    public get carryCapacity(): number {
        return this.creep.carryCapacity;
    }

    public get fatigue(): number {
        return this.creep.fatigue;
    }

    public get hits(): number {
        return this.creep.hits;
    }

    public get hitsMax(): number {
        return this.creep.hitsMax
    }

    public get id(): string {
        return this.creep.id;
    }

    public get memory(): CreepMemory {
        return this.creep.memory;
    }

    public get my(): boolean {
        return this.creep.my;
    }

    public get name(): string {
        return this.creep.name;
    }

    public get owner(): Owner {
        return this.creep.owner;
    }

    public get room(): Room {
        return this.creep.room;
    }

    public get spawning(): boolean {
        return this.creep.spawning;
    }

    public get saying(): string {
        return this.creep.saying;
    }

    public get ticksToLive(): number | undefined {
        return this.creep.ticksToLive;
    }

    public attack(target: Creep | Structure): CreepActionReturnCode {
        return this.creep.attack(target);
    }

    public attackController(target: StructureController): CreepActionReturnCode {
        return this.creep.attackController(target);
    }

    public build(target: ConstructionSite): CreepActionReturnCode | ERR_NOT_ENOUGH_RESOURCES | ERR_RCL_NOT_ENOUGH {
        return this.creep.build(target);
    }

    public cancelOrder(methodName: string): OK | ERR_NOT_FOUND {
        return this.creep.cancelOrder(methodName);
    }

    public claimController(target: StructureController): CreepActionReturnCode | ERR_FULL | ERR_GCL_NOT_ENOUGH {
        return this.creep.claimController(target);
    }

    public dismantle(target: Structure): CreepActionReturnCode {
        return this.creep.dismantle(target);
    }

    public drop(resourceType: ResourceConstant, amount?: number): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES {
        return this.creep.drop(resourceType, amount);
    }

    public generateSafeMode(target: StructureController): CreepActionReturnCode {
        return this.creep.generateSafeMode(target);
    }

    public getActiveBodyparts(type: BodyPartConstant) : number {
        return this.creep.getActiveBodyparts(type);
    }

    public harvest(target: Source | Mineral): CreepActionReturnCode | ERR_NOT_FOUND | ERR_NOT_ENOUGH_RESOURCES {
        return this.creep.harvest(target);
    }

    public heal(target: Creep): CreepActionReturnCode {
        return this.creep.heal(target);
    }

    public move(direction: DirectionConstant): CreepMoveReturnCode {
        return this.creep.move(direction);
    }

    public moveByPath(path: PathStep[] | RoomPosition[] | string): CreepMoveReturnCode | ERR_NOT_FOUND | ERR_INVALID_ARGS {
        return this.creep.moveByPath(path);
    }

    public moveTo(destination: RoomPosition|{pos: RoomPosition}, options?: TravelToOptions) {
        return Traveler.travelTo(this.creep, destination, options);
    };

    public notifyWhenAttacked(enabled: boolean): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_ARGS {
        return this.creep.notifyWhenAttacked(enabled);
    }

    public pickup(target: Resource): CreepActionReturnCode | ERR_FULL {
        return this.creep.pickup(target);
    }

    public rangedAttacck(target: Creep | Structure): CreepActionReturnCode {
        return this.creep.rangedAttack(target);
    }

    public rangedHeal(target: Creep): CreepActionReturnCode {
        return this.creep.rangedHeal(target);
    }

    public rangedMassAttack(): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NO_BODYPART {
        return this.creep.rangedMassAttack();
    }

    public repair(target: Structure): CreepActionReturnCode | ERR_NOT_ENOUGH_RESOURCES {
        return this.creep.repair(target);
    }

    public reserveController(target: StructureController): CreepActionReturnCode {
        return this.creep.reserveController(target);
    }

    public say(message: string, toPublic?: boolean): OK | ERR_NOT_OWNER | ERR_BUSY {
        return this.creep.say(message, toPublic);
    }

    public signController(target: StructureController, text: string): OK | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE {
        return this.creep.signController(target, text);
    }

    public suicide(): OK | ERR_NOT_OWNER | ERR_BUSY {
        return this.creep.suicide();
    }

    public transfer(target: Creep | Structure, resourceType: ResourceConstant, amount?: number) {
        return this.creep.transfer(target, resourceType, amount);
    }

    public upgradeController(target: StructureController): ScreepsReturnCode {
        return this.creep.upgradeController(target);
    }

    public withdraw(target: Structure | Tombstone, resourceType: ResourceConstant, amount?: number): ScreepsReturnCode {
        return this.creep.withdraw(target, resourceType, amount);
    }
}
