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

## Setup Instructions

To set up the hardware components of Secure Spaces, follow these steps:

1. Clone this repository to your local machine.
    ```bash
    git clone [repository_url]
    ```

2. Navigate to the hardware directory.
    ```bash
    cd hardware
    ```

3. Open the Arduino sketch file in your preferred Arduino IDE.

4. Upload the sketch to your Arduino microcontroller.

5. [INSERT ALARM MAT ASSEMBLY INSTRUCTIONS HERE]

## Folder Structure

- src: Contains the Arduino sketch file for the hardware components.
- libraries: Includes any external libraries or dependencies used in the Arduino sketch.

## Components

- Arduino Uno w/ Wi-Fi Module: The brain of the hardware system, responsible for processing inputs from the alarm mat and sending data to the backend. It acts as the central control unit, allowing communication between the physical components and the software.

- Breadboard: A solderless prototyping board used for creating and testing electronic circuits. It allows for easy connection and disconnection of components, making it convenient for prototyping and experimenting with different circuit configurations.

- Wiring: The process of connecting electrical components together using conductive wires. Wiring is crucial for establishing electrical connections between different components, enabling the flow of electricity and data throughout the system.

- Jump Wires: Pre-made wires with connectors on both ends, used to make temporary connections between components on a breadboard or other circuit boards. Jump wires provide flexibility in connecting various components without the need for soldering, allowing for quick and easy modifications during the prototyping phase.

- Half-Bridge Load Sensors (4x, at least 10kg): Sensors used to measure weight or force applied to a surface. These sensors provide a voltage output proportional to the applied load. In this project, the load sensors are used to detect pressure on the alarm mat, triggering the alarm system when a certain threshold is exceeded.

- Sheet of Wood: A flat piece of wood that serves as the base for the hardware system. It provides stability and support for mounting the various components, ensuring that they are securely positioned and protected.

- Multi-meter: A device used to measure electrical properties such as voltage, current, and resistance. It is an essential tool for troubleshooting and verifying the functionality of the electrical components in the system.

- LED Light Board: A board with multiple LED lights that can be controlled to display different patterns or colors. In this project, the LED light board is used to visually indicate the alarm status or provide feedback to the user.

- 1K Ohm Resistors (16x): Resistors with a resistance value of 1 kilohm, used to limit the flow of current in a circuit. They are commonly used to protect components from excessive current and ensure proper functioning of the circuit.

- Wire Connectors: Devices used to join or terminate electrical wires, ensuring a secure and reliable connection. Wire connectors are important for maintaining the integrity of the electrical connections, preventing loose or faulty connections that could lead to malfunctioning of the system.

- Electrical Tape and Double-sided Tape: Tapes used for insulation, securing wires, or mounting components. Electrical tape is used to insulate exposed wires, preventing short circuits and ensuring electrical safety. Double-sided tape is used for mounting components onto surfaces, providing a secure and stable attachment.

- Wire Strippers: Tools used to remove the insulation from the ends of electrical wires. They are essential for preparing wires for connection, ensuring a clean and proper electrical contact.

- 9V Battery and Wiring Mount: A battery used as a power source for the hardware system, along with a mount to secure the battery and wiring. The 9V battery provides portable and reliable power for the system, while the wiring mount ensures that the battery is securely held in place and connected to the circuit.

## Dependencies

The hardware components may have dependencies on specific Arduino libraries. Ensure all necessary libraries are installed before uploading the sketch to the Arduino.

## Contribution

Feel free to contribute to the development of the hardware components. Create a branch, make your changes, and submit a pull request for review.

Thank you for contributing to Secure Spaces hardware!