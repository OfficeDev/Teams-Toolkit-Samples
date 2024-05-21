FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0 AS binding
WORKDIR /binding
COPY extensions.csproj .
RUN dotnet build extensions.csproj -o bin --ignore-failed-sources

FROM mcr.microsoft.com/azure-functions/node:4-node18

ENV AzureWebJobsScriptRoot=/home/site/wwwroot \
    AzureFunctionsJobHost__Logging__Console__IsEnabled=true

COPY . /home/site/wwwroot
COPY --from=binding /binding /home/site/wwwroot

RUN cd /home/site/wwwroot && \
    npm install && npm run build
