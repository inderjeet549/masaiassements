// Device Constructor
function Device(name, type) {
    this.name = name;
    this.type = type;
    this.status = "off";
}

// Device Methods
Device.prototype.turnOn = function () {
    this.status = "on";
    console.log(`${this.name} is now ON.`);
};

Device.prototype.turnOff = function () {
    this.status = "off";
    console.log(`${this.name} is now OFF.`);
};

Device.prototype.checkStatus = function () {
    console.log(`${this.name} is currently ${this.status}.`);
};

// SmartDevice Constructor (Inherits from Device)
function SmartDevice(name, type, brand, connectivity) {
    Device.call(this, name, type);
    this.brand = brand;
    this.connectivity = connectivity;
}

// SmartDevice Prototype Inheritance
SmartDevice.prototype = Object.create(Device.prototype);
SmartDevice.prototype.constructor = SmartDevice;

// SmartDevice Methods
SmartDevice.prototype.checkConnectivity = function () {
    console.log(`${this.name} is connected via ${this.connectivity}.`);
};

SmartDevice.prototype.updateFirmware = async function () {
    console.log(`Checking firmware update for ${this.name}...`);
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(`Firmware updated successfully: ${data.title}`);
    } catch (error) {
        console.log(`Firmware update failed: ${error.message}`);
    }
};

// SmartLight Constructor (Inherits from SmartDevice)
function SmartLight(name, brand, connectivity, brightness = 50, color = "White") {
    SmartDevice.call(this, name, "Smart Light", brand, connectivity);
    this.brightness = brightness;
    this.color = color;
}

// SmartLight Prototype Inheritance
SmartLight.prototype = Object.create(SmartDevice.prototype);
SmartLight.prototype.constructor = SmartLight;

// SmartLight Methods
SmartLight.prototype.adjustBrightness = function (level) {
    this.brightness = level;
    console.log(`${this.name} brightness set to ${level}%.`);
};

SmartLight.prototype.changeColor = function (color) {
    this.color = color;
    console.log(`${this.name} color changed to ${color}.`);
};

// SmartThermostat Constructor (Inherits from SmartDevice)
function SmartThermostat(name, brand, connectivity, temperature = 22, mode = "Cool") {
    SmartDevice.call(this, name, "Smart Thermostat", brand, connectivity);
    this.temperature = temperature;
    this.mode = mode;
}

// SmartThermostat Prototype Inheritance
SmartThermostat.prototype = Object.create(SmartDevice.prototype);
SmartThermostat.prototype.constructor = SmartThermostat;

// SmartThermostat Methods
SmartThermostat.prototype.setTemperature = function (temp) {
    this.temperature = temp;
    console.log(`${this.name} temperature set to ${temp}°C.`);
};

SmartThermostat.prototype.changeMode = function (mode) {
    this.mode = mode;
    console.log(`${this.name} mode changed to ${mode}.`);
};

// SmartHome Constructor
function SmartHome(owner) {
    this.owner = owner;
    this.devices = [];
}

// SmartHome Methods
SmartHome.prototype.addDevice = function (device) {
    this.devices.push(device);
    console.log(`${device.name} added to ${this.owner}'s Smart Home.`);
};

SmartHome.prototype.removeDevice = function (deviceName) {
    const initialLength = this.devices.length;
    this.devices = this.devices.filter(device => device.name !== deviceName);
    if (this.devices.length < initialLength) {
        console.log(`${deviceName} removed from ${this.owner}'s Smart Home.`);
    } else {
        console.log(`Device ${deviceName} not found.`);
    }
};

SmartHome.prototype.listDevices = function () {
    console.log(`${this.owner}'s Smart Home Devices:`);
    this.devices.forEach(device => console.log(`- ${device.name} (${device.type})`));
};

// User Constructor
function User(username, password) {
    this.username = username;
    this.password = password;
    this.smartHome = new SmartHome(username); // ✅ Ensures smartHome is initialized
}

// User Methods
User.prototype.authenticate = async function () {
    console.log(`Authenticating ${this.username}...`);
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log(`Authentication successful! Welcome, ${data.username}.`);
    } catch (error) {
        console.log(`Authentication failed: ${error.message}`);
    }
};

User.prototype.addDeviceToHome = function (device) {
    if (this.smartHome) {
        this.smartHome.addDevice(device);
    } else {
        console.log("Smart home is not initialized.");
    }
};

User.prototype.removeDeviceFromHome = function (deviceName) {
    if (this.smartHome) {
        this.smartHome.removeDevice(deviceName);
    } else {
        console.log("Smart home is not initialized.");
    }
};

// ✅ FIXED: IIFE (Immediately Invoked Function Expression)
(async function () {
    try {
        const user1 = new User("Alice", "secure123");

        // Authenticate User
        await user1.authenticate();

        // Create Devices
        const light1 = new SmartLight("Living Room Light", "Philips", "Wi-Fi", 75, "Warm White");
        const thermostat1 = new SmartThermostat("Hallway Thermostat", "Nest", "Wi-Fi", 24, "Heat");

        // Add Devices to User's Smart Home
        user1.addDeviceToHome(light1);
        user1.addDeviceToHome(thermostat1);

        // List Devices in Smart Home
        user1.smartHome.listDevices();

        // Control Devices
        light1.turnOn();
        light1.adjustBrightness(90);
        light1.changeColor("Blue");
        thermostat1.setTemperature(20);
        thermostat1.changeMode("Cool");

        // Check Connectivity and Firmware Update
        light1.checkConnectivity();
        await thermostat1.updateFirmware();

        // Remove a Device
        user1.removeDeviceFromHome("Living Room Light");

        // List Devices Again
        user1.smartHome.listDevices();
    } catch (error) {
        console.error("An error occurred:", error);
    }
})();
