pipeline {
     agent {
        docker 'node20:latest'
    }
    stages {
        stage('Checkout'){
            steps{
                checkout scm
            }
        }
        stage('Test'){
            steps{
                sh 'node --version'
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
