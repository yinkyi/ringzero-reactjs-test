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
        stage('Docker Push') {
            steps {
                // Authenticate with Docker registry
                sh 'docker login -u yin2k -p Code@Sjud2468'
                sh 'docker tag my-react-app:1.0 yin2k/my-react-app:1.0'
                // Push the Docker image to a registry
                sh 'docker push yin2k/my-react-app:1.0'
                sh 'docker logout'
            }
        }
    }
}
