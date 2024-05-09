pipeline {
    agent any
    tools {nodejs 'nodejs'}
    stages {
        stage('Checkout'){
            steps{
                checkout scm
            }
        }
        stage('Test'){
            steps{
                sh 'npm install'
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
