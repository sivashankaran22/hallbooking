const express = require("express")

const app = express();

app.use(express.json())

// Data
const hallData =[{
    id:"1",
    numberOfSeats: 20,
    amenities:["Ac","chairs","discolights"],
    price:50,
    ifBooked:"false",
    customerName:"",
    date:"",
    startTime:"",
    endTime:"",
    roomId:201,
    roomName:"Duplex"
},
{
    id:"2",
    numberOfSeats: 20,
    amenities:["Ac","chairs","discolights"],
    price:50,
    ifBooked:"True",
    customerName:"Sankar",
    date:"04-08-2023",
    startTime:"6.00am",
    endTime:"8.00pm",
    roomId:202,
    roomName:"Duplex"
},
{
    id:"3",
    numberOfSeats: 20,
    amenities:["chairs","discolights"],
    price:30,
    ifBooked:"false",
    customerName:"",
    date:"",
    startTime:"",
    endTime:"",
    roomId:203,
    roomName:"ordinary"
},
{
    id:"4",
    numberOfSeats: 20,
    amenities:["Ac","chairs","discolights"],
    price:50,
    ifBooked:"True",
    customerName:"Raja",
    date:"04-08-2023",
    startTime:"6.00am",
    endTime:"6.00pm",
    roomId:204,
    roomName:"Duplex"
},
{
    id:"5",
    numberOfSeats: 20,
    amenities:["chairs","discolights"],
    price:30,
    ifBooked:"True",
    customerName:"kartik",
    date:"04-08-2023",
    startTime:"7.00am",
    endTime:"8.00pm",
    roomId:205,
    roomName:"ordinary"
},
{
    id:"6",
    numberOfSeats: 20,
    amenities:["Ac","chairs","discolights"],
    price:50,
    ifBooked:"false",
    customerName:"",
    date:"",
    startTime:"",
    endTime:"",
    roomId:206,
    roomName:"Duplex"
},
{
    id:"7",
    numberOfSeats: 20,
    amenities:["chairs","discolights"],
    price:30,
    ifBooked:"false",
    customerName:"",
    date:"",
    startTime:"",
    endTime:"",
    roomId:207,
    roomName:"ordinary"
},
{
    id:"8",
    numberOfSeats: 20,
    amenities:["Ac","chairs","discolights"],
    price:50,
    ifBooked:"false",
    customerName:"",
    date:"",
    startTime:"",
    endTime:"",
    roomId:208,
    roomName:"Duplex"
},
{
    id:"9",
    numberOfSeats: 20,
    amenities:["chairs"],
    price:10,
    ifBooked:"True",
    customerName:"vicky",
    date:"04-08-2023",
    startTime:"6.00am",
    endTime:"10.00pm",
    roomId:209,
    roomName:"normal"
},
{
    id:"10",
    numberOfSeats: 20,
    amenities:["chairs","discolights"],
    price:30,
    ifBooked:"True",
    customerName:"ram",
    date:"04-08-2023",
    startTime:"6.00am",
    endTime:"8.00pm",
    roomId:210,
    roomName:"ordinary"
},
{
    id:"11",
    numberOfSeats: 20,
    amenities:["Ac","chairs","discolights"],
    price:50,
    ifBooked:"false",
    customerName:"",
    date:"",
    startTime:"",
    endTime:"",
    roomId:201,
    roomName:"Duplex"
},
{
    id:"12",
    numberOfSeats: 20,
    amenities:["Ac","chairs","discolights"],
    price:50,
    ifBooked:"True",
    customerName:"aswin",
    date:"04-08-2023",
    startTime:"6.00am",
    endTime:"8.00pm",
    roomId:202,
    roomName:"Duplex"
},
{
    id:"13",
    numberOfSeats: 20,
    amenities:["chairs","discolights"],
    price:30,
    ifBooked:"false",
    customerName:"",
    date:"",
    startTime:"",
    endTime:"",
    roomId:203,
    roomName:"ordinary"
},
{
    id:"14",
    numberOfSeats: 20,
    amenities:["Ac","chairs","discolights"],
    price:50,
    ifBooked:"True",
    customerName:"yogesh",
    date:"04-08-2023",
    startTime:"6.00am",
    endTime:"6.00pm",
    roomId:204,
    roomName:"Duplex"
},
{
    id:"15",
    numberOfSeats: 20,
    amenities:["chairs","discolights"],
    price:30,
    ifBooked:"True",
    customerName:"hari",
    date:"04-08-2023",
    startTime:"7.00am",
    endTime:"8.00pm",
    roomId:205,
    roomName:"ordinary"
},
{
    id:"16",
    numberOfSeats: 20,
    amenities:["Ac","chairs","discolights"],
    price:50,
    ifBooked:"false",
    customerName:"",
    date:"",
    startTime:"",
    endTime:"",
    roomId:206,
    roomName:"Duplex"
},
{
    id:"17",
    numberOfSeats: 20,
    amenities:["chairs","discolights"],
    price:30,
    ifBooked:"false",
    customerName:"",
    date:"",
    startTime:"",
    endTime:"",
    roomId:207,
    roomName:"ordinary"
},
{
    id:"18",
    numberOfSeats: 20,
    amenities:["Ac","chairs","discolights"],
    price:50,
    ifBooked:"false",
    customerName:"",
    date:"",
    startTime:"",
    endTime:"",
    roomId:208,
    roomName:"Duplex"
},
{
    id:"19",
    numberOfSeats: 20,
    amenities:["chairs"],
    price:10,
    ifBooked:"True",
    customerName:"swami",
    date:"04-08-2023",
    startTime:"6.00am",
    endTime:"10.00pm",
    roomId:209,
    roomName:"normal"
},
{
    id:"20",
    numberOfSeats: 20,
    amenities:["chairs","discolights"],
    price:30,
    ifBooked:"True",
    customerName:"santhosh",
    date:"04-08-2023",
    startTime:"6.00am",
    endTime:"8.00pm",
    roomId:210,
    roomName:"ordinary"
}

]


