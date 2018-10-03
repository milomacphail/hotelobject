var hotel = {
    occupiedRooms: 10,
    amenities: ["pool", "restaurant", "sauna", "jacuzzi"],
    totalRooms: 25,
    vacancy: function(){
        var vacantRooms=this.totalRooms - this.occupiedRooms;
        console.log(vacantRooms);
    },
    bookRoom: function(){
        if (this.occupiedRooms < this.totalRooms){
            console.log(this.occupiedRooms + 1);
        } else {
            return "NO VACANCY";
        }
    },
    checkOut: function() {
        if (this.occupiedRooms > 0) {
            console.log(this.occupiedRooms - 1);
        } else {
            return "Uh-oh!";
        }
  } 
}
