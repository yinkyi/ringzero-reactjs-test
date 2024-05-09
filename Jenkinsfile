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
        stage('Build Image'){
            steps{
                sh 'docker build -t my-react-app:1.0 .'
            }
        }
    }
}
