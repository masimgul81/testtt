pipeline {
    agent any

    environment {
        PROJECT_NAME = 'mega_project'
        DEPLOY_ENV = 'production'
        CONTAINER_NAME = "nestjs_container"
        IMAGE_NAME = "nestjs_img"
        PORT = '3000'
    }

    
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Repo Cloning from git...'
                git branch: 'main', url: 'https://github.com/masimgul81/mega_proj.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker Imageq...'
                sh "docker build -t ${IMAGE_NAME} ."        
            }
        }
        stage('Stop and Remove Existing Containers') {
            steps {
                echo 'Clearing existing container...'
                sh """
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                """
            }
        }
        stage('Run Docker Containera') {
            steps {
                echo 'Running Docker Container...'
                sh """
                    docker run -d --name ${CONTAINER_NAME} -p ${PORT}:${PORT} ${IMAGE_NAME}
                """
            }
        }
    }
}
