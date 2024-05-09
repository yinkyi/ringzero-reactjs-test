pipeline {
    agent any
    stages {
        stage('Checkout'){
            steps{
                checkout scm
            }
        }
        stage('Test'){
            steps{
                sh 'echo 1111 | sudo -S apt install npm'
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
