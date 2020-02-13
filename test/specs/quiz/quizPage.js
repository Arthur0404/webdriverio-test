import Page from "../Page";

class quizPage extends Page {
    get quizLink(){
        return browser.$('//a[@qa="quiz-link"]')
    }

    get h1 (){
        return browser.$('//h1')
    }

    get submitBTN(){
        return browser.$('//div[@class="form-group"]//button[@type="button"]')
    }

    get h1QuizGroup(){
        return browser.$('//h1')
    }

    get nameQuizGroup(){
        return browser.$('//input[@name="name"]')
    }

    get descriptionQuiz(){
        return browser.$('//input[@name="description"]')
    }

    get mistakes(){
        return browser.$('//input[@name="acceptableMistakes"]')
    }

    get active(){
        return browser.$('//label[@class="custom-control-label"]')
    }

    get subBTN(){
        return browser.$('//button[@type="submit"]')
    }

    get name(){
        return browser.$('//input[@name="name"]')
    }
    get description(){
        return browser.$('//input[@name="description"]')
    }
    get mist(){
        return browser.$('//input[@name="acceptableMistakes"]')
    }
    get activeNew(){
        return browser.$('//label[@class="custom-control-label"]')
    }

    get saveBTN(){
        return browser.$('//button[@type="submit"]')
    }





    open() {
        super.open('https://stage.pasv.us/quiz');
    }
}

export default new quizPage();