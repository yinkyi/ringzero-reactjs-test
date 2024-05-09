pipeline {
    agent any
    tools {dockerTool 'docker'}
    stages {
        stage('Checkout'){
            steps{
                checkout scm
            }
        }
        stage('Test'){
             agent {
                docker {
                  image 'node:20'
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
