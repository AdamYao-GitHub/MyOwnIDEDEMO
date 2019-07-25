# MyOwnIDEDEMO  

# Local Environment configuration.
-   Prepare:  
    JDK:https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html  
    Python: https://www.python.org/downloads/windows/ 
    Visual Studio Installar 2017: https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=Community&rel=16  
    Build tools: `npm i --global --production windows-build-tools`, if you want to using fix version. `npm install --global --production windows-build-tools@<version number>`
    Yarn: `npm i -g yarn`  
    Optional: If you want to control the node version you can install nvm; if your node version is >=12 please instal nvm control your node version; https://github.com/coreybutler/nvm-windows/releases
- nvm(OPtional)  
  `nvm list`: list all install node versions
  `nvm install <version number>`: insatll the version of node;
  `nvm use <version number>`: use sepcial version of the node which has been installed before;
- initial the environment:  
  generate json file which called "package.json" below the folder;
  ```
    {
        "private": true,
        "dependencies":{
            "@theia/callhierarchy": "next",
            "@theia/file-search": "next",
            "@theia/git": "next",
            "@theia/json": "next",
            "@theia/markers": "next",
            "@theia/merge-conflicts": "next",
            "@theia/messages": "next",
            "@theia/mini-browser": "next",
            "@theia/navigator": "next",
            "@theia/outline-view": "next",
            "@theia/search-in-workspace": "next",
            "@theia/preferences": "next",
            "@theia/preview": "next",
            "@theia/terminal": "next",
            "@theia/textmate-grammars": "next",
            "@theia/typescript": "next",
            "typescript": "3.4.3"
        },
        "devDependencies": {
            "@theia/cli": "next"
        }
    }
  ```
  `yarn`: install the required plugins;  
  `yarn theia build`: build the your local own IDE;  
  `yarn theia start` or `yarn theia start <path> --hostname <hostname> --port <port number>`: start theia with default or customize setting; 