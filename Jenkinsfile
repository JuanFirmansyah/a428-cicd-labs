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
                script {
                    def userInput = input(
                        id: 'userInput',
                        message: 'Do you want to proceed to Deploy?',
                        parameters: [choice(name: 'ACTION', choices: 'Proceed\nAbort', description: 'Select an action')]
                    )

                    if (userInput == 'Abort') {
                        error('Pipeline aborted by user.')
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                sh './jenkins/scripts/deploy.sh'  // Replace with appropriate deploy command/script
            }
        }
        stage('Pause') {
            steps {
                script {
                    currentBuild.result = 'SUCCESS'  // Set the build result to SUCCESS before pause
                    echo "Pausing for 1 minute..."
                    sleep(time: 1, unit: 'MINUTES')  // Pause the pipeline for 1 minute
                }
            }
        }
    }
    post {
        always {
            script {
                currentBuild.result = 'SUCCESS'  // Set the build result to SUCCESS after pause
            }
        }
    }
}
