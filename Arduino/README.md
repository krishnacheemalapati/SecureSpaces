# Hardware - Secure Spaces

Welcome to the Hardware directory of Secure Spaces! This directory contains the code for the Arduino-based hardware components, specifically the alarm mat built into the desk. The hardware plays a vital role in detecting weight shifts and triggering alarms when necessary.

## Overview

The hardware components are responsible for interfacing with the alarm mat, detecting weight changes, and communicating with the backend server to trigger alarms or provide status updates. Here is a list of components needed for the hardware setup:

- Breadboard
- Arduino Uno
- Arduino Wi-Fi module
- Wires
- 4x Half-Bridge Load Sensors (at least 10kg)
- Sheet of wood
- Multi-meter
- LED light board
- 16x 1K Ohm Resistors
- Wire Connectors
- Electrical Tape and Double-sided Tape
- Wire Strippers
- 1x 9V Battery
- Wiring attachment for the battery

## Arduino Setup Guide for Load Cell Modules
## Table of Contents
- [Identifying the Middle Wire](#identifying-the-middle-wire)
- [Connecting Four Load Cells](#connecting-four-load-cells)
- [Mounting the Load Cell to a Wooden Board](#mounting-the-load-cell-to-a-wooden-board)
- [Arduino Code for Reading Weight Values](#arduino-code-for-reading-weight-values)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [Dependencies](#dependencies)
- [Contribution](#contribution)

## Identifying the Middle Wire
To begin, it is important to identify the middle wire of the load cell. This can be done using a multimeter. The resistance value between the outer wires is double the resistance between the middle wire and the outer wires. The resistance between the white and black wires should be roughly 2k ohms.

## Connecting Four Load Cells
To connect four 50kg bathroom scale load cell modules to an Arduino, follow these steps:
1. Form a loop by linking the same color outer wires (white and black) of the four load cells.
2. Validate the wiring by measuring the resistance of both diagonals (red wires). Both of them should be around 2k ohms.
3. Connect the middle cable (red) of one of the diagonals to the E+ and E- outputs of the HX711 module.
4. Connect the other diagonal to the A+ and A- inputs of the HX711 module.
5. Connect the GND of the HX711 module to the Arduino GND and VCC to the Arduino 5V pin.
6. Connect the DT and SCK of the HX711 module to any of the Arduino digital IO pins.

## Mounting the Load Cell to a Wooden Board
To mount the 50kg bathroom scale load cell module to a wooden board, follow these steps:
1. Attach the load cell to the board in a way that allows the inner part to flex relative to the rest of the unit. This requires adding a spacer between the board and the outer rim of the load cell.
2. Use a 3D printed mounting frame or find a suitable mounting solution.
3. Securely mount the load cell to the wooden board using the chosen method.

## Arduino Code for Reading Weight Values
To read weight values from the HX711 module using Arduino, follow these steps:
1. Download the "HX711_ADC" library from [GitHub](https://github.com/olkal/HX711_ADC).
2. Extract the downloaded ZIP file and move it into your Arduino "libraries" folder.
3. Open the Calibration example that came with the "HX711_ADC" library in the Arduino IDE.
4. Load the example code to your Arduino.
5. Open the Arduino Serial Monitor to view the weight values.

## Next Steps

1. **Choose a suitable WiFi module**: Select a WiFi module that is compatible with Arduino, such as the ESP8266 or ESP32.

2. **Connect the WiFi module to the Arduino**: Use jumper wires to connect the module's TX pin to the Arduino's RX pin and the module's RX pin to the Arduino's TX pin.

3. **Install necessary libraries**: In the Arduino IDE, install the necessary libraries for the WiFi module. This may include libraries specific to the module you are using, such as the ESP8266WiFi library for ESP8266.

4. **Configure the WiFi module**: In your Arduino code, configure the WiFi module to connect to your local network by providing the SSID and password. This can usually be done using the `WiFi.begin()` function.

5. **Establish a connection to the Django web server**: Specify the server's IP address or domain name and the port number in the Arduino code. Use the `WiFiClient` library to create a client object and connect to the server using the `client.connect()` function.

6. **Format the weight data**: Format the weight data obtained from the load cells into a suitable format, such as JSON.

7. **Send the weight data to the Django web server**: Use the `client.print()` or `client.println()` functions to send the weight data to the Django web server. Include the weight data in an HTTP POST request to the desired endpoints on the Django server.


## Contribution
Feel free to contribute to the development of the hardware components. Create a branch, make your changes, and submit a pull request for review.

Thank you for contributing to Secure Spaces hardware!