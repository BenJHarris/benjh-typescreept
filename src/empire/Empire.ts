import { Role } from 'roles/Role'
import { Harvester } from 'roles/Harvester'
import { OwnedRoom } from 'room/OwnedRoom'
import { ExRoom } from 'room/ExRoom'

export class Empire {

    private rooms: ExRoom[] = [];
    private roles: Role[] = [];

    constructor(roomList: {[roomName: string]: Room},
                creepList: {[creepName: string]: Creep}) {
        //add rooms from Game.rooms
        for (let rn in roomList) {
            this.rooms.push(new OwnedRoom(roomList[rn]));
        }

        //add creeps from Game.creeps
        for (let cn in creepList) {
            let creep = creepList[cn];
            let roleName = creep.memory.role.roleName;
            let role: Role;

            if (roleName === 'harvester') {
                role = new Harvester(creep);
            } else {
                throw new Error(`${creep.name} has no role :(`);
            }
            this.roles.push(role);
        }

        this.run();
    }

    getRooms(): ExRoom[] {
        return this.rooms;
    }

    getRoomByName(roomName: string) {
        return _.filter(this.rooms, r => r.name === roomName)[0];
    }

    getRoles(): Role[] {
        return this.roles;
    }

    run(): void {
        global.empire = this;

        for (let role of this.roles) {
            role.run();
        }

    }
}