// Actions get all data with query 
app.get("/Halldetails/createing",(req,res)=>{

    var myData = [];
    var myData1 = [];
    var myData2 =[];
    for(let i=0;i<hallData.length;i++){
        if(hallData[i].ifBooked !== "True"){
        myData.push(hallData[i].id,hallData[i].numberOfSeats);
        myData1.push(hallData[i].id,hallData[i].amenities);
        myData2.push(hallData[i].id,hallData[i].price);
        } 
    }

    res.json({NomberofSeatsAvailablewithRoomId:myData, RoomAmenitieswithRoomId:myData1, PricePerHourWithRoomId:myData2});
})

// Booking a room with

app.post("/Halldetails/add",(req,res)=>{
    const newRoom =req.body;
    hallData.push(newRoom);
    res.status(201).json({data:hallData})
})

// List All Rooms with Booked Data with

app.get("/Halldetails/Booked/status",(req,res)=>{
    let myData3=[];
    let myData4=[];
    let myData5=[];
    let myData6=[];
    let myData7=[];
    let myData8=[];
    for(let i=0;i<hallData.length;i++){
        if(hallData[i].ifBooked == "True"){
            myData3.push(hallData[i].roomName);
            myData4.push(hallData[i].ifBooked);
            myData5.push(hallData[i].customerName);
            myData6.push(hallData[i].date);
            myData7.push(hallData[i].startTime);
            myData8.push(hallData[i].endTime);
        }
    }
    res.json({RoomName:myData3,BookedStatus:myData4,CustomerName:myData5,Date:myData6,StartTime:myData7,EndTime:myData8})
})

// List All Customers with Booked Data with

app.get("/Halldetails/all",(req,res)=>{

    let myData9=[];
    let myData10=[];
    let myData11=[];
    let myData12=[];
    let myData13=[];

    for(let i=0;i<hallData.length;i++){
    myData9.push(hallData[i].customerName);
    myData10.push(hallData[i].roomName);
    myData11.push(hallData[i].date);
    myData12.push(hallData[i].startTime);
    myData13.push(hallData[i].endTime)
    
    }
 res.json({customerName:myData9, roomName:myData10, Date:myData11, StartTime:myData12, EndTime:myData13})
})

//  listen and start the http

app.listen(9000)