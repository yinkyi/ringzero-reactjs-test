pipeline {
    agent {
        docker { 
            image 'node:20.11.1-alpine3.19' 
        }
    }
    stages {
        stage('Checkout'){
            steps{
                checkout scm
            }
        }
        stage('Test'){
            steps{
                sh 'npm test'
            }
        }
         stage('Build'){
            steps{
                sh 'npm run build'
            }
        }
    }
}
