const shortid = require("shortid");

class Seat {
    constructor(seatName, isBooked, bookingUser) {
        this.seatName = seatName;
        this.seatId = shortid.generate();
        this.isBooked = isBooked;
        this.bookingUser = bookingUser || {}
    }
}

class BookingInfo {
    constructor(busId, seatId, user,seatName,busName) {
        this.busId = busId;
        this.seatId = seatId;
        this.seatName=seatName;
        this.busName=busName
        this.user = {name:user.name,phone:user.phone,distination:user.distination};
        this.createdAt = new Date();
        this.updateAt = new Date();
        this.status='pandding'
    }
}


const createBus = (numberOfSeat, busName, stopes, from) => {
    const allSeat = []

    for (let i = 1; i <= numberOfSeat; i++) {
        allSeat.push(new Seat(i, false))
    }

    const bus = {
        busName,
        busSeat: allSeat,
        createAt: new Date(),
        updateAt: new Date(),
        from: from,
        stopes: stopes
    }

    return bus

}

module.exports = { createBus,BookingInfo }