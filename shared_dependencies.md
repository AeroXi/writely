1. **Electron**: Electron is a framework that allows the development of desktop GUI applications using web technologies. It is used in main.js and package.json.

2. **Shortcut Key Combination**: The shortcut "option + w" or "alt + w" is shared between main.js and settings.js to trigger the window open.

3. **Tray Icon**: The tray icon is shared between main.js and tray.js. It is used to open the settings page when clicked.

4. **Settings Page**: The settings page is shared between settings.html, settings.js, and main.js. It is opened when the tray icon is clicked.

5. **Chrome Extension**: The chrome extension is shared between manifest.json, background.js, popup.html, popup.js, and content.js. It is wrapped into the Electron app.

6. **App Icon**: The app icon (icon.png) is shared between main.js and tray.js. It is used as the tray icon and the app icon.

7. **Package.json**: This file is shared across all other files as it contains the metadata of the project and lists the packages that the project depends on.

8. **DOM Elements**: The id names of DOM elements that JavaScript functions will use are shared between settings.html, popup.html, settings.js, and popup.js.

9. **Message Names**: Message names are shared between background.js, popup.js, and content.js for communication between scripts.

10. **Function Names**: Function names are shared between main.js, settings.js, tray.js, background.js, popup.js, and content.js. They are used to perform specific tasks in the application.