import { ExCreep } from 'creep/ExCreep'
import { OwnedRoom } from 'room/OwnedRoom'

/**
 * Role wil be a wrapper for a creep with a specified purpose
 */
export abstract class Role extends ExCreep {

    constructor(creep: Creep) {
        super(creep);
        this.initialiseMemory();
    }

    public initialiseMemory(): void {
        throw new Error('initialiseMemory() must be overriden on all role classes');
    }

    public get home(): OwnedRoom {
        return global.empire.getRoomByName(this.memory.home) as OwnedRoom;
    }

    public run(): void {
        const level = this.home.controller.level;
        if (level === 1) {
            this.runOne();
        } else if (level === 2) {
            this.runTwo();
        } else if (level === 3) {
            this.runThree();
        } else if (level === 4) {
            this.runFour();
        } else if (level === 5) {
            this.runFive();
        } else if (level === 6) {
            this.runSix();
        } else if (level === 7) {
            this.runSeven();
        } else if (level === 8) {
            this.runEight();
        }
    }

    public runOne(): void {
        throw new Error('called run must be overidden on all roll classes');
    }

    public runTwo = this.runOne;
    public runThree = this.runTwo;
    public runFour = this.runThree;
    public runFive = this.runFour;
    public runSix = this.runFive;
    public runSeven = this.runSix;
    public runEight = this.runSeven;

}
