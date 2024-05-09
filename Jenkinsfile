pipeline {
    agent any
    stages {
        stage('Checkout'){
            steps{
                checkout scm
            }
        }
        stage('Test'){
             agent {
                docker {
                  image 'node:20-alpine'
                 reuseNode true
                }
              }
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
