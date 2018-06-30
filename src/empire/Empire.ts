class Empire {

    private rooms: Room[] = [];
    private creeps: Creep[] = [];

    constructor(roomList: {[roomName: string]: Room},
                creepList: {[creepName: string]: Creep}) {

        //add rooms from Game.rooms
        for (let rn in roomList) {
            this.rooms.push(roomList[rn]);
        }

        //add creeps from Game.creeps
        for (let cn in creepList) {
            this.creeps.push(creepList[cn]);
        }

        this.run();
    }

    run() {

    }
}

