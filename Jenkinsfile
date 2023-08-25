node {
    docker.image('node:16-buster-slim').inside {
        env.HOME = '/tmp'

        stage('Clean Workspace') {
            sh 'rm -rf node_modules package-lock.json'
        }

        stage('Build') {
            sh 'npm install'
        }

        stage('Test') {
            sh './jenkins/scripts/test.sh'
        }
    }
}
