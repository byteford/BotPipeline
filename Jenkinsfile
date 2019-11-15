pipeline {
  agent any
  tools {nodejs "node"}
  stages {
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

  }
}
