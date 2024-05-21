## Try sample with TeamsFx CLI

1. Install [Node.js](https://nodejs.org/en/download/) (use the latest v14 LTS release)
1. To install the TeamsFx CLI, use the npm package manager:
    ```
    npm install -g @microsoft/teamsapp-cli
    ```
1. Create hello-world-tab project.
    ```
    teamsapp new sample hello-world-tab-with-backend --interactive false
    ```
1. Provision the project to Azure.
    ```
    teamsapp provision
    ```
1. Deploy.
    ```
    teamsapp deploy
    ```