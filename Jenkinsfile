node {
    // Menggunakan docker image 'node:16-buster-slim'
    docker.image('node:16-buster-slim').inside('-p 3000:3000') {
        // Stage Checkout
        stage('Checkout') {
            checkout scm
        }
        
        // Stage Build
        stage('Build') {
            sh 'npm install'
        }
        
        // Stage Test
        stage('Test') {
            sh './jenkins/scripts/test.sh' 
        }
    }
}
