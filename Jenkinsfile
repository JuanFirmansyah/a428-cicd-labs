pipeline {
    agent {
        docker {
            image 'node:16-buster-slim'
            args '-p 3000:3000'
        }
    }
    environment {
        HOME = '/tmp'
    }
    stages {
        stage('Clean Workspace') {
            steps {
                sh 'rm -rf node_modules package-lock.json'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Manual Approval') {
            steps {
                input message: 'Apakah hasil test sudah sesuai? (Klik "Proceed" untuk melanjutkan)'
            }
        }
        stage('Deploy') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                // Menambahkan perintah sleep selama 30 detik sebelum melanjutkan
                sh 'sleep 30'

                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
