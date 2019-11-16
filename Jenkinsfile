pipeline {
  agent any
  tools {nodejs "node"}
  environment {
        BOT_USERNAME = credentials('BOT_USERNAME')
        OAUTH_TOKEN = credentials('OAUTH_TOKEN')
      }
  stages {
    stage('Set Up ENV'){
      
      steps{
        sh 'printenv'
      }
    }
    stage('Git pull'){
      steps{
       git "https://github.com/byteford/BotPipeline"
      }
    }
    stage('Dependancy setup') {
      steps {
        sh 'npm install'
      }
    }
    stage('test'){
      steps{
        sh 'npm test'
      }
    }
    }

  }
}
