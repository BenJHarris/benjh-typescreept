import { Role } from 'roles/Role'
import { Harvester } from 'roles/Harvester'
import { ExRoom } from 'room/ExRoom'
import { MyRoom } from 'room/MyRoom';
import { ControllerRoom } from 'room/ControllerRoom';
import { EnemyRoom } from 'room/EnemyRoom';
import { EmptyRoom } from 'room/EmptyRoom';
import { UnoccupiedRoom } from 'room/UnoccupiedRoom';

export class Empire {

    private rooms: ExRoom[] = [];
    private roles: Role[] = [];

    constructor(roomList: {[roomName: string]: Room},
                creepList: {[creepName: string]: Creep}) {
        //add rooms from Game.rooms
        for (let rn in roomList) {
            let room: Room = roomList[rn];

            if (room.controller && room.controller.my) {
                this.rooms.push(new MyRoom(room));
            } else if (room.controller && !room.controller.my && room.controller.owner === undefined) {
                this.rooms.push(new UnoccupiedRoom(room));
            } else if (room.controller && !room.controller.my && room.controller.owner !== undefined) {
                this.rooms.push(new EnemyRoom(room));
            } else {
                this.rooms.push(new EmptyRoom(room));
            }
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
        for (let role of this.roles) {
            role.run();
        }

    }
}

