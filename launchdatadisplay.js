//a class to set up the data 
class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpsensor_altitude,
        bmpsensor_pressure,
        bmpsensor_temp,
        digsensor_temp,
        csssensor_temp,
        csssensor_eCO2,
        csssensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magenticX,
        magenticY,
        magenticZ,
        gyroX,
        gyroY,
        gyroZ,
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude =longitude;
        this.gps_altitude = gps_altitude;
        this.bmpsensor_altitude = bmpsensor_altitude;
        this.bmpsensor_pressure = bmpsensor_pressure;
        this.bmpsensor_temp = bmpsensor_temp;
        this.digsensor_temp = digsensor_temp;
        this.csssensor_temp = csssensor_temp;
        this.csssensor_eCO2 = csssensor_eCO2;
        this.csssensor_TVOC = csssensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magenticX = magenticX;
        this.magenticY = magenticY;
        this.magenticZ = magenticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}


//a getdata function to load the data from the data file
function getdata(){
    var loadedData = loadData();
    return loadedData;
}

//a datarow function to setup the data 
function datarow(legend, value, units){
    msg = "<td>";
    msg =+ legend;
    msg =+ ": </td><td>";
    msg =+ value;
    msg =+ " " + units;
    msg =+ "</td>";
    return msg;
}

var timeread = data[index].time_seconds

//updatedisplay to tie it all together 

function updatedisplay(){

    var timeread = data[index].time_seconds
    //update table...
    if(timeread >= 10){
        document.getElementById("data").rows["seconds"].innerhtml = 
        datarow("time elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerhtml = 
        datarow("latitude", data[index].latitude,"");
        document.getElementById("data").rows["longitude"].innerhtml = 
        datarow("longitude", data[index].longitude, "");
        document.getElementById("data").rows["gps_altitude"].innerhtml = 
        datarow("gps_altitude", data[index].gps_altitude, "");
        document.getElementById("data").rows["bmp_altitude"].innerhtml = 
        datarow("bmp_altitude", data[index].bmpsensor_altitude, "");
        document.getElementById("data").rows["bmp_pressure"].innerhtml = 
        datarow("bmp_pressure", data[index].bmpsensor_pressure, "");
        document.getElementById("data").rows["bmp_temperature"].innerhtml = 
        datarow("bmp_temperature", data[index].bmpsensor_temp, "");
        document.getElementById("data").rows["dig_temperature"].innerhtml = 
        datarow("dig_temperature", data[index].digsensor_temp, "");
        document.getElementById("data").rows["css_temperature"].innerhtml = 
        datarow("css_temperature", data[index].csssensor_temp, "");
        document.getElementById("data").rows["css_eCO2"].innerhtml = 
        datarow("css_eCO2", data[index].csssensor_eCO2, "");
        document.getElementById("data").rows["css_TVOC"].innerhtml = 
        datarow("css_TVOC", data[index].csssensor_TVOC, "");
        document.getElementById("data").rows["UV"].innerhtml = 
        datarow("UV", data[index].UV, "");
        document.getElementById("data").rows["accelX"].innerhtml = 
        datarow("accelX", data[index].accelX, "");
        document.getElementById("data").rows["accelY"].innerhtml = 
        datarow("accelY", data[index].accelY, "");
        document.getElementById("data").rows["accelZ"].innerhtml = 
        datarow("accelZ", data[index].accelZ, "");
        document.getElementById("data").rows["magneticX"].innerhtml = 
        datarow("magneticX", data[index].magenticX, "");
        document.getElementById("data").rows["magneticY"].innerhtml = 
        datarow("magneticY", data[index].magenticY, "");
        document.getElementById("data").rows["magneticZ"].innerhtml = 
        datarow("magneticZ", data[index].magneticZ, "");
        document.getElementById("data").rows["gyroX"].innerhtml = 
        datarow("gyroX", data[index].gyroX, "");
        document.getElementById("data").rows["gyroY"].innerhtml = 
        datarow("gyroY", data[index].gyroY, "");
        document.getElementById("data").rows["gyroZ"].innerhtml = 
        datarow("gyroZ", data[index].gyroZ, "");
    }
    if(index < 500){
        index++;
    } else {
        index = 0;
    }
}
