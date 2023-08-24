node {
    // Menggunakan docker image 'node:16-buster-slim'
    docker.image('node:16-buster-slim').inside('-p 3000:3000') {
        // Stage Build
        stage('Build') {
            sh 'npm install'
        }
        stage('Test') {
            sh './jenkins/scripts/test.sh' 
        }
    }
}