# drs-data-dashboard
A tool to report and visualize vital, high-level data points about the Harvard Library Digital Repository Service (DRS)

## Technology Stack
##### Language
Python

##### Framework
Flask

##### Development Operations
Docker Compose

## Local Development Environment Setup Instructions

### 1: Clone the repository to a local directory
```git clone git@github.com:harvard-lts/drs-data-dashboard.git```

### 2: Copy the cloned files into your own new project repository

After cloning your brand-new project repository, you can copy the files from this repository into it.

### 3: Create app config

##### Create config file for environment variables
- Make a copy of the config example file `./env-example.txt`
- Rename the file to `.env`
- Replace placeholder values as necessary

*Note: The config file .env is specifically excluded in .gitignore and .dockerignore, since it contains credentials it should NOT ever be committed to any repository.*

### 4: Start

##### START

This command builds all images and runs all containers specified in the docker-compose-local.yml configuration.

```
docker-compose -f docker-compose-local.yml up -d --build --force-recreate
```

### 5: Install Packages (optional)
This step is only required if additional python packages must be installed during development. Update the requirements.txt inside the container to install new python packages.

##### Run docker exec to execute a shell in the container by name

Open a shell using the exec command to access the hgl-downloader container.

```
docker exec -it drs-data-dashboard bash
```

##### Install a new pip package

Once inside the mps-asset-validation container, run the pip install command to install a new package and update the requirements text file.

```
pip install packagename && pip freeze > requirements.txt
```

### 6: Stop

##### STOP AND REMOVE

This command stops and removes all containers specified in the docker-compose-local.yml configuration. This command can be used in place of the 'stop' and 'rm' commands.

```
docker-compose -f docker-compose-local.yml down
```


