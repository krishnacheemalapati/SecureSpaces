# Secure Spaces - README

## Project Overview

Welcome to the Secure Spaces repository! This project aims to provide a secure solution for users to protect their belongings in shared study spaces. The system involves a combination of hardware and software components, including an alarm mat built into the desk, a QR code-based mobile app, and a server-side application to manage the security system.

## The Team

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
    <tbody>
        <tr>
            <td class="contributor-cell" align="center" valign="top" width="14.28%">
                <a href="https://krishnacheemalapati.github.io/">
                    <img src="./Team-Pictures/Krishna.png"/>
                    <br />
                    <span class="contributor-name">Krishna Cheemalapati</span>
                </a>
            </td>
            <td class="contributor-cell" align="center" valign="top" width="14.28%">
                <a href="https://github.com/chloech314">
                    <img src="./Team-Pictures/Chloe.png"/>
                    <br />
                    <span class="contributor-name">Chloe Cheung</span>
                </a>
            </td>
            <td class="contributor-cell" align="center" valign="top" width="14.28%">
                <a href="https://github.com/ArsalKhan1">
                    <img src="./Team-Pictures/Arsal.png"/>
                    <br />
                    <span class="contributor-name">Arsal Khan</span>
                </a>
            </td>
            <td class="contributor-cell" align="center" valign="top" width="14.28%">
                <a href="https://github.com/anishalatchman">
                    <img src="./Team-Pictures/Anisha.png"/>
                    <br />
                    <span class="contributor-name">Anisha Latchman</span>
                </a>
            </td>
            <td class="contributor-cell" align="center" valign="top" width="14.28%">
                <a href="https://github.com/Ajinkya-B">
                    <img src="./Team-Pictures/AJ.png"/>
                    <br />
                    <span class="contributor-name">Ajinkya Bhosale</span>
                </a>
            </td>
            <td class="contributor-cell" align="center" valign="top" width="14.28%">
                <a href="https://github.com/Jkolyakov">
                    <img src="./Team-Pictures/Jacob.png"/>
                    <br />
                    <span class="contributor-name">Jacob Kolyakov</span>
                </a>
            </td>
        </tr>
    </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Workflow Description

Secure Spaces operates through a seamless workflow:

1. **Item Placement:** Users place items they want to secure on the alarm mat part of the desk.

2. **App Connection:** Users open the mobile app, log into their account, and connect to the desk by scanning the desk-specific QR code.

3. **Lock Activation:** Once connected, users hold down the lock button to activate locked mode for 30 minutes, indicated by a light on the mat. Stable weight on the mat is required for proper locking.

4. **Alarm Trigger:** In locked mode, if the mat detects a significant weight shift, the alarm is triggered. Both the desk and the user's phone emit the alarm sound.

5. **False Alarm Handling:** The user has 30 seconds to select the false alarm option by holding down the button. If this action is performeded, the alarm turns off, and campus police are not notified. If either 30 seconds elapse and the user has not indicated this this is a false alarm OR the user selects a button confirming this is not an accident, campus police is notified.

6. **Post-Alarm Actions:** After the alarm, the desk resumes its locked mode. After 28 minutes, users receive a notification asking if they would like to extend the time on their alarm mat by up to 10 minutes. Once time runs out, it automatically unlocks. If the user returns before their timer ends, they use the app to unlock the alarm mat.

7. **Security Measures:** User login, QR code connection, and a 30-minute lock limit enhance security. The use of weight detection on the mat provides a non-intrusive but highly effective security layer.

## Rationale Behind Decisions

Several key decisions were made in the development of this system:

- **User Login:** Ensures system integrity and prevents abuse.

- **QR Code Connection:** Quick and efficient, addressing user demographic's need for a swift setup.

- **Alarm Mat:** Built into the desk to save space and minimize distractions.

- **Weight Detection:** Enables sensitivity without adding physical constraints to securing items.

- **30-Minute Lock Limit:** Prevents misuse for extended periods, encouraging responsible use.

- **False Alarm Option:** Allows users to rectify accidental triggers.

- **Alarm Duration:** Capped at 30 seconds to minimize disturbance.

- **App Disconnect after Unlock:** Prevents prolonged desk occupation in case of user forgetfulness.

## Technical Stack

- **Front-end:** React Native
- **Back-end:** Django
- **Hardware:** Arduino UNO (for the alarm mat)

## Advantages

1. **Ease of Use:** Minimal setup time and effort required for users.
2. **Alert System:** Notifies surrounding individuals, preventing opportunistic thefts.

## Disadvantages

1. **Disturbance:** The alarm may be disruptive in quieter study areas.
2. **Limited Coverage:** Works only in designated study spaces with installed systems.

## Instructions for Running the Code

To set up and run Secure Spaces:

1. Clone the repository to your local machine.
2. Follow the instructions in the respective `React-Native` (app), `Django` (backend / server), and `Arduino` (hardware) directories for setup.
3. Ensure all dependencies are installed and configured.
4. Run the system locally or deploy it to your preferred hosting service.

Feel free to explore the codebase, contribute, and provide feedback!

Thank you for using Secure Spaces. Happy studying!
